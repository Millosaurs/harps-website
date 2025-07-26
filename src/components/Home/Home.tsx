import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home" id="inicio">
      <div className="overflow-hidden max-w-[95%] max-h-[95vh] mx-auto">
        <div className="relative w-full h-[90vh] overflow-hidden">
          <video
            src="/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          <a
            className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white px-10 py-4 rounded-md font-bold text-[22px] uppercase flex items-center justify-center gap-4 transition-all duration-300 no-underline z-10 shadow-lg tracking-wider hover:bg-white hover:text-black hover:-rotate-2 hover:scale-110 hover:shadow-[0_8px_30px_rgba(255,0,0,0.6)]"
            href="https://www.youtube.com/@creatorsplash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-[30px]" />
            <span>SUBSCRIBE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
