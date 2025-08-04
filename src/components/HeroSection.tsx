import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative z-0 py-16">
      {/* Background blur */}
      <div className="absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 h-[200px] md:h-[400px] rounded-[100%] bg-red-600 opacity-10 blur-[60px] md:blur-[90px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <div className="text-center">
          <h1 className="tracking-tight transition font-display text-5xl font-bold leading-none md:text-[8rem] bg-gradient-to-r bg-clip-text text-transparent from-red-600 via-red-600 to-amber-500">
            Serverless <br />Data Platform
          </h1>
          <h2 className="mt-2 text-lg md:text-2xl text-gray-600">
            The single platform for all your data needs
          </h2>
          <div className="mt-6">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-xl">
              Start for Free 
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}