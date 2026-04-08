import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. Software Systems (Integrated)",
    institution: "Kongu Engineering College, Perundurai",
    period: "2024 – Present",
    graduation: "Expected 2029",
    isCurrent: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Equitas Gurukul Matriculation Higher Secondary School, Karur",
    period: "2024",
    stream: "Computer Science",
    isCurrent: false,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Equitas Gurukul Matriculation Higher Secondary School, Karur",
    period: "2022",
    isCurrent: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-display text-sm mb-2 block">{"<education>"}</span>
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div 
              key={edu.degree}
              className="bg-card border border-border rounded-lg p-6 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-display font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={14} />
                      <span className="text-sm font-display">
                        {edu.graduation || edu.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-primary font-medium text-sm mb-2">{edu.institution}</p>
                  
                  {edu.stream && (
                    <p className="text-muted-foreground text-sm">
                      Stream: {edu.stream}
                    </p>
                  )}

                  {edu.isCurrent && (
                    <div className="mt-3">
                      <h4 className="flex items-center gap-2 text-xs font-display text-muted-foreground uppercase tracking-wider mb-2">
                        <BookOpen size={12} />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures & Algorithms",
                          "Object-Oriented Programming",
                          "Database Systems",
                          "Web Development",
                          "Artificial Intelligence",
                          "Computer Vision",
                        ].map((course) => (
                          <span key={course} className="tech-badge text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="text-primary font-display text-sm">{"</education>"}</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
