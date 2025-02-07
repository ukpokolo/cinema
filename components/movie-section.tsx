"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MovieCard } from "@/components/movie-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const nowShowing = [
  {
    id: 1,
    title: "Dog Man",
    image: "/placeholder.svg",
    genres: ["Family", "Animation"],
  },
  {
    id: 2,
    title: "Love Hurts",
    image: "/placeholder.svg",
    genres: ["Action", "Comedy"],
  },
  {
    id: 3,
    title: "Love Lockdown",
    image: "/placeholder.svg",
    genres: ["Drama"],
  },
  {
    id: 4,
    title: "Summer Rain",
    image: "/placeholder.svg",
    genres: ["Drama"],
  },
  // Add more movies as needed
]

const comingSoon = [
  {
    id: 1,
    title: "Captain America: Brave New World",
    image: "/placeholder.svg",
    genres: ["Action", "Thriller"],
    releaseDate: "February 13, 2025",
  },
  // Add more upcoming movies
]

export function MovieSection() {
  const [activeTab, setActiveTab] = useState<"now" | "coming">("now")

  return (
    <section className="bg-[#1a1d24] py-8">
      <div className="container px-4">
        {/* Tabs and Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4">
            <Button
              variant="ghost"
              className={cn("text-gray-400 hover:text-white", activeTab === "now" && "text-white")}
              onClick={() => setActiveTab("now")}
            >
              Now showing <span className="ml-2 text-xs">13</span>
            </Button>
            <Button
              variant="ghost"
              className={cn("text-gray-400 hover:text-white", activeTab === "coming" && "text-white")}
              onClick={() => setActiveTab("coming")}
            >
              Coming soon <span className="ml-2 text-xs">1</span>
            </Button>
          </div>

          <div className="flex gap-2">
            <Select defaultValue="lagos">
              <SelectTrigger className="w-[120px] bg-black/50">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lagos">Lagos</SelectItem>
                <SelectItem value="lekki">Lekki</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="feb-9">
              <SelectTrigger className="w-[120px] bg-black/50">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="feb-9">Feb, Sun 9</SelectItem>
                <SelectItem value="feb-10">Feb, Mon 10</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {(activeTab === "now" ? nowShowing : comingSoon).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  )
}

