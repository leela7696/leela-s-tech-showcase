import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, FolderOpen } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { useEffect, useRef } from "react";

interface VantaBirdsInstance {
  destroy(): void;
}
interface VantaBirdsOptions {
  el: HTMLElement;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number;
  backgroundAlpha?: number;
  color1?: number;
  color2?: number;
  quantity?: number;
  birdSize?: number;
  wingSpan?: number;
  speedLimit?: number;
  separation?: number;
  alignment?: number;
  cohesion?: number;
}
declare global {
  interface Window {
    VANTA?: { BIRDS: (opts: VantaBirdsOptions) => VantaBirdsInstance };
  }
}

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!window.VANTA || !heroRef.current) return;
    const instance = window.VANTA.BIRDS({
      el: heroRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      backgroundColor: 0x0b1020,
      backgroundAlpha: 1,
      color1: 0x7c3aed,
      color2: 0x22d3ee,
      quantity: 3,
      birdSize: 1.2,
      wingSpan: 20,
      speedLimit: 4,
      separation: 50,
      alignment: 50,
      cohesion: 20,
    });
    return () => {
      instance.destroy();
    };
  }, []);
  return (
    <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center section-padding pt-28" id="hero">
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
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
          <div className="relative group" data-interactive="true">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-1">
              <img
                src={profileImg}
                alt="Sundu Leela Krishna"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-primary/10 -z-10 transition-opacity duration-300 ease-out group-hover:opacity-70" />
            <div className="absolute -inset-8 rounded-full border border-primary/5 -z-10 transition-opacity duration-300 ease-out group-hover:opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
