// components/hero-section.tsx
import { Youtube, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-block bg-red-500 text-white px-8 py-4 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] font-black text-xl">
            CREATOR SPLASH
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-8xl font-black text-white leading-tight drop-shadow-[4px_4px_0px_#000]">
            Chaos, Comedy &
            <span className="text-yellow-300 drop-shadow-[4px_4px_0px_#000]">
              {" "}
              Creator Events
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white font-bold max-w-3xl mx-auto leading-relaxed drop-shadow-[2px_2px_0px_#000]">
            Join Harp and the Creator Splash community for the most chaotic,
            hilarious Minecraft events on the internet!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="https://www.youtube.com/@creatorsplash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-red-500 text-white font-black text-xl rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_#000] transition-all duration-150 hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-[2px_2px_0px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] hover:bg-red-600 group"
            >
              <Youtube className="w-8 h-8 mr-4" />
              SUBSCRIBE NOW
            </a>

            <button className="inline-flex items-center justify-center px-10 py-5 bg-yellow-300 text-black font-black text-xl rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_#000] transition-all duration-150 hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-[2px_2px_0px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] hover:bg-yellow-400">
              <Play className="w-8 h-8 mr-4" />
              WATCH EVENTS
            </button>
          </div>

          {/* Scroll Indicator */}
        </div>
      </div>
    </section>
  );
}
