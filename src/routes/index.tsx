import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Mail, MapPin, ShieldCheck, Handshake, Scale, Building2, Home, KeyRound,
  ClipboardList, Megaphone, Leaf, TrendingUp, MoveRight, Quote, CheckCircle2,
} from "lucide-react";
import portrait from "@/assets/mphumzeni-portrait.jpg";
import saHome from "@/assets/sa-home.jpg";
import handover from "@/assets/handover.jpg";
import paperwork from "@/assets/paperwork.jpg";
import logo from "@/assets/sbu-logo.png.asset.json";
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
  { n: "01", title: "Consultation", text: "We listen first — your goals, timeline and circumstances." },
  { n: "02", title: "Property Assessment", text: "An honest evaluation of value, condition and market position." },
  { n: "03", title: "Strategy & Planning", text: "A tailored plan with clear milestones and realistic outcomes." },
  { n: "04", title: "Execution", text: "We negotiate, market and manage every detail on your behalf." },
  { n: "05", title: "Successful Outcome", text: "Signed, transferred and supported — even after the handover." },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 md:grid-cols-12 md:gap-16 md:px-8 md:pt-20">
          <div className="md:col-span-7 md:pt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Master Practitioner in Real Estate
            </div>
            <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Professional Real Estate Solutions Built on{" "}
              <span className="italic text-primary">Trust</span> and{" "}
              <span className="italic text-gold">Transparency</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Helping buyers, sellers, landlords, tenants and investors make confident property
              decisions throughout South Africa.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90">
                Book a Consultation <MoveRight className="h-4 w-4" />
              </a>
              <a href="tel:+27837764989" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-primary">
                <Phone className="h-4 w-4 text-gold" /> Call 083 776 4989
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Credential</dt>
                <dd className="mt-1 font-display text-lg text-foreground">MPRE</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Based in</dt>
                <dd className="mt-1 font-display text-lg text-foreground">Soweto, GP</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Serving</dt>
                <dd className="mt-1 font-display text-lg text-foreground">Nationwide</dd>
              </div>
            </dl>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-primary/15 via-transparent to-gold/20" aria-hidden />
              <img
                src={portrait}
                alt="Mphumzeni Nyembe, Master Practitioner in Real Estate"
                width={896}
                height={1152}
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-xl ring-1 ring-border"
              />
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <img src={logo.url} alt="" width={40} height={40} className="h-10 w-10 rounded-full" />
                  <div>
                    <div className="font-display text-sm text-foreground">Mphumzeni Nyembe</div>
                    <div className="text-xs text-muted-foreground">Master Practitioner in Real Estate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <img src={saHome} alt="A South African suburban family home" width={1536} height={1024} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lg" />
          </div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">About</p>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Meet Mphumzeni Nyembe</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              A Master Practitioner in Real Estate dedicated to helping clients navigate property
              transactions with confidence, professionalism and integrity. Mphumzeni brings deep
              local market knowledge and a client-first ethic to every mandate.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Industry expertise and current market insight",
                "Personal service from first call to final transfer",
                "Transparent processes with no hidden surprises",
                "Strong understanding of the South African market",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" /> {t}
                </li>
              ))}
            </ul>
            <blockquote className="mt-10 border-l-2 border-gold pl-5">
              <p className="font-display text-xl italic text-foreground md:text-2xl">
                "Elevating Professionalism, Transparency and Service."
              </p>
              <footer className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">— The SBU Real Estate</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Services</p>
              <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">A full-service property partner</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Every service is delivered with the same standard of care — whether you are buying
              your first home, renting out a unit, or building a portfolio.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group bg-card p-7 transition hover:bg-cream">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Additional solutions</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Specialist property advice when you need it</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {extras.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-display text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Why us</p>
              <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Why choose The SBU Real Estate</h2>
              <img src={handover} alt="Handing over keys to happy new homeowners" width={1280} height={1024} loading="lazy" className="mt-8 hidden aspect-[4/3] w-full rounded-2xl object-cover md:block" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:col-span-8">
              {whyUs.map((w, i) => (
                <div key={w.title} className="rounded-2xl border border-border bg-card p-7">
                  <div className="font-display text-sm text-gold">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-xl text-foreground">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Client process</p>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">A clear path from first call to keys in hand</h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-3xl text-primary/30">{s.n}</span>
                <h3 className="mt-2 font-display text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Client voices</p>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Built on relationships</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We are reserving this space for the authentic words of our clients. If we've worked
              together, we would be honoured to hear from you.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-dashed border-border bg-card p-7">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
                  Your testimonial will appear here. Share your experience working with The SBU
                  Real Estate.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <div className="font-display text-sm text-foreground">Future Client</div>
                    <div className="text-xs text-muted-foreground">Soweto, Gauteng</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Contact</p>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Let's discuss your property goals</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Reach out for a no-obligation consultation. We respond to every enquiry personally.
            </p>
            <div className="mt-8 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mphumzeni Nyembe</div>
                <div className="font-display text-lg text-foreground">Master Practitioner in Real Estate (MPRE)</div>
              </div>
              <a href="tel:+27837764989" className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary">
                <Phone className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</div>
                  <div className="font-display text-base text-foreground">083 776 4989</div>
                </div>
              </a>
              <a href="mailto:mphumzeni@thesbu.co.za" className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary">
                <Mail className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</div>
                  <div className="font-display text-base text-foreground">mphumzeni@thesbu.co.za</div>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <MapPin className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Office</div>
                  <div className="font-display text-base text-foreground">859 Nkomo Street</div>
                  <div className="text-sm text-muted-foreground">Dieploof Extension Phase 3, Soweto 1852</div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps?q=859+Nkomo+Street,+Diepkloof,+Soweto&output=embed"
                  loading="lazy"
                  className="h-64 w-full"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <img src={paperwork} alt="" width={1280} height={1024} loading="lazy" className="hidden h-16 w-16 rounded-xl object-cover md:block" />
                <div>
                  <h3 className="font-display text-2xl text-foreground">Send an enquiry</h3>
                  <p className="text-sm text-muted-foreground">We typically reply within one business day.</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
