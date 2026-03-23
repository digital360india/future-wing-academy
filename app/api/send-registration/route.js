import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
  Image,
  Font,
} from "@react-pdf/renderer";

export async function POST(req) {
  console.log("🚀 API HIT");

  try {
    const data = await req.json();

    Font.register({
      family: "NotoSans",
      src: path.join(process.cwd(), "public/fonts/NotoSans-Regular.ttf"),
    });

    const logoPath = path.join(process.cwd(), "public/Futurewings-Logo.png");

    const logoBase64 = `data:image/png;base64,${fs
      .readFileSync(logoPath)
      .toString("base64")}`;

    const styles = StyleSheet.create({
      page: {
        padding: 20,
        backgroundColor: "#f3f4f6",
        fontSize: 12,
        fontFamily: "NotoSans",
      },
      container: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 20,
      },
      center: {
        textAlign: "center",
        marginBottom: 15,
      },
      heading: {
        fontSize: 18,
        fontWeight: "bold",
      },
      subText: {
        fontSize: 10,
        color: "#666",
      },
      paymentBox: {
        backgroundColor: "#cfe8f3",
        borderRadius: 12,
        padding: 15,
        textAlign: "center",
        marginVertical: 15,
      },
      amount: {
        fontSize: 28,
        fontWeight: "bold",
        marginVertical: 5,
      },
      card: {
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        padding: 15,
        marginTop: 10,
      },
      sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
      },
      row: {
        marginBottom: 4,
      },
      bold: {
        fontWeight: "bold",
      },
      line: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginVertical: 10,
      },
      logo: {
        width: 120,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
      },
    });

    const MyDoc = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <Image src={logoBase64} style={styles.logo} />

            <View style={styles.center}>
              <Text style={styles.heading}>Future Wings Aviation Academy</Text>
              <Text style={styles.subText}>...where dreams take flight</Text>
            </View>

            <View style={styles.paymentBox}>
              <Text>Payment Amount</Text>
              <Text style={styles.amount}>₹ 5,000 ✔</Text>
              <Text>Five thousand only</Text>
              <Text style={styles.subText}>
                Once payment is verified from our end, we'll get back to you
                shortly.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.heading}>PAYMENT RECEIPT</Text>

              <Text style={styles.row}>
                <Text style={styles.bold}>Receipt No: </Text>
                FWAA/{Math.floor(Math.random() * 1000)}/2026
              </Text>

              <Text style={styles.row}>
                <Text style={styles.bold}>Date: </Text>
                {new Date().toLocaleDateString()}
              </Text>

              <View style={styles.line} />

              <Text style={styles.sectionTitle}>STUDENT DETAILS</Text>

              <Text style={styles.row}>Full Name: {data.name}</Text>
              <Text style={styles.row}>Phone: {data.phone}</Text>
              <Text style={styles.row}>Email: {data.email}</Text>
              <Text style={styles.row}>Age: {data.age}</Text>
              <Text style={styles.row}>Address: {data.address}</Text>
              <Text style={styles.row}>City: {data.city}</Text>
              <Text style={styles.row}>
                Qualification: {data.qualification}
              </Text>

              <View style={styles.line} />

              <Text style={styles.sectionTitle}>PAYMENT DETAILS</Text>

              <Text style={styles.row}>Registration Fee: ₹ 5,000/-</Text>
              <Text style={styles.row}>
                Payment Mode: Online (Website Payment)
              </Text>
              <Text style={styles.row}>
                Transaction ID: {data.transactionId}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );

    const pdfBuffer = await pdf(MyDoc).toBuffer();

    const userHTML = `
    <div style="background:#f3f4f6;padding:20px;font-family:Arial">
      <div style="max-width:700px;margin:auto;background:white;border-radius:12px;padding:25px">

        <div style="text-align:center">
          <img src="cid:logo" width="100"/>
          <h2>Future Wings Aviation Academy</h2>
          <p style="color:#777">...where dreams take flight</p>
        </div>

        <div style="background:#cfe8f3;padding:20px;border-radius:12px;text-align:center;margin-top:20px">
          <h3>Payment Amount</h3>
          <h1>₹ 5,000 ✔</h1>
        </div>

        <p style="text-align:center;margin-top:20px;">
          Your invoice PDF is attached.
        </p>

      </div>
    </div>
    `;

    const adminHTML = `
    <div style="font-family:Arial;background:#f4f6f8;padding:20px">
      <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:10px">

        <h2 style="color:#1479CB;text-align:center;">New Student Registration</h2>

        <table style="width:100%">
          <tr><td><b>Name</b></td><td>${data.name}</td></tr>
          <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
          <tr><td><b>Email</b></td><td>${data.email}</td></tr>
          <tr><td><b>Age</b></td><td>${data.age}</td></tr>
                    <tr><td><b>Address</b></td><td>${data.address}</td></tr>

          <tr><td><b>City</b></td><td>${data.city}</td></tr>
          <tr><td><b>Qualification</b></td><td>${data.qualification}</td></tr>
        </table>

        <hr/>

        <p><b>Transaction ID:</b> ${data.transactionId}</p>

      </div>
    </div>
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Registration - ${data.name}`,
      html: adminHTML,
    });

    // ================= SEND USER MAIL =================
    await transporter.sendMail({
      from: `"Future Wings Aviation" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Invoice PDF",
      html: userHTML,
      attachments: [
        {
          filename: "invoice.pdf",
          content: pdfBuffer,
        },
        {
          filename: "logo.png",
          path: logoPath,
          cid: "logo",
        },
      ],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("❌ ERROR:", error);
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
