import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/developer-headshot.png"
            alt="Lungani Thabethe"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary shadow-lg"
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground mb-6">
            Full Stack Developer
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies. Passionate about clean code, user experience, and
            innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-muted-foreground" size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
