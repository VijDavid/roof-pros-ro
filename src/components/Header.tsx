import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, HardHat } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/servicii", label: "Servicii" },
  { to: "/proiecte", label: "Proiecte" },
  { to: "/recenzii", label: "Recenzii" },
  { to: "/despre-noi", label: "Despre noi" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/85 backdrop-blur-md">
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-deep text-white shadow-card transition-transform group-hover:-rotate-6">
            <HardHat className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-navy-deep">
            {site.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-navy-deep/80 transition-colors hover:text-orange"
              activeProps={{ className: "text-orange" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-navy-deep"
          >
            <Phone className="h-4 w-4 text-orange" />
            {site.phone}
          </a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-4 !text-sm">
            Solicită ofertă
          </Link>
        </div>

        <button
          className="lg:hidden grid h-11 w-11 place-items-center rounded-lg border border-border text-navy-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meniu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy-deep hover:bg-muted"
                activeProps={{ className: "bg-muted text-orange" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-border">
              <a href={site.phoneHref} className="btn-secondary">
                <Phone className="h-5 w-5" /> {site.phone}
              </a>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary">
                Solicită ofertă
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
