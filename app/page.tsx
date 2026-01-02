"use client"

import { motion } from "framer-motion"
import { ProfileCard } from "@/components/profile-card"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const techStack = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
]

const projects = [
  {
    title: "fframess",
    description:
      "A creative platform dealing with collaborative art tools. Built with React, Node.js, and WebGL for real-time collaborative experiences.",
    website: "https://www.fframess.com",
    github: "https://github.com/camxus/xpegdrop_frontend",
  },
  {
    title: "fframess Backend",
    description:
      "Express.js backend for fframess platform with AWS Cognito authentication and Dropbox integration. Includes endpoints for user authentication, project management, and public project sharing. Demonstrates backend proficiency, API design, and database schema implementation.",
    website: null,
    github: "https://github.com/camxus/xpegdrop_backend",
  },
  {
    title: "SigTech Platform",
    description:
      "Contributed to the platform development at SigTech, focusing on frontend architecture and data visualization components.",
    website: "https://sigtech.com",
    github: null,
  },
  {
    title: "Spotify to Apple Music Conversion Tool",
    description:
      "A React-based web application that allows users to seamlessly convert Spotify tracks to Apple Music. Features a user-friendly Home component, Spotify API integration, Apple Music API integration, and an optional Apple Shortcut for automation. Highlights skills in web development, API integration, state management, and user experience design.",
    website: "https://spotify-to-applemusic.vercel.app/",
    github: "https://github.com/camxus/SPOTIFY_TO_APPLE_MUSIC",
  },
  {
    title: "Fense Trivia Game",
    description:
      "An interactive quiz game with multiple categories, real-time input validation, and dynamic feedback inspired by Wordle. Built with React/Next.js, TypeScript, Tailwind CSS/NativeWind, Framer Motion, and custom hooks for audio, input, and game logic. Supports responsive layout, keyboard navigation, and multiplayer-ready architecture via Socket.IO.",
    website: "https://fense-trivia-game.vercel.app/",
    github: "https://github.com/camxus/FENSE-TRIVIA-GAME",
  },
  {
    title: "DearRay",
    description:
      "A Therapist Matchmaker service connecting users with therapists. Features a full backend and frontend stack with authentication, project management, and user data handling.",
    website: "https://app.dearray.life",
    github: "https://github.com/DearRayApp/",
  },
];

export default function Portfolio() {
  return (<>
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row h-screen md:max-h-[80vh] max-h-[80vw]">
        {/* Left side - Scrollable content */}
        <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
          {/* Section 1 - Intro */}
          <section className="h-screen snap-start flex items-center justify-center p-4 md:p-8">
            <div className="max-w-2xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Hi there 👋</h1>
                <motion.p
                  className="text-base md:text-xl mb-8 leading-relaxed text-balance"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  I'm <strong>Cam</strong>, a passionate <strong>Fullstack Developer</strong> currently brainchilding{" "}
                  <a
                    href="https://fframess.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    fframess
                  </a>{" "}
                  — a creative platform dealing with collaborative art tools.
                </motion.p>

                <motion.p
                  className="text-sm md:text-lg mb-8 text-muted-foreground"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  Previously, I contributed to the platform at <strong>SigTech</strong>.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Tech Stack</h2>
                  <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar grayscale">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.05, ease: "easeOut" }}
                        className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors flex-shrink-0"
                      >
                        <Image
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                        <span className="text-xs text-center whitespace-nowrap">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="mt-8 text-xs md:text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                  <p className="mb-2">
                    🌱 Currently experimenting with IoT — ESP32 Dev Kits, MQTT, and breadboard prototyping.
                  </p>
                  <p className="break-all">
                    📫 Email:{" "}
                    <a
                      href="mailto:camillus.konkwo+github@gmail.com"
                      className="underline hover:opacity-70 transition-opacity"
                    >
                      camillus.konkwo+github@gmail.com
                    </a>
                  </p>
                  <p>
                    🌐 Website:{" "}
                    <a
                      href="https://camillus-konkwo.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70 transition-opacity"
                    >
                      camillus-konkwo.vercel.app
                    </a>
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Section 2 - Projects with gradual blur */}
          <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8 relative">
            <div className="max-w-2xl w-full relative pb-32">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-12 font-mono"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Projects
              </motion.h2>

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="border-b border-gray-200 pb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-3 font-mono">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 font-mono text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs md:text-sm hover:opacity-70 transition-opacity font-mono"
                        >
                          <ExternalLink size={16} />
                          Visit Site
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs md:text-sm hover:opacity-70 transition-opacity font-mono"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gradual blur effect at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </section>
        </div>

        {/* Right side - Profile card (sticky) */}
        <div className="hidden md:flex lg:w-[400px] lg:sticky lg:top-0 items-center justify-center p-8 bg-gray-50 lg:bg-white">
          <ProfileCard
            avatarUrl="https://avatars.githubusercontent.com/u/27239831?v=4"
            behindGlowEnabled={false}
            iconUrl=""
            enableMobileTilt={true}
            showUserInfo={true}
            name="Camillus Konkwo"
            title="Fullstack Developer"
            handle="camxus"
            status="Building fframess"
            contactText="Get in Touch"
            onContactClick={() => window.open("mailto:camillus.konkwo+github@gmail.com", "_blank")}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
    <div className="flex md:hidden lg:w-[400px] lg:h-screen lg:sticky lg:top-0 items-center justify-center p-8 bg-gray-50 lg:bg-white">
          <ProfileCard
            avatarUrl="/professional-developer-portrait.png"
            behindGlowEnabled={false}
            iconUrl=""
            enableMobileTilt={true}
            showUserInfo={true}
            name="Camillus Konkwo"
            title="Fullstack Developer"
            handle="camilluskn"
            status="Building fframess"
            contactText="Get in Touch"
            onContactClick={() => window.open("mailto:camillus.konkwo+github@gmail.com", "_blank")}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          />
    </>
  )
}
