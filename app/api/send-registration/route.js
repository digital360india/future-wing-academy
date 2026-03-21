import nodemailer from "nodemailer";
import path from "path";

export async function POST(req) {
  console.log("🚀 API HIT");

  try {
    const data = await req.json();

    console.log("📦 Data:", data);

    // ---------- USER INVOICE (WITH CID LOGO) ----------
    const userHTML = `
    <div style="background:#f3f4f6;padding:20px;font-family:Arial">
      <div style="max-width:700px;margin:auto;background:white;border-radius:12px;padding:25px">

        <div style="text-align:center">
          <img src="cid:logo" width="100" style="display:block;margin:auto;" />
          <h2>Future Wings Aviation Academy</h2>
          <p style="color:#777">...where dreams take flight</p>
        </div>

        <div style="background:#cfe8f3;padding:20px;border-radius:12px;text-align:center;margin-top:20px">
          <h3>Payment Amount</h3>
          <h1 style="margin:10px 0">₹ 5,000 ✔</h1>
          <p>Once payment is verified, we’ll get back to you shortly.</p>
        </div>

        <div style="background:#f5f5f5;padding:20px;border-radius:12px;margin-top:20px">
          <h3>RECEIPT</h3>

          <p>
            <b>Receipt No:</b> FWAA/${Math.floor(Math.random() * 1000)}/2026<br/>
            <b>Date:</b> ${new Date().toLocaleDateString()}
          </p>

          <h4>STUDENT DETAILS</h4>
          <p><b>Name:</b> ${data.name}</p>
          <p><b>Phone:</b> ${data.phone}</p>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>City:</b> ${data.city}</p>

          <h4>PAYMENT DETAILS</h4>
          <p><b>Amount:</b> ₹5000</p>
          <p><b>Transaction ID:</b> ${data.transactionId}</p>
        </div>

      </div>
    </div>
    `;

    // ---------- ADMIN EMAIL ----------
    const adminHTML = `
    <div style="font-family:Arial;padding:20px">
      <h2 style="color:#1479CB;">New Student Registration</h2>

      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td>${data.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td>${data.phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email:</td><td>${data.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Age:</td><td>${data.age}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Address:</td><td>${data.address}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">City:</td><td>${data.city}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Qualification:</td><td>${data.qualification}</td></tr>
      </table>

      <hr style="margin:20px 0"/>

      <h3>Payment Info</h3>
      <p><b>Transaction ID:</b> ${data.transactionId}</p>
    </div>
    `;

    // ---------- EMAIL SETUP ----------
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // no spaces
      },
    });

    // ---------- SEND ADMIN EMAIL ----------
    console.log("📩 Sending admin email...");
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Registration - ${data.name}`,
      html: adminHTML,
    });

    // ---------- SEND USER EMAIL ----------
    console.log("📩 Sending user invoice...");
    await transporter.sendMail({
      from: `"Future Wings Aviation" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Your Payment Receipt",
      html: userHTML,
      attachments: [
        {
          filename: "logo.png",
          path: path.join(process.cwd(), "public/Futurewings-Logo.png"),
          cid: "logo", // matches cid in img src
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
