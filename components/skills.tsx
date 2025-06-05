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
import { FaPython } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { SiApacheairflow } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";

// Modify skills array to include icon component
const skills1 = [
  { name: "Exploratory Data Analysis", level: 100, icon: LineChart },
  { name: "Predictive Modeling", level: 100, icon: Brain },
  { name: "Business Intelligence", level: 100, icon: BarChart3 },
  { name: "Dashboarding (Power BI)", level: 100, icon: RxDashboard },

]
const skills2 = [
  // { name: "Exploratory Data Analysis", level: 95, icon: LineChart },
  // { name: "Predictive Modeling", level: 80, icon: Brain },
  // { name: "Business Intelligence", level: 90, icon: BarChart3 },
  // { name: "Dashboarding (Power BI)", level: 95, icon: PieChart },
  { name: "Python", level: 100, icon: FaPython },
  { name: "SQL", level: 100, icon: Database },
  // { name: "Apache Spark", level: 60, icon: Flame },
  // { name: "HiveQL", level: 80, icon: Container },
  // { name: "Sqoop", level: 55, icon: Server },
  { name: "Hive", level: 100, icon: Container },
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
  { name: "Apache Spark", level: 100, icon: Flame },
  { name: "HiveQL", level: 100, icon: Container },
  { name: "Sqoop", level: 100, icon: Server },
  // { name: "Hive", level: 60, icon: Container },
  { name: "Kafka", level: 100, icon: SiApachekafka },
  { name: "Airflow", level: 100, icon: SiApacheairflow },
  
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
        <motion.div className="text-center mb-16">
          <h2 className="section-title gradient-text text-5xl mb-6">Skills</h2>
          <p className="text-gray-400 text-xl">
            Here are some of the technologies I work with:
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Data & ML Section */}
          <h3 className="text-2xl font-bold mb-8 text-center">Data & ML</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
            {skills1.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-primary">
                    <skill.icon size={32} />
                  </div>
                  <span className="text-lg text-gray-200">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Programming and Querying Section */}
          <h3 className="text-2xl font-bold mb-8 text-center">Programming and Querying</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
            {skills2.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-primary">
                    <skill.icon size={32} />
                  </div>
                  <span className="text-lg text-gray-200">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Big Data Technologies Section */}
          <h3 className="text-2xl font-bold mb-8 text-center">Big Data Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
            {skills3.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-primary">
                    <skill.icon size={32} />
                  </div>
                  <span className="text-lg text-gray-200">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Tools Section */}
          <h3 className="text-2xl font-bold mb-8 text-center">Other Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-primary">
                    <tool.icon size={32} />
                  </div>
                  <span className="text-lg text-gray-200">{tool.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
