import { useState } from "react";
import logo from "@/assets/sbu-logo.png.asset.json";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="The SBU Real Estate" width={44} height={44} className="h-11 w-11 rounded-full" />
          <div className="leading-tight">
            <div className="font-display text-base font-medium tracking-tight text-foreground">The SBU Real Estate</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Master Practitioner · MPRE</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/75 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+27837764989" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
            <Phone className="h-4 w-4 text-gold" /> 083 776 4989
          </a>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90">
            Book Consultation
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2.5 text-sm text-foreground/80">
                {l.label}
              </a>
            ))}
            <a href="tel:+27837764989" className="mt-2 inline-flex items-center gap-2 py-2 text-sm font-medium text-foreground">
              <Phone className="h-4 w-4 text-gold" /> 083 776 4989
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
