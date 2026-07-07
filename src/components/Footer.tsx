import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, HardHat, Facebook, Instagram, Youtube } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/85">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange text-white">
              <HardHat className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Echipă profesionistă de acoperișuri cu peste 15 ani de experiență. Montaj, reparații
            și înlocuire acoperișuri cu garanție.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-orange transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-orange transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-orange transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Servicii</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/servicii" className="hover:text-orange">Montaj acoperișuri</Link></li>
            <li><Link to="/servicii" className="hover:text-orange">Reparații acoperișuri</Link></li>
            <li><Link to="/servicii" className="hover:text-orange">Înlocuire acoperiș</Link></li>
            <li><Link to="/servicii" className="hover:text-orange">Dulgherie</Link></li>
            <li><Link to="/servicii" className="hover:text-orange">Jgheaburi și burlane</Link></li>
            <li><Link to="/servicii" className="hover:text-orange">Izolații acoperiș</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Companie</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/despre-noi" className="hover:text-orange">Despre noi</Link></li>
            <li><Link to="/proiecte" className="hover:text-orange">Proiecte</Link></li>
            <li><Link to="/recenzii" className="hover:text-orange">Recenzii</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 text-orange shrink-0 mt-0.5" /><a href={site.phoneHref} className="hover:text-orange">{site.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-orange shrink-0 mt-0.5" /><a href={`mailto:${site.email}`} className="hover:text-orange break-all">{site.email}</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-orange shrink-0 mt-0.5" /><span>{site.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-white/55">
          <p>© {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.</p>
          <p>Servicii profesionale de acoperișuri în România.</p>
        </div>
      </div>
    </footer>
  );
}
