import { Github, Linkedin, Mail, Heart } from "lucide-react"
import type { ContactModel } from "../models/contactModel";
import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const [contactInfo, setContactInfo] = useState<ContactModel | null>(null)

  useEffect(() => {
    const fetchContactData = async () => {
      const { data, error } = await supabase
        .from("Contacts")
        .select("*")
        .order("createdDate", { ascending: false })

      if (error) {
        console.error("Error fetching contact data:", error)
        return
      }

      const latestContact: ContactModel = data?.[0]
      if (latestContact) {
        setContactInfo({
          email: latestContact.email ?? "No Email Set",
          github: latestContact.github ?? "",
          linkedIn: latestContact.linkedIn ?? "",
          number: latestContact.number ?? "No Phone Number Set",
          location: latestContact.location ?? "No Location Set",
        } as ContactModel)
      }
    }

    fetchContactData()
  }, [])

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-black mb-4">Lungani Thabethe</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Web and Mobile Developer who loves building digital experiences that have a real impact.
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
                <a href={contactInfo?.github} target="_blank" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Github size={24} />
                </a>
                <a href={contactInfo?.linkedIn} target="_blank" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={"mailto:"+contactInfo?.email} target="_blank" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
              Made with <Heart className="text-accent" size={16} /> by Lungani Thabethe
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">© {"2025 - " + currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
