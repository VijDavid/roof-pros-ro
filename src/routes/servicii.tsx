import { createFileRoute, Link } from "@tanstack/react-router";
import { Home as HomeIcon, Wrench, Layers, Hammer, BadgeCheck, Droplets, Snowflake, Check, Phone } from "lucide-react";
import installImg from "@/assets/service-installation.jpg";
import carpImg from "@/assets/service-carpentry.jpg";
import guttersImg from "@/assets/service-gutters.jpg";
import { CTAButtons } from "@/components/CTAButtons";
import { site } from "@/lib/site";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii acoperișuri — Montaj, reparații, înlocuire | AcoperișExpert" },
      { name: "description", content: "Servicii complete pentru acoperișul tău: montaj acoperiș, reparații, înlocuire, dulgherie, tablă și țiglă metalică, jgheaburi, izolații. Ofertă gratuită." },
      { property: "og:title", content: "Servicii acoperișuri — AcoperișExpert" },
      { property: "og:description", content: "Montaj acoperiș, reparații, înlocuire, dulgherie, jgheaburi și izolații." },
      { property: "og:url", content: "/servicii" },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
  }),
  component: Services,
});

const services = [
  {
    icon: HomeIcon,
    title: "Montaj acoperișuri",
    img: installImg,
    desc: "Executăm acoperișuri noi la cheie, de la structură până la accesorii. Fiecare proiect începe cu o măsurare exactă și o ofertă detaliată.",
    points: ["Consultanță și proiectare", "Montaj țiglă ceramică sau metalică", "Accesorii și finisaje incluse"],
  },
  {
    icon: Wrench,
    title: "Reparații acoperișuri",
    desc: "Intervenții rapide pentru infiltrații, țigle sparte, tablă desprinsă sau elemente deteriorate. Diagnostic gratuit la fața locului.",
    points: ["Reparații punctuale", "Eliminare infiltrații", "Verificări sezoniere"],
  },
  {
    icon: Layers,
    title: "Înlocuire acoperiș",
    desc: "Demontăm vechiul acoperiș, refacem structura acolo unde este nevoie și montăm materialele noi cu garanție extinsă.",
    points: ["Demontare și evacuare deșeuri", "Refacere șarpantă dacă e cazul", "Instalare completă cu garanție"],
  },
  {
    icon: Hammer,
    title: "Dulgherie",
    img: carpImg,
    desc: "Construim și reparăm șarpante din lemn tratat împotriva umidității și insectelor. Structuri sigure, cu durată lungă de viață.",
    points: ["Șarpante noi", "Consolidări", "Lemn tratat premium"],
  },
  {
    icon: BadgeCheck,
    title: "Montaj tablă și țiglă metalică",
    desc: "Montaj profesional pentru tablă cutată, tablă tip țiglă și țiglă metalică — cu toate accesoriile originale.",
    points: ["Materiale certificate", "Montaj etanș", "Aspect modern și durabil"],
  },
  {
    icon: Droplets,
    title: "Jgheaburi și burlane",
    img: guttersImg,
    desc: "Sisteme pluviale complete din aluminiu, tablă sau PVC — dimensionate corect pentru volumul de apă.",
    points: ["Consultanță dimensionare", "Montaj cu pantă corectă", "Accesorii și site parazăpezi"],
  },
  {
    icon: Snowflake,
    title: "Izolații acoperiș",
    desc: "Termoizolații și hidroizolații pentru mansardă și pod — reduci facturile la încălzire și eviți condensul.",
    points: ["Termoizolație vată minerală / PIR", "Bariere de vapori și folii", "Hidroizolații moderne"],
  },
];

function Services() {
  return (
    <>
      <section className="bg-navy-deep text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-x max-w-3xl">
          <p className="text-orange font-semibold uppercase tracking-wider text-sm">Servicii</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Servicii complete de acoperișuri</h1>
          <p className="mt-5 text-lg text-white/80">
            De la montaj și înlocuire până la reparații și izolații — acoperim tot ce înseamnă
            un acoperiș sigur, etanș și durabil.
          </p>
          <div className="mt-8"><CTAButtons variant="onDark" /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x space-y-16">
          {services.map((s, i) => (
            <article key={s.title} className={`grid gap-8 md:grid-cols-2 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div>
                {s.img ? (
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-elevated" />
                ) : (
                  <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-deep to-navy grid place-items-center text-white/40">
                    <s.icon className="h-24 w-24" />
                  </div>
                )}
              </div>
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange">
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-navy-deep">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-navy-deep">
                      <Check className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">Solicită ofertă</Link>
                  <a href={site.phoneHref} className="btn-secondary"><Phone className="h-5 w-5" /> {site.phone}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
