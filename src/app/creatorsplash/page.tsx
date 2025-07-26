// pages/Creatorsplash.jsx
import MemberCard from "@/components/Membercard";
import { teamMembers } from "@/data";

export default function Creatorsplash() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1a202c] p-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in">
          <span className="font-[cursive]">ℂ𝕣𝕖𝕒𝕥𝕠𝕣 𝕊𝕡𝕝𝕒𝕤𝕙 𓆏</span>
        </h1>
        <p className="text-lg text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
          Welcome to the Creator Splash page! Here you can find all the latest
          updates and information about our creators and their amazing work.
        </p>
      </div>
      <div className="flex flex-col items-center text-3xl lg:text-4xl font-black text-white mb-6 animate-fade-in">
        <h2>Meet Our Team</h2>
      </div>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8
          w-full
          max-w-6xl
          mb-16
        "
      >
        {teamMembers.map((member, idx) => (
          <MemberCard key={idx} {...member} />
        ))}
      </div>
    </div>
  );
}
