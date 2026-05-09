import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      age,
      address,
      city,
      qualification,
      interest,
      whyInterested,
      researchStatus,
    } = body;

    // ================= TRANSPORTER =================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ================= EMAIL TEMPLATE =================
    const mailOptions = {
      from: `"Future Wings Aviation" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: ` New Free Consultation Form - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>

        <body style="margin:0; padding:0; background:#f4f7fb; font-family:Arial, sans-serif;">

          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="center">

                <table width="700" cellpadding="0" cellspacing="0" border="0"
                  style="background:#ffffff; margin:40px auto; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

                  <!-- HEADER -->
                  <tr>
                    <td
                      style="background:linear-gradient(135deg,#4BAEE5,#1D4ED8);
                      padding:40px 30px;
                      text-align:center;
                      color:white;">

                      <h1 style="margin:0; font-size:32px;">
                        ✈️ Free Consultation Form
                      </h1>

                      <p style="margin-top:10px; font-size:16px; opacity:0.9;">
                        New Student Registration For Free Consultation Form  Received
                      </p>
                    </td>
                  </tr>

                  <!-- BODY -->
                  <tr>
                    <td style="padding:35px;">

                      <!-- STUDENT DETAILS -->
                      <div style="margin-bottom:30px;">
                        <h2 style="color:#1e293b; margin-bottom:20px;">
                           Student Information
                        </h2>

                        <table width="100%" cellpadding="12"
                          style="border-collapse:collapse;">

                          <tr style="background:#f8fafc;">
                            <td style="font-weight:bold; width:220px;">Full Name</td>
                            <td>${name}</td>
                          </tr>

                          <tr>
                            <td style="font-weight:bold;">Phone Number</td>
                            <td>${phone}</td>
                          </tr>

                          <tr style="background:#f8fafc;">
                            <td style="font-weight:bold;">Email Address</td>
                            <td>${email}</td>
                          </tr>

                          <tr>
                            <td style="font-weight:bold;">Age</td>
                            <td>${age}</td>
                          </tr>

                          <tr style="background:#f8fafc;">
                            <td style="font-weight:bold;">City</td>
                            <td>${city}</td>
                          </tr>

                          <tr>
                            <td style="font-weight:bold;">Qualification</td>
                            <td>${qualification}</td>
                          </tr>

                          <tr style="background:#f8fafc;">
                            <td style="font-weight:bold;">Address</td>
                            <td>${address}</td>
                          </tr>

                        </table>
                      </div>

                      <!-- INTEREST -->
                      <div
                        style="background:#eff6ff;
                        border-left:5px solid #4BAEE5;
                        padding:20px;
                        border-radius:12px;
                        margin-bottom:25px;">

                        <h3 style="margin-top:0; color:#1e3a8a;">
                           Aviation Interest
                        </h3>

                        <p style="margin:0; color:#334155; font-size:15px;">
                          ${interest}
                        </p>
                      </div>

                      <!-- WHY INTERESTED -->
                      <div
                        style="background:#f8fafc;
                        padding:25px;
                        border-radius:15px;
                        margin-bottom:25px;">

                        <h3 style="margin-top:0; color:#0f172a;">
                           Why Student is Interested
                        </h3>

                        <p style="line-height:1.8; color:#475569; font-size:15px;">
                          ${whyInterested}
                        </p>
                      </div>

                      <!-- RESEARCH STATUS -->
                      <div
                        style="background:#ecfeff;
                        border-left:5px solid #06b6d4;
                        padding:20px;
                        border-radius:12px;">

                        <h3 style="margin-top:0; color:#0f766e;">
                           Research Status
                        </h3>

                        <p style="margin:0; color:#334155; font-size:15px;">
                          ${researchStatus}
                        </p>
                      </div>

                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td
                      style="background:#0f172a;
                      padding:25px;
                      text-align:center;
                      color:#cbd5e1;">

                      <p style="margin:0; font-size:14px;">
                        Future Wings Aviation • Free Consultation form submission details.
                      </p>

                      <p style="margin-top:8px; font-size:12px; opacity:0.8;">
                        This email was  generated from your website form for Free Consultation.
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
        </html>
      `,
    };

    // ================= SEND EMAIL =================
    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}