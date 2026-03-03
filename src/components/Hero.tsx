import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, FolderOpen } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28" id="hero">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1 space-y-6">
          <p className="text-primary font-mono text-sm tracking-wider animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Sundu Leela{" "}
            <span className="text-gradient">Krishna</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Junior Full Stack Developer
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
            I build scalable React applications with secure authentication,
            REST API integration, and enterprise-grade UI architecture.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects"><FolderOpen className="mr-2" size={18} /> View Projects</a>
            </Button>
            <Button variant="heroOutline" size="lg">
              <Download className="mr-2" size={18} /> Download Resume
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/leela7696" target="_blank" rel="noopener noreferrer">
                <Github size={18} /> GitHub
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/sunduleelakrishna/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
              <img
                src={profileImg}
                alt="Sundu Leela Krishna"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-primary/10 -z-10" />
            <div className="absolute -inset-8 rounded-full border border-primary/5 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
