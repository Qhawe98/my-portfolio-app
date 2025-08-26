import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useEffect, useState } from "react"
import supabase from "../lib/supabase"
import type { ErrorModel } from "../models/errorModel"
import type { ExperienceModel } from "../models/experient"

const Experience = () => {

  const [experience, setExperience] = useState<ExperienceModel[]>([])
  const [_, setError] = useState<ErrorModel>({ message: "", status: undefined })

  const formatMonthYear = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }


  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const { data, error } = await supabase
          .from('ExperienceHistory')
          .select('*')
          .order('startDate', { ascending: false })

        if (error) {
          throw console.error('Error fetching experience data:', error)
        }

        if (data) {
          setExperience(data as ExperienceModel[])
          setError({ message: "", status: undefined })
        }
      } catch (error: any) {
        setError(error?.message)
      }
    }

    fetchExperience()
  }, [])

  const experiences = experience.map((exp) => ({
    title: exp.name || "Unknown Title",
    company: exp.employer || "Unknown Company",
    period: exp.isPresent ? `${formatMonthYear(exp.startDate)} - Present` : `${formatMonthYear(exp.startDate)} - ${formatMonthYear(exp.endDate)}`,
    description: exp.description || "No description available.",
    technologies: exp.skills ? exp.skills : ['Not specified'],
  }))

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-center text-foreground mb-16">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl font-serif font-black text-foreground">{exp.title ?? 'No Specified'}</CardTitle>
                    <Badge variant="outline" className="border-primary text-primary w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium text-accent">{exp.company ?? 'No Specified'}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{exp.description ?? 'No Specified'}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {tech ?? 'No Specified'}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
