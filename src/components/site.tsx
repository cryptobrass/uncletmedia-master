import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const links = [
  { to: "/templates", label: "Templates" },
  { to: "/blog", label: "Blog" },
  { to: "/resources", label: "Resources" },
  { to: "/others", label: "Others" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-bold tracking-wider text-gradient">
          UNCLE T MEDIA
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-primary-glow" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/templates" className="rounded-lg bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow">
          Get Started
        </Link>
      </div>
      <nav className="flex justify-center gap-5 pb-3 md:hidden">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="text-xs text-muted-foreground">{l.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Uncle T Media · Powered by AI
    </footer>
  );
}

export function Hero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: ReactNode; subtitle: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        {eyebrow && (
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 font-display text-xs tracking-[0.2em] text-primary-glow">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
        {children && <div className="mt-10 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}

export type Item = { icon: LucideIcon; title: string; desc: string; tag?: string };

export function CardGrid({ items }: { items: Item[] }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, desc, tag }) => (
        <div key={title} className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            {tag && <span className="text-xs text-primary-glow">{tag}</span>}
          </div>
          <h3 className="mt-6 text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </div>
      ))}
    </section>
  );
}
