'use client';

import React, { useState } from 'react';
import { Heading, Container } from '@/components/ui';

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border)] py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--primary)] cursor-pointer"
      >
        <span>{question}</span>
        <span className="ml-6 flex-shrink-0 text-xl font-light text-[var(--muted-foreground)]">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12 text-sm text-[var(--muted-foreground)] leading-relaxed transition-all">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FaqPage() {
  const faqs = [
    { question: "Is INDOSM completely free?", answer: "Yes, 100%. We are a pure open-source movement run by and for student developer networks. There are zero hidden fees or premium paywalls." },
    { question: "Can total beginners join?", answer: "Absolutely! While we focus heavily on building advanced production platforms, we guide dedicated beginners into active workflows through structured repository contributions." },
    { question: "How much time commitment do I need?", answer: "Since this is entirely open-source, you participate at your own pace. You can work continuously on core tracks or simply fix small bugs whenever you have spare time." }
  ];

  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-3xl space-y-12">
        <div className="text-center space-y-4">
          <Heading level={1}>Frequently Asked Questions</Heading>
          <p className="text-[var(--muted-foreground)]">Everything you need to understand about the movement ecosystem.</p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-4 shadow-sm">
          {faqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </Container>
    </div>
  );
}