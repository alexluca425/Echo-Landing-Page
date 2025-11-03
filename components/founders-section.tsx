export function Founders() {
  const founders = [
    {
      name: "Dennis",
      role: "CEO",
      image: "/DennyPunk.png",
      //bio: "Marketing & psychology background; grew Notion templates to $8k in month one. Focuses on voice UX, product, and growth.",
    },
    {
      name: "Alex",
      role: "CTO",
      image: "/AlexPunk.png",
      bio: "\"This app is gonna change how people aim to become 1% better each day.\"",
    },
    {
      name: "Vlad",
      role: "CTO",
      image: "/VladPunk.png",
      //bio: "CS internship + SMMA ops. Owns Supabase/Postgres + pgvector, APIs, and infra.",
    },
  ]

  return (
    <section id="squad" className="relative py-24 md:py-32 z-10 scroll-mt-14 md:scroll-mt-14">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Meet the Squad</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-foreground/5 rounded-lg p-8 border border-foreground/10 hover:border-foreground/20 transition-colors"
            >
              {/* Image placeholder */}
              <div className="aspect-[3/4] bg-foreground/10 rounded-lg mb-6 flex items-center justify-center border border-foreground/10 shadow-lg overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
              <p className="text-foreground/60 text-sm font-mono mb-4">{founder.role}</p>
              {founder.bio && (
                <p className="text-foreground/70 text-sm leading-relaxed">{founder.bio}</p>
              )}

              {/* Social icons placeholder */}
              {/* <div className="flex gap-4 mt-6">
                <a href="#" className="text-foreground/40 hover:text-foreground/80 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.93-1.38 1.891v4.579H8.265V9.359h2.47v.979h.037c.346-.654 1.191-1.344 2.46-1.344 2.631 0 3.118 1.73 3.118 3.98v4.364zM3.004 8.716a1.694 1.694 0 11-.002-3.388 1.694 1.694 0 01.002 3.388zm1.441 7.622H1.566V9.359h2.879v6.979zM17.775 0H.225C.1 0 0 .1 0 .225v17.55c0 .125.1.225.225.225h17.55c.125 0 .225-.1.225-.225V.225C18 .1 17.9 0 17.775 0z" />
                  </svg>
                </a>
                <a href="#" className="text-foreground/40 hover:text-foreground/80 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.113-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.6 9.6 0 012.5.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.192 20 14.437 20 10.017 20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
