import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

import projectWildguard from "@/assets/project-wildguard.jpg";
import projectCrashDetection from "@/assets/project-crash-detection.jpg";
import projectResumeScreening from "@/assets/project-resume-screening.jpg";
import projectRockfall from "@/assets/project-rockfall.jpg";

const projects = [
  {
    title: "Aerial WildGuard: Drone-Based Wildlife Monitoring",
    description: "Developed a real-time drone surveillance system to monitor human-wildlife conflict zones. Implemented object detection to identify wildlife and alert local authorities proactively.",
    impact: "Enabled real-time monitoring with automated wildlife detection and proactive alerts",
    technologies: ["Python", "OpenCV", "Drone APIs", "YOLO"],
    category: "Computer Vision",
    image: projectWildguard,
  },
  {
    title: "Crash Detection & Alert System",
    description: "Built an automated crash detection system using computer vision and IoT devices. Integrated real-time alerts via Twilio SMS and Telegram when accidents are detected.",
    impact: "Achieved reliable and accurate crash monitoring with instant emergency notifications",
    technologies: ["Python", "OpenCV", "Twilio API", "Telegram API", "IoT"],
    category: "IoT / CV",
    image: projectCrashDetection,
  },
  {
    title: "Smart Resume Screening System",
    description: "Built an automated resume screening application using Python and NLP techniques to extract skills, experience, and keywords from resumes.",
    impact: "Streamlined recruitment process and candidate shortlisting with automated analysis",
    technologies: ["Python", "NLP", "Flask", "Machine Learning"],
    category: "AI / NLP",
    image: projectResumeScreening,
  },
  {
    title: "Rockfall Prediction System",
    description: "Developed a predictive model to identify potential rockfall hazards using machine learning algorithms. Analyzed geological data and environmental parameters for early-warning predictions.",
    impact: "Enabled proactive hazard mitigation through predictive analytics",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    category: "ML / Analytics",
    image: projectRockfall,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-display text-sm mb-2 block">{"<projects>"}</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-ready systems combining AI, IoT, and web technologies to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="bg-card border border-border rounded-lg overflow-hidden card-hover animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {/* Category badge */}
                <span className="absolute top-4 left-4 inline-block px-3 py-1 text-xs font-display text-primary bg-background/80 backdrop-blur-sm rounded-full border border-primary/20">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact highlight */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                  <p className="text-sm text-primary font-medium">
                    ⚡ {project.impact}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-border">
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="text-primary font-display text-sm">{"</projects>"}</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
