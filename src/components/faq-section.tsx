// components/faq-section.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Creator Splash?",
      answer:
        "We are a dynamic Minecraft Event in the Gaming industry designed to bring content creators together through fun, engaging, and light hearted gameplay experiences. At Creator Splash, we create unique, high-energy events that encourage collaboration, creativity, and entertainment to viewers. Our goal is to provide a welcoming space where creators can connect, compete, and create memorable content while fostering a strong, inclusive community. Whether it's through innovative game formats or shared laughter, Creator Splash is all about bringing creators together in a way that feels fresh, exciting, and accessible to all.",
    },
    {
      question: "Our Mission",
      answer:
        "Our mission is to create an inclusive, welcoming space where creators can connect, collaborate, and entertain their audiences through unique and memorable gameplay experiences. Creator Splash exists to break down barriers between content creators by providing fun, inclusive, and light hearted gaming experiences.",
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
        "Harp&apos;s schedule varies depending on the day so it just depends on when you catch him. Please keep in mind Harp usually has a pretty tight schedule so we&apos;re afraid the odds of him joining isn&apos;t the greatest. The more notice you can give in advance the better!",
    },
    {
      question: "Where can I watch Creator Splash content?",
      answer:
        "You can subscribe to the Creator Splash YouTube channel to keep up to date with videos.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] p-8 lg:p-12">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            FAQ
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We get asked lots of questions, lots of times, so we&apos;ve
            gathered the most frequently asked ones here. If you&apos;ve
            something to ask that&apos;s not covered, then do use our contact
            form and we&apos;ll get back to you as soon as we can!
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_#000]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left font-black text-lg text-gray-900 flex items-center justify-between transition-all duration-150 hover:bg-gray-100 rounded-2xl active:translate-x-[1px] active:translate-y-[1px]"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t-2 border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
