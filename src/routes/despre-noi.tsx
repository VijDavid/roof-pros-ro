import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, ShieldCheck, HeartHandshake, Target, Sparkles } from "lucide-react";
import proj2 from "@/assets/project-2.jpg";
import { CTAButtons } from "@/components/CTAButtons";

export const Route = createFileRoute("/despre-noi")({
  head: () => ({
    meta: [
      { title: "Despre noi — Echipă acoperișuri cu 15+ ani experiență | AcoperișExpert" },
      { name: "description", content: "AcoperișExpert — firmă de acoperișuri cu peste 15 ani experiență. Echipă de meseriași, materiale premium și garanție pentru fiecare lucrare." },
      { property: "og:title", content: "Despre noi — AcoperișExpert" },
      { property: "og:description", content: "Firmă de acoperișuri cu peste 15 ani de experiență în România." },
      { property: "og:url", content: "/despre-noi" },
    ],
    links: [{ rel: "canonical", href: "/despre-noi" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Integritate", desc: "Prețuri clare, fără costuri ascunse și fără compromisuri la materiale." },
  { icon: Award, title: "Calitate", desc: "Doar branduri verificate și tehnici moderne — pentru rezultate care durează." },
  { icon: HeartHandshake, title: "Grija față de client", desc: "Comunicare directă, punctualitate și respect față de proprietatea ta." },
  { icon: Target, title: "Precizie", desc: "Măsurători exacte, execuție curată și finisaje la standardele europene." },
];

function About() {
  return (
    <>
      <section className="bg-navy-deep text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-x max-w-3xl">
          <p className="text-orange font-semibold uppercase tracking-wider text-sm">Despre noi</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold">Meșteri români, standarde europene</h1>
          <p className="mt-5 text-lg text-white/80">
            De peste 15 ani construim, reparăm și înlocuim acoperișuri în toată România — cu
            aceeași echipă, aceeași grijă și aceeași garanție ca la propria casă.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <img src={proj2} alt="Casă cu acoperiș montat de AcoperișExpert" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-elevated" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">
              O echipă construită pe încredere
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              AcoperișExpert a pornit dintr-un atelier mic de dulgherie și a crescut natural,
              proiect după proiect, până la echipa completă de astăzi. Nu am făcut niciodată
              reclamă agresivă — clienții ne recomandă mai departe.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lucrăm cu meseriași angajați, nu cu subcontractori întâmplători. Fiecare
              acoperiș pleacă de la biroul nostru cu un plan clar și se termină cu o
              verificare finală, împreună cu tine.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "15+", v: "Ani experiență" },
                { k: "500+", v: "Proiecte" },
                { k: "20", v: "Meseriași" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl md:text-4xl font-extrabold text-orange">{s.k}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-orange font-semibold uppercase tracking-wider text-sm">Valorile noastre</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy-deep">
              Ce ne face diferiți
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-white border border-border p-7 shadow-card animate-float-up" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-deep">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep to-navy p-10 md:p-16 text-white">
            <Sparkles className="absolute top-8 right-8 h-16 w-16 text-orange/30" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold">Hai să discutăm despre acoperișul tău</h2>
              <p className="mt-4 text-white/85 text-lg">
                O echipă serioasă e la un telefon distanță.
              </p>
              <div className="mt-8"><CTAButtons variant="onDark" /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
