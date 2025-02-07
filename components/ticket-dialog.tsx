"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface TicketDialogProps {
  showtime: string
  isOpen: boolean
  onClose: () => void
  onProceed: (quantity: number, total: number) => void
}

export function TicketDialog({ showtime, isOpen, onClose, onProceed }: TicketDialogProps) {
  const [quantity, setQuantity] = useState(0)
  const TICKET_PRICE = 3000

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(0, prev - 1))
  const totalPrice = quantity * TICKET_PRICE

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#1f2937] text-white border-none">
        <DialogHeader>
          <DialogTitle>Select Tickets</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-white">Showtime</p>
            <p className="text-lg text-white">{showtime}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-white">Ticket Price</p>
            <p className="text-lg text-white">₦{TICKET_PRICE.toLocaleString()}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-white">Number of Tickets</p>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity === 0}
                className="bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold text-white">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
                className="bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-white">Total Price</p>
            <p className="text-2xl font-bold text-white">₦{totalPrice.toLocaleString()}</p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white" onClick={onClose}>
              Cancel
            </Button>
            <Button
              className="bg-white text-black hover:bg-white/90"
              disabled={quantity === 0}
              onClick={() => onProceed(quantity, totalPrice)}
            >
              Review and Pay
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

