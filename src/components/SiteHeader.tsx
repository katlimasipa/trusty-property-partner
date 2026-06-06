import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "About", num: "01" },
  { href: "#services", label: "Services", num: "02" },
  { href: "#why", label: "Why Us", num: "03" },
  { href: "#process", label: "Process", num: "04" },
  { href: "#contact", label: "Contact", num: "05" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src="/sbu-logo.jpg" alt="The SBU Real Estate" width={40} height={40} className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <div className="leading-tight min-w-0">
            <div className="font-display text-[15px] sm:text-base tracking-tight text-foreground truncate">The SBU Real Estate</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">MPRE · Soweto, ZA</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-[13px] text-foreground/70 transition-colors hover:text-primary">
              <span className="font-mono text-[10px] text-gold mr-1.5">{l.num}</span>{l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+27837764989" className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground hover:text-primary">
            <Phone className="h-3.5 w-3.5 text-gold" /> 083 776 4989
          </a>
          <a href="#contact" className="rounded-none border border-foreground bg-foreground px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-background transition hover:bg-primary hover:border-primary">
            Book Consultation
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden -mr-2 p-2 text-foreground" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col divide-y divide-border px-4 sm:px-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 text-sm text-foreground">
                <span className="flex items-center gap-3"><span className="font-mono text-[10px] text-gold">{l.num}</span>{l.label}</span>
                <span className="text-gold"></span>
              </a>
            ))}
            <a href="tel:+27837764989" className="flex items-center gap-2 py-4 text-sm font-medium text-foreground">
              <Phone className="h-4 w-4 text-gold" /> 083 776 4989
            </a>
          </div>
          <div className="p-4 sm:p-6">
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-none border border-foreground bg-foreground px-5 py-3.5 text-center text-xs font-medium uppercase tracking-[0.14em] text-background">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
