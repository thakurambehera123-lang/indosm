import React from 'react';
import { Heading, Container } from '@/components/ui';

export function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Heading level={1}>Our Mission</Heading>
          <p className="text-lg text-[var(--muted-foreground)] sm:text-xl leading-relaxed">
            INDOSM (Indian Developers Open Source Movement) is built by students, for students. We bridge the massive gap between academic curricula and actual modern software engineering realities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 space-y-3">
            <Heading level={3}>The Problem</Heading>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              Traditional education platforms limit software exploration to simple textbook slides and trivial homework templates. Students graduate without experience handling large codebases, deployment pipelines, or dynamic teamwork structures.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 space-y-3">
            <Heading level={3}>Our Answer</Heading>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              We form production groups to architect functional open-source systems. By building side-by-side with passionate peer developers, our members gain deep experience ship-testing real tools.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}