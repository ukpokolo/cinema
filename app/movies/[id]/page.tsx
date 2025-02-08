"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MovieCard } from "@/components/movie-card"
import { TicketDialog } from "@/components/ticket-dialog"
import { PurchaseSteps } from "@/components/purchase-steps"

// Movie Data
const movieData = {
  id: 1,
  title: "Dog Man",
  synopsis:
    "When a faithful police dog and his human police officer owner are injured together on the job, a harebrained but life-saving surgery fuses the two of them together and Dog Man is born. Dog Man is sworn to protect and serve—and fetch, sit and roll over.",
  image: "/dog.jpg",
  cast: [
    { name: "Ricky Gervais", image: "/profile.png", role: "Voice Actor" },
    { name: "Scott Menville", image: "/profile.png", role: "Voice Actor" },
    { name: "Warren Sroka", image: "/profile.png", role: "Voice Actor" },
    { name: "Kelly Stables", image: "/profile.png", role: "Voice Actor" },
  ],
  genres: ["Animation", "Action", "Comedy"],
}

const relatedMovies = [
  {
    id: 2,
    title: "Love Hurts",
    image: "/dog.jpg",
    genres: ["Action", "Comedy"],
  },
  {
    id: 3,
    title: "Love Lockdown",
    image: "/captainamerica.jpg",
    genres: ["Drama"],
  },
  {
    id: 4,
    title: "Summer Rain",
    image: "/dog.jpg",
    genres: ["Drama"],
  },
]

interface Showtime {
  time: string
  type: string
}

const showtimes: Showtime[] = [
  { time: "5:10 PM", type: "Premium 2D" },
  { time: "6:50 PM", type: "Premium 2D" },
]

export default function MoviePage() {
  const [selectedState, setSelectedState] = useState<string>("")
  const [selectedCinema, setSelectedCinema] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedShowtime, setSelectedShowtime] = useState<string>("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showPurchaseSteps, setShowPurchaseSteps] = useState(false)

  const handleShowtimeSelect = (showtime: string) => {
    setSelectedShowtime(showtime)
    setIsDialogOpen(true)
  }

  const handleProceed = (quantity: number, total: number) => {
    setIsDialogOpen(false)
    setShowPurchaseSteps(true)
  }

  const handlePurchaseComplete = (email: string, name: string) => {
    console.log(`Processing purchase for ${name} (${email})`)
    setShowPurchaseSteps(false)
    // Handle payment processing here
  }

  const showShowtimes = selectedState && selectedCinema && selectedDate

  return (
    <div className="flex justify-center w-full bg-black">

    
    <div className="min-h-screen pt-16  ">
      {/* Back Button Section */}
      <div className="container px-4 pt-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 rounded-lg bg-black/50 px-4 py-2 text-sm font-medium text-white hover:bg-black/70"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back
        </Link>
      </div>

      {/* Movie Details Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />

        <div className="container relative px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Movie Poster */}
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
              <Image 
                src={movieData.image || "/placeholder.svg"} 
                alt={movieData.title} 
                fill 
                className="object-cover" 
              />
              <Button
                variant="outline"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch trailer
              </Button>
            </div>

            {/* Movie Info */}
            <div className="lg:col-span-2">
              <h1 className="mb-4 text-4xl font-bold text-white">{movieData.title}</h1>

              <div className="mb-8">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">Synopsis</h2>
                <p className="text-lg text-white">{movieData.synopsis}</p>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Cast</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {movieData.cast.map((actor) => (
                    <div key={actor.name} className="text-center">
                      <div className="relative mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full">
                        <Image 
                          src={actor.image || "/placeholder.svg"} 
                          alt={actor.name} 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                      <div className="text-sm font-medium text-white">{actor.name}</div>
                      <div className="text-xs text-gray-400">{actor.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">Genre</h2>
                <div className="flex gap-2">
                  {movieData.genres.map((genre) => (
                    <Badge 
                      key={genre} 
                      variant="secondary" 
                      className="bg-white/10 text-white"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Booking Section */}
              <div className="space-y-4 rounded-lg bg-white/5 p-6">
                <h2 className="text-lg font-semibold text-white">Select Location</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ondo">Ondo</SelectItem>
                      <SelectItem value="lagos">Lagos</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedCinema} onValueChange={setSelectedCinema}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Cinema" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="akure">Akure</SelectItem>
                      <SelectItem value="lekki">Lekki</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedDate} onValueChange={setSelectedDate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feb-9">Feb, Mon 9</SelectItem>
                      <SelectItem value="feb-10">Feb, Tue 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-medium text-gray-400">Select a show time</h3>
                  {showShowtimes ? (
                    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {showtimes.map((showtime) => (
                        <Button
                          key={showtime.time}
                          variant="outline"
                          className="w-full justify-start bg-white/5 text-white hover:bg-white/10"
                          onClick={() => handleShowtimeSelect(`${showtime.time} - ${showtime.type}`)}
                        >
                          {showtime.time} - {showtime.type}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">
                      Select your preferred location and date to view showtimes
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Selection Dialog */}
      <TicketDialog
        showtime={selectedShowtime}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onProceed={handleProceed}
      />

      {showPurchaseSteps && (
        <PurchaseSteps
          movie={{
            title: movieData.title,
            image: movieData.image,
            genre: movieData.genres[0],
          }}
          showtime={selectedShowtime}
          location={`${selectedState}, ${selectedCinema}`}
          price={3000}
          onClose={() => setShowPurchaseSteps(false)}
          onComplete={handlePurchaseComplete}
        />
      )}

      {/* Related Movies Section */}
      <section className="container px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">Also showing at Filmhouse Benin</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}