const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Flask", "React.js", "Node.js", "Bootstrap"],
  },
  {
    title: "AI / ML / CV",
    skills: ["YOLO Models", "OpenCV", "NLP", "Machine Learning"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Twilio API", "Telegram API", "REST APIs"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-display text-sm mb-2 block">{"<skills>"}</span>
          <h2 className="section-heading">Technical Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-primary text-sm mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-primary font-display">Area of Interest:</span> Web & App Development, Artificial Intelligence & Computer Vision
          </p>
        </div>

        <div className="text-center mt-8">
          <span className="text-primary font-display text-sm">{"</skills>"}</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
