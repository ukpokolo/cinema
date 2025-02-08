import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export function MainNav() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png?height=40&width=120"
            alt="FilmHouse Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* <div className="hidden md:flex items-center space-x-6">
          <Link href="/food-drinks" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            FOOD & DRINKS
          </Link>
          <Link href="/cube" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            THE CUBE
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            THE SCRIPT BLOG
          </Link>
          <Link href="/club" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            JOIN OUR CLUB
          </Link>
        </div>

        <Link href="/cart" className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors">
          <ShoppingCart className="h-5 w-5" />
          <span className="text-sm font-medium">CART</span>
        </Link> */}
      </div>
    </nav>
  )
}

