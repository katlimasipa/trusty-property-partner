import logo from "@/assets/sbu-logo.png.asset.json";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" width={48} height={48} className="h-12 w-12" />
              <div>
                <div className="font-display text-lg text-paper">The SBU Real Estate</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">Mphumzeni Nyembe · MPRE</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
              Elevating Professionalism, Transparency and Service across South Africa's property market.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">Navigate</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-paper/85">
              <li><a href="#about" className="hover:text-gold">About</a></li>
              <li><a href="#services" className="hover:text-gold">Services</a></li>
              <li><a href="#why" className="hover:text-gold">Why Us</a></li>
              <li><a href="#process" className="hover:text-gold">Process</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">Office</h4>
            <ul className="mt-5 space-y-3 text-sm text-paper/85">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold shrink-0" /><a href="tel:+27837764989" className="hover:text-gold">083 776 4989</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold shrink-0" /><a href="mailto:mphumzeni@thesbu.co.za" className="hover:text-gold break-all">mphumzeni@thesbu.co.za</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold shrink-0" /><span>859 Nkomo Street, Dieploof Ext. Phase 3, Soweto 1852</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-[11px] text-paper/55 sm:px-6 md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} The SBU Real Estate. Registered with the PPRA.</span>
          <span>
            Crafted by{" "}
            <a href="https://architeq.co.za" target="_blank" rel="noopener noreferrer" className="text-paper/85 underline-offset-4 hover:text-gold hover:underline">
              Architeq Web Agency
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
