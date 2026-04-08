import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/vishvanalarajan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            aria-label="GitHub"
          >
            <Github size={50} />
          </a>
          <a 
            href="https://www.linkedin.com/in/vishva-n-122154378/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={} />
          </a>
          <a 
            href="mailto:vishvanalarajan@gmail.com"
            className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* CTA */}
        <p className="text-muted-foreground mb-6">
          Open to opportunities in <span className="text-primary">Software Engineering</span>, <span className="text-primary">AI/ML</span>, and <span className="text-primary">Computer Vision</span>
        </p>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Built with <Heart size={14} className="text-primary" /> using React & TailwindCSS
        </p>
        <p className="text-xs text-muted-foreground/50 mt-2 font-display">
          © {new Date().getFullYear()} Vishva N. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
