"use client";

import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const faqs = [
  {
    q: "Are materials included in the estimate?",
    a: "Yes, all quotes include premium materials as standard (Farrow & Ball, Little Greene, or Dulux Heritage) and all VAT. There are no hidden fees.",
  },
  {
    q: "How long does a standard 2-bedroom project take?",
    a: "A standard Refresh package usually takes 4-5 working days. Enhanced or Premium packages take between 7-10 days depending on prep requirements.",
  },
  {
    q: "What areas of London do you cover?",
    a: "We cover all of Central London (Zones 1-3) including Kensington, Chelsea, Fulham, Islington, Camden, and Westminster.",
  },
  {
    q: "Are your workers insured?",
    a: "Yes, we carry £5m Public Liability Insurance and all our decorators are fully vetted, skilled professionals with years of experience.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-outline-variant last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="text-body-md font-semibold text-on-surface font-manrope group-hover:text-secondary transition-colors duration-150">
          {q}
        </span>
        <span className="text-on-surface-variant flex-shrink-0 text-[24px] transition-colors">
          {open ? <MdExpandLess /> : <MdExpandMore />}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-body-md text-on-surface-variant leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-section-padding bg-surface-container-low">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="font-manrope font-semibold text-on-surface"
            style={{ fontSize: "32px" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
