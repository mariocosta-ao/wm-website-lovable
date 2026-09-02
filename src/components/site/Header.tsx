import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/solucoes", label: "Soluções em nuvem" },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/contacto", label: "Contactos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="hidden border-b border-border/60 bg-surface md:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-end gap-6 px-5 py-2 text-xs text-muted-foreground">
          <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-primary">
            <Phone className="size-3.5" /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-primary">
            <Mail className="size-3.5" /> {site.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)} aria-label="WIN MAC — página inicial">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contacto"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Pedir proposta
        </Link>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-surface px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-lg px-2 py-3 text-base font-semibold text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground"
          >
            Ligar {site.phone}
          </a>
        </div>
      ) : null}
    </header>
  );
}
