"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type {  Engine } from "tsparticles-engine"

interface ParticleBackgroundProps {
  preset?: "default" | "matrix" | "snow" | "stars" | "bubbles" | "fire" | "neon"
  color?: string
  speed?: number
  density?: number
  className?: string
}

export default function ParticleBackground({
  preset = "default",
  color = "#3b82f6",
  speed = 1,
  density = 80,
  className = "",
}: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {
    // Optional callback when particles are loaded
  }, [])

  const getParticleConfig = () => {
    const baseConfig = {
      background: {
        color: {
          value: "#000000", // Black background
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: color,
        },
        links: {
          color: color,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: speed,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: density,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }

    // Preset configurations
    switch (preset) {
      case "matrix":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: "#00ff00" },
            links: { ...baseConfig.particles.links, enable: false },
            move: {
              ...baseConfig.particles.move,
              direction: "bottom" as const,
              speed: speed * 2,
            },
            shape: { type: "char" as const, character: { value: ["0", "1"], font: "Verdana", size: 16 } },
            opacity: { value: { min: 0.1, max: 1 } },
          },
        }

      case "snow":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: "#ffffff" },
            links: { ...baseConfig.particles.links, enable: false },
            move: {
              ...baseConfig.particles.move,
              direction: "bottom" as const,
              speed: speed * 0.5,
            },
            size: { value: { min: 2, max: 8 } },
            opacity: { value: { min: 0.3, max: 0.8 } },
          },
        }

      case "stars":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: ["#ffffff", "#ffd700", "#87ceeb"] },
            links: { ...baseConfig.particles.links, enable: false },
            move: {
              ...baseConfig.particles.move,
              speed: speed * 0.2,
            },
            shape: { type: "star" as const },
            size: { value: { min: 1, max: 4 } },
            opacity: {
              value: { min: 0.3, max: 1 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
        }

      case "bubbles":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: ["#3b82f6", "#06b6d4", "#8b5cf6"] },
            links: { ...baseConfig.particles.links, enable: false },
            move: {
              ...baseConfig.particles.move,
              direction: "top" as const,
              speed: speed * 0.8,
            },
            size: {
              value: { min: 5, max: 20 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 5,
                sync: false,
              },
            },
            opacity: { value: { min: 0.1, max: 0.6 } },
          },
        }

      case "fire":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: ["#ff4500", "#ff6347", "#ffd700", "#ff0000"] },
            links: { ...baseConfig.particles.links, enable: false },
            move: {
              ...baseConfig.particles.move,
              direction: "top" as const,
              speed: speed * 1.5,
            },
            size: {
              value: { min: 2, max: 8 },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 1,
                sync: false,
              },
            },
            opacity: {
              value: { min: 0.2, max: 0.8 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
        }

      case "neon":
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: { value: ["#ff00ff", "#00ffff", "#ffff00", "#ff0080"] },
            links: {
              ...baseConfig.particles.links,
              color: "#ff00ff",
              opacity: 0.8,
              width: 2,
            },
            move: {
              ...baseConfig.particles.move,
              speed: speed * 1.2,
            },
            size: { value: { min: 2, max: 6 } },
            opacity: {
              value: { min: 0.5, max: 1 },
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.3,
                sync: false,
              },
            },
          },
        }

      default:
        return baseConfig
    }
  }

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={getParticleConfig()}
        className="w-full h-full"
      />
    </div>
  )
}
