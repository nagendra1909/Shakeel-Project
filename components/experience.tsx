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
                <h3 className="text-xxl font-bold">Big Data Engineer</h3>
              </div>

              <div className="flex items-center mb-6 text-gray-400 text-sm">
                <CalendarDays size={16} className="mr-2" />
                <span>NexTurn |  2024 - Present</span>
              </div>

              <div className="p-6 bg-voilet rounded-lg shadow-md">
  <ul className="list-disc list-inside space-y-4">
    <li>
      <span className="font-bold">Role : </span> Big Data Engineer.
    </li>
    <li>
      <span className="font-bold">Tech : </span> HiveQL, Spark, HDFS, Databricks.
    </li>
    <li>
      <span className="font-bold">Work : </span> Built scalable pipelines to ingest, process & query enterprise datasets.
    </li>
    <li>
      <span className="font-bold">Tech :</span> Python, Web Scraping, ML (planned).
    </li>
    <li>
      <span className="font-bold">Goal :</span> Predict and alert high-risk zones in real-time.
    </li>
    
  </ul>
              </div>

            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 project-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-primary">
                <Briefcase size={28} className="mr-2" />
                <h3 className="text-xxl font-bold">Data Analyst Intern</h3>
              </div>

              <div className="flex items-center mb-6 text-gray-400 text-sm">
                <CalendarDays size={16} className="mr-2" />
                <span>FMCG Sales Dashboard for Retail Chain  |  2023</span>
              </div>

              <div className="p-6 bg-voilet rounded-lg shadow-md">
  <ul className="list-disc list-inside space-y-4">
    <li>
      <span className="font-bold">Role : </span> Data Analyst Intern
    </li>
    <li>
      <span className="font-bold">Tools :</span> Power BI, Python, Excel.
    </li>
    <li>
      <span className="font-bold">Impact : </span>  Helped retail chain double its sales by uncovering product-level insights.
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
                <span>Hindustan Institute of Technology and Science Tamil Nadu | Nov 2020 - 2024</span>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>B.Tech in Computer Science & Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Relevant Coursework: Programming ,Data Structures, Algorithms, Database Management, Machine Learning, DataScience .
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
