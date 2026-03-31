"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/ui/reveal"

const faqs = [
  {
    question: "What if I have very little time?",
    answer: "That is exactly when doing the right things matters most. The plan is built around your real schedule, not an ideal week."
  },
  {
    question: "Does this work if I am starting from zero?",
    answer: "Yes. Starting with guidance saves you months of trial and error with training, technique, and nutrition."
  },
  {
    question: "What if I have already tried before?",
    answer: "What usually fails is not consistency, but the system. Here, we adjust based on your actual response, not a fixed template."
  },
  {
    question: "What if I have pain or recurring discomfort?",
    answer: "That is taken into account from the start. Exercises, load, and technique are adjusted so you can progress more safely."
  },
  {
    question: "What if there are weeks when I perform worse or have less energy?",
    answer: "That gets adjusted too. The plan is not applied the same way every week. Load, volume, and expectations shift based on your actual recovery."
  },
  {
    question: "Do I need a gym?",
    answer: "No. You can train at home with the equipment you already have, although I will tell you the minimum that makes better progress possible."
  },
  {
    question: "Are you going to sell me something on the assessment call?",
    answer: "No. The call is there to understand your case, identify the bottleneck, and tell you honestly whether this service makes sense for you."
  },
  {
    question: "When do changes usually start to show?",
    answer: "The first improvements usually show up early in control, energy, and overall feel. Measurable changes are reviewed month by month."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Questions before you book
            </h2>
          </Reveal>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-center justify-center text-foreground font-semibold py-6 hover:no-underline hover:text-primary transition-colors relative [&>svg]:absolute [&>svg]:right-0 pr-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-center">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 md:mt-20 flex flex-col items-center">
        <div className="max-w-xl w-full text-center bg-card border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent pointer-events-none" />

          <Reveal>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Still have questions?
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-muted-foreground mb-6 text-sm">
              Send us a message and we will reply as soon as possible to help you understand the best next step for you.
            </p>
          </Reveal>

          <Reveal delay={0}>
            <a
              href="https://wa.me/34600000000?text=Hi,%20I%20have%20a%20few%20questions%20about%20the%20assessment%20and%20online%20coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20 group text-sm animate-whatsapp-nudge"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:-rotate-12 transition-transform"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Message on WhatsApp
            </a>
          </Reveal>
        </div>

        <div className="mt-8 md:mt-12 mb-0 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <div className="h-10 md:h-14 w-px bg-gradient-to-b from-primary/10 via-primary/45 to-transparent animate-bridge-flow" />
            <div className="absolute top-3 h-2 w-2 rounded-full bg-primary/75 animate-bridge-pulse" />
            <div className="mt-2 flex items-center justify-center text-primary/60">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_10px_rgba(234,109,31,0.18)]"
              >
                <path d="M12 4v14M18 12l-6 6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
