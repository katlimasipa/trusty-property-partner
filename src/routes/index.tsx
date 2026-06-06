import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Mail, MapPin, ShieldCheck, Handshake, Scale, Building2, Home, KeyRound,
  ClipboardList, Megaphone, Leaf, TrendingUp, MoveRight, CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The SBU Real Estate · Mphumzeni Nyembe (MPRE) · Soweto, South Africa" },
      { name: "description", content: "Professional real estate solutions built on trust and transparency. Helping buyers, sellers, landlords, tenants and investors across South Africa." },
      { property: "og:title", content: "The SBU Real Estate · Mphumzeni Nyembe (MPRE)" },
      { property: "og:description", content: "Trusted property partner for buyers, sellers, landlords and investors across South Africa." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "The SBU Real Estate",
        founder: "Mphumzeni Nyembe",
        telephone: "+27837764989",
        email: "mphumzeni@thesbu.co.za",
        address: {
          "@type": "PostalAddress",
          streetAddress: "859 Nkomo Street, Dieploof Extension Phase 3",
          addressLocality: "Soweto",
          postalCode: "1852",
          addressCountry: "ZA",
        },
      }),
    }],
  }),
  component: Index,
});

const services = [
  { icon: Building2, title: "Bond Origination", text: "Sourcing competitive home loan options across major South African banks." },
  { icon: Handshake, title: "Buyer Representation", text: "Advocacy and negotiation that protects your interests from offer to transfer." },
  { icon: KeyRound, title: "Landlord & Tenant Advisory", text: "Clear advice that builds healthy, compliant rental relationships." },
  { icon: Scale, title: "Legal & Compliance", text: "Guidance through contracts, FICA, transfer and statutory requirements." },
  { icon: ClipboardList, title: "Property Management", text: "Hands-on management that protects your investment and your tenants." },
  { icon: Home, title: "Rentals & Leasing", text: "Sourcing the right tenant or the right home with thorough vetting." },
  { icon: Megaphone, title: "Sales & Marketing", text: "Targeted marketing that positions your property to the right buyers." },
  { icon: ShieldCheck, title: "Valuations & Appraisals", text: "Honest market valuations grounded in current local data." },
];

const extras = [
  { icon: Home, title: "Affordable Housing Advisory", text: "Practical pathways into ownership for first-time and emerging buyers." },
  { icon: Leaf, title: "Green Building & Eco-Property", text: "Energy-efficient and sustainable property recommendations." },
  { icon: TrendingUp, title: "Property Flipping Consultation", text: "Strategy, costing and risk review for renovation-resale projects." },
  { icon: MoveRight, title: "Relocation Services", text: "Seamless support for clients moving across provinces or returning home." },
];

const whyUs = [
  { title: "Professional Expertise", text: "Master Practitioner in Real Estate with a commitment to excellence." },
  { title: "Transparent Communication", text: "Clear guidance throughout every step of the process." },
  { title: "Personalised Service", text: "Every client receives individual attention and tailored solutions." },
  { title: "Trusted Property Partner", text: "Building long-term relationships, not one-time transactions." },
];

