export function About() {
  return (
    <section id="product" className="relative py-24 md:py-32 z-10 scroll-mt-14 md:scroll-mt-14">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image placeholder */}
          <div className="rounded-lg flex items-center justify-center min-h-[500px]">
            <img
              src="/EchoSS.png"
              alt="Echo interface preview"
              className="w-125 h-auto object-contain rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">What Echo does</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-base md:text-lg">
              <p>
                Echo is the fastest path from intention to action. Speak naturally; Echo turns it into organized tasks and notes, suggests the next best step, and keeps you on track with quick check-ins. Less friction, more progress, a day that feels under control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
