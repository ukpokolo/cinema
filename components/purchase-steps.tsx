"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface PurchaseStepsProps {
  movie: {
    title: string
    image: string
    genre: string
  }
  showtime: string
  location: string
  price: number
  onClose: () => void
  onComplete: (email: string, name: string) => void
}

export function PurchaseSteps({ movie, showtime, location, price, onClose, onComplete }: PurchaseStepsProps) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          onClose()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onClose])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const handleContinue = () => {
    if (step === 1) {
      if (!email || !name) return
      setStep(2)
    } else {
      onComplete(email, name)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="w-full max-w-md rounded-[32px] bg-[#1f2937] shadow-xl">
        {/* Header */}
        <div className="flex items-center border-b border-white/10 px-4 py-4">
          <button onClick={step === 1 ? onClose : () => setStep(1)} className="rounded-full p-1 hover:bg-white/10">
            {step === 1 ? <X className="h-6 w-6 text-white" /> : <ArrowLeft className="h-6 w-6 text-white" />}
          </button>
          <span className="ml-4 text-lg font-semibold text-white">Purchase ticket - Step {step} of 2</span>
        </div>

        {/* Content */}
        <div className="max-h-[70vh] overflow-auto px-4 py-6">
          {step === 1 ? (
            <div className="space-y-6">
              <div className="flex items-start gap-2">
                <span className="rounded-full bg-white/10 p-1 text-white">ℹ</span>
                <p className="text-white">Enter your email and name so we send your ticket to the right place</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg font-semibold text-[#8ab4f8]">
                  {minutes}:{seconds.toString().padStart(2, "0")} TO BUY YOUR TICKETS
                </p>
              </div>

              <div className="flex gap-4">
                <div className="relative h-32 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <div className="inline-block rounded bg-white/10 px-2 py-1 text-sm text-white">{movie.genre}</div>
                  <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                  <p className="text-gray-400">{location}</p>
                  <p className="text-gray-400">{showtime}</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-white/10 p-1">🎬</span>
                  <span className="text-white">Benin Blockbuster x1</span>
                </div>
                <span className="font-semibold text-white">NGN {price.toLocaleString()}</span>
              </div>

              <div className="flex items-start gap-2 rounded-lg bg-[#3b3f46] p-4">
                <span className="text-yellow-400">⚠</span>
                <p className="text-sm text-yellow-400">
                  Please review your movie's location, date and time before paying
                </p>
              </div>
            </div>
          )}
          {/* Footer */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white" onClick={onClose}>
              Cancel
            </Button>
            <Button
              className="bg-white text-black hover:bg-white/90"
              onClick={handleContinue}
              disabled={step === 1 && (!email || !name)}
            >
              {step === 1 ? "Continue" : `Review and pay NGN ${price.toLocaleString()}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

