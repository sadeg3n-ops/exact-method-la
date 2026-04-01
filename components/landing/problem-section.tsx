"use client"

import { TrendingDown, Users, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const problems = [
  {
    icon: TrendingDown,
    title: "Directionless training",
    description: "You train, but you do not know what to adjust when progress slows down or fatigue starts to build."
  },
  {
    icon: Users,
    title: "Nutrition you cannot sustain",
    description: "If eating well makes life harder, more restrictive, or less social, you will eventually stop following it."
  },
  {
    icon: AlertCircle,
    title: "No real follow-up",
    description: "Without timely adjustments, it is easy to keep doing everything “right” and still stay stuck."
  }
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            If you train, eat reasonably well, and still do not progress, effort is usually not the issue.
          </h2>
          <p className="text-lg text-slate-600">
            What is often missing is a system that fits your real life, your recovery, and the way your body is actually responding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="h-full border-slate-200 bg-slate-50 transition-colors duration-200 hover:border-orange-500/40">
              <CardContent className="flex flex-col items-center p-6 text-center md:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-colors duration-200 hover:bg-orange-500/15">
                  <problem.icon className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {problem.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
