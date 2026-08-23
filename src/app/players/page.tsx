"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Type definitions
interface Player {
    name: string;
    avatar: string;
}

interface Team {
    rank: number;
    name: string;
    score: number;
    color: string;
    players: Player[];
    icon: string;
}

interface Individual {
    rank: number;
    name: string;
    score: number;
    avatar: string;
}

interface Game {
    id: string;
    name: string;
    icon: string;
    color: string;
    tableName: string;
}

interface GameData {
    teams: Team[];
    individuals: Individual[];
}

interface ApiResponse<T> {
    data: T;
    success?: boolean;
    message?: string;
}

// Game configurations with their respective SVG icons
const GAMES: Game[] = [
    {
        id: "flight_school",
        name: "Flight School",
        icon: "/gamelogos/FlightSchool.svg",
        color: "#E94B3C",
        tableName: "flight_school_leaderboard",
    },
    {
        id: "haunted_hull",
        name: "Haunted Hull",
        icon: "/gamelogos/HauntedHull.svg",
        color: "#F39C12",
        tableName: "haunted_hull_leaderboard",
    },

    {
        id: "sea_raceway",
        name: "Sea Raceway",
        icon: "/gamelogos/SeaRaceway.svg",
        color: "#1ABC9C",
        tableName: "sea_raceway_leaderboard",
    },
    {
        id: "super_soakers",
        name: "Super Soakers",
        icon: "/gamelogos/SuperSoakers.svg",
        color: "#E67E22",
        tableName: "super_soakers_leaderboard",
    },

    {
        id: "multiverse",
        name: "multiverse",
        icon: "/gamelogos/Multiverse.svg",
        color: "#8E44AD",
        tableName: "unknown_leaderboard",
    },
    {
        id: "unknown2",
        name: "unknown",
        icon: "/gamelogos/placeholder.svg",
        color: "#8E44AD",
        tableName: "unknown_leaderboard",
    },
    {
        id: "cloud_riders",
        name: "Cloud Riders",
        icon: "/gamelogos/placeholder.svg",
        color: "#4A90E2",
        tableName: "cloud_riders_leaderboard",
    },
    {
        id: "oxygen_heist",
        name: "Oxygen Heist",
        icon: "/gamelogos/placeholder.svg",
        color: "#9B59B6",
        tableName: "oxygen_heist_leaderboard",
    },
    {
        id: "unknown3",
        name: "unknown",
        icon: "/gamelogos/placeholder.svg",
        color: "#8E44AD",
        tableName: "unknown_leaderboard",
    },
    {
        id: "nemesis_rising",
        name: "Nemesis Rising",
        icon: "/gamelogos/placeholder.svg",
        color: "#F1C40F",
        tableName: "nemesis_rising_leaderboard",
    },
];

// ⭐ ADDED: New constant for all team icons
const TEAM_ICONS = [
    "/teamIcons/dolphin_logo.svg",
    "/teamIcons/jellyfish_logo.svg",
    "/teamIcons/octopus_logo.svg",
    "/teamIcons/orca_logo.svg",
    "/teamIcons/seahorse_logo.svg",
    "/teamIcons/stingray_logo.svg",
    "/teamIcons/swordfish_logo.svg",
    "/teamIcons/turtle_logo.svg",
];

// Random Minecraft usernames for demo
const MINECRAFT_USERNAMES = [
    "Steve",
    "Alex",
    "Notch",
    "Herobrine",
    "Creeper",
    "Enderman",
    "Skeleton",
    "Zombie",
    "Spider",
    "Witch",
    "Villager",
    "IronGolem",
    "Blaze",
    "Ghast",
    "Piglin",
    "Wither",
    "EnderDragon",
    "Guardian",
    "Shulker",
    "Phantom",
    "Ravager",
    "Pillager",
    "Vindicator",
    "Evoker",
    "Vex",
    "Silverfish",
    "Endermite",
    "Slime",
    "MagmaCube",
    "Strider",
];

// Function to get Minecraft player head URL
const getMinecraftHead = (username: string, size: number = 32): string => {
    return `https://mc-heads.net/avatar/${encodeURIComponent(username)}/${size}`;
};

