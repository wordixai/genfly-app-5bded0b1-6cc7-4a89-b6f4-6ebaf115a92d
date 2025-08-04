import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductTabs from '@/components/ProductTabs';
import RedisSection from '@/components/RedisSection';
import FastSection from '@/components/FastSection';
import TestimonialSection from '@/components/TestimonialSection';
import LogoCloud from '@/components/LogoCloud';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="text-center">
        <HeroSection />
        <ProductTabs />
        <RedisSection />
        <FastSection />
        <TestimonialSection />
        <LogoCloud />
      </main>
    </div>
  );
}