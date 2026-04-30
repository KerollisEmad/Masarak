'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturesList } from '@/components/FeaturesList';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { CompaniesSection } from '@/components/CompaniesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-10">
        <Hero />
        <FeaturesList />
        <HowItWorksSection />
        <CompaniesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

