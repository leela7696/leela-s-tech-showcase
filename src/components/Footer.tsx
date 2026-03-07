import { Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2026 Sundu Leela Krishna. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/leela7696" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/sunduleelakrishna/" },
          { icon: Instagram, href: "https://www.instagram.com/" },
          { icon: Facebook, href: "https://www.facebook.com/" },
          { icon: Mail, href: "mailto:leela7696@gmail.com" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <item.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
