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
    image: "/landscape/2.svg",
    scoring: [{ label: "Teams earn coins for eliminations and survival" }],
  },
  {
    slug: "cloud-riders",
    title: "Cloud Riders",
    description:
      "Teams spawn into the sky on floating clouds and fight to be the last team standing. Players collect gear from chests scattered across sky islands and eliminate enemy players in a fast-paced, one-life battle.Touching the ground removes your cloud until you're airborne again. The world border shrinks over time, forcing players into closer combat.",
    image: "/landscape/8.svg",
    scoring: [{ label: "Teams earn coins for eliminations and survival" }],
  },
  {
    slug: "flight-school",
    title: "Flight School",
    description:
      "Flight School is the classic Aerial Assault and Defense game. Teams of five split up with two players defending their team's balloon using cannons, while three take to the skies in planes to attack enemy balloons and shoot down rival pilots. Planes have unlimited respawns until their balloon is destroyed. Once the balloon is gone, remaining players are eliminated.",
    image: "/landscape/5.svg",
    scoring: [
      {
        label:
          "Teams earn points based on how long their blimp survives and by shooting down enemy planes.",
      },
    ],
  },
  {
    slug: "oxygen-heist",
    title: "Oxygen Heist",
    description:
      "Teams dive into a deep-sea trench to collect artifacts and fight over limited oxygen tanks scattered around the map. Artifacts can be cashed in at team-controlled zones for points, while holding a zone also awards passive points over time and unlimited oxygen whilst in a team controlled zone. Players only have one life, and if a team runs out of oxygen, they’re eliminated. As the match goes on, the border of the map gradually closes.",
    image: "/landscape/4.svg",
    scoring: [
      {
        label:
          "Teams earn points for various factors including: -Artifacts  -Oxygen Zones    -Time alive",
      },
    ],
  },
  {
    slug: "haunted-hull",
    title: "Haunted Hull",
    description:
      "Teams board a haunted cruise ship under attack, racing to keep it afloat as ghostly Drowned Pirates haunt the corridors and distant pirate ships bombard them with cannon fire. To prevent the ship from sinking, players must repair damaged parts scattered throughout the vessel. These repairs can be completed either by collecting parts from chests or by standing near broken sections to fix them. As the game progresses, random events and enemy attacks become more frequent, increasing the pressure on all teams. If a ship takes 100% damage, that team is eliminated. Players can revive fallen teammates, but if the entire team is down at once it’s over.",
    image: "/landscape/7.svg",
    scoring: [
      {
        label:
          "Teams earn coins for completing repairs and surviving until the timer ends.",
      },
    ],
  },
  {
    slug: "nemesis-rising",
    title: "Nemesis Rising",
    description:
      "Nemesis Rising is the traditional Boss Battle game with a huge twist. Teams are assigned to different maps, with each of them having a customized mob boss. The more powerful a team's current standing, the more powerful the boss they have to fight. There are 3 lives for every player to defeat their respective boss. Less powerful bosses reward more coins, providing lower-scoring teams an opportunity to catch up. There are 45 different mob bosses players can face with a wide variety of attacks.",
    image: "/landscape/6.svg",
    scoring: [],
  },
  {
    slug: "sea-raceway",
    title: "Sea Raceway",
    description:
      "Players race through underwater tracks on custom sea creatures, dodging various obstacles that change depending on the map. Speed is important, but going too fast for too long causes pressure to build in their diving mask, which can crack and break if not controlled. Stuck in first-person view and locked to their mount, racers must steer through sharp turns and dangerous obstacles while managing their speed. The goal is to finish as fast as possible without getting hit, slowed down, or knocked out by the environment.",
    image: "/landscape/1.svg",
    scoring: [
      {
        label:
          "Coins are awarded based on placement and time. Bonuses for clean runs and hazard avoidance.",
      },
    ],
  },
  {
    slug: "deep-divers",
    title: "Deep Divers",
    description:
      "In a deep-sea trench newly exposed by seismic activity, diver teams race to recover mysterious bioenergetic cores and rare lifeforms. But the trench is a living, reactive ecosystem. Every action risks disrupting its delicate balance. Teams must carefully navigate environmental chaos, avoid attracting hostile sea creatures, and outmanoeuvre enemy teams. The Eco Pressure System tracks every move. Mining, movement, and lights all increase the trench's awareness. If the ecosystem is pushed too far, it enters Hostile Mode. Sonar shuts down, currents shift unpredictably, and apex predators begin to hunt.",
    image: "/landscape/3.svg",
    scoring: [],
  },
  {
    slug: "multiverse",
    title: "Multiverse",
    description:
      "Multiverse is a 5v5 team-based battle game played across 7 rounds. After voting, players select their character. Each character has a unique playstyle like close combat or ranged. When all 5 players have chosen, a cutscene introduces the map you will be playing and pairs your team against another. Once a team is fully eliminated or time runs out, the game ends. After a quick team shuffle animation, a new round begins with fresh matchups and character selection. The game repeats this loop for 7 total rounds.",
    image: "/landscape/Multiverse.png",
    scoring: [],
  },
  {
    slug: "hunted",
    title: "Hunted",
    description:
      "Teams are dropped into a dense jungle environment where there are powerful mythical mobs. The goal is to work together to gather materials, build traps, and deal enough damage to be the team that lands the final blow. Each player has 3 lives. Once all team members are out of lives, their score is locked in and they enter spectator mode to watch the hunts unfold.",
    image: "/landscape/Hunted.png",
    scoring: [
      {
        label:
          "Teams earn points by interacting with the beast in different ways. Every sighting, trap, hit, and the final takedown all contribute to your score",
      },
      {
        label: "Spotting the beast: +5 points",
      },
      {
        label: "Successfully trapping it: +15 points",
      },
      {
        label: "Damaging the beast: +2 points per hit",
      },
      {
        label: "Landing the final blow: +50 points",
      },
    ],
  },
  {
    slug: "delivery-of-doom",
    title: "Delivery Of Doom",
    description:
      "Teams must work together to collect and deliver color-coded packages to their corresponding drop zones scattered across the map. Packages spawn randomly, and while some are small and easy to move solo, others are heavy and require two players to carry. The warehouse is filled with challenges such as moving platforms, timed gates, conveyor belts, and more that demand coordination, communication, and quick thinking.",
    image: "/landscape/Delivery_Of_Doom.png",
    scoring: [
      {
        label: "Teams earn coins for each correctly delivered package.",
      },
      {
        label: "Light package: +5 points",
      },
      {
        label:
          "Heavy (two-player) package: +15 points. Bonus points are awarded for speed and combo deliveries.",
      },
    ],
  },
  {
    slug: "redacted",
    title: " [REDACTED]",
    description:
      "This game only appears under extremely rare circumstances. If you see it, you're witnessing something very few ever have. Its rules, mechanics, and even its name... are classified.",
    image: "/landscape/Redacted.png",
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
