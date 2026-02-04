import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustedBy } from '../components/TrustedBy';
import { FeaturePillars } from '../components/FeaturePillars';
import { ROICalculator } from '../components/ROICalculator';
import { ComparisonTable } from '../components/ComparisonTable';
import { LeadMagnet } from '../components/LeadMagnet';
import { Testimonials } from '../components/Testimonials';
import { Page } from '../types';

interface HomeProps {
  onOpenWaitlist: () => void;
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWaitlist, onNavigate }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Immistack",
    "url": "https://immistack.com",
    "logo": "https://immistack.com/logo.png",
    "description": "The operating system for modern global mobility firms. AI-driven immigration case management.",
    "sameAs": [
      "https://twitter.com/immistack",
      "https://linkedin.com/company/immistack"
    ]
  };

  return (
    <div className="animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Clean, Conversion-Focused Hero */}
      <div id="section-home">
        <HeroSection onOpenWaitlist={onOpenWaitlist} />
      </div>
      
      {/* "Trusted By" Strip */}
      <TrustedBy />
      
      {/* Main Value Proposition Sections */}
      <div id="section-features">
        <FeaturePillars />
      </div>

      {/* Competitive Comparison Table (Mapped to Pricing for quick access) */}
      <div id="section-pricing">
        <ComparisonTable onOpenWaitlist={onOpenWaitlist} />
      </div>

      {/* Social Proof (Mapped to About for 'Who we are') */}
      <div id="section-about">
        <Testimonials />
      </div>

      {/* Logic/Rational Sales Argument */}
      <ROICalculator onOpenWaitlist={onOpenWaitlist} />
      
      {/* Content Offer (Mapped to Resources) */}
      <div id="section-resources">
        <LeadMagnet />
      </div>
    </div>
  );
};