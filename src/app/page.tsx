// src/app/page.tsx
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 
import Home from "@/components/Home/Home";
import About from "@/components/Home/About";
import Informations from "@/components/Home/Info";

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
    answer: `Harp&apos;s schedule varies depending on the day so it just depends on when you catch him. Please keep in mind Harp usually has a pretty tight schedule so we&apos;re afraid the odds of him joining isn&apos;t the greatest.`,
  },
  {
    question: "Where can I watch Creator Splash content?",
    answer:
      "You can subscribe to the Creator Splash YouTube channel to keep up to date with videos.",
  },
];

export const metadata: Metadata = {
  title: "Creator Splash",
  description:
    "Learn about Harp and the Creator Splash community - the most chaotic Minecraft events on the internet!",
};

export default function Page() {
  return (
    <>
      <div className="min-h-screen  bg-[#1a202c]">
        {/* Hero Section with Angled Video Background */}
        <Home />

        {/* About Section */}
        <About />

        {/* Community Section */}
        <Informations />

        {/* FAQ Section - Darker Background */}
        <section className="py-20 px-4 bg-[#1a202c]">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="relative inline-block mb-6 animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                FAQ
              </h2>
              {/* White underline centered */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white animate-slide-in delay-100"></div>
            </div>

            <p className="text-lg text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
              We get asked lots of questions, lots of times, so we&apos;ve
              gathered the most frequently asked ones here. If you&apos;ve
              something to ask that&apos;s not covered, then do use our contact
              form and we&apos;ll get back to you as soon as we can!
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

        {/* We&apos;ve worked with Section */}
        <section className="py-16 px-4 bg-[#1a202c]">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="text-3xl font-black text-white mb-12 animate-fade-in">
              We&apos;ve worked with...
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
      </div>
    </>
  );
}
