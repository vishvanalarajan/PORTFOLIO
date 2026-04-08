import { Mail, MapPin, Github, Linkedin, FileText, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Terminal-style intro */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-secondary border border-border">
          <span className="text-primary font-display text-sm">~/software-engineer</span>
          <span className="text-muted-foreground font-display text-sm animate-pulse"> _</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up font-display">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary glow-text">Vishva N</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up stagger-1 font-body leading-relaxed">
          Software Systems student specializing in building production-ready applications 
          with <span className="text-primary">AI</span>, <span className="text-primary">Computer Vision</span>, 
          and <span className="text-primary">Real-time Systems</span>. 
          Passionate about transforming complex problems into elegant solutions.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up stagger-2">
          <a 
            href="mailto:vishvanalarajan@gmail.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} />
            <span className="text-sm font-display">vishvanalarajan@gmail.com</span>
          </a>
          <span className="text-border hidden md:block">|</span>
          <a 
            href="tel:+919944286294" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={16} />
            <span className="text-sm font-display">+91 9944286294</span>
          </a>
          <span className="text-border hidden md:block">|</span>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            <span className="text-sm font-display">Perundurai, India</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up stagger-3">
          <Button variant="default" size="lg" className="gap-2" asChild>
            <a href="#projects">
              <FileText size={18} />
              View Projects
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/vishva" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://linkedin.com/in/vishvanalarajan" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
