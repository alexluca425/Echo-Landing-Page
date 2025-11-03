"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { Button } from "./ui/button"

export const Header = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
      <div className="container pointer-events-auto">
        <header className="relative flex items-center justify-between bg-foreground/5 border border-foreground/10 rounded-lg px-4 md:px-6 py-3 md:py-4">
        <Link href="/">
          <Logo className="w-auto h-8 md:h-10" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {["Product", "Squad"].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-sm text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button onClick={onJoinClick} className="max-lg:hidden uppercase font-mono text-sm h-auto px-6 py-2">
          Join waitlist
        </Button>
        <MobileMenu onJoinClick={onJoinClick} />
      </header>
      </div>
    </div>
  )
}