// Function to get random Minecraft username
const getRandomMinecraftUsername = (): string => {
    return MINECRAFT_USERNAMES[
        Math.floor(Math.random() * MINECRAFT_USERNAMES.length)
    ];
};

// Generate sample data with random Minecraft heads
const generateSampleData = (): Record<string, GameData> => {
    const data: Record<string, GameData> = {};

    GAMES.forEach((game) => {
        // Generate teams with random Minecraft player heads
        const teams: Team[] = [];

        // ⭐ UPDATED: Team names changed to the "Team [Animal Name]" format.
        const teamNames = [
            "Team Dolphin",
            "Team Jellyfish",
            "Team Octopus",
            "Team Orca",
            "Team Seahorse",
            "Team Stingray",
            "Team Swordfish",
            "Team Turtle",
        ]; // Team colors remain matched to the order of icons

        const teamColors = [
            "#2196F3", // Dolphin Blue
            "#9C27B0", // Jellyfish Purple
            "#8E44AD", // Octopus Dark Purple
            "#34495E", // Orca Deep Sea Blue
            "#F1C40F", // Seahorse Gold
            "#7F8C8D", // Stingray Slate
            "#C0392B", // Swordfish Crimson
            "#27AE60", // Turtle Green
        ];

        for (let i = 0; i < 8; i++) {
            const players: Player[] = [];
            for (let j = 0; j < 8; j++) {
                players.push({
                    name: getRandomMinecraftUsername(),
                    avatar: getRandomMinecraftUsername(),
                });
            }

            teams.push({
                rank: i + 1,
                name: teamNames[i],
                score: 0,
                color: teamColors[i],
                players,
                icon: TEAM_ICONS[i],
            });
        } // Sort teams by score

        teams.sort((a, b) => b.score - a.score);
        teams.forEach((team, index) => {
            team.rank = index + 1;
        }); // Generate individuals with random Minecraft heads

        const individuals: Individual[] = [];
        for (let i = 0; i < 8; i++) {
            individuals.push({
                rank: i + 1,
                name: "Axolotl",
                score: 0,
                avatar: getRandomMinecraftUsername(),
            });
        } // Sort individuals by score

        individuals.sort((a, b) => b.score - a.score);
        individuals.forEach((individual, index) => {
            individual.rank = index + 1;
        });

        data[game.id] = { teams, individuals };
    });

    return data;
};

const SAMPLE_DATA = generateSampleData();

interface GameIconProps {
    game: Game;
    isSelected: boolean;
    onClick: (game: Game) => void;
}

const GameIcon: React.FC<GameIconProps> = ({ game, isSelected, onClick }) => (
    <button
        onClick={() => onClick(game)}
        className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-20 lg:h-20 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-200 lg:transform lg:hover:scale-110 focus:outline-none p-0`}
        style={{
            backgroundColor: isSelected ? `${game.color}40` : `${game.color}20`,
        }}
        title={game.name}
        type="button"
    >
        <Image
            src={game.icon}
            alt={game.name}
            width={86}
            height={86}
            className="w-full h-full object-fit"
        />
    </button>
);

interface MinecraftHeadProps {
    username: string;
    size?: number;
    className?: string;
}

const MinecraftHead: React.FC<MinecraftHeadProps> = ({
    username,
    size = 32,
    className = "",
}) => {
    const [error, setError] = useState(false);

    return (
        <div
            className={`relative ${className}`}
            style={{ width: size, height: size }}
        >
            {!error ? (
                <Image
                    src={getMinecraftHead(username, size)}
                    alt={`${username}'s Minecraft head`}
                    width={size}
                    height={size}
                    className="rounded-sm pixelated"
                    style={{ imageRendering: "pixelated" }}
                    onError={() => setError(true)}
                    unoptimized
                />
            ) : (
                <div
                    className="bg-gray-600 rounded-sm flex items-center justify-center text-white text-xs font-bold"
                    style={{ width: size, height: size }}
                >
                    {username[0]?.toUpperCase() || "?"}
                </div>
            )}
        </div>
    );
};

interface TeamRowProps {
    team: Team;
    gameId: string;
}

