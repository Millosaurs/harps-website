// src/app/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Youtube,
  Twitch,
  Instagram,
  Twitter,
  Music,
} from "lucide-react";
import Navigation from "@/components/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Creator Splash?",
    answer:
      "We are a dynamic Minecraft Event in the Gaming industry designed to bring content creators together through fun, engaging, and light hearted gameplay experiences. At Creator Splash, we create unique, high-energy events that encourage collaboration, creativity, and entertainment to viewers.",
  },
  {
    question: "Our Mission",
    answer:
      "Our mission is to create an inclusive, welcoming space where creators can connect, collaborate, and entertain their audiences through unique and memorable gameplay experiences.",
  },
  {
    question: "How can I join?",
    answer:
      "Every month we host a fun new event in the community. To get involved make sure you follow us on Twitter and join the discord server!",
  },
  {
    question: "Can I stream or record the event for my own content?",
    answer:
      "Of course! Depending on the event we will suggest either streaming or recording.",
  },
  {
    question: "Can I ask Harp to be in my video?",
    answer:
      "Harp's schedule varies depending on the day so it just depends on when you catch him. Please keep in mind Harp usually has a pretty tight schedule so we're afraid the odds of him joining isn't the greatest.",
  },
  {
    question: "Where can I watch Creator Splash content?",
    answer:
      "You can subscribe to the Creator Splash YouTube channel to keep up to date with videos.",
  },
];

