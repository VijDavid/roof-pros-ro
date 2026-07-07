import { createFileRoute } from "@tanstack/react-router";
import { CTAButtons } from "@/components/CTAButtons";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import heroImg from "@/assets/hero-roof.jpg";
import { MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/proiecte")({
  head: () => ({
    meta: [
      { title: "Proiecte realizate — Galerie acoperișuri | AcoperișExpert" },
      { name: "description", content: "Galerie cu acoperișuri montate și înlocuite: exemple înainte/după, țiglă ceramică, tablă metalică și izolații. Vezi rezultatele echipei noastre." },
      { property: "og:title", content: "Proiecte realizate — AcoperișExpert" },
      { property: "og:description", content: "Galerie cu proiecte de acoperișuri montate în România." },
      { property: "og:url", content: "/proiecte" },
    ],
    links: [{ rel: "canonical", href: "/proiecte" }],
  }),
  component: Projects,
});

const projects = [
  { before: beforeImg, after: afterImg, title: "Înlocuire acoperiș vechi", location: "Ploiești, Prahova", year: "2025", desc: "Am înlocuit acoperișul deteriorat cu unul modern din tablă metalică, refăcând complet șarpanta și izolația." },
  { after: proj1, title: "Montaj țiglă metalică", location: "Chitila, Ilfov", year: "2025", desc: "Acoperiș nou cu țiglă metalică roșie, accesorii originale și sistem pluvial complet." },
  { after: proj2, title: "Vilă cu țiglă ceramică", location: "Otopeni, Ilfov", year: "2024", desc: "Montaj țiglă ceramică premium, dulgherie nouă și jgheaburi din aluminiu." },
  { after: proj3, title: "Acoperiș tablă cutată", location: "București, Sector 6", year: "2024", desc: "Sistem modern cu tablă cutată premium pe structură reabilitată." },
  { after: heroImg, title: "Casă nouă la cheie", location: "Snagov, Ilfov", year: "2024", desc: "Proiect complet — șarpantă, izolație, țiglă metalică și sisteme pluviale." },
];

function Projects() {
  return (
    <>
      <section className="bg-navy-deep text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-x max-w-3xl">
          <p className="text-orange font-semibold uppercase tracking-wider text-sm">Portofoliu</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Proiecte realizate</h1>
          <p className="mt-5 text-lg text-white/80">
            O selecție de acoperișuri pe care le-am montat, reparat sau înlocuit — fiecare cu
            aceeași atenție la detalii și materiale de calitate.
          </p>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <article key={p.title} className="group overflow-hidden rounded-2xl bg-white border border-border shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated animate-float-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  {p.before && (
                    <>
                      <img src={p.before} alt={`Înainte — ${p.title}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                      <img src={p.after} alt={`După — ${p.title}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                      <div className="absolute top-4 left-4 rounded-full bg-orange px-3 py-1 text-xs font-bold text-white">Înainte / După</div>
                    </>
                  )}
                  {!p.before && (
                    <img src={p.after} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                </div>
                <div className="p-7">
                  <h2 className="text-xl md:text-2xl font-extrabold text-navy-deep">{p.title}</h2>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-orange" />{p.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-orange" />{p.year}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-deep">Vrei un rezultat asemănător?</h3>
            <p className="mt-3 text-muted-foreground">Trimite-ne câteva poze și îți dăm o estimare gratuită.</p>
            <div className="mt-6 flex justify-center"><CTAButtons /></div>
          </div>
        </div>
      </section>
    </>
  );
}
