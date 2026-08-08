// src/app/teams/page.tsx
"use client";

import { useState } from "react";
import { teamMembers, departments, getMembersByDepartment } from "@/data";
import TeamMemberCard from "@/components/TeamMemberCard";
import DepartmentSection from "@/components/DepartmentSection";

export default function TeamsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    ...departments.map((dept) => ({ id: dept.id, label: dept.label })),
  ];

  const filteredDepartments =
    activeTab === "all"
      ? departments
      : departments.filter((dept) => dept.id === activeTab);

  return (
    <div className="min-h-screen bg-[#1a202c]">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8 pb-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2">
          Creator Splash
        </h1>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <div className="inline-block bg-[#1c2333] border border-[#2a3548] rounded-2xl p-2 sm:p-3">
          {/* Top row: All through Developer Dept */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
            {tabs.filter((_, i) => i <= 5).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-3 py-2 sm:px-5 sm:py-2.5
                  text-xs sm:text-sm font-bold uppercase tracking-wider
                  rounded-lg transition-all duration-300
                  cursor-pointer
                  ${
                    activeTab === tab.id
                      ? "bg-[#0f4c5c] text-white shadow-lg shadow-[#0f4c5c]/30"
                      : "bg-transparent text-gray-400 hover:text-white hover:bg-[#2a3548]"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Bottom row: Artists through Testing */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {tabs.filter((_, i) => i > 5).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-3 py-2 sm:px-5 sm:py-2.5
                  text-xs sm:text-sm font-bold uppercase tracking-wider
                  rounded-lg transition-all duration-300
                  cursor-pointer
                  ${
                    activeTab === tab.id
                      ? "bg-[#0f4c5c] text-white shadow-lg shadow-[#0f4c5c]/30"
                      : "bg-transparent text-gray-400 hover:text-white hover:bg-[#2a3548]"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Department Sections */}
      <div className="container mx-auto px-4 pb-16">
        {filteredDepartments.map((dept, index) => {
          const members = getMembersByDepartment(dept.id);
          const lineColor = '#fb64b6';

          return (
            <DepartmentSection
              key={dept.id}
              id={dept.id}
              title={dept.label}
              isPrivate={dept.isPrivate}
              privateMessage={dept.privateMessage}
              lineColor={lineColor}
            >
              {members.map((member, idx) => (
                <TeamMemberCard
                  key={`${dept.id}-${idx}`}
                  name={member.name}
                  skinFile={member.skinFile}
                  country={member.country}
                  countryFlag={member.countryFlag}
                  role={member.role}
                  badgeImage={
                    member.name === 'Harp' && dept.id === 'owner' 
                      ? '/axolotl.png' 
                      : dept.id === 'artists' 
                        ? '/axolotl_pink.png' 
                        : dept.id === 'developers'
                          ? '/axolotl_dev_new.png'
                          : dept.id === 'discord'
                            ? '/axolotl_discord.png'
                            : dept.id === 'testing'
                              ? '/axolotl_testing.png'
                              : dept.id === 'models'
                                ? '/axolotl_models.png'
                                : dept.id === 'voice'
                                  ? '/axolotl_voice.png'
                                  : dept.id === 'builders'
                                    ? '/axolotl_builders.png'
                                    : dept.id === 'events'
                                      ? '/axolotl_events.png'
                                      : dept.id === 'managers'
                                        ? '/axolotl_managers.png'
                                        : undefined
                  }
                />
              ))}
            </DepartmentSection>
          );
        })}
      </div>
    </div>
  );
}
