import { useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"
import supabase from "../lib/supabase"
import type { AboutModel } from "../models/aboutModel"

const About = () => {

  const [aboutData, setAboutData] = useState<AboutModel | null>(null)

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const { data, error } = await supabase
          .from("About")
          .select("*")
          .order("createdDate", { ascending: false });

        if (error) {
          console.error("Query Error:", error);
          return;
        }

        if (data && data.length > 0) {
          setAboutData(data[0] as AboutModel);
        }
      } catch (err) {
        console.error("Error fetching about data:", err);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-center text-foreground mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {aboutData?.description || "No description available."}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-serif font-black text-primary mb-2">{aboutData?.projectsCompleted}</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-serif font-black text-primary mb-2">{aboutData?.yearsExperience}</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <img src={aboutData?.image} alt="Lungani's picture" className="rounded-lg shadow-xl w-full h-[50%]" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-black text-lg">LT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
