import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    try {
      const body = await request.json();

      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Formular Site <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL!,
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

      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch {
      return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
  },
});
