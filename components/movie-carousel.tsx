"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { MovieData } from "@/lib/types"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface MovieCarouselProps {
  movies: MovieData[]
}

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length)
    }, 20000)

    return () => clearInterval(timer)
  }, [movies.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide 
              ? "opacity-100 pointer-events-auto z-10" 
              : "opacity-0 pointer-events-none z-0"
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
              <div className="flex max-w-2xl flex-col justify-between pt-20">
                <div>
                  <h1 className="mb-4 text-6xl font-bold tracking-tight text-white">{movie.title}</h1>
                  <p className="mb-8 text-lg text-white/80">{movie.description}</p>
                </div>
                <div className="relative z-20">
                  <div className="flex items-center space-x-4">
                    <Button className="bg-white text-black hover:bg-white/90">
                      <Link href={`/movies/${movie.id}`}>Buy ticket</Link>
                    </Button>
                    <Button variant="outline" className="text-black">
                      <Play className="mr-2 h-4 w-4 fill-current" />
                      Watch trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-2 z-30">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length)}
          className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
        >
          ←
        </button>
        <div className="text-2xl font-bold text-white leading-8">
          {String(currentSlide + 1).padStart(2, "0")}
        </div>
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