const TeamRow: React.FC<TeamRowProps> = ({ team, gameId }) => (
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg mb-2 sm:mb-3 md:mb-3 lg:mb-3 hover:bg-gray-700/70 transition-all duration-200 group">
        {/* Mobile Layout */}
        <div className="lg:hidden p-3">
            {/* Top row: Team name and score */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                        <Image
                            src={team.icon}
                            width={40}
                            height={40}
                            alt={team.name}
                            className="w-full h-full"
                        />
                    </div>
                    <span className="text-white text-base font-bold group-hover:text-yellow-200 transition-colors">
                        {team.name}
                    </span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-900/50 px-3 py-1.5 rounded-full">
                    <span className="text-yellow-400 font-bold text-lg">
                        {team.score.toLocaleString()}
                    </span>
                    <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="24"
                        height="24"
                    >
                        <title>points</title>
                        <defs>
                            <image
                                width="32"
                                height="32"
                                id="img1"
                                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAEJQTFRFMzMzOi4uMTEx90A191k1dzsz91Y191c291Q291M190o591A19081900190w190k1Qyws90c190Y190U190M190I1eRUEzQAAABZ0Uk5TFBYV//8e/////////////xf//////+1d9cUAAAEESURBVHicpZABc4IwDIVfjFjZHKI3//8P3E6RORRrxkqhpVS33Y6Wo8nrR0Ie4Y9F/wWIviZWmAow5FeACU1MxMAdEQKJ7kskOgJmbvZxDyvT+OcCoteoi6mXB4CpsUQHsMxvVuc5XHBjkaEFS5dyAi2h4KawginZAQx/74GFiHmgGlBt8CvP9AgAL7Us0ZhNZl84uUhkFKdXSXE2kXnz4uzsGJzklKo+fELl7QqtzvBpz2eUkdXuw1rZs1bVQ4BVvdI1VHJaneQeyD+yMitbK9AGL0UM8Pq4PooLgXgKzou8kAeJBzY4bN775PVgshgA/H1L+B4O2O23b8HEu30M/LimA9/1j3IhQAi4igAAAABJRU5ErkJggg=="
                            />
                        </defs>
                        <style></style>
                        <use id="Background" href="#img1" x="0" y="0" />
                    </svg>
                </div>
            </div>
            {/* Bottom row: Player heads */}
            <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                    {team.players.slice(0, 5).map((player, idx) => (
                        <div
                            key={`${gameId}-${team.name}-player-${idx}`}
                            className="border-2 border-gray-500 rounded-sm overflow-hidden"
                        >
                            <MinecraftHead username={player.avatar} size={32} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Desktop Layout - UNCHANGED */}
        <div className="hidden lg:grid grid-cols-3 items-center p-4 gap-0">
            {/* Left section: Team icon and name */}
            <div className="flex items-center space-x-2 justify-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <Image
                        src={team.icon}
                        width={32}
                        height={32}
                        alt={team.name}
                        className="w-full h-full"
                    />
                </div>
                <span className="text-white text-base font-semibold group-hover:text-yellow-200 transition-colors">
                    {team.name}
                </span>
            </div>

            {/* Center section: Player heads */}
            <div className="flex items-center justify-center pl-16">
                <div className="flex space-x-1">
                    {team.players.slice(0, 5).map((player, idx) => (
                        <div
                            key={`${gameId}-${team.name}-player-${idx}`}
                            className="border border-gray-500 rounded-sm overflow-hidden"
                        >
                            <MinecraftHead username={player.avatar} size={32} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right section: Score */}
            <div className="flex items-center justify-end">
                <div className="flex items-center space-x-2 bg-gray-900/50 px-3 py-1 rounded-full">
                    <span className="text-yellow-400 font-bold text-lg">
                        {team.score.toLocaleString()}
                    </span>
                    <span className="text-yellow-400 text-sm">
                        <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="32"
                            height="32"
                        >
                            <title>points</title>
                            <defs>
                                <image
                                    width="32"
                                    height="32"
                                    id="img1"
                                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAEJQTFRFMzMzOi4uMTEx90A191k1dzsz91Y191c291Q291M190o591A19081900190w190k1Qyws90c190Y190U190M190I1eRUEzQAAABZ0Uk5TFBYV//8e/////////////xf//////+1d9cUAAAEESURBVHicpZABc4IwDIVfjFjZHKI3//8P3E6RORRrxkqhpVS33Y6Wo8nrR0Ie4Y9F/wWIviZWmAow5FeACU1MxMAdEQKJ7kskOgJmbvZxDyvT+OcCoteoi6mXB4CpsUQHsMxvVuc5XHBjkaEFS5dyAi2h4KawginZAQx/74GFiHmgGlBt8CvP9AgAL7Us0ZhNZl84uUhkFKdXSXE2kXnz4uzsGJzklKo+fELl7QqtzvBpz2eUkdXuw1rZs1bVQ4BVvdI1VHJaneQeyD+yMitbK9AGL0UM8Pq4PooLgXgKzou8kAeJBzY4bN775PVgshgA/H1L+B4O2O23b8HEu30M/LimA9/1j3IhQAi4igAAAABJRU5ErkJggg=="
                                />
                            </defs>
                            <style></style>
                            <use id="Background" href="#img1" x="0" y="0" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
);

interface IndividualRowProps {
    player: Individual;
    gameId: string;
}

const IndividualRow: React.FC<IndividualRowProps> = ({ player }) => (
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg mb-2 sm:mb-3 md:mb-3 lg:mb-3 hover:bg-gray-700/70 transition-all duration-200 group">
        {/* Mobile Layout */}
        <div className="lg:hidden p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0 ${
                            player.rank === 1
                                ? "bg-yellow-500"
                                : player.rank === 2
                                  ? "bg-gray-400"
                                  : player.rank === 3
                                    ? "bg-amber-600"
                                    : "bg-gray-600"
                        }`}
                    >
                        {player.rank}
                    </div>
                    <div className="border-2 border-gray-500 rounded-sm overflow-hidden flex-shrink-0">
                        <MinecraftHead username={player.avatar} size={36} />
                    </div>
                    <span className="text-white text-base font-semibold group-hover:text-yellow-200 transition-colors truncate">
                        {player.name}
                    </span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-900/50 px-3 py-1.5 rounded-full ml-2 flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-lg">
                        {player.score.toLocaleString()}
                    </span>
                    <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="24"
                        height="24"
                    >
                        <title>points</title>
                        <defs>
                            <image
                                width="32"
                                height="32"
                                id="img1"
                                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAEJQTFRFMzMzOi4uMTEx90A191k1dzsz91Y191c291Q291M190o591A19081900190w190k1Qyws90c190Y190U190M190I1eRUEzQAAABZ0Uk5TFBYV//8e/////////////xf//////+1d9cUAAAEESURBVHicpZABc4IwDIVfjFjZHKI3//8P3E6RORRrxkqhpVS33Y6Wo8nrR0Ie4Y9F/wWIviZWmAow5FeACU1MxMAdEQKJ7kskOgJmbvZxDyvT+OcCoteoi6mXB4CpsUQHsMxvVuc5XHBjkaEFS5dyAi2h4KawginZAQx/74GFiHmgGlBt8CvP9AgAL7Us0ZhNZl84uUhkFKdXSXE2kXnz4uzsGJzklKo+fELl7QqtzvBpz2eUkdXuw1rZs1bVQ4BVvdI1VHJaneQeyD+yMitbK9AGL0UM8Pq4PooLgXgKzou8kAeJBzY4bN775PVgshgA/H1L+B4O2O23b8HEu30M/LimA9/1j3IhQAi4igAAAABJRU5ErkJggg=="
                            />
                        </defs>
                        <style></style>
                        <use id="Background" href="#img1" x="0" y="0" />
                    </svg>
                </div>
            </div>
        </div>

        {/* Desktop Layout - UNCHANGED */}
        <div className="hidden lg:flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                        player.rank === 1
                            ? "bg-yellow-500"
                            : player.rank === 2
                              ? "bg-gray-400"
                              : player.rank === 3
                                ? "bg-amber-600"
                                : "bg-gray-600"
                    }`}
                >
                    {player.rank}
                </div>
                <div className="border-2 border-gray-500 rounded-sm overflow-hidden">
                    <MinecraftHead username={player.avatar} size={40} />
                </div>
                <span className="text-white text-base font-semibold group-hover:text-yellow-200 transition-colors">
                    {player.name}
                </span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/50 px-3 py-1 rounded-full">
                <span className="text-yellow-400 font-bold text-lg">
                    {player.score.toLocaleString()}
                </span>
                <span className="text-yellow-400 text-sm">
                    <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                    >
                        <title>points</title>
                        <defs>
                            <image
                                width="32"
                                height="32"
                                id="img1"
                                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAEJQTFRFMzMzOi4uMTEx90A191k1dzsz91Y191c291Q291M190o591A19081900190w190k1Qyws90c190Y190U190M190I1eRUEzQAAABZ0Uk5TFBYV//8e/////////////xf//////+1d9cUAAAEESURBVHicpZABc4IwDIVfjFjZHKI3//8P3E6RORRrxkqhpVS33Y6Wo8nrR0Ie4Y9F/wWIviZWmAow5FeACU1MxMAdEQKJ7kskOgJmbvZxDyvT+OcCoteoi6mXB4CpsUQHsMxvVuc5XHBjkaEFS5dyAi2h4KawginZAQx/74GFiHmgGlBt8CvP9AgAL7Us0ZhNZl84uUhkFKdXSXE2kXnz4uzsGJzklKo+fELl7QqtzvBpz2eUkdXuw1rZs1bVQ4BVvdI1VHJaneQeyD+yMitbK9AGL0UM8Pq4PooLgXgKzou8kAeJBzY4bN775PVgshgA/H1L+B4O2O23b8HEu30M/LimA9/1j3IhQAi4igAAAABJRU5ErkJggg=="
                            />
                        </defs>
                        <style></style>
                        <use id="Background" href="#img1" x="0" y="0" />
                    </svg>
                </span>
            </div>
        </div>
    </div>
);

interface LoadingSpinnerProps {
    game: Game;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ game }) => (
    <div className="text-center py-12">
        <div className="relative w-16 h-16 mx-auto">
            <Image
                src="/heads/Axolotl_1.png"
                alt="Loading"
                width={64}
                height={64}
                className="w-16 h-16 animate-spin"
            />
        </div>
        <p className="text-gray-300 mt-6 text-lg">
            Loading {game.name} leaderboards...
        </p>
    </div>
);

interface ErrorStateProps {
    error: string;
    onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => (
    <div className="text-center py-8">
        <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-red-300 text-lg">⚠️ {error}</p>
            <button
                onClick={onRetry}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                type="button"
            >
                Try Again
            </button>
        </div>
    </div>
);

interface EmptyStateProps {
    title: string;
    gameName: string;
    icon: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, gameName, icon }) => (
    <div className="text-center py-8 text-gray-400">
        <Image
            src={icon}
            alt={gameName}
            width={96}
            height={96}
            className="w-24 h-24 mx-auto mb-4 opacity-50"
        />
        <p>
            No {title.toLowerCase()} data available for {gameName}
        </p>
    </div>
);

import { motion, AnimatePresence, Variants } from "framer-motion";

const ghostVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: (i: number) => ({
        opacity: [0, 0.8, 0], // Fades in, then out
        y: -120, // Moves up
        scale: 1,
        transition: {
            delay: i * 0.15, // Staggered start time for each ghost
            duration: 1.8,
            ease: "easeOut", // This is now correctly typed
        },
    }),
};

// --- A map for all your custom game animations ---
// ADD ALL THE NEW ANIMATION COMPONENTS BELOW HERE

// Animation for Flight School: Paper airplanes flying up
const FlightSchoolAnimation = () => (
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                    top: `${10 + i * 10}%`, // Distribute them vertically
                    left: `-50px`, // Start off-screen to the left
                }}
                initial={{ opacity: 0, x: -50, rotate: 0 }}
                animate={{
                    opacity: [0, 1, 1, 0], // Fade in, stay visible, then fade out
                    x: "100vw", // Fly across to the right edge of the viewport
                    rotate: [0, 10, -10, 0], // Slight wobble as it flies
                }}
                transition={{
                    delay: i * 0.5, // Staggered start times
                    duration: 8 + Math.random() * 4, // Longer duration for slower flight, random variation
                    ease: "linear", // Consistent speed
                    repeat: Infinity, // Keep flying indefinitely
                    repeatType: "loop",
                }}
            >
                ᯓ✈︎
            </motion.div>
        ))}
    </div>
);

