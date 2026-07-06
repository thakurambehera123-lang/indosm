import React from 'react';
import { Heading, Container, Button } from '@/components/ui';
import { SITE_CONFIG } from '@/constants/site-config';

export function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-4xl space-y-12">
        <div className="text-center space-y-4 mx-auto max-w-2xl">
          <Heading level={1}>Get in Touch</Heading>
          <p className="text-[var(--muted-foreground)] text-base">
            Have questions about tracks, partnership proposals, or project initiatives? Connect directly with our team members.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-3xl">💬</div>
              <Heading level={3} className="text-xl">Community Chat</Heading>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                For rapid support answers, dev group pairings, and active collaboration check-ins, hop directly into our chat system.
              </p>
            </div>
            <a href={SITE_CONFIG.links.discord} target="_blank" rel="noreferrer" className="block pt-4">
              <Button className="w-full">Open Discord Server</Button>
            </a>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-3xl">🎛️</div>
              <Heading level={3} className="text-xl">Code & Issues</Heading>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Found a bug inside this architecture system layout or want to scale feature layers out? Open an official issue ticket.
              </p>
            </div>
            <a href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer" className="block pt-4">
              <Button variant="outline" className="w-full">Go to GitHub</Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}