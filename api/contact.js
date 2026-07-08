import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const body = req.body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Formular Site <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      subject: "Solicitare nouă de pe site",
      html: `
        <h2>Solicitare nouă</h2>
        <p><b>Nume:</b> ${body.name}</p>
        <p><b>Telefon:</b> ${body.phone}</p>
        <p><b>Email:</b> ${body.email || "Nespecificat"}</p>
        <p><b>Tip lucrare:</b> ${body.work_type}</p>
        <p><b>Mesaj:</b> ${body.message || "Nespecificat"}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}