// Animation for Sea Raceway: Bubbles rising
const SeaRacewayAnimation = () => (
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute bg-cyan-400/30 rounded-full"
                style={{
                    left: `${Math.random() * 95}%`,
                    bottom: "-20px",
                    width: 10 + Math.random() * 30,
                    height: 10 + Math.random() * 30,
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                    opacity: [0, 0.7, 0],
                    y: -300,
                }}
                transition={{
                    delay: i * 0.1,
                    duration: 3 + Math.random() * 3,
                    ease: "easeOut",
                }}
            />
        ))}
    </div>
);

// Animation for Super Soakers: Water droplets splashing up
const SuperSoakersAnimation = () => (
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-3xl"
                style={{
                    left: `${Math.random() * 100}%`,
                    bottom: "-20px",
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                    opacity: [0, 1, 0],
                    y: -150,
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    delay: i * 0.05,
                    duration: 1.5,
                    ease: "easeOut",
                }}
            >
                💧
            </motion.div>
        ))}
    </div>
);

// Animation for Multiverse: Fading stars/portals
const MultiverseAnimation = () => (
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-5xl"
                style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                }}
                transition={{
                    delay: i * 0.2,
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                ✨
            </motion.div>
        ))}
    </div>
);

// Animation for Unknown Games: Pulsing question marks
const UnknownAnimation = () => (
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {[...Array(7)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-5xl text-white/50"
                style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                    delay: i * 0.3,
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                ❓
            </motion.div>
        ))}
    </div>
);

