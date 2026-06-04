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
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="text-foreground/80">Full name</span>
          <input required name="name" maxLength={100} className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="text-foreground/80">Phone</span>
          <input name="phone" maxLength={30} className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="text-foreground/80">Email</span>
        <input required type="email" name="email" maxLength={150} className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="text-foreground/80">How can we help?</span>
        <textarea required name="message" rows={5} maxLength={1500} className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
      </label>
      <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90">
        {sent ? "Opening your email…" : "Send enquiry"}
      </button>
      <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted regarding your property enquiry.</p>
    </form>
  );
}
