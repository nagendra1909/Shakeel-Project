"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section bg-gray-900/30 relative">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            I'm currently looking for Full-Time opportunities. If you have a
            position that matches my skills, or if you just want to say hi, feel
            free to reach out!
          </p>

          <Card className="bg-gray-900/50 border-gray-800 mb-10 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              {/* Increased gap and adjusted responsive layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
                {/* Email Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center justify-center md:justify-start gap-4"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      Email
                    </h3>
                    <Link
                      href="mailto:shakeelrifathcse@gmail.com"
                      className="text-white hover:text-primary transition-colors text-sm break-all"
                    >
                      shakeelrifathcse@gmail.com
                    </Link>
                  </div>
                </motion.div>

                {/* Phone Section - Apply same changes to other sections */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center md:justify-start gap-4"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      Phone
                    </h3>
                    <Link
                      href="tel:+918608046140"
                      className="text-white hover:text-primary transition-colors text-sm"
                    >
                      +91 8608046140
                    </Link>
                  </div>
                </motion.div>

                {/* WhatsApp Section - Apply same changes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center justify-center md:justify-start gap-4"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      WhatsApp
                    </h3>
                    <Link
                      href="https://wa.me/918608046140"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors text-sm"
                    >
                      Chat on WhatsApp
                    </Link>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full group"
                  asChild
                >
                  <Link
                    href="https://github.com/shakeelrifathcse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      size={18}
                      className="mr-2 group-hover:text-primary transition-colors"
                    />
                    <span className="group-hover:text-primary transition-colors">
                      GitHub
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full group"
                  asChild
                >
                  <Link
                    href="https://www.linkedin.com/in/shakeelrifath/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={18}
                      className="mr-2 group-hover:text-primary transition-colors"
                    />
                    <span className="group-hover:text-primary transition-colors">
                      LinkedIn
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/50">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span> Copyright © {new Date().getFullYear()} Shakeel Rifath - All Rights Reserved.</span>
            <span className="hidden sm:inline">       </span>
            <span>❤️Built with passion, powered by data </span>
          </div>
          <nav>
            <ul className="flex items-center gap-4">
              {/* <li>
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Contact;