// Animation for Cloud Riders: Drifting clouds
const CloudRidersAnimation = () => (
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-6xl opacity-40"
                style={{
                    top: `${5 + i * 15}%`,
                }}
                initial={{ x: "-100%" }}
                animate={{ x: "100vw" }}
                transition={{
                    delay: i * 0.5,
                    duration: 10 + Math.random() * 10,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                ☁️
            </motion.div>
        ))}
    </div>
);

// Animation for Oxygen Heist: Fast rising small bubbles
const OxygenHeistAnimation = () => (
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute border-2 border-cyan-300/50 rounded-full"
                style={{
                    left: `${Math.random() * 100}%`,
                    bottom: "-10px",
                    width: 5 + Math.random() * 15,
                    height: 5 + Math.random() * 15,
                }}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                    opacity: [0, 1, 0],
                    y: -400,
                }}
                transition={{
                    delay: Math.random() * 2,
                    duration: 2 + Math.random() * 2,
                    ease: "linear",
                }}
            />
        ))}
    </div>
);

// Animation for Nemesis Rising: Fiery embers rising
const NemesisRisingAnimation = () => (
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                    left: `${Math.random() * 100}%`,
                    bottom: "-20px",
                }}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{
                    opacity: [0, 1, 0],
                    y: -200,
                    x: (Math.random() - 0.5) * 60,
                }}
                transition={{
                    delay: i * 0.1,
                    duration: 3,
                    ease: "easeOut",
                }}
            >
                🔥
            </motion.div>
        ))}
    </div>
);

