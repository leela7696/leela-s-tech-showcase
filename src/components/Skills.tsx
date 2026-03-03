import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillGroups = [
  { title: "Core", skills: ["Python", "JavaScript"] },
  { title: "Frontend", skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend & Database", skills: ["Supabase", "REST API Integration"] },
  { title: "Authentication", skills: ["OTP Login/Signup", "Role-Based Access Control", "Form Validation"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code"] },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:glow-box"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-primary font-mono text-sm tracking-wider mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md border border-border hover:border-primary/30 transition-colors"
                  >
                    {skill}
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

export default Skills;
