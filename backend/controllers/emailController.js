const nodemailer = require("nodemailer");

const sendConfirmationEmail = async (user, booking) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial; padding: 20px;">
        <h2 style="color: green;">🎉 Booking Confirmed</h2>

        <p>Hello <strong>${user.name}</strong>,</p>
        <p>Your festival booking has been successfully confirmed.</p>

        <hr />

        <p><strong>Festival:</strong> ${booking.festival}</p>
        <p><strong>Location:</strong> ${booking.location}</p>
        <p><strong>Tickets:</strong> ${booking.ticketCount}</p>
        <p><strong>Total Paid:</strong> ₹${booking.totalAmount}</p>

        <hr />
        <p>We look forward to seeing you at the event 🎊</p>
        <p style="font-size:12px;color:gray;">This is an automated email.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Festive Guide" <${process.env.EMAIL_USER}>`,
      to: user.email, // 🔥 real user email
      subject: "Festival Ticket Booking Confirmation",
      html: htmlContent,
    });

    console.log(`✅ Email successfully sent to ${user.email}`);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

module.exports = { sendConfirmationEmail };
