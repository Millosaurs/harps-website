// components/information-sections.tsx
import { Users, Calendar, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function InformationSections() {
  const sections = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "COMMUNITY",
      description:
        "The heart of Creator Splash's content is the incredible community that makes every stream, event, and video even more fun. Whether it's through chaotic Minecraft moments, genuinely funny jokes, or legendary event lore, the community is all about fun, friendship, and absolute madness.",
      additionalText:
        "Want to be part of the community? Join the Discord Server to chat, hang out, and get involved in upcoming events. Plus, stay up to date with announcements and creations on Creator Splash by following Creator Splash on Twitter/X.",
      bgColor: "bg-green-300",
      iconBg: "bg-green-500",
      imageSrc: "/comm_1.png",
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "EVENTS",
      description:
        "Harp is the host of Creator Splash, a thrilling New Minecraft Event that brings together Content creators from around the world for exciting, chaotic Minecraft challenges. Known for its unpredictable twists and funny moments, Creator Splash is more than just a fun event competition...it's an experience.",
      additionalText:
        "Each event is packed with exciting action, hilarious moments, and unforgettable rivalries, making it a must watch for fans of Minecraft and Content Creation.",
      link: "➡ Learn more about Creator Splash",
      bgColor: "bg-blue-300",
      iconBg: "bg-blue-500",
      imageSrc: "/comm_2.png",
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "MERCH",
      description:
        "Show your support for Creator Splash with our exclusive merchandise! From comfortable hoodies to stylish accessories, our merch lets you represent the community wherever you go.",
      additionalText:
        "All designs are created with love by the Creator Splash team and feature unique artwork that captures the chaotic energy of our events and community.",
      link: "➡ Shop Creator Splash Merch",
      bgColor: "bg-pink-300",
      iconBg: "bg-pink-500",
      imageSrc: "/merch.png", // Replace with actual merch image path
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto space-y-16">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Image Container */}
            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
              <div className="relative aspect-video rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden bg-white">
                <Image
                  src={section.imageSrc}
                  alt={`${section.title} image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Content */}
            <div
              className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
            >
              <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${section.iconBg} text-white rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_#000] mb-6`}
                >
                  {section.icon}
                </div>

                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  {section.title}
                </h3>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">{section.description}</p>
                  <p className="text-lg">{section.additionalText}</p>

                  {section.link && (
                    <a
                      href="#"
                      className="inline-block text-lg font-bold text-blue-600 hover:text-blue-800 transition-colors mt-4"
                    >
                      {section.link}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
