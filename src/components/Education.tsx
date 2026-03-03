import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Introduction to Leadership – Kalasalingam University",
  "Python for Everybody – Coursera",
  "Machine Learning Basics – MathWorks",
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="section-padding">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-bold text-lg">Education</h3>
            </div>
            <p className="font-medium">Bachelor's Degree</p>
            <p className="text-muted-foreground text-sm mt-1">Kalasalingam Academy of Research and Education</p>
            <p className="text-primary font-mono text-sm mt-1">2020 – 2024</p>
          </div>

          {/* Certifications */}
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="text-primary" size={20} />
              </div>
              <h3 className="font-bold text-lg">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((c, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">▹</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
