import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Solicită ofertă gratuită acoperiș | AcoperișExpert" },
      { name: "description", content: "Contactează AcoperișExpert pentru o ofertă gratuită. Telefon, WhatsApp, e-mail sau formular online. Răspuns în maxim 24 de ore." },
      { property: "og:title", content: "Contact — AcoperișExpert" },
      { property: "og:description", content: "Solicită o ofertă gratuită pentru acoperișul tău." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-navy-deep text-white pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container-x max-w-3xl">
          <p className="text-orange font-semibold uppercase tracking-wider text-sm">Contact</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Solicită o ofertă gratuită</h1>
          <p className="mt-5 text-lg text-white/80">
            Sună-ne, scrie-ne pe WhatsApp sau completează formularul — îți răspundem în maxim
            24 de ore cu o estimare clară.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <ContactCard icon={Phone} label="Sună acum" value={site.phone} href={site.phoneHref} accent />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Trimite mesaj rapid" href={site.whatsapp} whatsapp />
            <ContactCard icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactCard icon={MapPin} label="Sediu" value={site.address} />
            <ContactCard icon={Clock} label="Program" value={site.hours} />
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
              {sent ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-orange" />
                  <h3 className="mt-4 text-2xl font-extrabold text-navy-deep">Mulțumim!</h3>
                  <p className="mt-2 text-muted-foreground">Am primit solicitarea ta. Te contactăm în maxim 24 de ore.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="grid gap-4"
                >
                  <h2 className="text-2xl font-extrabold text-navy-deep">Formular de ofertă</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nume și prenume *" name="name" required />
                    <Field label="Telefon *" name="phone" type="tel" required />
                  </div>
                  <Field label="Email" name="email" type="email" />
                  <div>
                    <label className="text-sm font-semibold text-navy-deep">Tip lucrare *</label>
                    <select required className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-navy-deep focus:outline-none focus:ring-2 focus:ring-orange">
                      <option value="">Alege...</option>
                      <option>Montaj acoperiș nou</option>
                      <option>Reparație acoperiș</option>
                      <option>Înlocuire acoperiș</option>
                      <option>Dulgherie / șarpantă</option>
                      <option>Jgheaburi și burlane</option>
                      <option>Izolații acoperiș</option>
                      <option>Altele</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy-deep">Detalii proiect</label>
                    <textarea rows={4} placeholder="Suprafață aproximativă, localitate, alte detalii..." className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-navy-deep focus:outline-none focus:ring-2 focus:ring-orange resize-none" />
                  </div>
                  <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">
                    <Send className="h-5 w-5" /> Trimite solicitarea
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Prin trimiterea formularului ești de acord cu prelucrarea datelor pentru a-ți răspunde solicitării.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Locație AcoperișExpert pe hartă"
              src="https://www.google.com/maps?q=Bucuresti%2C%20Romania&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy-deep" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-navy-deep placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon, label, value, href, accent, whatsapp,
}: { icon: any; label: string; value: string; href?: string; accent?: boolean; whatsapp?: boolean }) {
  const inner = (
    <div className={`flex items-start gap-4 rounded-2xl border p-5 transition-all ${accent ? "border-orange bg-orange/5 hover:bg-orange/10" : whatsapp ? "border-[#25D366]/40 bg-[#25D366]/5 hover:bg-[#25D366]/10" : "border-border bg-white hover:border-navy-soft"}`}>
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${accent ? "bg-orange text-white" : whatsapp ? "text-white" : "bg-navy-deep text-white"}`} style={whatsapp ? { background: "#25D366" } : undefined}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
        <div className="mt-0.5 font-bold text-navy-deep break-words">{value}</div>
      </div>
    </div>
  );
  if (href) return <a href={href} target={whatsapp ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>;
  return inner;
}
