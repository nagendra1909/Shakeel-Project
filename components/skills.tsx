"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  LineChart, 
  Brain, 
  BarChart3, 
  PieChart,
  Terminal,
  Database,
  Flame,
  Container,
  Server,
  Factory,
  Wind,
  GitBranch,
  FileSpreadsheet,
  Github,
  Cloud
} from "lucide-react"

// Modify skills array to include icon component
const skills1 = [
  { name: "Exploratory Data Analysis", level: 95, icon: LineChart },
  { name: "Predictive Modeling", level: 80, icon: Brain },
  { name: "Business Intelligence", level: 90, icon: BarChart3 },
  { name: "Dashboarding (Power BI)", level: 95, icon: PieChart },
  // { name: "Python", level: 80, icon: Terminal },
  // { name: "SQL", level: 85, icon: Database },
  // { name: "Apache Spark", level: 60, icon: Flame },
  // { name: "HiveQL", level: 80, icon: Container },
  // { name: "Sqoop", level: 55, icon: Server },
  // { name: "Hive", level: 60, icon: Container },
  // { name: "Kafka", level: 70, icon: Factory },
  // { name: "Airflow", level: 30, icon: Wind },
]
const skills2 = [
  // { name: "Exploratory Data Analysis", level: 95, icon: LineChart },
  // { name: "Predictive Modeling", level: 80, icon: Brain },
  // { name: "Business Intelligence", level: 90, icon: BarChart3 },
  // { name: "Dashboarding (Power BI)", level: 95, icon: PieChart },
  { name: "Python", level: 80, icon: Terminal },
  { name: "SQL", level: 85, icon: Database },
  // { name: "Apache Spark", level: 60, icon: Flame },
  // { name: "HiveQL", level: 80, icon: Container },
  // { name: "Sqoop", level: 55, icon: Server },
  { name: "Hive", level: 60, icon: Container },
  // { name: "Kafka", level: 70, icon: Factory },
  // { name: "Airflow", level: 30, icon: Wind },
]
const skills3 = [
  // { name: "Exploratory Data Analysis", level: 95, icon: LineChart },
  // { name: "Predictive Modeling", level: 80, icon: Brain },
  // { name: "Business Intelligence", level: 90, icon: BarChart3 },
  // { name: "Dashboarding (Power BI)", level: 95, icon: PieChart },
  // { name: "Python", level: 80, icon: Terminal },
  // { name: "SQL", level: 85, icon: Database },
  { name: "Apache Spark", level: 60, icon: Flame },
  { name: "HiveQL", level: 80, icon: Container },
  { name: "Sqoop", level: 55, icon: Server },
  // { name: "Hive", level: 60, icon: Container },
  { name: "Kafka", level: 70, icon: Factory },
  { name: "Airflow", level: 30, icon: Wind },
]


// Add tool icons array
const tools = [
  { name: "Microsoft Excel", icon: FileSpreadsheet },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "Databricks", icon: Cloud },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Skills</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <br></br>
          <h4 className="text-center text-3xl font-bold">Data & ML</h4>
          <br></br>
          <br></br>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills1.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="mb-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium font-mono">{skill.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden skill-bar">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h4 className="text-center text-3xl font-bold">Programming and Querying</h4>
          <br></br>
          <br></br>
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills2.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="mb-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium font-mono">{skill.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden skill-bar">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h4 className="text-center text-3xl font-bold">Big Data Technologies</h4>
          <br></br>
          <br></br>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills3.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="mb-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium font-mono">{skill.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden skill-bar">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
         

          <br></br>
          <br></br>
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Other Tools</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="px-4 py-3 bg-gray-900/70 rounded-lg text-center hover:bg-gray-800/70 transition-colors group"
              >
                <div className="flex items-center justify-center gap-2">
                  <tool.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-mono text-gray-300">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
