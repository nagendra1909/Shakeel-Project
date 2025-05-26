"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const stats = [
	{ value: "7+", label: "Self-Made Data Projects" },
	{
		value: "20+",
		label: "International Presentations and Conferences Delivered",
	},
	{ value: "2", label: "Hackathons / Awards Won" },
	{
		value: "3+",
		label: "Industries Explored (AgriTech, FMCG, Healthcare)",
	},
];

const Hero = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollToAbout = () => {
		const aboutSection = document.getElementById("about");
		if (aboutSection) {
			const offsetTop = aboutSection.offsetTop;
			window.scrollTo({
				top: offsetTop - 80, // Adjust for header height
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center">
			<div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0" />

			<div className="container relative z-10 pt-24 md:pt-32">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-3xl mx-auto text-center space-y-8"
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="mb-6 inline-block"
					>
						<span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
							Big Data Engineer
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="mb-8 leading-tight"
					>
						Hi, I&apos;m Shakeel Rifath  -  I am{" "}
						<span className="gradient-text">
							<TypeAnimation
								sequence={[
									"Big Data Engineer",
									1000,
									"Freelance Data Scientist",
									1000,
									"Business-Focused Analyst",
									1000,
									" ",
									1000,
								]}
								wrapper="span"
								speed={50}
								repeat={Number.POSITIVE_INFINITY}
							/>
						</span>
						.
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="mb-12 text-lg text-gray-400 max-w-2xl mx-auto space-y-6"
					>
						<span className="block">
							Every dataset has a hidden story and I love uncovering it.
						</span>
						<span className="block">
							I don't chase data for money, I do it for meaning.
						</span>
						<span className="block">
							From patient care to public safety, I turn insights into business
							impact.
						</span>
					</motion.p>

					{/* Stats Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
					>
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
								className="flex flex-col items-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50"
							>
								<span className="text-3xl font-bold text-primary mb-2">
									{stat.value}
								</span>
								<span className="text-sm text-gray-400 text-center">
									{stat.label}
								</span>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Button */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.8 }}
				className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
			>
				<Button
					variant="ghost"
					size="icon"
					className="rounded-full animate-bounce"
					onClick={scrollToAbout}
					aria-label="Scroll to About section"
				>
					<ArrowDown size={24} />
				</Button>
			</motion.div>
		</section>
	);
};

export default Hero;