export const metadata: Metadata = {
  title: "About - Creator Splash",
  description:
    "Learn about Harp and the Creator Splash community - the most chaotic Minecraft events on the internet!",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen  bg-slate-900">
        {/* Hero Section with Angled Video Background */}
        <section className="relative h-[70vh] overflow-hidden">
          {/* Background Video Container with angle */}
          <div className="absolute inset-0 z-0 transform rotate-1 scale-105">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>
            {/* Blue overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-teal-600/40 to-slate-800/60" />
          </div>

          {/* Subscribe Button Overlay with animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <a
              href="https://youtube.com/@creatorsplash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="
    bg-red-600
    text-white
    font-bold
    px-8
    py-6
    text-xl
    rounded-xl
    border-none
    shadow-lg
    transition-all
    duration-300
    flex
    items-center
    gap-3
    hover:scale-105
    hover:rotate-[7deg]
    hover:shadow-[0_0_32px_8px_#f73737]
    hover:bg-white
    hover:text-black
  "
              >
                <Image
                  src="/yt.svg"
                  alt="YouTube Logo"
                  width={36}
                  height={36}
                />
                SUBSCRIBE
              </Button>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="my-20 py-20 px-4 bg-[#0F4C5C] skew-y-2 skew mb-10">
          <div className="container mx-auto max-w-7xl -skew-y-3">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in-left">
                <div className="relative">
                  <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
                    ABOUT
                  </h2>
                  {/* White underline */}
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-white animate-slide-in"></div>
                </div>

                <div className="space-y-6 text-gray-100 text-lg leading-relaxed">
                  <p className="animate-fade-in delay-100">
                    <strong className="text-white">Harp</strong> is a YouTuber,
                    Twitch streamer, and event host from South Wales, best known
                    for his high-energy, chaotic, and hilarious Minecraft
                    events. As a Twitch Affiliate and the driving force behind
                    Creator Splash, Harp has built a reputation for hosting
                    unforgettable experiences complete with event lore that
                    keeps audiences hooked.
                  </p>

                  <p className="animate-fade-in delay-200">
                    Beyond content creation, Harp is a highly trained swimmer
                    and Songwriter and made it to the UK Finals. Harp has
                    collaborated with some of the biggest names in the YouTube
                    and Twitch space. His unique blend of quick wit, humour, and
                    unpredictable storytelling has earned him a loyal community
                    that thrives on their signature brand of comedy and chaos.
                  </p>

                  <p className="animate-fade-in delay-300">
                    Whether he's streaming, hosting, or making waves (literally
                    and figuratively), Harp is all about bringing people
                    together for fun, excitement, and the unexpected.
                  </p>
                </div>
              </div>

              {/* Character Image with hover animation */}
              <div className="flex justify-center lg:justify-end animate-fade-in-right">
                <div className="relative group">
                  <Image
                    src="/harp_abt.png"
                    alt="Harp Character"
                    width={400}
                    height={400}
                    className="rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 px-4  bg-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image First with hover effect */}
              <div className="relative order-1 animate-fade-in-left">
                <div className="group">
                  <Image
                    src="/comm_1.png"
                    alt="Creator Splash Community"
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-2xl w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-2 animate-fade-in-right">
                <div className="relative">
                  <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
                    COMMUNITY
                  </h2>
                  {/* White underline */}
                  <div className="absolute -bottom-2 left-0 w-48 h-1 bg-white animate-slide-in delay-100"></div>
                </div>

                <div className="space-y-6 text-gray-100 text-lg leading-relaxed">
                  <p className="animate-fade-in delay-200">
                    The heart of Creator Splash's content is the incredible
                    community that makes every stream, event, and video even
                    more fun. Whether it's through chaotic Minecraft moments,
                    genuinely funny jokes, or legendary event lore, the
                    community is all about fun, friendship, and absolute
                    madness.
                  </p>

                  <p className="animate-fade-in delay-300">
                    Want to be part of the community? Join the Discord Server to
                    chat, hang out, and get involved in upcoming events. Plus,
                    stay up to date with announcements and creations on Creator
                    Splash by following Creator Splash on Twitter/X.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content First */}
              <div className="space-y-6 order-2 lg:order-1 animate-fade-in-left">
                <div className="relative">
                  <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
                    EVENTS
                  </h2>
                  {/* White underline */}
                  <div className="absolute -bottom-2 left-0 w-36 h-1 bg-white animate-slide-in delay-150"></div>
                </div>

                <div className="space-y-6 text-gray-100 text-lg leading-relaxed">
                  <p className="animate-fade-in delay-200">
                    Harp is the host of Creator Splash, a thrilling New
                    Minecraft Event that brings together Content creators from
                    around the world for exciting, chaotic Minecraft challenges.
                    Known for its unpredictable twists and funny moments,
                    Creator Splash is more than just a fun event
                    competition...it's an experience.
                  </p>

                  <p className="animate-fade-in delay-300">
                    Each event is packed with exciting action, hilarious
                    moments, and unforgettable rivalries, making it a must watch
                    for fans of Minecraft and Content Creation.
                  </p>

                  <div className="pt-4 animate-fade-in delay-400">
                    <Link
                      href="/events"
                      className="text-cyan-400 hover:text-cyan-300 font-bold text-lg transition-all duration-300 underline hover:no-underline inline-flex items-center group"
                    >
                      → Learn more about Creator Splash
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image with hover effect */}
              <div className="relative order-1 lg:order-2 animate-fade-in-right">
                <div className="group">
                  <Image
                    src="/comm_2.png"
                    alt="Creator Splash Events"
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-2xl w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Merch Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image First with hover effect */}
              <div className="relative order-1 animate-fade-in-left">
                <div className="group">
                  <Image
                    src="/merch.png"
                    alt="Creator Splash Merchandise"
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-2xl w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-2 animate-fade-in-right">
                <div className="relative">
                  <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
                    MERCH
                  </h2>
                  {/* White underline */}
                  <div className="absolute -bottom-2 left-0 w-28 h-1 bg-white animate-slide-in delay-100"></div>
                </div>

                <div className="space-y-6 text-gray-100 text-lg leading-relaxed">
                  <p className="animate-fade-in delay-200">
                    Show your support for Creator Splash with our exclusive
                    merchandise! From comfortable hoodies to stylish
                    accessories, our merch lets you represent the community
                    wherever you go.
                  </p>

                  <p className="animate-fade-in delay-300">
                    All designs are created with love by the Creator Splash team
                    and feature unique artwork that captures the chaotic energy
                    of our events and community.
                  </p>

                  <div className="pt-4 animate-fade-in delay-400">
                    <Link
                      href="/shop"
                      className="text-cyan-400 hover:text-cyan-300 font-bold text-lg transition-all duration-300 underline hover:no-underline inline-flex items-center group"
                    >
                      → Shop Creator Splash Merch
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Darker Background */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="relative inline-block mb-6 animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                FAQ
              </h2>
              {/* White underline centered */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white animate-slide-in delay-100"></div>
            </div>

            <p className="text-lg text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
              We get asked lots of questions, lots of times, so we've gathered
              the most frequently asked ones here. If you've something to ask
              that's not covered, then do use our contact form and we'll get
              back to you as soon as we can!
            </p>

            <Accordion
              type="single"
              collapsible
              className="w-full text-left bg-transparent"
            >
              {faqData.map((faq, idx) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${idx}`}
                  className="border-b border-gray-700"
                >
                  <AccordionTrigger className="text-white text-xl font-bold py-4 hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 text-lg pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* We've worked with Section */}
        <section className="py-16 px-4 bg-slate-900">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="text-3xl font-black text-white mb-12 animate-fade-in">
              We've worked with...
            </h3>

            {/* Partner logos grid with stagger animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-60">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className={`w-16 h-16 bg-gray-600 rounded-lg animate-pulse hover:bg-gray-500 transition-colors duration-300`}
                  style={{ animationDelay: `${index * 100}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with Social Icons */}
        <footer className="py-12 px-4 bg-slate-950">
          <div className="container mx-auto max-w-4xl">
            {/* Social Icons with hover animations */}
            <div className="flex justify-center space-x-6 mb-12">
              {[
                {
                  icon: Youtube,
                  href: "https://youtube.com/@creatorsplash",
                  color: "bg-red-600 hover:bg-red-700",
                },
                {
                  icon: Twitch,
                  href: "https://www.twitch.tv/harp6288/",
                  color: "bg-purple-600 hover:bg-purple-700",
                },
                {
                  icon: Music,
                  href: "https://open.spotify.com/user/6mootkdohaai8rb15od6fy0ag",
                  color: "bg-green-600 hover:bg-green-700",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/harp_6288",
                  color: "bg-pink-600 hover:bg-pink-700",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/CreatorSplash_",
                  color: "bg-blue-600 hover:bg-blue-700",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 ${social.color} text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Rest of footer content */}
            <div className="text-center space-y-8">
              <Image
                src="/logo.png"
                alt="Creator Splash Logo"
                width={120}
                height={40}
                className="mx-auto animate-fade-in"
              />

              <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm uppercase tracking-wide">
                {[
                  "ABOUT",
                  "PARTICIPANTS",
                  "CREATOR SPLASH",
                  "SHOP",
                  "NEWS",
                  "CONTACT US",
                ].map((item, index) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className={`hover:text-white transition-colors duration-300 hover:scale-105 animate-fade-in`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-800 text-gray-500 text-sm space-y-4 lg:space-y-0">
                <div className="flex space-x-6">
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Notice
                  </Link>
                  <Link
                    href="/cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help & FAQ
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <span>Looking for more?</span>
                  <Link
                    href="/careers"
                    className="text-white font-bold hover:underline transition-all duration-300 hover:scale-105"
                  >
                    Careers
                  </Link>
                </div>
              </div>

              <div className="text-gray-500 text-sm pt-4 animate-fade-in delay-500">
                © 2025 Creator Splash. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
