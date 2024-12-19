import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2" size={16} />
              Email Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={16} />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" size={16} />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;