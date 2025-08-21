import { supabase } from "../lib/supabase"
import type { SkillsCategoryModel } from "../models/skills"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { useEffect, useState } from "react"

export const Skills = () => {

  const [skillsCategories, setSkillsCategories] = useState<SkillsCategoryModel[]>([])
  const [_, setResponseError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from('SkillsCategories')
        .select('*')

      if (error) {
        console.error("Error fetching skills:", error.message)
        setResponseError(error.message)
      }

      if (data) {
        console.log("Fetched data:", data)
        setSkillsCategories(data)
      }
    }

    fetchSkills()
  }, [])


  const skillCategories = skillsCategories.map(category => ({
    title: category.name,
    icon: category.icon,
    skills: [],
  }))

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-center text-foreground mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-serif font-black text-foreground mb-6">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
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