const steps = [
  { n: "01", title: "Consultation", text: "We listen first — your goals, timeline and circumstances." },
  { n: "02", title: "Property Assessment", text: "An honest evaluation of value, condition and market position." },
  { n: "03", title: "Strategy & Planning", text: "A tailored plan with clear milestones and realistic outcomes." },
  { n: "04", title: "Execution", text: "We negotiate, market and manage every detail on your behalf." },
  { n: "05", title: "Successful Outcome", text: "Signed, transferred and supported — even after the handover." },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO — editorial, type-led, no people */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grain absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 md:px-10 md:pb-24 md:pt-20">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="inline-block h-px w-8 bg-gold" />
            Est. South Africa · Master Practitioner in Real Estate
          </div>

          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.035em] text-balance text-ink">
            Property,
            <span className="italic text-primary"> handled </span>
            <br className="hidden sm:block" />
            with the care
            <br className="hidden sm:block" />
            of a craftsman.
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
            <p className="md:col-span-6 md:col-start-1 max-w-xl text-[15px] leading-relaxed text-foreground/75 md:text-[17px]">
              The SBU Real Estate is the practice of Mphumzeni Nyembe — guiding buyers, sellers,
              landlords, tenants and investors through the South African property market with
              transparency, patience and professional rigour.
            </p>
            <div className="md:col-span-5 md:col-start-8 flex flex-col gap-3 sm:flex-row sm:items-center md:flex-col md:items-stretch">
              <a href="#contact" className="inline-flex items-center justify-between gap-3 rounded-none bg-foreground px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-background transition hover:bg-primary">
                Book a Consultation <MoveRight className="h-4 w-4" />
              </a>
              <a href="tel:+27837764989" className="inline-flex items-center justify-between gap-3 rounded-none border border-border bg-card px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-foreground transition hover:border-foreground">
                <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 083 776 4989</span>
                <span className="text-gold"></span>
              </a>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 md:grid-cols-4">
            {[
              { k: "Credential", v: "MPRE" },
              { k: "Based in", v: "Soweto, GP" },
              { k: "Serving", v: "Nationwide" },
              { k: "Regulator", v: "PPRA" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.k}</dt>
                <dd className="mt-2 font-display text-2xl text-ink md:text-3xl">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* MARQUEE / SLOGAN BAND */}
      <section aria-hidden className="overflow-hidden border-b border-border bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-6 sm:px-6 md:px-10">
          <span className="font-display text-xl italic md:text-2xl">Trust</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">·</span>
          <span className="font-display text-xl italic md:text-2xl">Transparency</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50">·</span>
          <span className="font-display text-xl italic md:text-2xl">Service</span>
        </div>
      </section>

      {/* ABOUT — no portrait, logo-led monogram instead */}
      <section id="about" className="border-b border-border bg-bone">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">About</div>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              Meet <span className="italic">Mphumzeni</span> Nyembe.
            </h2>
            <div className="mt-10 hidden md:block">
              <figure className="relative aspect-square w-full max-w-sm bg-card p-10 ring-1 ring-border">
                <img src="/sbu-logo.jpg" alt="The SBU Real Estate emblem" className="h-full w-full object-contain" />
                <figcaption className="absolute -bottom-4 left-6 right-6 bg-ink px-4 py-2 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-paper">
                  The SBU Real Estate · Est. ZA
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl text-pretty">
              A Master Practitioner in Real Estate dedicated to helping clients navigate property
              transactions with confidence, professionalism and integrity.
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/75 md:text-base">
              Mphumzeni brings deep local market knowledge and a client-first ethic to every mandate
              — whether you are buying your first home in Soweto, renting out a unit in Gauteng,
              or assembling a small portfolio across the country.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Industry expertise and current market insight",
                "Personal service from first call to final transfer",
                "Transparent processes — no hidden surprises",
                "Strong understanding of the South African market",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 border-t border-border pt-4 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" /> {t}
                </li>
              ))}
            </ul>
            <blockquote className="mt-12 border-l-2 border-gold pl-6">
              <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
                "Elevating Professionalism, Transparency and Service."
              </p>
              <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">— The SBU Real Estate</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Services</div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                A full-service property practice.
              </h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 md:pt-12 text-[15px] leading-relaxed text-foreground/75 md:text-base">
              Each service is delivered with the same standard of care — whether you are buying
              your first home, leasing out a unit, or building a portfolio.
            </p>
          </div>
          <div className="mt-14 grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }, i) => (
              <article key={title} className="group relative p-7 transition hover:bg-bone sm:p-8">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL */}
      <section className="border-b border-border bg-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Specialist Solutions</div>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] text-ink md:text-4xl">
              Advisory for the moments that matter.
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {extras.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-bone p-6 sm:p-7">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="border-b border-border bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">Why Us</div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-paper md:text-6xl">
                Built on relationships, not transactions.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70">
                Property is the largest decision most South Africans will make. It deserves a partner
                who picks up the phone, explains the paperwork, and stays for the long road.
              </p>
            </div>
            <div className="grid gap-px bg-paper/15 sm:grid-cols-2 md:col-span-7">
              {whyUs.map((w, i) => (
                <div key={w.title} className="bg-ink p-7 sm:p-8">
                  <div className="font-mono text-[10px] text-gold">0{i + 1} / 04</div>
                  <h3 className="mt-6 font-display text-2xl text-paper">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/65">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-28">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Client Process</div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                From first call to keys in hand.
              </h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 md:pt-12 text-[15px] leading-relaxed text-foreground/75">
              A clear, methodical path. Every step documented, every decision yours.
            </p>
          </div>
          <ol className="mt-14 grid gap-px bg-border md:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="relative bg-background p-6 sm:p-7">
                <span className="font-display text-5xl text-primary/20">{s.n}</span>
                <h3 className="mt-4 font-display text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-b border-border bg-bone">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Contact</div>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              Let's discuss your property goals.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/75">
              Reach out for a no-obligation consultation. Every enquiry is answered personally,
              usually within one business day.
            </p>
            <div className="mt-10 space-y-3">
              <a href="tel:+27837764989" className="group flex items-center justify-between gap-3 border-t border-border py-5 transition hover:text-primary">
                <span className="flex items-center gap-4">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Phone</span>
                    <span className="block font-display text-xl text-ink group-hover:text-primary">083 776 4989</span>
                  </span>
                </span>
                <span className="text-gold transition group-hover:translate-x-1"></span>
              </a>
              <a href="mailto:mphumzeni@thesbu.co.za" className="group flex items-center justify-between gap-3 border-t border-border py-5 transition hover:text-primary">
                <span className="flex items-center gap-4 min-w-0">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Email</span>
                    <span className="block font-display text-xl text-ink group-hover:text-primary truncate">mphumzeni@thesbu.co.za</span>
                  </span>
                </span>
                <span className="text-gold transition group-hover:translate-x-1"></span>
              </a>
              <div className="flex items-start justify-between gap-3 border-y border-border py-5">
                <span className="flex items-start gap-4">
                  <MapPin className="mt-1 h-4 w-4 text-gold" />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Office</span>
                    <span className="block font-display text-xl text-ink">859 Nkomo Street</span>
                    <span className="block text-sm text-muted-foreground">Dieploof Ext. Phase 3, Soweto 1852</span>
                  </span>
                </span>
              </div>
              <div className="overflow-hidden border border-border bg-card">
                <iframe
                  title="Office location map"
                  src="https://www.google.com/maps?q=859+Nkomo+Street,+Diepkloof,+Soweto&output=embed"
                  loading="lazy"
                  className="h-56 w-full md:h-64"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="border border-border bg-card p-6 sm:p-8 md:p-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">Enquiry Form</div>
              <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">Send a message.</h3>
              <p className="mt-2 text-sm text-muted-foreground">We typically reply within one business day.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
