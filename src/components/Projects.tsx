import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Slate Agri Crop",
    subtitle: "Agricultural Crop Management System",
    points: [
      "Developed dashboards for crop monitoring and analytics",
      "Built inventory and workforce tracking modules",
      "Created scalable UI architecture",
    ],
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Supabase"],
  },
  {
    title: "HR Connect",
    subtitle: "Human Resource Management System",
    points: [
      "Employee profiles and attendance system",
      "HR dashboards with structured forms",
      "Role-based UI access",
    ],
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "OTP & Role-Based Auth Dashboard",
    subtitle: "Authentication System",
    points: [
      "Full end-to-end OTP authentication workflow",
      "Role-based access control (Admin & User)",
      "Light/Dark theme toggle",
    ],
    tech: ["React.js", "JavaScript", "Supabase"],
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:glow-box hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.subtitle}</p>
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>

              <ul className="space-y-1.5 mb-5">
                {p.points.map((pt, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">▹</span>{pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
