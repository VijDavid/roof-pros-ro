import { Link } from "@tanstack/react-router";
import { Phone, FileText } from "lucide-react";
import { site } from "@/lib/site";

export function CTAButtons({ variant = "default" }: { variant?: "default" | "onDark" }) {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      <Link to="/contact" className="btn-primary">
        <FileText className="h-5 w-5" />
        Solicită ofertă
      </Link>
      <a
        href={site.phoneHref}
        className={variant === "onDark" ? "btn-ghost-navy" : "btn-secondary"}
      >
        <Phone className="h-5 w-5" />
        Sună acum
      </a>
    </div>
  );
}
