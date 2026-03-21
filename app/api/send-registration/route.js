import nodemailer from "nodemailer";
import puppeteer from "puppeteer"; // local
import puppeteerCore from "puppeteer-core"; // production
import chromium from "@sparticuz/chromium";

export async function POST(req) {
  console.log("🚀 API HIT");

  try {
    const data = await req.json();

    console.log("📦 Incoming Data:", data);

    // ENV CHECK
    console.log("🔐 ENV CHECK:", {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? "EXISTS" : "MISSING",
    });

    const isProd = process.env.NODE_ENV === "production";

    const baseUrl = isProd
      ? "https://www.futurewingsavn.com"
      : "http://localhost:3000";

    const logoUrl = `${baseUrl}/Futurewings-Logo.png`;

    // ---------- HTML TEMPLATE (NO GOOGLE FONTS) ----------
    const html = `
    <html>
    <head>
      <style>
        body{
          font-family: Arial, sans-serif;
          background:#f3f4f6;
          padding:20px;
        }
        .container{
          max-width:800px;
          margin:auto;
          background:white;
          padding:30px;
          border-radius:12px;
        }
        .logo{
          text-align:center;
          margin-bottom:20px;
        }
        .logo img{
          width:120px;
        }
        .tagline{
          font-size:14px;
          color:#555;
        }
        .payment-box{
          background:#cfe8f3;
          padding:25px;
          border-radius:15px;
          text-align:center;
        }
        .amount{
          font-size:42px;
          font-weight:700;
          margin:10px 0;
        }
        .card{
          background:#f5f5f5;
          margin-top:25px;
          padding:25px;
          border-radius:15px;
        }
        .title{
          font-size:22px;
          font-weight:700;
        }
        .section{
          margin-top:20px;
        }
        .row{
          margin:6px 0;
        }
        .label{
          display:inline-block;
          width:180px;
          font-weight:500;
        }
      </style>
    </head>

    <body>
      <div class="container">

        <div class="logo">
          <img src="${logoUrl}" />
          <h1>Future Wings Aviation Academy</h1>
          <div class="tagline">...where dreams take flight</div>
        </div>

        <div class="payment-box">
          <h2>Payment Amount</h2>
          <div class="amount">₹ 5,000 ✔</div>
          <p>Once payment is verified, we’ll get back to you shortly.</p>
        </div>

        <div class="card">
          <div class="title">RECEIPT</div>

          <p>
            <b>Receipt No:</b> FWAA/${Math.floor(Math.random() * 1000)}/2026
            <br/>
            <b>Date:</b> ${new Date().toLocaleDateString()}
          </p>

          <div class="section">
            <h3>STUDENT DETAILS</h3>
            <div class="row"><span class="label">Name:</span> ${data.name}</div>
            <div class="row"><span class="label">Phone:</span> ${data.phone}</div>
            <div class="row"><span class="label">Email:</span> ${data.email}</div>
            <div class="row"><span class="label">City:</span> ${data.city}</div>
          </div>

          <div class="section">
            <h3>PAYMENT DETAILS</h3>
            <div class="row"><span class="label">Amount:</span> ₹5000</div>
            <div class="row"><span class="label">Transaction ID:</span> ${data.transactionId}</div>
          </div>
        </div>

      </div>
    </body>
    </html>
    `;

    // ---------- BROWSER SETUP ----------
    let browser;

    if (isProd) {
      console.log("🌍 Running on Vercel");

      browser = await puppeteerCore.launch({
        args: [
          ...chromium.args,
          "--no-sandbox",
          "--disable-setuid-sandbox",
        ],
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      console.log("💻 Running locally");

      browser = await puppeteer.launch({
        headless: true,
      });
    }

    const page = await browser.newPage();

    console.log("📄 Setting HTML content...");
    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    console.log("📄 Generating PDF...");
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    console.log("📄 PDF Generated:", pdfBuffer.length);

    // ---------- EMAIL ----------
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // NO SPACES
      },
    });

    // ADMIN EMAIL
    console.log("📩 Sending admin email...");
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Student Registration",
      html: `
        <h2>New Student Registration</h2>

        <p><b>Name:</b> ${data.name}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Age:</b> ${data.age}</p>
        <p><b>Address:</b> ${data.address}</p>
        <p><b>City:</b> ${data.city}</p>
        <p><b>Qualification:</b> ${data.qualification}</p>

        <hr/>

        <p><b>Transaction ID:</b> ${data.transactionId}</p>
      `,
    });

    // USER EMAIL
    console.log("📩 Sending user email...");
    await transporter.sendMail({
      from: `"Future Wings Aviation" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Payment Receipt",
      html: `<p>Hello ${data.name}, your receipt is attached.</p>`,
      attachments: [
        {
          filename: "receipt.pdf",
          content: pdfBuffer,
        },
      ],
    });

    console.log("✅ Emails sent successfully");

    return Response.json({ success: true });

  } catch (error) {
    console.log("❌ ERROR:", error);
    return Response.json({ success: false, error: error.message });
  }
}