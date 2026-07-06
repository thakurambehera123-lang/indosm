import React from 'react';
import { Heading, Container, Button } from '@/components/ui';
import { SITE_CONFIG } from '@/constants/site-config';

export function CommunityPage() {
  const tracks = [
    { title: "Next-Gen Web Platforms", description: "Architecting high-performance web spaces using React, Next.js, and highly optimized rendering frameworks.", tag: "Frontend/Fullstack" },
    { title: "Distributed Tooling & Systems", description: "Building background services, high-throughput microservices, and structural open-source utilities.", tag: "Backend/DevOps" },
    { title: "Intelligent Application Layers", description: "Integrating production-grade neural networks, agent tools, and data models cleanly into production user experiences.", tag: "AI/Data Science" }
  ];

  return (
    <div className="py-16 sm:py-24">
      <Container className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Heading level={1}>Active Developer Tracks</Heading>
          <p className="text-[var(--muted-foreground)] text-lg"> Explore what our student teams are shipping right now.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tracks.map((track, i) => (
            <div key={i} className="flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <div className="space-y-4">
                <span className="inline-block rounded-full bg-[var(--muted)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                  {track.tag}
                </span>
                <Heading level={3} className="text-xl">{track.title}</Heading>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{track.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[var(--muted)]/40 border border-[var(--border)] p-8 text-center space-y-6 max-w-4xl mx-auto">
          <Heading level={2} className="text-2xl sm:text-3xl">Want to map out your own project framework?</Heading>
          <p className="text-sm text-[var(--muted-foreground)] max-w-xl mx-auto">
            Submit a proposal via our GitHub board. Once vetted, we provide core contributors, architecture feedback, and deployment ecosystems to make it active.
          </p>
          <a href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer" className="inline-block">
            <Button>Open a Proposal</Button>
          </a>
        </div>
      </Container>
    </div>
  );
}