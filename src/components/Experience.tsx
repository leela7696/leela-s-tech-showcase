import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const responsibilities = [
  "Developed and maintained production-ready responsive web applications using React.js and JavaScript",
  "Built OTP-based authentication systems with secure form validation",
  "Integrated REST APIs and Supabase backend services",
  "Improved website performance by 20%",
  "Followed modular component-based architecture",
  "Collaborated using GitHub workflows and code reviews",
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-12" />

        <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Briefcase size={14} className="text-primary-foreground" />
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
            <h3 className="text-xl font-bold">Junior Full-Stack Developer</h3>
            <p className="text-primary font-medium mt-1">Hinfinity</p>
            <p className="text-muted-foreground text-sm mt-1 font-mono">June 2025 – Feb 2026 · Hyderabad</p>

            <ul className="mt-4 space-y-2">
              {responsibilities.map((r, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
