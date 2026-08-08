'use client';

import React from 'react';
import { motion } from 'motion/react';

interface DepartmentSectionProps {
  title: string;
  children: React.ReactNode;
  isPrivate?: boolean;
  privateMessage?: string;
  id: string;
  lineColor?: string;
}

export default function DepartmentSection({ title, children, isPrivate, privateMessage, id, lineColor = '#fb64b6' }: DepartmentSectionProps) {
  return (
    <motion.section 
      id={id}
      className="w-full py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 flex items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap mr-4">
          {title}
        </h2>
        <div className="h-[2px] w-full flex-grow rounded-full" style={{ background: `linear-gradient(to right, ${lineColor}, transparent)` }} />
      </div>

      {isPrivate ? (
        <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-pink-900/30 to-blue-900/30 border border-pink-500/30 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xl md:text-2xl text-pink-200 font-medium tracking-wide flex items-center justify-center gap-3">
            ✨ {privateMessage || 'This section is private'} 💖
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {children}
        </div>
      )}
    </motion.section>
  );
}
