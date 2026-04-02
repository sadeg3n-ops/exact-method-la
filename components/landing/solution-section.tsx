"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Structured training",
    subtitle: "The right stimulus",
    description: "A training plan built around your level, your equipment, your experience, and the real time you have available.",
    image: "/images/process/entrenamiento-con-criterio.png",
    imagePosition: "center center",
    overlayClass: "from-black/91 via-black/64 to-black/34 md:from-black/90 md:via-black/54 md:to-black/28 md:group-hover:from-black/94 md:group-hover:via-black/68 md:group-hover:to-black/40",
  },
  {
    title: "Flexible nutrition",
    subtitle: "Eat well without overcomplicating it",
    description: "Clear targets, flexible guidelines, and enough room to eat out, work long hours, and still make progress.",
    image: "/images/process/nutricion-flexible.jpg",
    imagePosition: "center center",
    overlayClass: "from-black/94 via-black/76 to-black/48 md:from-black/93 md:via-black/66 md:to-black/42 md:group-hover:from-black/96 md:group-hover:via-black/78 md:group-hover:to-black/52",
  },
  {
    title: "Ongoing follow-up",
    subtitle: "Adjustments when they matter",
    description: "We review technique, recovery, and performance so we can adjust load, volume, or nutrition before plateau or pain show up.",
    image: "/images/process/seguimiento-constante.png",
    imagePosition: "center center",
    overlayClass: "from-black/91 via-black/64 to-black/34 md:from-black/90 md:via-black/54 md:to-black/28 md:group-hover:from-black/94 md:group-hover:via-black/68 md:group-hover:to-black/40",
  }
]

function SolutionFeatureCard({
  feature,
  index,
  isMobileOpen,
  onMobileToggle,
}: {
  feature: (typeof features)[number]
  index: number
  isMobileOpen: boolean
  onMobileToggle: () => void
}) {
  const [isMobileViewport, setIsMobileViewport] = useState(false)
  const isMobileActive = isMobileViewport && isMobileOpen
  const subtitleTextStyle = {
    textShadow: "0 1px 2px rgba(0,0,0,0.55), 0 0 16px rgba(234,109,31,0.12)",
  } as const

  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const updateViewport = () => {
      const isMobile = mediaQuery.matches
      setIsMobileViewport(isMobile)
    }

    updateViewport()
    mediaQuery.addEventListener("change", updateViewport)

    return () => mediaQuery.removeEventListener("change", updateViewport)
  }, [])

  return (
    <Reveal
      key={feature.title}
      delay={0.3 + index * 0.15}
      className="h-full"
    >
      <Card
        role={isMobileViewport ? "button" : undefined}
        tabIndex={isMobileViewport ? 0 : undefined}
        onClick={isMobileViewport ? onMobileToggle : undefined}
        onKeyDown={
          isMobileViewport
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  onMobileToggle()
                }
              }
            : undefined
        }
        className="group relative h-full min-h-[18.5rem] overflow-hidden border-border/70 bg-card/30 transition-colors duration-200 ease-out hover:border-primary/45 md:min-h-[20rem]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${feature.image}')`,
            backgroundPosition: feature.imagePosition,
          }}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t transition-opacity duration-200 ease-out",
            feature.overlayClass,
          )}
        />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(circle at 22% 78%, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.18) 28%, rgba(0,0,0,0) 58%)",
          }}
        />

        <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 text-left md:p-8">
          <div className="max-w-sm">
            <h3
              className="mb-2 text-2xl font-semibold text-white"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}
            >
              {feature.title}
            </h3>
            <p className="leading-[1.15]">
              <span
                className="inline-flex max-w-full rounded-md bg-black/26 px-2.5 py-1 text-base font-semibold tracking-[0.01em] text-primary ring-1 ring-white/6 backdrop-blur-[2px]"
                style={subtitleTextStyle}
              >
                {feature.subtitle}
              </span>
            </p>
            <div
              className={cn(
                "mt-4 h-[4.75rem] overflow-hidden",
              )}
            >
              <p
                className={cn(
                  "text-sm leading-relaxed text-slate-300 transition-opacity duration-200 ease-out md:text-base",
                  isMobileViewport
                    ? isMobileActive
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 md:group-hover:opacity-100",
                )}
              >
                {feature.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  )
}

export function SolutionSection() {
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null)

  return (
    <section id="resultados" className="pt-16 pb-12 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal duration={0.32} direction="none">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Process
            </span>
          </Reveal>
          <Reveal delay={0.04} duration={0.36} direction="none">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              What changes when you stop improvising
            </h2>
          </Reveal>
          <Reveal delay={0.08} duration={0.38} direction="none">
            <p className="text-lg text-muted-foreground">
              Assessment, programming, and ongoing adjustments. You know what to do, why you are doing it, and what to change when your schedule, recovery, or performance shifts.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 max-w-5xl mx-auto auto-rows-fr">
          {features.map((feature, index) => (
            <SolutionFeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isMobileOpen={mobileOpenIndex === index}
              onMobileToggle={() => setMobileOpenIndex((current) => (current === index ? null : index))}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <div className="flex flex-col items-center text-primary/80">
            <div className="h-8 w-px bg-primary/35" />
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
