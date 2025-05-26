"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

const projects = [
	{
		id: 1,
		title: "Sales Performance Dashboard for GD Foods  ->  Jun 2023 – Dec 2023",
		description: "A data analytics project where I built a custom Power BI dashboard from scratch for GD Foods, a leading food production company. The dashboard integrated data from MySQL and Excel, providing sales performance insights across departments. This helped GD Foods enhance data transparency, predict market trends, set realistic sales goals, and drive strategic growth.",
		tags: ["Power BI", "MySQL", "Excel",],
		github: "hhttps://github.com/shakeelrifathcse/GetIt-main",
		demo: "https://get-it-now.vercel.app/",
	},
	{
		id: 2,
		title: " Enviro - Predict  Health Guard+  -> Oct 2023 – Nov 2023",
		description: "Developed an AI-driven system using IoT and data science to support travel decisions for patients with asthma and heart conditions. The system used real-time air and sound pollution data to predict future pollution levels using logistic regression and decision tree models. The research was published in an IEEE conference in 2024. ",
		tags: ["Python", "Logistic Regression", "Decision Trees", "IoT", "Open-Source Tool "],
		github: "https://github.com/shakeelrifathcse/Proto",
		demo: "https://proto-self.vercel.app/",
	},
]

const technologies = [
	{ id: "bi", label: "BI" },
	{ id: "sql", label: "SQL" },
	{ id: "python", label: "Python" },
	{ id: "ml", label: "ML" },
	{ id: "bigdata", label: "Big Data" },
	{ id: "pipeline", label: "Data Pipeline" },
	{ id: "cloud", label: "Cloud" },
	{ id: "e2e", label: "E2E" },
	{ id: "al", label: "ALL" },
]

interface TechProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

type TechProjectsMap = {
  [key: string]: TechProject[];
}

