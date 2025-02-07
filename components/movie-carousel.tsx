"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { MovieData } from "@/lib/types"
import { cn } from "@/lib/utils"

interface MovieCarouselProps {
  movies: MovieData[]
}

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length)
    }, 20000) // Change slide every 20 seconds

    return () => clearInterval(timer)
  }, [movies.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full">
            <div className="container flex h-full items-center px-4">
              <div className="max-w-2xl pt-20">
                <h1 className="mb-4 text-6xl font-bold tracking-tight text-white">{movie.title}</h1>
                <p className="mb-8 text-lg text-white/80">{movie.description}</p>
                <div className="flex items-center space-x-4">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">
                    Buy ticket
                  </Button>
                  <Button size="lg" variant="outline" className="text-white">
                    <Play className="mr-2 h-4 w-4 fill-current" />
                    Watch trailer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-2">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length)}
          className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
        >
          ←
        </button>
        <div className="text-2xl font-bold text-white">{String(currentSlide + 1).padStart(2, "0")}</div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % movies.length)}
          className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
        >
          →
        </button>
      </div>
    </div>
  )
}