const GhostAnimation = () => (
    // This container is positioned over the whole leaderboard area but doesn't block clicks
    <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
    >
        {/* Create 6 ghosts that will animate */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-5xl"
                style={{
                    // Spread them out horizontally
                    left: `${10 + i * 15}%`,
                    bottom: "-30px",
                }}
                variants={ghostVariants} // This now uses the correctly typed variants
                initial="hidden"
                animate="visible"
                custom={i} // Pass the index to the 'visible' variant
            >
                👻
            </motion.div>
        ))}
    </div>
);

// --- A map for all your custom game animations ---
// You can add more animations here for other games!
const CUSTOM_ANIMATIONS: Record<string, React.FC> = {
    // Existing
    haunted_hull: GhostAnimation,

    // New Additions
    flight_school: FlightSchoolAnimation,
    sea_raceway: SeaRacewayAnimation,
    super_soakers: SuperSoakersAnimation,
    multiverse: MultiverseAnimation,
    cloud_riders: CloudRidersAnimation,
    oxygen_heist: OxygenHeistAnimation,
    nemesis_rising: NemesisRisingAnimation,

    // Assigning the same animation to multiple "unknown" games
    unknown2: UnknownAnimation,
    unknown3: UnknownAnimation,
};

// --- The Main Animation Wrapper Component ---
interface GameChangeAnimationProps {
    game: Game;
    children: React.ReactNode;
}

