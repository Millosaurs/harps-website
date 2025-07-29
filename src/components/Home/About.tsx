import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="
        mt-6 relative text-white overflow-hidden py-32 flex items-center justify-center font-sans
         z-0
        lg:py-20
      "
    >
      {/* Background shape */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#0F4C5C",
          clipPath: "polygon(0% 0%, 100% 3%, 100% 97%, 0% 100%)",
        }}
        aria-hidden
      />
      <div
        className="
          flex flex-col max-w-[1200px] items-center justify-between gap-20 relative z-10
          lg:flex-row xl:gap-10 xl:text-center
        "
      >
        <div className="flex-1 max-w-[600px] xl:max-w-full">
          <h1
            className="
              text-5xl font-black uppercase relative
              xl:text-5xl
              after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-20 after:h-1 after:bg-white
              xl:after:left-1/2 xl:after:-translate-x-1/2
            "
          >
            About
          </h1>
          <p className="text-lg md:text-xl xl:text-xl leading-relaxed mt-5">
            Harp is a YouTuber, Twitch streamer, and event host from South
            Wales, best known for his high-energy, chaotic, and hilarious
            Minecraft events. As a Twitch Affiliate and the driving force behind
            Creator Splash, Harp has built a reputation for hosting
            unforgettable experiences complete with event lore that keeps
            audiences hooked.
          </p>
          <p className="text-lg md:text-xl xl:text-xl leading-relaxed mt-5">
            Beyond content creation, Harp is a highly trained swimmer and
            Songwriter and made it to the UK Finals. Harp has collaborated with
            some of the biggest names in the YouTube and Twitch space. His
            unique blend of quick wit, humour, and unpredictable storytelling
            has earned him a loyal community that thrives on their signature
            brand of comedy and chaos.
          </p>
          <p className="text-lg md:text-xl xl:text-xl leading-relaxed mt-5">
            Whether he’s streaming, hosting, or making waves (literally and
            figuratively), Harp is all about bringing people together for fun,
            excitement, and the unexpected.
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center w-full">
          <div className="relative">
            <Image
              src="/harp_abt.png"
              alt="About Harp"
              width={500}
              height={500}
              className="
                w-full max-w-[500px] rounded-lg shadow-[5px_5px_0px_white] -rotate-3
                xl:max-w-[400px] xl:rotate-0
              "
              priority
            />
            {/* Overlay image */}
            <div
              className="
                pointer-events-none select-none
                absolute w-[100px] h-[100px] top-[-20px] right-[-20px]
                xl:w-[60px] xl:h-[60px] xl:top-[-10px] xl:right-[-10px]
              "
              style={{ background: "none" }}
              aria-hidden
            >
              <Image
                src="/harp_abt.png"
                alt=""
                width={100}
                height={100}
                className="w-full h-full"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
