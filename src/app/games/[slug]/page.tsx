// app/games/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { Labrada } from "next/font/google";

const games = [
  {
    slug: "super-soakers",
    title: "Super Soakers",
    description:
      "Super Soakers is an action-packed, competitive shooter mixed with strategy and survival. Players gain coins upon shooting down floating balloons and killing opposing players using water pistols. Weapons switch every couple of minutes with different damages and ranges. As the match goes on, the border of the map gradually closes and respawn is disabled, putting pressure on the players to fight closer to each other and heightens tension. The teams need to switch between balloon popping and aggressive strategies and survival.",
    image: "/gamelogos/Super_Soakers.png",
    scoring: [{ label: "Teams earn coins for eliminations and survival" }],
  },
  {
    slug: "cloud-riders",
    title: "Cloud Riders",
    description:
      "Teams spawn into the sky on floating clouds and fight to be the last team standing. Players collect gear from chests scattered across sky islands and eliminate enemy players in a fast-paced, one-life battle.Touching the ground removes your cloud until you're airborne again. The world border shrinks over time, forcing players into closer combat.",
    image: "/gamelogos/Cloud_Riders.png",
    scoring: [{ label: "Teams earn coins for eliminations and survival" }],
  },
  {
    slug: "flight-school",
    title: "Flight School",
    description: "",
    image: "/games/Flight_School.png",
    scoring: [],
  },
  {
    slug: "haunted-hull",
    title: "Haunted Hull",
    description: "",
    image: "/games/Haunted_Hull.png",
    scoring: [],
  },
  {
    slug: "nemesis-rising",
    title: "Nemesis Rising",
    description: "",
    image: "/games/Nemesis_Rising.png",
    scoring: [],
  },
  {
    slug: "sea-raceway",
    title: "Sea Raceway",
    description: "",
    image: "/games/Sea_Raceway.png",
    scoring: [],
  },
  {
    slug: "deep-divers",
    title: "Deep Divers",
    description: "",
    image: "/games/Deep_Divers.png",
    scoring: [],
  },
  {
    slug: "multiverse",
    title: "Multiverse",
    description: "",
    image: "/games/Multiverse.png",
    scoring: [],
  },
  {
    slug: "hunted",
    title: "Hunted",
    description: "",
    image: "/games/Hunted.png",
    scoring: [],
  },
  {
    slug: "delivery-of-doom",
    title: "Delivery Of Doom",
    description: "",
    image: "/games/Delivery_Of_Doom.png",
    scoring: [],
  },
  {
    slug: "redacted",
    title: " [REDACTED]",
    description: "",
    image: "/games/Redacted.png",
    scoring: [],
  },
];

export async function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);

  if (!game) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="text-md mb-6 text-gray-500">
        <a href="/events" className="hover:text-blue-600">
          Events
        </a>{" "}
        &gt;{" "}
        <a href="" className="hover:text-blue-600">
          {game.title}
        </a>
      </nav>

      {/* Page Title */}
      <h1 className="text-6xl font-bold mb-8 text-gray-900">{game.title}</h1>

      {/* Game Banner Image */}
      <div className="mb-8">
        <Image
          src={game.image}
          alt={game.title}
          width={1200}
          height={400}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Game Description */}
      <div className="mb-8">
        <p className="text-gray-700 text-base leading-relaxed">
          {game.description}
        </p>
      </div>

      {/* Scoring Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Scoring</h2>
        <p className="text-gray-700 mb-4">
          Coins are awarded for eliminations and capturing the objective.
        </p>

        <ul className="space-y-2">
          {game.scoring.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-700 mr-2">•</span>
              <span className="text-gray-700">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
