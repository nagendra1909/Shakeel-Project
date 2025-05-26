"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Briefcase, Award } from "lucide-react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section bg-gray-900/30 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Experience & Education</h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 project-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-primary">
                <Briefcase size={28} className="mr-2" />
                <h3 className="text-xxl font-bold">Responsibilities & Achievements</h3>
              </div>

              <div className="flex items-center mb-6 text-gray-400 text-sm">
                <CalendarDays size={16} className="mr-2" />
                <span>IIITDM Kancheepuram |  2022 - Present</span>
              </div>

              <div className="p-6 bg-voilet rounded-lg shadow-md">
  <ul className="list-disc list-inside space-y-4">
    <li>
      <span className="font-bold">Lead Developer, Placement Cell IIITDM Kancheepuram:<br></br></span> Developed and maintained the placement portal, improving student-employer interaction efficiency and automating key placement processes.
    </li>
    <li>
      <span className="font-bold">Web Developer, System Coding Club IIITDM Kancheepuram:<br></br></span> Built and maintained the club’s website to support student tech initiatives, integrating interactive features and optimized UI design.
    </li>
    <li>
      <span className="font-bold">Placement Cell Coordinator, IIITDM Kancheepuram:<br></br></span> Coordinated campus recruitment, liaised with companies, and organized skill development workshops to enhance student placement opportunities.
    </li>
    <li>
      <span className="font-bold">BITS Hyderabad Full-Stack Hackathon:<br></br></span> Ranked in the Top 10 position out of 700 teams in a 20-hour competition, showcasing full-stack development (React.js, Node.js), problem-solving, and teamwork.
    </li>
    <li>
      <span className="font-bold">Startup Culture Intern, Made-IT Innovation Foundation:<br></br></span> Successfully completed an immersive program on startup culture, gaining practical skills in entrepreneurship, business development, and innovation.
    </li>
    <li>
      <span className="font-bold">Senior Cadet, National Cadet Corps (NCC):<br></br></span> Earned NCC ‘B’ and ‘C’ certifications with distinction, showcasing leadership, discipline, teamwork, and resilience through training programs and camps.
    </li>
  </ul>
              </div>

            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 project-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-primary">
                <Award size={20} className="mr-2" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="flex items-center mb-6 text-gray-400 text-sm">
                <CalendarDays size={16} className="mr-2" />
                <span>IIITDM Kancheepuram, Chennai, Tamil Nadu | Nov 2022 – June 2026</span>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>B.Tech in Computer Science and Manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development, Introduction to DataScience
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 project-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-primary">
                <Award size={20} className="mr-2" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Udemy: Full Stack Web Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>NPTEL: Cloud Computing</span>
                </li>
              </ul>
            </CardContent>
          </Card> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
