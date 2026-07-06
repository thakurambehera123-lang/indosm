import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { StatsSection } from './StatsSection';

export function LandingPage() {
  return (
    <div className="w-full space-y-0">
      <HeroSection />
      <StatsSection />
      <FeatureGrid />
    </div>
  );
}