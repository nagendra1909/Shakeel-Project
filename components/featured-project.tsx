"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"

const FeaturedProject = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Featured Project</h2>
          </div>

          <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-500 project-card">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video overflow-hidden rounded-lg group"
              >
                <Image
                  src="/ml.jpg"
                  alt="Project Result Page"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  {/* <p className="text-white text-sm font-medium">name here</p> */}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col justify-center"
                ref={ref}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary font-mono">An Integrated Development Of IoT Based Machine Learning For Data-Driven Travel Recommendations</h3>
                <p className="text-gray-300 mb-6">
                It is a predictive modelling and recommendation system that continuously monitors environmental conditions, including air quality, noise pollution, and indoor pollutants. It uses real-time data from a network of sensors and integrates this with patient health records to provide personalized alerts and recommendations. These alerts help patients avoid potential health risks by making informed choices about their travel plans and daily activities.


                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Python</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Data Wrangling
                  EDA</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">EDA</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Data Visualization</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Matplotlib</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Pandas</span>
                  
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Numpy</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Logistic Regression</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Decision Tree</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm" className="rounded-full group" asChild>
                    <Link href="https://github.com/shakeelrifathcse/FrameForge---Code" target="_blank" rel="noopener noreferrer">
                      {/* <Github size={16} className="mr-2 group-hover:text-primary transition-colors" /> */}
                      <ExternalLink size={16} className="mr-2" />
                      <span className="group-hover:text-primary transition-colors">View as Stakeholder </span>
                    </Link>
                  </Button>
                  <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="https://make-ui.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View as Technical Reviewer
                    </Link>
                    {/* <p>View as Technical Reviewer</p> */}
                  </Button>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
    
  )
}

export default FeaturedProject
