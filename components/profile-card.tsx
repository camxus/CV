"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProfileCardProps {
  avatarUrl?: string
  iconUrl?: string
  grainUrl?: string
  innerGradient?: string
  behindGlowEnabled?: boolean
  behindGlowColor?: string
  behindGlowSize?: string
  className?: string
  enableTilt?: boolean
  enableMobileTilt?: boolean
  mobileTiltSensitivity?: number
  miniAvatarUrl?: string
  name?: string
  title?: string
  handle?: string
  status?: string
  contactText?: string
  showUserInfo?: boolean
  onContactClick?: () => void
}

export function ProfileCard({
  avatarUrl = "/placeholder.svg?height=400&width=400",
  iconUrl,
  grainUrl,
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor = "rgba(125, 190, 255, 0.67)",
  behindGlowSize = "50%",
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowX, setGlowX] = useState(50)
  const [glowY, setGlowY] = useState(50)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle device motion for mobile tilt
  useEffect(() => {
    if (!enableMobileTilt || !isMobile) return

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta !== null && event.gamma !== null) {
        const x = Math.max(-20, Math.min(20, event.beta / mobileTiltSensitivity))
        const y = Math.max(-20, Math.min(20, event.gamma / mobileTiltSensitivity))
        setRotateX(-x)
        setRotateY(y)
      }
    }

    window.addEventListener("deviceorientation", handleOrientation)
    return () => window.removeEventListener("deviceorientation", handleOrientation)
  }, [enableMobileTilt, isMobile, mobileTiltSensitivity])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableTilt || isMobile) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const percentX = ((x - centerX) / centerX) * 100
    const percentY = ((y - centerY) / centerY) * 100

    setRotateX((y - centerY) / 20)
    setRotateY(-(x - centerX) / 20)
    setGlowX(percentX + 50)
    setGlowY(percentY + 50)
  }

  const handleMouseLeave = () => {
    if (!enableTilt || isMobile) return
    setRotateX(0)
    setRotateY(0)
    setGlowX(50)
    setGlowY(50)
  }

  return (
    <div className={`relative ${className}`} style={{ perspective: "1000px" }}>
      {/* Behind glow effect */}
      {behindGlowEnabled && !isMobile && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${behindGlowColor} 0%, transparent ${behindGlowSize})`,
            filter: "blur(40px)",
            zIndex: -1,
          }}
          animate={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${behindGlowColor} 0%, transparent ${behindGlowSize})`,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      {/* Card */}
      <motion.div
        ref={cardRef}
        className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Icon pattern overlay */}
        {iconUrl && (
          <div
            className="absolute inset-0 opacity-10 bg-repeat"
            style={{
              backgroundImage: `url(${iconUrl})`,
              backgroundSize: "50px 50px",
            }}
          />
        )}

        {/* Grain texture overlay */}
        {grainUrl && (
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url(${grainUrl})`,
            }}
          />
        )}

        {/* Inner gradient */}
        {innerGradient && (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: innerGradient,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Avatar */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20">
              <Image src={avatarUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
          </div>

          {/* User Info */}
          {showUserInfo && (
            <div className="text-center text-white">
              {miniAvatarUrl && (
                <div className="mb-4 flex justify-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    <Image src={miniAvatarUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
                  </div>
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">{name}</h2>
              <p className="text-gray-300 mb-1">{title}</p>
              <p className="text-gray-400 text-sm mb-2">@{handle}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {status}
              </div>

              {/* Contact Button */}
              {onContactClick && (
                <button
                  onClick={onContactClick}
                  className="cursor-pointer w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 backdrop-blur-sm border border-white/20"
                >
                  {contactText}
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