const GameChangeAnimation: React.FC<GameChangeAnimationProps> = ({
    game,
    children,
}) => {
    // Check if there's a custom animation for the current game
    const CustomAnimation = CUSTOM_ANIMATIONS[game.id];

    return (
        <div className="relative">
            {/* AnimatePresence handles the exit animation of the old content */}
            <AnimatePresence mode="wait">
                <motion.div
                    // The key is CRITICAL. It tells React to re-render when the game id changes.
                    key={game.id}
                    // Animation states
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>

            {/* If a custom animation exists, render it */}
            {CustomAnimation && <CustomAnimation />}
        </div>
    );
};

const GameLeaderboards: React.FC = () => {
    const [selectedGame, setSelectedGame] = useState<Game>(GAMES[0]);
    const [gameData, setGameData] = useState<GameData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Fetch leaderboard data for specific game
    const fetchGameData = async (game: Game): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            // Fetch real data from the Next.js proxy routes
            // (which in turn fetch from EventCore-Proxy)
            const [teamsResponse, individualsResponse] = await Promise.all([
                fetch("/api/leaderboard/teams").then(
                    (res) => res.json() as Promise<ApiResponse<Team[]>>,
                ),
                fetch("/api/leaderboard/individuals").then(
                    (res) => res.json() as Promise<ApiResponse<Individual[]>>,
                ),
            ]);

            setGameData({
                teams: teamsResponse.data ?? [],
                individuals: individualsResponse.data ?? [],
            });
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : "Unknown error occurred";
            setError(
                `Failed to load ${game.name} leaderboard: ${errorMessage}`,
            );
            console.error("API Error:", err);
        } finally {
            setLoading(false);
        }
    };

    // Load data when component mounts or game changes
    useEffect(() => {
        fetchGameData(selectedGame);
    }, [selectedGame]);

    const handleGameSelect = (game: Game): void => {
        if (game.id !== selectedGame.id) {
            setSelectedGame(game);

            // Auto-scroll to selected game on mobile
            setTimeout(() => {
                if (scrollContainerRef.current) {
                    const selectedIndex = GAMES.findIndex(
                        (g) => g.id === game.id,
                    );
                    const container = scrollContainerRef.current;
                    const iconWidth = 64; // w-16 = 64px
                    const gap = 16; // gap-4 = 16px
                    const padding = 16; // px-4 = 16px

                    // Calculate position to center the icon
                    const scrollPosition =
                        selectedIndex * (iconWidth + gap) -
                        container.clientWidth / 2 +
                        iconWidth / 2 +
                        padding;

                    container.scrollTo({
                        left: Math.max(0, scrollPosition),
                        behavior: "smooth",
                    });
                }
            }, 100);
        }
    };

    const handleRetry = (): void => {
        fetchGameData(selectedGame);
    };

    return (
        <div className="min-h-screen bg-[#39d1ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-6 py-4 sm:py-6 md:py-8 lg:py-8">
                {/* Game Selection */}
                <div className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-8">
                    {/* Mobile/Tablet: Horizontal scroll with snap */}
                    <div className="lg:hidden bg-slate-900/70 backdrop-blur-sm py-4 rounded-2xl shadow-2xl">
                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            <div className="flex gap-4 w-max">
                                {GAMES.map((game) => (
                                    <div key={game.id} className="snap-center">
                                        <GameIcon
                                            game={game}
                                            isSelected={
                                                game.id === selectedGame.id
                                            }
                                            onClick={handleGameSelect}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Scroll indicators */}
                        <div className="flex justify-center gap-1.5 mt-3 px-4">
                            {GAMES.map((game, index) => (
                                <button
                                    key={game.id}
                                    onClick={() => handleGameSelect(game)}
                                    className={`h-1.5 rounded-full transition-all ${
                                        game.id === selectedGame.id
                                            ? "w-6 bg-yellow-400"
                                            : "w-1.5 bg-gray-500 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Select ${game.name}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Flex wrap */}
                    <div className="hidden lg:flex justify-center flex-wrap gap-4 bg-slate-900/70 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
                        {GAMES.map((game) => (
                            <GameIcon
                                key={game.id}
                                game={game}
                                isSelected={game.id === selectedGame.id}
                                onClick={handleGameSelect}
                            />
                        ))}
                    </div>
                </div>

                {/* Current Game Title */}
                <GameChangeAnimation game={selectedGame}>
                    <div className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-8">
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 bg-slate-900/70 backdrop-blur-sm rounded-xl p-4">
                            <Image
                                src={selectedGame.icon}
                                alt={selectedGame.name}
                                width={32}
                                height={32}
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                            />
                            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
                                {selectedGame.name}
                            </h1>
                        </div>
                    </div>
                </GameChangeAnimation>

                {/* Error State */}
                {error && <ErrorState error={error} onRetry={handleRetry} />}

                {/* Loading State */}
                {loading && <LoadingSpinner game={selectedGame} />}

                {/* Leaderboards */}
                {!loading && !error && gameData && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-4 md:gap-4 lg:gap-2">
                        {/* Team Leaderboard */}
                        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl border border-gray-700/50">
                            <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 lg:mb-6">
                                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold flex items-center space-x-2">
                                    <span>🏆</span>
                                    <span>Team Rankings</span>
                                </h2>
                                <span className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-sm">
                                    {gameData.teams.length} teams
                                </span>
                            </div>

                            {gameData.teams.length > 0 ? (
                                <div className="space-y-2 ">
                                    {gameData.teams.map((team) => (
                                        <TeamRow
                                            key={`${selectedGame.id}-team-${team.rank}`}
                                            team={team}
                                            gameId={selectedGame.id}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <EmptyState
                                    title="Team Rankings"
                                    gameName={selectedGame.name}
                                    icon={selectedGame.icon}
                                />
                            )}
                        </div>

                        {/* Individual Leaderboard */}
                        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl border border-gray-700/50">
                            <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 lg:mb-6">
                                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold flex items-center space-x-2">
                                    <span>👤</span>
                                    <span>Individual Rankings</span>
                                </h2>
                                <span className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-sm">
                                    {/* {gameData.individuals.length} players */}
                                    40 players
                                </span>
                            </div>

                            {gameData.individuals.length > 0 ? (
                                <div className="space-y-2">
                                    {gameData.individuals.map((player) => (
                                        <IndividualRow
                                            key={`${selectedGame.id}-player-${player.rank}`}
                                            player={player}
                                            gameId={selectedGame.id}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <EmptyState
                                    title="Individual Rankings"
                                    gameName={selectedGame.name}
                                    icon={selectedGame.icon}
                                />
                            )}
                        </div>
                    </div>
                )}

                {/* Refresh Button and Previous Players Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-7 md:mt-8 lg:mt-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
                    <button
                        onClick={handleRetry}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 sm:px-5 md:px-6 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 text-sm sm:text-base md:text-base lg:text-base rounded-lg transition-colors whitespace-nowrap w-48 sm:w-52 md:w-56 lg:w-56 text-center"
                        type="button"
                    >
                        Refresh Leaderboards
                    </button>
                    <a
                        href="/players/previous"
                        className="inline-block bg-[#3d7992] hover:bg-[#2d5a6e] text-white font-bold px-4 sm:px-5 md:px-6 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 text-sm sm:text-base md:text-base lg:text-base rounded-lg transition-colors whitespace-nowrap w-48 sm:w-52 md:w-56 lg:w-56 text-center"
                    >
                        Previous Players
                    </a>
                </div>
            </div>

<style jsx>{`
                .pixelated {
                    image-rendering: -moz-crisp-edges;
                    image-rendering: -webkit-crisp-edges;
                    image-rendering: pixelated;
                    image-rendering: crisp-edges;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default GameLeaderboards;
