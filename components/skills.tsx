"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Skill {
  id: number
  name: string
  icon: string
  level: number
  category: "frontend" | "backend" | "data" | "tools"
}

const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React.js", icon: "⚛️", level: 90, category: "frontend" },
  { id: 2, name: "Next.js", icon: "▲", level: 85, category: "frontend" },
  { id: 3, name: "JavaScript", icon: "JS", level: 88, category: "frontend" },
  { id: 4, name: "TypeScript", icon: "TS", level: 80, category: "frontend" },
  { id: 5, name: "HTML", icon: "🌐", level: 95, category: "frontend" },
  { id: 6, name: "CSS", icon: "🎨", level: 90, category: "frontend" },
  { id: 7, name: "Tailwind CSS", icon: "💨", level: 92, category: "frontend" },
  { id: 8, name: "Vite", icon: "⚡", level: 85, category: "frontend" },
  
  // Backend
  { id: 9, name: "Node.js", icon: "🟢", level: 88, category: "backend" },
  { id: 10, name: "Express.js", icon: "🚂", level: 85, category: "backend" },
  { id: 11, name: "Python", icon: "🐍", level: 75, category: "backend" },
  
  // Data
  { id: 12, name: "MongoDB", icon: "🍃", level: 82, category: "data" },
  { id: 13, name: "SQL", icon: "🗃️", level: 80, category: "data" },
  { id: 14, name: "Power BI", icon: "📊", level: 78, category: "data" },
  { id: 15, name: "DAX", icon: "🔢", level: 75, category: "data" },
  { id: 16, name: "Data Cleaning", icon: "🧹", level: 85, category: "data" },
  { id: 17, name: "Data Transformation", icon: "🔄", level: 83, category: "data" },
  { id: 18, name: "Data Visualization", icon: "📈", level: 87, category: "data" },
  { id: 19, name: "Data Analysis", icon: "📉", level: 80, category: "data" },
  
  // Tools
  { id: 20, name: "GitHub", icon: "🐙", level: 88, category: "tools" },
  // { id: 21, name: "AWS", icon: "☁️", level: 70, category: "tools" },
  // { id: 22, name: "Docker", icon: "🐳", level: 65, category: "tools" },
  { id: 23, name: "Web Development", icon: "🌐", level: 90, category: "tools" },
]

export default function Skills({ showAll = true }: { showAll?: boolean }) {
  const displayedSkills = showAll ? skills : skills.slice(0, 6)

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I've mastered throughout my journey as a developer and data Analyst.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {displayedSkills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: skill.id * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden h-full border border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-2">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2 mt-3">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/skills">
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}