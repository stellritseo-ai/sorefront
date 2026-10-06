import { useState } from "react";
import { HelpCircle, ChevronDown, PhoneCall } from "lucide-react";
import { ServiceDetail } from "@/data/servicesData";

interface ServiceFaqProps {
  service: ServiceDetail;
}

export function ServiceFaq({ service }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-700 mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-primary" />
            <span>Commercial FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have questions about {service.title.toLowerCase()} in Dallas–Fort Worth? Here are common inquiries from property managers and general contractors.
          </p>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-red-100 text-red-600" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-3 font-medium">
            Have a project-specific technical question or unique opening requirement?
          </p>
          <a
            href="tel:+14693605805"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-all shadow-xs"
          >
            <PhoneCall className="h-3.5 w-3.5 text-red-400" />
            <span>Speak with a Glazing Estimator: (469) 360-5805</span>
          </a>
        </div>
      </div>
    </section>
  );
}
