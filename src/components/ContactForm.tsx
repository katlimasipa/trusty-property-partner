import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") ?? "");
        const email = String(fd.get("email") ?? "");
        const message = String(fd.get("message") ?? "");
        const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
        window.location.href = `mailto:mphumzeni@thesbu.co.za?subject=Property%20Enquiry%20from%20${encodeURIComponent(name)}&body=${body}`;
        setSent(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required maxLength={100} />
        <Field label="Phone" name="phone" maxLength={30} />
      </div>
      <Field label="Email" name="email" required type="email" maxLength={150} />
      <label className="grid gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">How can we help?</span>
        <textarea required name="message" rows={5} maxLength={1500} className="resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] outline-none transition focus:border-primary" />
      </label>
      <button type="submit" className="mt-3 inline-flex items-center justify-center gap-2 rounded-none bg-foreground px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-background transition hover:bg-primary">
        {sent ? "Opening your email…" : "Send enquiry →"}
      </button>
      <p className="text-[11px] leading-relaxed text-muted-foreground">By submitting, you agree to be contacted regarding your property enquiry.</p>
    </form>
  );
}

function Field({ label, name, type = "text", required, maxLength }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}{required && <span className="text-gold"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] outline-none transition focus:border-primary"
      />
    </label>
  );
}
