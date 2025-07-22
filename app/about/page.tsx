"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A full stack developer and data analyst passionate about building
            innovative digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl border border-primary/20 shadow-xl"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 mix-blend-overlay z-10 rounded-xl"></div>
              <Image
                src="/images/muddi.png"
                alt="Mudassir Ahmed Siddiqui"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Mudassir Ahmed Siddiqui
              </h2>
              <p className="text-xl text-primary">
                Full Stack Developer & Data Analyst
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate developer with expertise in building modern web
                applications and analyzing complex data sets. My journey in
                technology began with a curiosity about how digital experiences
                are crafted, which led me to explore both front-end and back-end
                development.
              </p>
              <p>
                With a strong foundation in both development and data analysis,
                I bring a unique perspective to projects that require technical
                expertise and analytical thinking. I'm constantly learning and
                adapting to new technologies to deliver the best solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="/images/Mudassir_Ahmed_Siddiqui.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/mudassirsidiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/mudassirsidiki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                {/* <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a> */}
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-xl p-6 border border-border shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>

            <div className="space-y-6">
              <div className="border-l-2 border-primary/50 pl-4 py-1">
                <p className="text-primary font-medium">2024 - Present</p>
                <h4 className="text-lg font-semibold">
                  Assistant Manager / Research Analyst
                </h4>
                <p className="text-muted-foreground">Dalda Foods Limited</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4 py-1">
                <p className="text-primary font-medium">2022 - 2024</p>
                <h4 className="text-lg font-semibold">Data Analyst</h4>
                <p className="text-muted-foreground">
                  Australian Consulting Firm
                </p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4 py-1">
                <p className="text-primary font-medium">2020 - 2024</p>
                <h4 className="text-lg font-semibold">Bachelor of Science</h4>
                <p className="text-muted-foreground">
                  NED University of Engineering and Technology
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card rounded-xl p-6 border border-border shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Personal Interests</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Beyond coding and data analysis, I have a diverse range of
                interests that keep me inspired and balanced:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Playing and watching football – a passion I've pursued for
                  over 8 years
                </li>
                <li>
                  Watching anime and staying up to date with my favorite series
                </li>
                <li>
                  Watching documentaries and diving into interesting topics
                </li>
                <li>
                  Reading thought-provoking fiction and science-related articles
                </li>
                <li>
                  Listening to music and curating playlists for every mood
                </li>
                <li>Spending quality time with friends and family</li>
              </ul>
              <p>
                I believe that a well-rounded set of interests contributes to
                creative problem solving in my technical work.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card rounded-xl p-8 border border-border shadow-sm text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
            "I believe in creating technology that is not only functional but
            also intuitive and accessible. Every line of code should serve a
            purpose, and every project should solve a real problem."
          </p>
        </motion.div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Let's Build Something Amazing
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
