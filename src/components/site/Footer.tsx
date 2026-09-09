import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { cloudSolutions, site, services } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="surface-night">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.8fr_0.9fr] lg:gap-14 lg:py-20">
        <div>
          <Logo tone="night" />
          <p className="mt-7 max-w-sm text-sm leading-6 text-night-foreground/80">
            Ajudamos empresas a proteger, organizar e modernizar a sua tecnologia. Integramos TIC,
            software e climatização para manter cada operação segura e eficiente.
          </p>
          <div className="mt-7 flex gap-2.5">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da WIN MAC"
              className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Facebook className="size-[18px]" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da WIN MAC"
              className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Instagram className="size-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-night-foreground">Serviços</h3>
          <ul className="mt-5 space-y-3 text-sm text-night-foreground/80">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug} className="flex items-start gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
                <Link to="/servicos" className="leading-5 transition-colors hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-night-foreground">Links úteis</h3>
          <ul className="mt-5 space-y-3 text-sm text-night-foreground/80">
            {[
              { to: "/" as const, label: "Início" },
              { to: "/sobre" as const, label: "Sobre nós" },
              { to: "/servicos" as const, label: "Serviços" },
              { to: "/solucoes" as const, label: "Soluções" },
              { to: "/parceiros" as const, label: "Parceiros" },
              { to: "/contacto" as const, label: "Contacto" },
            ].map((item) => (
              <li key={item.to} className="flex items-center gap-2.5">
                <span className="size-1.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
                <Link to={item.to} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-night-foreground">Soluções</h3>
          <ul className="mt-5 space-y-3 text-sm text-night-foreground/80">
            {cloudSolutions.map((solution) => (
              <li key={solution.title} className="flex items-start gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
                <Link to="/solucoes" className="leading-5 transition-colors hover:text-accent">
                  {solution.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-night-foreground/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-night-foreground/65 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} WIN MAC. Todos os direitos reservados.</p>
          <p>Tecnologia e Comércio Geral · Luanda, Angola</p>
        </div>
      </div>
    </footer>
  );
}
