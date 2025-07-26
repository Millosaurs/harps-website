// components/about-section.tsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] p-8">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                About
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong>Harp</strong> is a YouTuber, Twitch streamer, and
                  event host from South Wales, best known for his high-energy,
                  chaotic, and hilarious Minecraft events. As a Twitch Affiliate
                  and the driving force behind Creator Splash, Harp has built a
                  reputation for hosting unforgettable experiences complete with
                  event lore that keeps audiences hooked.
                </p>

                <p className="text-lg">
                  Beyond content creation, Harp is a highly trained swimmer and
                  Songwriter and made it to the UK Finals. Harp has collaborated
                  with some of the biggest names in the YouTube and Twitch
                  space. His unique blend of quick wit, humour, and
                  unpredictable storytelling has earned him a loyal community
                  that thrives on their signature brand of comedy and chaos.
                </p>

                <p className="text-lg">
                  Whether he's streaming, hosting, or making waves (literally
                  and figuratively), Harp is all about bringing people together
                  for fun, excitement, and the unexpected.
                </p>
              </div>
            </div>
          </div>

          {/* Image Container - 1:1 Aspect Ratio */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden bg-white">
              <Image
                src="/harp_abt.png"
                alt="About Harp - Creator Splash"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
