import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-black mb-4">Lungani Thabethe</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Full Stack Developer passionate about creating digital experiences that make a difference.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
              Made with <Heart className="text-accent" size={16} /> by Lungani Thabethe
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">© 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
