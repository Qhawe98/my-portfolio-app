"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import sendCustomEmail from "../lib/emailjs"
import supabase from "../lib/supabase"
import type { ContactModel } from "../models/ContactModel"

const Contact = () => {
  const [formData, setFormData] = useState({
    nameFrom: "",
    emailFrom: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendEmailError, setSendEmailError] = useState<string | null>(null);
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
          number: latestContact.number ?? "No Phone Number Set",
          location: latestContact.location ?? "No Location Set",
        } as ContactModel)
      }
    }

    fetchContactData()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSendEmailError(null)

    if (!navigator.onLine) {
      setSendEmailError("No network connection. Please check your internet and try again.")
      setIsSubmitting(false)
      return
    }

    try {
      const sendResponse = await sendCustomEmail(formData)

      if (sendResponse?.status === 200) {
        setSuccess(true)
        setFormData({
          nameFrom: "",
          emailFrom: "",
          subject: "",
          message: "",
        })
      }
    } catch (err: any) {
      setSendEmailError(err.message || "Unknown error")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  useEffect(() => {
    if (sendEmailError) {
      const timer = setTimeout(() => {
        setSendEmailError(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [sendEmailError])

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-center text-foreground mb-16">Get In Touch</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-black text-foreground mb-4">{contactInfo?.name || "Let's Work Together"}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {contactInfo?.description || "Feel free to reach out for any inquiries or collaborations. I'm always open to discussing new projects and opportunities."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-muted-foreground">{contactInfo?.email || "No Email Set At The Moment"}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <p className="text-muted-foreground">{contactInfo?.number || "No Phone Number Set At The Moment"}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">{contactInfo?.location || "No Location Set At The Moment"}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif font-black text-foreground">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                {success && (
                  <div className="mb-4 p-3 rounded bg-green-100 text-green-800 text-sm">
                    Email sent successfully!
                  </div>
                )}
                {sendEmailError && (
                  <div className="mb-4 p-3 rounded bg-red-100 text-red-800 text-sm">
                    {sendEmailError}
                  </div>
                )}
                <form
                  onSubmit={async (e) => { handleSubmit(e) }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="nameFrom"
                        placeholder="Your Name"
                        value={formData.nameFrom}
                        onChange={handleChange}
                        required
                        className="bg-input border-border"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Input
                        name="emailFrom"
                        type="email"
                        placeholder="Your Email"
                        value={formData.emailFrom}
                        onChange={handleChange}
                        required
                        className="bg-input border-border"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-input border-border resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin mr-2 h-4 w-4 text-accent-foreground" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
