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
		title: "GetIT-NOW - AI Career Assistant",
		description: "A full-stack web application designed to connect students with freelance opportunities, helping them build portfolios and gain real-world experience. The platform fosters a community where students can showcase their skills and get paid for meaningful work.",
		tags: ["React.js", "Next.js", "OpenAI", "Tailwind CSS", "Firebase", "PostgreSQL"],
		github: "hhttps://github.com/shakeelrifathcse/GetIt-main",
		demo: "https://get-it-now.vercel.app/",
	},
	{
		id: 2,
		title: "Enhanced Virtual Shopping Experience",
		description: "An AI-powered shopping platform offering a next-gen retail experience. Users can enjoy Virtual Try-On, Smart Sizing for perfect fits, Store Locator services, real-time Price Analytics, and even create personalized products through Custom Design — all supported by a fast, smart search feature for seamless browsing.",
		tags: ["React + Vite", "PostgreSQL", "Firebase", "TypeScript"],
		github: "https://github.com/shakeelrifathcse/Proto",
		demo: "https://proto-self.vercel.app/",
	},
]

const technologies = [
	{ id: "all", label: "ALL" },
	{ id: "bi", label: "BI" },
	{ id: "sql", label: "SQL" },
	{ id: "python", label: "Python" },
	{ id: "ml", label: "ML" },
	{ id: "bigdata", label: "Big Data" },
	{ id: "pipeline", label: "Data Pipeline" },
	{ id: "cloud", label: "Cloud" },
	{ id: "e2e", label: "E2E" },
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
			title: "Business Intelligence Dashboard",
			description: "Interactive BI dashboard with real-time data visualization and analytics capabilities.",
			image: "/wire.png",
			tags: ["Power BI", "Tableau", "SQL", "Data Analysis"],
			github: "https://github.com/youruser/bi-project",
			demo: "https://demo-url.com"
		},
		{
			title: "Sales Analytics Platform",
			description: "Comprehensive sales analytics platform with predictive modeling and reporting.",
			image: "/sales-analytics.png",
			tags: ["Power BI", "Python", "ML", "Data Analysis"],
			github: "https://github.com/youruser/sales-analytics",
			demo: "https://demo-url.com"
		}
	],
	ml: [
		{
			title: "Machine Learning Pipeline",
			description: "End-to-end ML pipeline for data processing and model deployment.",
			image: "/ml-pipeline.png",
			tags: ["Python", "TensorFlow", "scikit-learn", "MLOps"],
			github: "https://github.com/youruser/ml-pipeline",
			demo: "https://demo-url.com"
		},
		{
			title: "AI Image Recognition",
			description: "Real-time image recognition system using deep learning.",
			image: "/ai-image.png",
			tags: ["Python", "PyTorch", "OpenCV", "Deep Learning"],
			github: "https://github.com/youruser/ai-image",
			demo: "https://demo-url.com"
		}
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
					<h2 className="section-title gradient-text">Other Projects</h2>
				</div>

				<motion.div
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
				</motion.div>

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
