import logo from "@/assets/sbu-logo.png.asset.json";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="The SBU Real Estate" width={48} height={48} className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-display text-base text-foreground">The SBU Real Estate</div>
              <div className="text-xs text-muted-foreground">Mphumzeni Nyembe · MPRE</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Elevating Professionalism, Transparency and Service across South Africa's property market.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/70">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#why" className="hover:text-primary">Why Us</a></li>
            <li><a href="#process" className="hover:text-primary">Process</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/70">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Buyer Representation</li>
            <li>Property Management</li>
            <li>Rentals & Leasing</li>
            <li>Valuations & Appraisals</li>
            <li>Bond Origination</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/70">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /><a href="tel:+27837764989" className="hover:text-primary">083 776 4989</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /><a href="mailto:mphumzeni@thesbu.co.za" className="hover:text-primary">mphumzeni@thesbu.co.za</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /><span>859 Nkomo Street, Dieploof Ext. Phase 3, Soweto 1852</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} The SBU Real Estate. All rights reserved.</span>
          <span>Registered with the PPRA · Master Practitioner in Real Estate</span>
        </div>
      </div>
    </footer>
  );
}
