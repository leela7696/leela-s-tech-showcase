import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name) next.name = "Full name is required";
    if (!email) next.email = "Email address is required";
    else if (!emailOk) next.email = "Enter a valid email address";
    if (!subject) next.subject = "Subject is required";
    if (!message) next.message = "Message is required";
    else if (message.length < 10) next.message = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const msgs = [
        errors.name,
        errors.email,
        errors.subject,
        errors.message,
      ].filter(Boolean).join(" • ");
      toast({
        title: "Please complete all fields correctly.",
        description: msgs || "Ensure a valid email and a message of at least 10 characters.",
        variant: "destructive",
      });
      return;
    }
    try {
      setIsSending(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }
      toast({ title: "Thank you! Your message has been sent successfully." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      toast({ title: "Failed to send message", description: msg, variant: "destructive" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm currently looking for new opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "leela7696@gmail.com", href: "mailto:leela7696@gmail.com" },
                { icon: Phone, label: "+91 6309515519", href: "tel:+916309515519" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sunduleelakrishna/" },
                { icon: Github, label: "GitHub", href: "https://github.com/leela7696" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/sunduleelakrishna/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/leela7696" target="_blank" rel="noopener noreferrer">
                  <Github size={18} /> GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              maxLength={100}
              required
              className={`w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                errors.name ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
              }`}
            />
            {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              maxLength={255}
              required
              className={`w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                errors.email ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
              }`}
            />
            {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => {
                setForm({ ...form, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: undefined });
              }}
              maxLength={140}
              required
              className={`w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                errors.subject ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
              }`}
            />
            {errors.subject && <p className="text-destructive text-sm">{errors.subject}</p>}
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              rows={5}
              maxLength={1000}
              minLength={10}
              required
              className={`w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors resize-none ${
                errors.message ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
              }`}
            />
            {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
            <Button variant="hero" size="lg" type="submit" className="w-full disabled:opacity-60 disabled:cursor-not-allowed" disabled={isSending}>
              <Send size={18} className="mr-2" /> {isSending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