const techProjects: TechProjectsMap = {
	bi: [
		{
			title: "GD Foods Sales Insights",
			description: "Unlock sales performance like never before.This Power BI dashboard offers a deep dive into GD Foods' sales trends, product performance, and regional growth. With intuitive visuals and real-time data insights, it empowers strategic decisions and fuels business expansion.",
			image: "/bi1.jpg",
			tags: ["Power BI", "DAX", "Power Query", "Data Modeling", "Sales Analytics", "Data Visualization"],
			github: "https://github.com/youruser/bi-project",
			demo: "https://demo-url.com"
		},
		{
			title: "Winfix HR Dashboard",
			description: "Revolutionizing HR analytics with clarity.The Winfix HR Dashboard simplifies workforce data, helping HR teams track employee metrics, hiring patterns, and retention rates. Built in Power BI, it brings actionable insights that enhance organizational efficiency and team satisfaction.",
			image: "/bi2.jpg",
			tags: ["Power BI", "DAX", "Power Query", "HR Analytics", "KPI Tracking", "Interactive Dashboard Design"],
			github: "https://github.com/youruser/sales-analytics",
			demo: "https://demo-url.com"
		}
	],
	sql: [
		{
			title: "Instagram Post Analytics",
			description: "This project is an analysis of three months of Instagram data compiled between June 1, 2022 and August 31, 2022 studying the effects of a variety of variables, time of day, part of the week, post type, and content type, and the result of these on two key social media metrics, accounts reached and post engagements. This analysis was featured in an article written by my colleague naveen.",
			image: "/sql.jpg",
			tags: ["MySQL", "PowerBI",  "Speadsheets"],
			github: "https://github.com/youruser/ml-pipeline",
			demo: "https://demo-url.com"
		},
		
	],
	python: [
		{
			title: "Salary Prediction in Tech Jobs",
			description: "How much should someone earn based on level education and experience? Despite the fact that salary may not always be the primary motivation for accepting a job offer or staying in a role. The objective is to make accurate salary predictions based on existing known salaries by job and location. As a result, the model could help companies and existing/future employees to negotiate more competitive payments. For leaders and recruiters, salary is a matter from company success (and budget) perspective. For employees and job seekers, it is important for reasons that go beyond employment.",
			image: "/python.jpg",
			tags: ["Python, Data Wrangling", "Data Analysis","Data Visualization", "Matplotlib" ,"Seaborn", "Machine Learning"],
			github: "https://github.com/youruser/ml-pipeline",
			demo: "https://demo-url.com"
		},
		
	],
	ml: [
		{
			title: "An Integrated Development Of IoT Based Machine Learning For Data-Driven Travel Recommendations",
			description: "It is a predictive modelling and recommendation system that continuously monitors environmental conditions, including air quality, noise pollution, and indoor pollutants. It uses real-time data from a network of sensors and integrates this with patient health records to provide personalized alerts and recommendations. These alerts help patients avoid potential health risks by making informed choices about their travel plans and daily activities.",
			image: "/ml.jpg",
			tags: ["Python", "Data Wrangling", "EDA", "Data Visualization", "Matplotlib", "Pandas", "Numpy", "Logistic Regression", "Decision Tree"],
			github: "https://github.com/youruser/ml-pipeline",
			demo: "https://demo-url.com"
		},
		
	],
	al: [
		{
			title: "GD Foods Sales Insights",
			description: "Unlock sales performance like never before.This Power BI dashboard offers a deep dive into GD Foods' sales trends, product performance, and regional growth. With intuitive visuals and real-time data insights, it empowers strategic decisions and fuels business expansion.",
			image: "/bi1.jpg",
			tags: ["Power BI", "DAX", "Power Query", "Data Modeling", "Sales Analytics", "Data Visualization"],
			github: "https://github.com/youruser/bi-project",
			demo: "https://demo-url.com"
		},
		{
			title: "Winfix HR Dashboard",
			description: "Revolutionizing HR analytics with clarity.The Winfix HR Dashboard simplifies workforce data, helping HR teams track employee metrics, hiring patterns, and retention rates. Built in Power BI, it brings actionable insights that enhance organizational efficiency and team satisfaction.",
			image: "/bi2.jpg",
			tags: ["Power BI", "DAX", "Power Query", "HR Analytics", "KPI Tracking", "Interactive Dashboard Design"],
			github: "https://github.com/youruser/sales-analytics",
			demo: "https://demo-url.com"
		},
		{
			title: "Instagram Post Analytics",
			description: "This project is an analysis of three months of Instagram data compiled between June 1, 2022 and August 31, 2022 studying the effects of a variety of variables, time of day, part of the week, post type, and content type, and the result of these on two key social media metrics, accounts reached and post engagements. This analysis was featured in an article written by my colleague naveen.",
			image: "/sql.jpg",
			tags: ["MySQL", "PowerBI",  "Speadsheets"],
			github: "https://github.com/youruser/ml-pipeline",
			demo: "https://demo-url.com"
		},
		{
			title: "Salary Prediction in Tech Jobs",
			description: "How much should someone earn based on level education and experience? Despite the fact that salary may not always be the primary motivation for accepting a job offer or staying in a role. The objective is to make accurate salary predictions based on existing known salaries by job and location. As a result, the model could help companies and existing/future employees to negotiate more competitive payments. For leaders and recruiters, salary is a matter from company success (and budget) perspective. For employees and job seekers, it is important for reasons that go beyond employment.",
			image: "/python.jpg",
			tags: ["Python, Data Wrangling", "Data Analysis","Data Visualization", "Matplotlib" ,"Seaborn", "Machine Learning"],
			github: "https://github.com/youruser/ml-pipeline",
			demo: "https://demo-url.com"
		},
		{
			title: "An Integrated Development Of IoT Based Machine Learning For Data-Driven Travel Recommendations",
			description: "It is a predictive modelling and recommendation system that continuously monitors environmental conditions, including air quality, noise pollution, and indoor pollutants. It uses real-time data from a network of sensors and integrates this with patient health records to provide personalized alerts and recommendations. These alerts help patients avoid potential health risks by making informed choices about their travel plans and daily activities.",
			image: "/ml.jpg",
			tags: ["Python", "Data Wrangling", "EDA", "Data Visualization", "Matplotlib", "Pandas", "Numpy", "Logistic Regression", "Decision Tree"],
			github: "https://github.com/youruser/ml-pipeline",
			demo: "https://demo-url.com"
		},

	],
	// Add more technology sections as needed...
}

