'use client';

import React from 'react';
import Flag from 'react-flagkit';
import MinecraftSkin from './MinecraftSkin';

interface TeamMemberCardProps {
  name: string;
  skinFile: string;
  country: string;
  countryFlag: string;
  role: string;
  badgeImage?: string;
  waterTheme?: boolean;
}

export default function TeamMemberCard({ name, skinFile, country, countryFlag, role, badgeImage, waterTheme = true }: TeamMemberCardProps) {
  return (
    <div className={`group relative rounded-xl p-[2px] transition-all duration-300 hover:scale-105 w-full overflow-hidden ${
      waterTheme 
        ? 'bg-[#0f4c5c] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]' 
        : 'bg-[#2a3548] hover:shadow-[0_0_20px_rgba(15,76,92,0.5)]'
    }`}>
      {/* Decorative border that glows on hover */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        waterTheme
          ? 'bg-gradient-to-b from-[#22d3ee]/40 via-[#0f4c5c] to-[#22d3ee]/40 group-hover:from-[#22d3ee]/70 group-hover:via-[#0f4c5c]/50 group-hover:to-[#22d3ee]/70'
          : 'bg-gradient-to-b from-[#3d4f66] via-[#2a3548] to-[#3d4f66] group-hover:from-[#22d3ee]/50 group-hover:via-[#0f4c5c]/30 group-hover:to-[#22d3ee]/50'
      }`} />
      
      {/* Inner card */}
      <div className={`relative rounded-[10px] p-4 flex flex-col items-center overflow-hidden ${
        waterTheme ? 'bg-gradient-to-b from-[#0d3d4a] via-[#0f4c5c] to-[#0d3d4a]' : 'bg-[#2a3548]'
      }`}>

        {/* Water effect - animated bubbles */}
        {waterTheme && (
          <>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_50%_100%,_#22d3ee_0%,_transparent_70%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-16 opacity-15 bg-[linear-gradient(0deg,_#22d3ee,_transparent)]" />
          </>
        )}

        {/* Corner decorations - top left */}
        <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 rounded-tl-sm opacity-60 ${waterTheme ? 'border-[#22d3ee]/50' : 'border-[#4a6080]'}`} />
        {/* Corner decorations - top right */}
        <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 rounded-tr-sm opacity-60 ${waterTheme ? 'border-[#22d3ee]/50' : 'border-[#4a6080]'}`} />
        {/* Corner decorations - bottom left */}
        <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 rounded-bl-sm opacity-60 ${waterTheme ? 'border-[#22d3ee]/50' : 'border-[#4a6080]'}`} />
        {/* Corner decorations - bottom right */}
        <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 rounded-br-sm opacity-60 ${waterTheme ? 'border-[#22d3ee]/50' : 'border-[#4a6080]'}`} />

        {/* Skin area */}
        <div className="mt-4 mb-3 relative z-10">
          <MinecraftSkin skinFile={skinFile} size={170} />
        </div>

        {/* Divider line */}
        <div className={`w-3/4 h-[1px] bg-gradient-to-r from-transparent to-transparent mb-2 ${waterTheme ? 'via-[#22d3ee]/50' : 'via-[#4a6080]'}`} />

        {/* Name */}
        <h3 className={`text-lg font-bold mb-1 text-center tracking-wide ${waterTheme ? 'text-[#e0f7fa]' : 'text-white'}`}>{name}</h3>

        {/* Country */}
        {countryFlag && (
          <div className={`flex items-center gap-2 text-sm ${waterTheme ? 'text-[#80cbc4]' : 'text-gray-400'}`}>
            <Flag country={countryFlag} size={16} />
            <span>{country}</span>
          </div>
        )}

        {/* Badge image (e.g. axolotl for Harp) */}
        {badgeImage && (
          <img 
            src={badgeImage} 
            alt="badge" 
            className="absolute top-2 right-2 w-[73px] h-[73px] object-contain drop-shadow-lg rotate-[15deg] z-20" 
          />
        )}

      </div>
    </div>
  );
}
