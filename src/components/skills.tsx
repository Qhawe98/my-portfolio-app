import supabase from "../lib/supabase"
import type { SkillModel } from "../models/skillModel"
import type { SkillsCategoryModel } from "../models/skillsCategoryModel"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { useEffect, useState } from "react"

const Skills = () => {

  const [skillCategories, setSkillCategories] = useState<
    SkillsCategoryModel[]
  >([])
  const [_, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: categories, error: categoriesError }, { data: skills, error: skillsError }] =
          await Promise.all([
            supabase.from('SkillsCategories').select('*'),
            supabase.from('Skills').select('*'),
          ])

        if (categoriesError || skillsError) {
          setError(categoriesError?.message || skillsError?.message || 'Unknown error')
          return
        }

        if (categories && skills) {
          const formatted = categories.map((category: SkillsCategoryModel) => ({
            id: category.id,
            name: category.name,
            icon: category.icon,
            description: category.description,
            skills: skills
              .filter((skill: SkillModel) => skill.skillsCategoryId === category.id)
              .map((skill: SkillModel) => skill.name || "Unknown Skill"),
          }))
          setSkillCategories(formatted)
        }
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchData()
  }, [])

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
                  <h3 className="text-xl font-serif font-black text-foreground mb-6">{category.name}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.length === 0 ? (
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Unknown Skills
                      </Badge>
                    ) : (
                      category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill === "" ? "Unknown Skill" : skill}
                        </Badge>
                      ))
                    )}
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

export default Skills
