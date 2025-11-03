"use client"

import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero({ onJoinClick }: { onJoinClick: () => void }) {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-center items-center relative pt-32 md:pt-0 z-10">
      <div className="text-center relative z-10 px-4">
        <Pill className="mb-6 justify-center">PRIVATE BETA</Pill>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance">
          Turn voice into <br />
          organized action.
        </h1>

        {/* <p className="text-lg md:text-xl text-foreground/80 mb-6 max-w-3xl mx-auto leading-relaxed">
          Echo is a voice-first AI assistant that captures tasks, notes, events, and projects into structured databases—and recalls them instantly.
        </p> */}

        {/* Tagline stack */}
        <div className="space-y-2 mb-12 text-foreground/70 text-sm md:text-base font-medium">
          <p>Speak. Capture. Organize. Recall.</p>
          <p>Your day, managed by voice.</p>
          <p>Structured data. Instant answers.</p>
        </div>

        <Button
          onClick={() => {
            setHovering(true)
            onJoinClick()
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="px-8 py-6 text-base"
        >
          Join waitlist
        </Button>
      </div>
    </div>
  )
}
