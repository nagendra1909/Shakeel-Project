"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { TypeAnimation } from 'react-type-animation' // Make sure to import this

// Add a flutter animation keyframe to your globals.css
const flutterAnimation = {
  initial: { 
    transform: "translateY(0px) scale(1)" 
  },
  animate: {
    transform: [
      "translateY(0px) scale(1)",
      "translateY(-10px) scale(1.01)",
      "translateY(0px) scale(1)"
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const roles = [
  'Big Data Engineer',
  500, // Delay in ms
  'Freelance Data Scientist',
  500,
  'Business-Focused Analyst',
  500,
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section bg-gray-900/30 relative">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title gradient-text">About Me</h2>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
              <motion.div
                initial="initial"
                animate="animate"
                variants={flutterAnimation}
              >
                <Card className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 p-1 hover:border-primary/40 transition-colors duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/Profile.jpeg"
                      alt="T Shakeel Rifath"
                      width={250}
                      height={250}
                      className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Card>
              </motion.div>
              
              <div className="text-center md:text-left">
                <TypeAnimation
                  sequence={roles}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  className="text-lg font-mono text-primary"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-6 text-lg text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
Hi, I’m Shakeel Rifath — Big Data Engineer at NexTurn with a strong passion for data science
and business transformation. I specialize in building data pipelines, dashboards, and machine
learning models that help businesses make smarter decisions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
Alongside my full-time role, I’m open to freelance projects in Data Science, Analytics, and Big
Data. I have assisted retail brands in increasing their sales through analytics and published
research focused on enabling data-driven decisions for asthma and heart patients.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                If you're looking for someone who understands both the tech and the business side of data —
                let's connect.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="pt-4"
              >
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">
                    <span className="font-mono">B.Tech CS </span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">
                    <span className="font-mono">IIITDM Kancheepuram</span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">
                    <span className="font-mono">2022 - 2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
