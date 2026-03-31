"use client"

import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { Tilt } from "@/components/ui/tilt"
import { MagneticButton } from "@/components/ui/magnetic-button"

interface PricingSectionProps {
  onCtaClick: () => void
}

const features = [
  "Training programming adjusted to your progress, schedule, and recovery",
  "Video technique review to improve results and reduce discomfort",
  "Weekly check-in to make changes before you plateau",
  "Flexible nutrition adapted to your context and lifestyle",
  "Support in under 24 business hours"
]

export function PricingSection({ onCtaClick }: PricingSectionProps) {
  return (
    <section id="precio" className="pt-14 pb-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Program
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              How the 12-week coaching works
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground">
              If we see a good fit during the assessment, this is how we work:
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <Tilt className="max-w-lg mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1 z-10 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Premium
              </div>

              <CardHeader className="text-center pt-10 pb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  12-week coaching
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-primary">149€</span>
                  <span className="text-muted-foreground text-lg">/ month</span>
                </div>
              </CardHeader>

              <CardContent className="pb-10 flex flex-col items-center">
                <p className="w-full max-w-sm text-left text-sm font-semibold text-foreground mb-5">
                  Includes:
                </p>
                <ul className="space-y-4 mb-8 w-full max-w-sm">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton className="w-full max-w-sm">
                  <Button
                    onClick={onCtaClick}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-7 rounded-xl group transition-all hover:scale-[1.02] shadow-xl shadow-primary/20"
                  >
                    Book assessment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  €149/month. We assess your case first.
                </p>
              </CardContent>
            </Card>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}
