// components/navigation.tsx
"use client";

import { useState } from "react";
import {
  Menu,
  X,
  User,
  Users,
  Play,
  ShoppingBag,
  Newspaper,
  Mail,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: "ABOUT", icon: <User className="w-6 h-6" /> },
    {
      href: "/participants",
      label: "PARTICIPANTS",
      icon: <Users className="w-6 h-6" />,
    },
    {
      href: "/creatorsplash",
      label: "CREATOR SPLASH",
      icon: <Play className="w-6 h-6" />,
    },
    { href: "/shop", label: "SHOP", icon: <ShoppingBag className="w-6 h-6" /> },
    { href: "/news", label: "NEWS", icon: <Newspaper className="w-6 h-6" /> },
    {
      href: "/contact",
      label: "CONTACT US",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  return (
    <TooltipProvider>
      <header className="bg-yellow-300 border-b-4 border-black sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/logo.png"
                      alt="Creator Splash Logo"
                      fill
                      className="object-contain"
                      sizes="128px"
                      priority
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3">
              {navItems.map((item) => (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      className="flex items-center justify-center w-14 h-14 bg-white rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] hover:bg-gray-50 text-black"
                    >
                      {item.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px]"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t-4 border-black">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-4 w-full p-4 font-black text-black rounded-xl border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </TooltipProvider>
  );
}
