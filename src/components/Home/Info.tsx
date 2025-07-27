import Image from "next/image";

type InfoBlockProps = {
  image: string;
  title: string;
  paragraphs: string[];
  link?: { href: string; text: string };
  reverse?: boolean;
};

function InfoBlock({
  image,
  title,
  paragraphs,
  link,
  reverse = false,
}: InfoBlockProps) {
  // Underline alignment logic
  // Left for normal, right for reverse, center on mobile
  let underlineAlign = "ml-0";
  if (reverse) underlineAlign = "ml-auto";
  // On small screens, always center
  const underlineClasses =
    "block h-1 w-20 bg-white my-2 md:mx-auto md:ml-0 md:mr-0";

  return (
    <div
      className={`
        flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}
        items-center justify-center space-x-0 lg:space-x-20 lg:gap-0
        text-center lg:text-left
      `}
    >
      <div className="max-w-[600px] w-full">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-[600px] w-full px-0 lg:px-8 mt-8 lg:mt-0">
        <h1
          className={`
            text-4xl md:text-5xl font-extrabold uppercase mb-2 text-white font-sans
          `}
        >
          {title}
        </h1>
        <span className={`${underlineAlign} ${underlineClasses}`} />
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base md:text-lg leading-relaxed mt-5 font-sans text-white"
          >
            {p}
          </p>
        ))}
        {link && (
          <a
            href={link.href}
            className="block font-extrabold text-base md:text-lg mt-5 text-white hover:underline"
          >
            {link.text}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Informations() {
  return (
    <section
      className="
        flex flex-col gap-8 mt-[100px] mb-[50px]
        font-sans  py-8
        md:gap-[80px] md:mt-[50px]
        container mx-auto px-4
      "
      id="inicio"
    >
      <InfoBlock
        image="/comm_1.png"
        title="COMMUNITY"
        paragraphs={[
          "The heart of Creator Splash’s content is the incredible community that makes every stream, event, and video even more fun. Whether it’s through chaotic Minecraft moments, genuinely funny jokes, or legendary event lore, the community is all about fun, friendship, and absolute madness.",
          "Want to be part of the community? Join the Discord Server to chat, hang out, and get involved in upcoming events. Plus, stay up to date with announcements and creations on Creator Splash by following Creator Splash on Twitter/X.",
        ]}
      />
      <InfoBlock
        image="/comm_2.png"
        title="EVENTS"
        paragraphs={[
          "Harp is the host of Creator Splash, a thrilling New Minecraft Event that brings together Content creators from around the world for exciting, chaotic Minecraft challenges. Known for its unpredictable twists and funny moments, Creator Splash is more than just a fun event competition...it’s an experience.",
          "Each event is packed with exciting action, hilarious moments, and unforgettable rivalries, making it a must watch for fans of Minecraft and Content Creation.",
        ]}
        link={{
          href: "#creatorsplash",
          text: "➡ Learn more about Creator Splash",
        }}
        reverse
      />
      <InfoBlock
        image="/merch.png"
        title="MERCH"
        paragraphs={[
          "Harp is the host of Creator Splash, a thrilling New Minecraft Event that brings together Content creators from around the world for exciting, chaotic Minecraft challenges. Known for its unpredictable twists and funny moments, Creator Splash is more than just a fun event competition...it’s an experience.",
          "Each event is packed with exciting action, hilarious moments, and unforgettable rivalries, making it a must watch for fans of Minecraft and Content Creation.",
        ]}
        link={{
          href: "#creatorsplash",
          text: "➡ Learn more about Creator Splash",
        }}
      />
    </section>
  );
}
