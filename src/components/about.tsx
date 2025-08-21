import { Card, CardContent } from "./ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-center text-foreground mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Hello! I'm Alex, a passionate full-stack developer with over 5 years of experience creating digital
                solutions that make a difference. I specialize in modern web technologies and love turning complex
                problems into simple, beautiful designs.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying a good cup of coffee while sketching out my next big idea.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-serif font-black text-primary mb-2">50+</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-serif font-black text-primary mb-2">5+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <img src="/developer-multiple-monitors.png" alt="Alex working" className="rounded-lg shadow-xl w-full" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-black text-lg">AJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
