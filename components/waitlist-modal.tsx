"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const submitWaitlist = async (formData: { name: string; email: string; phone: string }) => {
  // Validation
  if (!formData.name || !formData.email || !formData.phone) {
    throw new Error("All fields are required")
  }
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    throw new Error("Invalid email format")
  }
  // Log payload (to be replaced with API call later)
  console.log("Waitlist submission:", formData)
  return { success: true }
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await submitWaitlist(formData)
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => {
        onOpenChange(false)
        setSubmitted(false)
        setFormData({ name: "", email: "", phone: "" })
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] bg-black border border-foreground/20">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join the Echo Private Beta</DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="py-4">
            <p className="text-center text-foreground/80">Thanks! You're on the list.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/80">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Full name"
                className="bg-foreground/5 border-foreground/20 text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Email address"
                className="bg-foreground/5 border-foreground/20 text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground/80">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Phone number"
                className="bg-foreground/5 border-foreground/20 text-foreground placeholder:text-foreground/40"
              />
            </div>

            {error && (
              <p className="text-xs text-red-400" role="alert" aria-live="polite">
                {error}
              </p>
            )}

            <p className="text-xs text-foreground/50 pt-2">
              We'll only use this to invite you to the beta.
            </p>

            <div className="flex gap-3 pt-6">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
