import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <p className="text-muted-foreground leading-relaxed text-lg">
          Junior Full-Stack Developer with 8 months of experience building responsive
          web applications using React.js, JavaScript, and Python. Skilled in REST API
          integration, role-based access control, and OTP-based authentication systems.
          Improved website performance by 20% and delivered production-ready enterprise solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
