import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://ogiextpgimoisgrotajn.supabase.co/storage/v1/object/public/Images/lungani_headshot_1.jpg"
            alt="Lungani Thabethe"
            className="w-35 h-70 rounded-full mx-auto mb-8 border-4 border-primary shadow-lg rotate-10"
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground mb-6">
            Software Engineer & Web Developer
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I build digital solutions using modern tech. I care about writing clean code, creating smooth user experiences, and coming up with practical, innovative ideas.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Qhawe98" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/lunganithabethe/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:lunganiofficial@gmail.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
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
