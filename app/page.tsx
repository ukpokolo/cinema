import { MovieCarousel } from "@/components/movie-carousel"
import { MainNav } from "@/components/main-nav"
import { MovieSection } from "@/components/movie-section"
import type { MovieData } from "@/lib/types"

const movie: MovieData[] = [
  {
    id: 11,
    title: "The Waiter",
    description:
      "A waiter unexpectedly gets caught in the middle of a hotel invasion, leading to a chaotic and thrilling adventure.",
    image: "/thewaiter.jpg",
    slug: "thewaiter",
  },
  {
    id: 2,
    title: "Alakada: Bad and Boujee",
    description:
      "The series portrays a young girl, Yetunde (Toyin Abraham) from a poor family background with an inferiority complex who makes up stories and lies about her financial and social status to fit in with the crowd.",
    image: "/america.jpg",
    slug: "alakada",
  },
  {
    id: 3,
    title: "Alakada: Bad and Boujee",
    description:
      "The series portrays a young girl, Yetunde (Toyin Abraham) from a poor family background with an inferiority complex who makes up stories and lies about her financial and social status to fit in with the crowd.",
    image: "/america.jpg",
    slug: "alakada",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <MainNav />
      <MovieCarousel movies={movie} />
      <MovieSection />
    </main>
  )
}

