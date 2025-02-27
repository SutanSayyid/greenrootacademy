"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const treeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-tree-grow");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (treeRef.current) {
      observer.observe(treeRef.current);
    }

    return () => {
      if (treeRef.current) {
        observer.unobserve(treeRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-mint-light to-white dark:from-forest-dark dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-dark dark:text-white leading-tight">
              Learn Tech.
              <br />
              Solve Climate.
              <br />
              <span className="text-primary">See Your Impact.</span>
            </h1>
            <p className="mt-6 text-lg text-charcoal dark:text-gray-300 max-w-lg">
              GreenRoot Academy offers tech-driven sustainability courses that help you build skills while making a real environmental impact through our Green Endowment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/dashboard">
                  View Impact Dashboard
                </Link>
              </Button>
            </div>
          </div>
          
          <div ref={treeRef} className="relative">
            <div className="relative w-full h-[400px] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')] bg-cover bg-center rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center space-x-2 bg-forest-dark/80 p-2 rounded-lg inline-block mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-sm font-medium">IoT Sensors Active</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-black/40 p-2 rounded-lg">
                      <div className="font-medium">CO₂ Absorbed</div>
                      <div className="text-mint-light text-lg font-bold">1.2kg</div>
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg">
                      <div className="font-medium">Moisture</div>
                      <div className="text-mint-light text-lg font-bold">68%</div>
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg">
                      <div className="font-medium">Growth</div>
                      <div className="text-mint-light text-lg font-bold">+2.3cm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Circuit pattern overlay */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                <path d="M10,10 L50,10 L50,50 L90,50 L90,90 L130,90 L130,130" stroke="#98FF98" strokeWidth="2" fill="none" />
                <path d="M150,10 L150,50 L190,50 L190,90 L230,90 L230,130" stroke="#98FF98" strokeWidth="2" fill="none" />
                <path d="M250,10 L250,50 L290,50 L290,90 L330,90 L330,130" stroke="#98FF98" strokeWidth="2" fill="none" />
                <path d="M10,150 L50,150 L50,190 L90,190 L90,230 L130,230" stroke="#98FF98" strokeWidth="2" fill="none" />
                <path d="M150,150 L150,190 L190,190 L190,230 L230,230" stroke="#98FF98" strokeWidth="2" fill="none" />
                <path d="M250,150 L250,190 L290,190 L290,230 L330,230" stroke="#98FF98" strokeWidth="2" fill="none" />
                <path d="M10,250 L50,250 L50,290 L90,290 L90,330 L130,330" stroke="#98FF98" strokeWidth="2" fill="none" />
                <path d="M150,250 L150,290 L190,290 L190,330 L230,330" stroke="#98FF98" strokeWidth="2" fill="none" />
                <path d="M250,250 L250,290 L290,290 L290,330 L330,330" stroke="#98FF98" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="5" fill="#98FF98" />
                <circle cx="150" cy="50" r="5" fill="#98FF98" />
                <circle cx="250" cy="50" r="5" fill="#98FF98" />
                <circle cx="50" cy="150" r="5" fill="#98FF98" />
                <circle cx="150" cy="150" r="5" fill="#98FF98" />
                <circle cx="250" cy="150" r="5" fill="#98FF98" />
                <circle cx="50" cy="250" r="5" fill="#98FF98" />
                <circle cx="150" cy="250" r="5" fill="#98FF98" />
                <circle cx="250" cy="250" r="5" fill="#98FF98" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white dark:text-gray-900">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
}