const Projects = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })

	// Add state for selected technology
	const [selectedTech, setSelectedTech] = useState("all")

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	}

	const filteredProjects = selectedTech === "all" ? projects : projects.filter(project => project.tags.includes(selectedTech))

	return (
		<section className="section bg-gray-900/30 relative">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="section-title gradient-text">OTHER - PROJECTS</h2>
				</div>

				{/* <motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
				>
					{projects.map((project) => (
						<motion.div key={project.id} variants={itemVariants}>
							<Card className="h-full flex flex-col bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 project-card">
								<CardContent className="flex-grow p-6">
									<h3 className="text-xl font-bold mb-3 text-primary font-mono">{project.title}</h3>
									<p className="text-gray-300 mb-6">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag, index) => (
											<span
												key={index}
												className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
											>
												{tag}
											</span>
										))}
									</div>
								</CardContent>
								<CardFooter className="border-t border-gray-800 p-6">
									<div className="flex gap-4">
										<Button variant="outline" size="sm" className="rounded-full group" asChild>
											<Link href={project.github} target="_blank" rel="noopener noreferrer">
												<Github size={16} className="mr-2 group-hover:text-primary transition-colors" />
												<span className="group-hover:text-primary transition-colors">GitHub</span>
											</Link>
										</Button>
										<Button size="sm" className="rounded-full bg-primary hover:bg-primary/90" asChild>
											<Link href={project.demo} target="_blank" rel="noopener noreferrer">
												<ExternalLink size={16} className="mr-2" />
												Live Demo
											</Link>
										</Button>
									</div>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div> */}

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-center mt-12"
				>
					<p className="text-gray-300">
						To know more about my work, check my{" "}
						<Link
							href="https://github.com/shakeelrifathcse"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							GitHub
						</Link>
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="max-w-6xl mx-auto mt-32"
				>
					<div className="text-center mb-12">
						<h2 className="section-title gradient-text">Explore Portfolio by Technology</h2>
					</div>

					<div className="flex flex-wrap justify-center gap-3 mb-16">
						{technologies.map((tech) => (
							<Button
								key={tech.id}
								variant={selectedTech === tech.id ? "default" : "outline"}
								size="sm"
								className={cn(
									"rounded-full",
									selectedTech === tech.id 
										? "bg-primary text-primary-foreground" 
										: "hover:text-primary hover:border-primary transition-colors"
								)}
								onClick={() => setSelectedTech(tech.id)}
							>
								{tech.label}
							</Button>
						))}
					</div>

					<AnimatePresence mode="wait">
						{selectedTech !== "all" && techProjects[selectedTech] && (
							<motion.div
								key={selectedTech}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
								className="grid gap-8"
							>
								{techProjects[selectedTech].map((project, index) => (
									<Card 
										key={index}
										className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-500 project-card"
									>
										<div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
											<div className="relative aspect-video overflow-hidden rounded-lg group">
												{project.image && (
													<Image
														src={project.image}
														alt={project.title}
														width={600}
														height={400}
														className="object-cover transition-transform duration-500 group-hover:scale-105"
													/>
												)}
											</div>

											<div className="flex flex-col justify-center">
												<h3 className="text-2xl font-bold mb-4 text-primary font-mono">
													{project.title}
												</h3>
												<p className="text-gray-300 mb-6">
													{project.description}
												</p>

												<div className="flex flex-wrap gap-2 mb-6">
													{project.tags.map((tag, tagIndex) => (
														<span
															key={tagIndex}
															className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
														>
															{tag}
														</span>
													))}
												</div>

												<div className="flex flex-wrap gap-4">
													<Button variant="outline" size="sm" className="rounded-full group" asChild>
														<Link href={project.github} target="_blank" rel="noopener noreferrer">
															<Github size={16} className="mr-2 group-hover:text-primary transition-colors" />
															<span className="group-hover:text-primary transition-colors">View as Stakeholder</span>
														</Link>
													</Button>
													<Button size="sm" className="rounded-full bg-primary hover:bg-primary/90" asChild>
														{/* <Link href={project.demo} target="_blank" rel="noopener noreferrer">
															<ExternalLink size={16} className="mr-2" />
															Live Demo
														</Link> */}
														<p>View as Technical Reviewer</p>
													</Button>
												</div>
											</div>
										</div>
									</Card>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	)
}

export default Projects
