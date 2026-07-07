import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Timer,
  Users,
  BadgeCheck,
  Wrench,
  Hammer,
  Home as HomeIcon,
  Layers,
  Droplets,
  Snowflake,
  Star,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import { CTAButtons } from "@/components/CTAButtons";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AcoperișExpert — Montaj și reparații acoperișuri | Ofertă gratuită" },
      {
        name: "description",
        content:
          "Firmă de acoperișuri cu peste 15 ani de experiență. Montaj acoperiș, reparații, înlocuire, tablă și țiglă metalică. Ofertă gratuită în 24h. Garanție.",
      },
      { property: "og:title", content: "AcoperișExpert — Acoperișuri durabile" },
      { property: "og:description", content: "Montaj, reparații și înlocuire acoperișuri în România. Ofertă gratuită." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: HomeIcon, title: "Montaj acoperișuri", desc: "Acoperișuri noi la cheie, cu materiale premium." },
  { icon: Wrench, title: "Reparații acoperișuri", desc: "Intervenții rapide pentru infiltrații și avarii." },
  { icon: Layers, title: "Înlocuire acoperiș", desc: "Demontare, structură nouă și montaj complet." },
  { icon: Hammer, title: "Dulgherie", desc: "Șarpante din lemn tratat, executate la standard." },
  { icon: BadgeCheck, title: "Tablă și țiglă metalică", desc: "Montaj profesional cu accesorii originale." },
  { icon: Droplets, title: "Jgheaburi și burlane", desc: "Sisteme pluviale complete, montate corect." },
  { icon: Snowflake, title: "Izolații acoperiș", desc: "Termo și hidroizolații pentru confort maxim." },
];

const trust = [
  { icon: BadgeCheck, title: "Ofertă gratuită", desc: "Deplasare și estimare fără costuri." },
  { icon: ShieldCheck, title: "Materiale de calitate", desc: "Doar branduri verificate, cu certificate." },
  { icon: Users, title: "Echipă experimentată", desc: "Peste 15 ani de experiență în domeniu." },
  { icon: Timer, title: "Execuție rapidă", desc: "Respectăm termenele, fără surprize." },
  { icon: ShieldCheck, title: "Garanție lucrări", desc: "Garanție extinsă pentru toate serviciile." },
];

const reviews = [
  { name: "Andrei Popescu", role: "Ilfov", text: "Echipă serioasă și punctuală. Ne-au înlocuit acoperișul în 5 zile, exact cum au promis. Recomand!" },
  { name: "Maria Ionescu", role: "București", text: "Am avut infiltrații de ani buni. Le-au reparat definitiv și au și schimbat jgheaburile. Preț corect." },
  { name: "Radu Mihai", role: "Prahova", text: "Cel mai profesionist proiect de acoperiș pe care l-am văzut. Detalii curate și materiale bune." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Casă modernă cu acoperiș din tablă metalică"
            className="h-full w-full object-cover opacity-45"
            width={1920}
            height={1280}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(120deg, oklch(0.22 0.08 260 / 0.92) 0%, oklch(0.22 0.08 260 / 0.55) 60%, oklch(0.22 0.08 260 / 0.25) 100%)" }}
          />
        </div>

        <div className="container-x relative py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange/15 border border-orange/40 px-4 py-1.5 text-sm font-medium text-orange-glow animate-fade-in">
              <CheckCircle2 className="h-4 w-4" /> Ofertă gratuită în 24 de ore
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] animate-float-up">
              Acoperișuri durabile,<br />
              <span className="text-orange">executate profesionist</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed animate-float-up delay-100">
              Firmă de acoperișuri cu peste 15 ani de experiență în România. Materiale premium,
              echipă calificată și execuție rapidă — cu garanție scrisă pentru fiecare lucrare.
            </p>
            <div className="mt-8 animate-float-up delay-200">
              <CTAButtons variant="onDark" />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl animate-fade-in delay-300">
              {[
                { k: "500+", v: "Proiecte finalizate" },
                { k: "15+", v: "Ani experiență" },
                { k: "5★", v: "Rating clienți" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-orange">{s.k}</div>
                  <div className="text-xs md:text-sm text-white/70 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-border">
        <div className="container-x py-10 grid grid-cols-2 md:grid-cols-5 gap-6">
          {trust.map((t, i) => (
            <div key={t.title} className="flex items-start gap-3 animate-float-up" style={{ animationDelay: `${i * 60}ms` }}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                <t.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="font-semibold text-navy-deep text-sm">{t.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-muted/50">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider">Serviciile noastre</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-navy-deep">
              Tot ce ține de acoperișul tău, într-un singur loc
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              De la montaj complet până la reparații și întreținere — acoperim toate nevoile
              cu aceeași echipă și aceeași garanție.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated animate-float-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-orange/10 group-hover:bg-orange/20 transition-colors" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-xl font-bold text-navy-deep">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/servicii" className="inline-flex items-center gap-2 font-semibold text-navy-deep hover:text-orange transition-colors">
              Vezi toate serviciile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider">Proiecte recente</p>
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-navy-deep">
                Rezultatele vorbesc de la sine
              </h2>
            </div>
            <Link to="/proiecte" className="inline-flex items-center gap-2 font-semibold text-navy-deep hover:text-orange">
              Toate proiectele <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BeforeAfter before={beforeImg} after={afterImg} title="Înlocuire completă acoperiș" desc="Casă unifamilială — Prahova. Șarpantă nouă și țiglă metalică." />
            <ProjectCard img={proj2} title="Vilă cu țiglă ceramică" desc="Montaj complet cu jgheaburi din aluminiu — Ilfov." />
            <ProjectCard img={proj3} title="Acoperiș metalic modern" desc="Tablă cutată premium pe structură nouă — București." />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider">Recenzii clienți</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Peste 500 de clienți mulțumiți</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={r.name} className="rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur animate-float-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 text-orange">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-white/90 leading-relaxed">"{r.text}"</p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-white/60">{r.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/recenzii" className="btn-ghost-navy">Vezi toate recenziile <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep to-navy p-10 md:p-16 text-white">
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, var(--orange) 0%, transparent 70%)", opacity: 0.35 }} />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold">Primești oferta ta gratuită astăzi</h2>
              <p className="mt-4 text-white/85 text-lg">
                Trimite-ne câteva detalii sau sună direct — îți dăm o estimare clară, fără obligații.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Solicită ofertă</Link>
                <a href={site.phoneHref} className="btn-ghost-navy"><Phone className="h-5 w-5" /> {site.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-border shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-deep">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function BeforeAfter({ before, after, title, desc }: { before: string; after: string; title: string; desc: string }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-border shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={before} alt={`Înainte — ${title}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <img src={after} alt={`După — ${title}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="absolute top-3 left-3 rounded-full bg-navy-deep/90 px-3 py-1 text-xs font-semibold text-white">Înainte / După</div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-deep">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
