import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";

export const Route = createFileRoute("/recenzii")({
  head: () => ({
    meta: [
      { title: "Recenzii clienți — AcoperișExpert | Firmă acoperișuri România" },
      { name: "description", content: "Peste 500 de clienți mulțumiți. Citește recenziile despre serviciile noastre de montaj, reparații și înlocuire acoperișuri în România." },
      { property: "og:title", content: "Recenzii clienți — AcoperișExpert" },
      { property: "og:description", content: "Ce spun clienții despre serviciile noastre de acoperișuri." },
      { property: "og:url", content: "/recenzii" },
    ],
    links: [{ rel: "canonical", href: "/recenzii" }],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Andrei Popescu", role: "Ilfov • Înlocuire acoperiș", text: "Echipă serioasă și punctuală. Ne-au înlocuit acoperișul în 5 zile, exact cum au promis. Materialele sunt de calitate, iar rezultatul arată excelent." },
  { name: "Maria Ionescu", role: "București • Reparație", text: "Am avut infiltrații de ani buni și nimeni nu reușea să le rezolve. Ei au găsit problema din prima și au reparat totul curat. Recomand cu încredere." },
  { name: "Radu Mihai", role: "Prahova • Acoperiș casă nouă", text: "Cel mai profesionist proiect de acoperiș pe care l-am văzut. Detalii curate, materiale bune, comunicare excelentă pe tot parcursul." },
  { name: "Elena Dumitrescu", role: "Cluj • Jgheaburi", text: "Au venit exact când au spus, au montat sistemul pluvial în două zile și totul funcționează perfect. Preț corect." },
  { name: "Ion Marinescu", role: "Buzău • Reparații", text: "Recomand cu toată încrederea. Au reparat acoperișul afectat de furtună foarte rapid și profesional. Garanția e reală." },
  { name: "Cristina Vasilescu", role: "București • Izolație mansardă", text: "După izolație, factura la încălzire s-a înjumătățit. Echipă curată, ordonată, care lasă totul aranjat la final." },
  { name: "Alexandru Georgescu", role: "Ilfov • Dulgherie", text: "Au refăcut șarpanta la casa părinților. Lemn tratat, îmbinări perfecte, tot ce se cuvine. Meseriași adevărați." },
  { name: "Diana Stan", role: "Ploiești • Țiglă metalică", text: "Foarte mulțumită de rezultat. Ne-au explicat opțiunile clar și ne-au ajutat să alegem cea mai bună variantă pentru buget." },
  { name: "Mihai Constantin", role: "București • Consultanță", text: "Chiar și pentru o simplă evaluare, s-au deplasat gratuit și ne-au dat sfaturi pertinente. Oameni serioși." },
];

function Reviews() {
  return (
    <>
      <section className="bg-navy-deep text-white pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
        <div className="container-x max-w-3xl relative">
          <p className="text-orange font-semibold uppercase tracking-wider text-sm">Recenzii</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Ce spun clienții noștri</h1>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex gap-1 text-orange">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
            </div>
            <p className="text-white/85"><strong className="text-white">4.9/5</strong> din peste 500 de proiecte</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={r.name} className="relative rounded-2xl border border-border bg-white p-7 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 animate-float-up" style={{ animationDelay: `${i * 60}ms` }}>
                <Quote className="absolute top-5 right-5 h-8 w-8 text-orange/15" />
                <div className="flex gap-1 text-orange">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-navy-deep leading-relaxed">"{r.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-bold text-navy-deep">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-muted p-10 md:p-14 text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-deep">Vrei să fii următorul client mulțumit?</h3>
            <p className="mt-3 text-muted-foreground">Solicită o ofertă gratuită și îți răspundem în maxim 24 de ore.</p>
            <div className="mt-6 flex justify-center"><CTAButtons /></div>
          </div>
        </div>
      </section>
    </>
  );
}
