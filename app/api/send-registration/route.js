import nodemailer from "nodemailer";

export async function POST(req) {

  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Aviation Registration",
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

        <h3>Payment Details</h3>
        <p><b>Transaction ID:</b> ${data.transactionId}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {

    console.log(error);
    return Response.json({ success: false });

  }
}