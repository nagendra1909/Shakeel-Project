"use client"

import {
  Home,
  User,
  BookOpen,
  Briefcase,
  Layers,
  Mail
} from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: BookOpen },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
]

const Footer = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Map all project-related sections to 'projects'
      const sectionMap = [
        { id: "about", section: "about" },
        { id: "projects", section: "projects" },
        { id: "featured-project", section: "projects" },
        { id: "other-projects", section: "projects" },
        { id: "project-insights", section: "projects" },
        { id: "skills", section: "skills" },
        { id: "experience", section: "experience" },
        { id: "contact", section: "contact" },
      ]
      const scrollPosition = window.scrollY + 100
      let found = false
      for (const { id, section } of sectionMap) {
        const element = document.getElementById(id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            found = true
            break
          }
        }
      }
      if (!found && window.scrollY < 100) setActiveSection("home")
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveSection("home")
      return
    }
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50">
      <div className="container max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-background/80 border border-border rounded-full px-4 py-2">
          <nav className="flex justify-center">
            <ul className="flex items-center justify-center gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:-translate-y-1 ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer
