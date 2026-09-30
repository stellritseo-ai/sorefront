import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[86rem] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="display-lg mt-5">Questions, answered.</h2>
        </Reveal>
        <div className="lg:col-span-8">
          <div className="glass-panel glass-sheen shadow-lift rounded-sm px-6 py-2 sm:px-8">
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-border/80 last:border-b-0"
                >
                  <AccordionTrigger className="py-6 text-left font-display text-[0.9rem] font-bold uppercase tracking-[-0.01em] hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
