import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative -mt-15 md:-mt-13 pb-20 overflow-hidden min-h-screen w-full flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroSection.png"
            alt="VictoRizz Background"
            fill
            className="object-cover object-top sm:object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Content */}
          <div className="text-center sm:text-left max-w-3xl bg-zinc-950/60 sm:bg-transparent p-8 sm:p-0 rounded-3xl backdrop-blur-md sm:backdrop-blur-none border border-white/10 sm:border-none shadow-2xl sm:shadow-none mt-16 sm:mt-0">
            {/* <div className="mb-6">
              <span className="text-gray-500 font-light tracking-wide">
                spott<span className="text-purple-400">*</span>
              </span>
            </div> */}

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Discover &<br />
              create amazing
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                events.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Whether you&apos;re hosting or attending, VictoRizz makes every event
              memorable. Join our community today.
            </p>

            <Link href="/explore">
              <Button size="xl" className="rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-orange-500 hover:from-blue-500 hover:via-purple-500 hover:to-orange-400 text-white font-bold tracking-wide shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 border-0">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
