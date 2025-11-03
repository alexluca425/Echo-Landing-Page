export function Footer() {
  return (
    <footer className="relative py-8 md:py-12 z-10">
      <div className="container">
        <p className="text-center text-foreground/60 text-sm font-mono">
          © {new Date().getFullYear()} Echo. All rights reserved.{" "}
          <a href="mailto:hello@echo.ai" className="hover:text-foreground/80 transition-colors">
            hello@echo.ai
          </a>
        </p>
      </div>
    </footer>
  )
}
