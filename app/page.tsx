"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about-section"
import { Founders } from "@/components/founders-section"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { GL } from "@/components/gl" // imported GL component for animated waveform background
import { Suspense } from "react"

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [hovering, setHovering] = useState(false)

  return (
    <>
      <Suspense fallback={null}>
        <GL hovering={hovering} />
      </Suspense>
      <Header onJoinClick={() => setShowWaitlist(true)} />
      <Hero onJoinClick={() => setShowWaitlist(true)} />
      <About />
      <Founders />
      <Footer />
      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
    </>
  )
}
