// components/MemberCard.tsx
import React from "react";
import Image from "next/image";
import Flag from "react-flagkit";

export interface MemberCardProps {
  avatar?: string;
  name: string;
  role: string;
  country: string;
  countryFlag?: string;
  description?: string;
  responsibilities?: string[];
}

export default function MemberCard({
  avatar,
  name,
  role,
  country,
  countryFlag,
  description,
  responsibilities = [],
}: MemberCardProps) {
  return (
    <div className="bg-[#1a202c] text-white rounded-xl p-6 flex flex-col items-center w-full max-w-xs mx-auto">
      {avatar ? (
        <Image
          src={`/heads/${avatar}`}
          alt={name}
          width={80}
          height={80}
          className="rounded-full mb-4 object-cover"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-3xl">
          🧑
        </div>
      )}
      <h3 className="text-xl font-bold mb-1 text-center">{name}</h3>
      <div className="flex flex-row text-sm text-gray-300 mb-2 text-center ">
        {role}
        {countryFlag && (
          <span className="ml-2 not-emoji-font" title={country}>
            <Flag country={countryFlag} />
          </span>
        )}
      </div>
      {description && (
        <p className="text-gray-200 text-center mb-2">{description}</p>
      )}
      <ul className="text-gray-500 text-sm list-disc list-inside text-left">
        {responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
