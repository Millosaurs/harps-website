"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Twitter, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MCCWebsite() {
  const [contestSlide, setContestSlide] = useState(0);
  const [gamesSlide, setGamesSlide] = useState(0);
  const [merchSlide, setMerchSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  const storeUrl = "https://creatorsplash-shop.fourthwall.com/";

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setSlidesToShow(2);
        } else if (window.innerWidth < 768) {
          setSlidesToShow(3);
        } else if (window.innerWidth < 1024) {
          setSlidesToShow(4);
        } else {
          setSlidesToShow(5);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const merchSlides = [
    {
      title: "Season 1 Merch",
      description:
        "Creator Splash season 1 Merch is here! Want your own axolotl/sea themed merch? Press the button below to check it out!",
      image: "/heads/Axolotl_1.png",
      logoimage: "/logo.png",
    },
    {
      title: "Season 1 Merch",
      description:
        "Creator Splash season 1 Merch is here! Want your own axolotl/sea themed merch? Press the button below to check it out!",
      image: "/heads/Axolotl_2.png",
      logoimage: "/logo.png",
    },
    {
      title: "Season 5 Stickers",
      description:
        "Creator Splash season 1 Merch is here! Want your own axolotl/sea themed merch? Press the button below to check it out!",
      image: "/heads/Axolotl_3.png",
      logoimage: "/logo.png",
    },
  ];

  const contestSlides = [
    {
      title: "Creator Splash ?",
      description:
        "Creator Splash brings together eight teams of five creators. Each event features a rotating line-up from thirteen original games, but only nine will be played. To keep things fresh, players participate in a randomized wheel spin to determine which games make it into the voting pool. The games range from aerial combat and underwater salvage to spooky betrayal and much more. Unlike other events, there is no final game that must be played, and during the final three games, team points are hidden until the end.",
      image: "/merch.png",
    },
    {
      title: "Voting",
      description:
        "Voting is a key part of Creator Splash. Players vote for their favorite games, and the top nine games are selected for the event. This ensures that each event is unique and tailored to the players' preferences.",
      image: "/SH05.png",
    },
    {
      title: "Super Soakers",
      description:
        "Super Soakers is an action-packed, competitive shooter mixed with strategy and survival. Players gain coins upon shooting down floating balloons and killing opposing players using water pistols. Weapons switch every couple of minutes with different damages and ranges. As the match goes on, the border of the map gradually closes and respawn is disabled, putting pressure on the players to fight closer to each other and heightens tension. The teams need to switch between balloon popping and aggressive strategies and survival.",
      image: "/gamelogos/Super_Soakers.png",
    },
    {
      title: "Cloud Riders",
      description:
        "Teams spawn into the sky on floating clouds and fight to be the last team standing. Players collect gear from chests scattered across sky islands and eliminate enemy players in a fast-paced, one-life battle. Touching the ground removes your cloud until you're airborne again. The world border shrinks over time, forcing players into closer combat.",
      image: "/gamelogos/Cloud_Riders.png",
    },
    {
      title: "Flight School ",
      description:
        "Flight School is the classic Aerial Assault and Defense game. Teams of five split up with two players defending their team's balloon using cannons, while three take to the skies in planes to attack enemy balloons and shoot down rival pilots. Planes have unlimited respawns until their balloon is destroyed. Once the balloon is gone, remaining players are eliminated.",
      image: "/gamelogos/Flight_School.png",
    },
    {
      title: "Haunted Hull",
      description:
        "Teams board a haunted cruise ship under attack from ghostly Drowned Pirates and enemy cannon fire. To stay afloat, they must repair damage using parts from chests or by manually fixing broken areas. Attacks and random events grow more intense as the game progresses, increasing pressure on all teams. Players can revive teammates, but if the entire team is down or the ship hits 100% damage, they're eliminated. Survival demands teamwork, quick thinking, and nonstop repairs.",
      image: "/gamelogos/Haunted_Hull.png",
    },
    {
      title: "Nemesis Rising",
      description:
        "Nemesis Rising is the traditional Boss Battle game with a huge twist. Teams are assigned to different maps, with each of them having a customized mob boss. The more powerful a team's current standing, the more powerful the boss they have to fight. There are 3 lives for every player to defeat their respective boss. Less powerful bosses reward more coins, providing lower-scoring teams an opportunity to catch up. There are 45 different mob bosses players can face with a wide variety of attacks. ",
      image: "/gamelogos/Nemesis_Rising.png",
    },
    {
      title: "Sea Raceway",
      description:
        "Players race through underwater tracks on custom sea creatures, dodging various obstacles that change depending on the map. Speed is important, but going too fast for too long causes pressure to build in their diving mask, which can crack and break if not controlled. Stuck in first-person view and locked to their mount, racers must steer through sharp turns and dangerous obstacles while managing their speed. The goal is to finish as fast as possible without getting hit, slowed down, or knocked out by the environment.",
      image: "/gamelogos/Sea_Raceway.png",
    },
  ];

  const gamesSlides = [
    {
      title: "Super Soakers",
      description:
        "Super Soakers is an action-packed, competitive shooter mixed with strategy and survival. Players gain coins upon shooting down floating balloons and killing opposing players using water pistols. Weapons switch every couple of minutes with different damages and ranges. As the match goes on, the border of the map gradually closes and respawn is disabled, putting pressure on the players to fight closer to each other and heightens tension. The teams need to switch between balloon popping and aggressive strategies and survival.",
      image: "/gamelogos/Super_Soakers.png",
    },
    {
      title: "Cloud Riders",
      description:
        "Teams spawn into the sky on floating clouds and fight to be the last team standing. Players collect gear from chests scattered across sky islands and eliminate enemy players in a fast-paced, one-life battle. Touching the ground removes your cloud until you're airborne again. The world border shrinks over time, forcing players into closer combat.",
      image: "/gamelogos/Cloud_Riders.png",
    },
    {
      title: "Flight School",
      description:
        "Flight School is the classic Aerial Assault and Defense game. Teams of five split up with two players defending their team's balloon using cannons, while three take to the skies in planes to attack enemy balloons and shoot down rival pilots. Planes have unlimited respawns until their balloon is destroyed. Once the balloon is gone, remaining players are eliminated.",
      image: "/gamelogos/Flight_School.png",
    },
    {
      title: "Haunted Hull",
      description:
        "Teams board a haunted cruise ship under attack from ghostly Drowned Pirates and enemy cannon fire. To stay afloat, they must repair damage using parts from chests or by manually fixing broken areas. Attacks and random events grow more intense as the game progresses, increasing pressure on all teams. Players can revive teammates, but if the entire team is down or the ship hits 100% damage, they're eliminated. Survival demands teamwork, quick thinking, and nonstop repairs.",
      image: "/gamelogos/Haunted_Hull.png",
    },
    {
      title: "Nemesis Rising",
      description:
        "Nemesis Rising is the traditional Boss Battle game with a huge twist. Teams are assigned to different maps, with each of them having a customized mob boss. The more powerful a team's current standing, the more powerful the boss they have to fight. There are 3 lives for every player to defeat their respective boss. Less powerful bosses reward more coins, providing lower-scoring teams an opportunity to catch up. There are 45 different mob bosses players can face with a wide variety of attacks.",
      image: "/gamelogos/Nemesis_Rising.png",
    },
    {
      title: "Sea Raceway",
      description:
        "Players race through underwater tracks on custom sea creatures, dodging various obstacles that change depending on the map. Speed is important, but going too fast for too long causes pressure to build in their diving mask, which can crack and break if not controlled. Stuck in first-person view and locked to their mount, racers must steer through sharp turns and dangerous obstacles while managing their speed. The goal is to finish as fast as possible without getting hit, slowed down, or knocked out by the environment.",
      image: "/gamelogos/Sea_Raceway.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-162 sm:h-96 md:h-120 lg:h-162 overflow-hidden">
        {/* Blurred Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>

        {/* Centered Video Card Container */}
        <div className="relative z-30 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="relative max-w-4xl w-full">
            {/* Main Video Card */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="relative w-full h-120 sm:h-48 md:h-80 lg:h-120 object-cover"
              >
                <source src="/intro.mp4" type="video/mp4" />
              </video>

              {/* Text Overlay on Video Card */}
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 md:px-8">
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400 drop-shadow-lg"
                    style={{
                      fontFamily: "Impact, sans-serif",
                      textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
                      WebkitTextStroke: "1px rgba(0,0,0,0.5)",
                    }}
                  >
                    <br />
                    Creator Splash
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto drop-shadow-md font-medium">
                    Creator Splash is a Minecraft event bringing 40 creators
                    together to compete in a brand-new roster of Minecraft
                    games!
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-lg sm:text-xl">
                    <a
                      href="https://discord.com/invite/Fpa9Ps8NdR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 font-bold text-white">
                        DISCORD
                      </Button>
                    </a>
                    <a
                      href={storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 font-bold text-white w-full sm:w-auto">
                        MERCH
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Cards */}
      <section
        className="relative py-8 bg-[#1a202c] -mt-50 sm:-mt-32 md:-mt-40 lg:-mt-50 -bottom-1"
        style={{
          clipPath:
            "polygon(0 20%, 5% 10%, 10% 20%, 15% 10%, 20% 20%, 25% 10%, 30% 20%, 35% 10%, 40% 20%, 45% 10%, 50% 20%, 55% 10%, 60% 20%, 65% 10%, 70% 20%, 75% 10%, 80% 20%, 85% 10%, 90% 20%, 95% 10%, 100% 20%, 100% 100%, 0 100%)",
        }}
      >
        <div className="container mx-auto px-4 pt-30 sm:pt-20 md:pt-25 lg:pt-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card className="bg-blue-500 text-white p-6 hover:bg-blue-600 transition-colors cursor-pointer">
              <a
                href="https://x.com/CreatorSplash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <Twitter className="w-8 h-8 mr-3" />
                  <div>
                    <div className="text-sm font-semibold opacity-90">
                      TWITTER
                    </div>
                    <div className="font-bold">Follow us for news!</div>
                  </div>
                </div>
              </a>
            </Card>
            <Card className="bg-purple-600 text-white p-6 hover:bg-purple-700 transition-colors cursor-pointer">
              <a
                href="https://discord.com/invite/Fpa9Ps8NdR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <Users className="w-8 h-8 mr-3" />
                  <div>
                    <div className="text-sm font-semibold opacity-90">
                      DISCORD
                    </div>
                    <div className="font-bold">Meet other players!</div>
                  </div>
                </div>
              </a>
            </Card>
            <Card className="bg-red-600 text-white p-6 hover:bg-red-700 transition-colors cursor-pointer sm:col-span-2 md:col-span-1">
              <a
                href="https://www.youtube.com/@creatorsplash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <Eye className="w-8 h-8 mr-3" />
                  <div>
                    <div className="text-sm font-semibold opacity-90">
                      YOUTUBE
                    </div>
                    <div className="font-bold">Watch our videos!</div>
                  </div>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contest Section with Wavy Bottom */}
      <section className="relative bg-yellow-400 py-12 sm:py-16 md:py-20">
        {/* Blocky Top Border */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[#1a202c]">
          <div className="flex h-full">
            {[
              100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50,
              100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50,
            ].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-yellow-400"
                style={{
                  height: `${height}%`,
                  marginTop: `${100 - height}%`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              MINECRAFT&rsquo;S BIGGEST
            </h2>
            <h1
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-blue-900"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              CONTEST
            </h1>
          </div>

          <div className="relative max-w-6xl mx-auto h-auto md:h-[400px] pb-10">
            <div className="relative h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -left-4 sm:-left-8 md:-left-20 z-20 bg-white/80 hover:bg-white top-1/2 -translate-y-1/2 p-4 sm:p-6 md:p-8 rounded-full"
                onClick={() => setContestSlide(Math.max(0, contestSlide - 1))}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>

              {/* Main Image Container */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center h-full">
                <div className="relative h-64 sm:h-80 md:h-full flex items-center order-2 md:order-1">
                  <Image
                    src={
                      contestSlides[contestSlide].image || "/placeholder.svg"
                    }
                    alt={contestSlides[contestSlide].title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full aspect-video bg-white h-full object-cover"
                  />
                </div>

                <Card className="bg-white p-4 sm:p-6 md:p-8 shadow-lg relative h-auto md:h-full flex flex-col justify-center order-1 md:order-2">
                  <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {contestSlide + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-900">
                    {contestSlides[contestSlide].title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {contestSlides[contestSlide].description}
                  </p>
                </Card>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute -right-4 sm:-right-8 md:-right-20 z-20 bg-white/80 hover:bg-white top-1/2 -translate-y-1/2 p-4 sm:p-6 md:p-8 rounded-full"
                onClick={() =>
                  setContestSlide(
                    Math.min(contestSlides.length - 1, contestSlide + 1)
                  )
                }
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {contestSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 ${
                    index === contestSlide
                      ? "bg-red-600 rotate-45"
                      : "bg-blue-900/30 rounded-full"
                  }`}
                  onClick={() => setContestSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Wavy Bottom Border */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z"
              fill="#3b82f6"
            />
          </svg>
        </div>
      </section>

      {/* Games Section */}
      <section className="relative bg-[#3b82f6] py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              OUR CHAOTIC
            </h2>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              GAMES
            </h1>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Left Arrow */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-4 sm:-left-8 md:-left-20 z-10 bg-white/80 hover:bg-white top-1/2 -translate-y-1/2 p-4 sm:p-6 md:p-8 rounded-full"
              onClick={() => setGamesSlide(Math.max(0, gamesSlide - 1))}
              disabled={gamesSlide === 0}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </Button>

            {/* Carousel Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {gamesSlides
                .slice(gamesSlide, gamesSlide + slidesToShow)
                .map((game, index) => (
                  <Card
                    key={index}
                    className="bg-white overflow-hidden flex flex-col"
                  >
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      width={300}
                      height={200}
                      className="w-full h-24 sm:h-28 md:h-32 object-cover"
                    />
                    <div className="px-2 sm:px-3 md:px-4 py-2 text-center flex-1 flex flex-col">
                      <h2 className="font-bold text-sm sm:text-base md:text-lg mb-2">
                        {game.title}
                      </h2>
                    </div>
                  </Card>
                ))}
            </div>

            {/* Right Arrow */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 sm:-right-8 md:-right-20 z-10 bg-white/80 hover:bg-white top-1/2 -translate-y-1/2 p-4 sm:p-6 md:p-8 rounded-full"
              onClick={() =>
                setGamesSlide(
                  Math.min(gamesSlides.length - slidesToShow, gamesSlide + 1)
                )
              }
              disabled={gamesSlide >= gamesSlides.length - slidesToShow}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({
                length: Math.max(1, gamesSlides.length - slidesToShow + 1),
              }).map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 ${
                    idx === gamesSlide
                      ? "bg-blue-600 rotate-45"
                      : "bg-white/30 rounded-full"
                  }`}
                  onClick={() => setGamesSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Wavy Bottom Border */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,100 600,20 900,60 C1050,80 1150,30 1200,60 L1200,120 L0,120 Z"
              fill="#38bdf8"
            />
          </svg>
        </div>
      </section>

      {/* Merch section */}
      <section className="relative bg-gradient-to-b from-[#38bdf8] to-[#2563eb] py-16 sm:py-20 md:py-24 min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
        <div className="container flex flex-col mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-12 md:ml-64">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-[#1e293b]">
              Creator Splash Merch
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Large Circular Image */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-600 to-blue-800 p-3 sm:p-4 shadow-2xl md:z-11 md:mr-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center relative">
                  <Image
                    src={merchSlides[merchSlide].logoimage}
                    alt={merchSlides[merchSlide].title}
                    width={320}
                    height={320}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 bg-white rounded-xl shadow-xl p-6 sm:p-8 md:px-16 md:mr-6 md:-ml-24 md:z-10 md:h-64">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1e293b]">
                {merchSlides[merchSlide].title}
              </h3>
              <p className="text-[#1e293b] mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                {merchSlides[merchSlide].description}
              </p>
              <a href={storeUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded font-bold transition-colors w-full sm:w-auto">
                  GO TO THE STORE
                </Button>
              </a>
            </div>

            {/* Right Side - Navigation Dots */}
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 mt-6 md:mt-0">
              {merchSlides.map((slide, idx) => (
                <button
                  key={idx}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full transition-all duration-300 shadow-lg ${
                    idx === merchSlide
                      ? "bg-white scale-110 shadow-red-600/30 hover:bg-white"
                      : "bg-[#1a202c] hover:bg-white"
                  }`}
                  onClick={() => setMerchSlide(idx)}
                >
                  <div className="w-full h-full rounded-full flex items-center justify-center relative">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Wavy Bottom Border */}
        <div className="absolute -bottom-15 left-0 w-full overflow-hidden z-1000">
          <svg
            className="relative block w-full h-20 rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z"
              fill="#2563eb"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
