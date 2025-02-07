import Link from "next/link"
import Image from "next/image"
import { Youtube, Twitter, Facebook, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-6">
          {/* Logo and App Downloads */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 block">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="FilmHouse Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <div className="space-y-4">
              <p className="text-sm text-gray-400">Get the app</p>
              <div className="flex gap-4">
                <Link href="#" className="block w-32">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </Link>
                <Link href="#" className="block w-32">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-4 md:col-span-4">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/prices" className="text-sm text-gray-400 hover:text-white">
                    Ticket prices
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-white">
                    The Script Blog
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="text-sm text-gray-400 hover:text-white">
                    Experiences
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Terms</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/general" className="text-sm text-gray-400 hover:text-white">
                    General
                  </Link>
                </li>
                <li>
                  <Link href="/tickets" className="text-sm text-gray-400 hover:text-white">
                    Ticket sales
                  </Link>
                </li>
                <li>
                  <Link href="/plus" className="text-sm text-gray-400 hover:text-white">
                    Filmhouse+
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-sm text-gray-400 hover:text-white">
                    Self help
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/social" className="text-sm text-gray-400 hover:text-white">
                    Social
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-end gap-4">
          <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
            <Youtube className="h-5 w-5" />
          </Link>
          <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

