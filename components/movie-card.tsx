import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface MovieCardProps {
  movie: {
    id: number
    title: string
    image: string
    genres: string[]
    releaseDate?: string
  }
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-black/20 transition-transform hover:scale-105"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-white">{movie.title}</h3>
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <Badge key={genre} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
              {genre}
            </Badge>
          ))}
        </div>
        {movie.releaseDate && <p className="mt-2 text-sm text-gray-400">{movie.releaseDate}</p>}
      </div>
    </Link>
  )
}

