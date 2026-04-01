"use client"

import { Star, Quote, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"

const testimonials = [
  {
    name: "David G.",
    age: "41 years old",
    avatar: "/images/avatar-2.jpg",
    quote: "I had been training for a while with nagging pain and no real progress. Once we corrected my technique, adjusted the load, and added structure to the plan, the pain went away and I finally started gaining muscle.",
    result: "+4 kg muscle",
    beforeImage: "/images/before-2.jpg",
    afterImage: "/images/after-2.jpg",
    problem: "He came in dealing with pain, low clarity, and no muscle gain despite training consistently."
  }
]

export function TestimonialsSection() {
  return (
    <section className="pt-14 pb-12 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              CLEAR RESULTS
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Normal people. Measurable changes
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={0.3 + index * 0.15}>
              <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="mb-6 -mx-2 md:-mx-4">
                    <BeforeAfterSlider
                      beforeImage={testimonial.beforeImage}
                      afterImage={testimonial.afterImage}
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                  </div>

                  <Quote className="w-10 h-10 text-primary/20 mb-4" />

                  <p className="text-sm font-medium text-primary mb-3">
                    {testimonial.problem}
                  </p>

                  <p className="text-foreground text-lg leading-relaxed mb-6">
                    {`"${testimonial.quote}"`}
                  </p>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm whitespace-nowrap">
                      {testimonial.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
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
