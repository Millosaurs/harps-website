// components/footer.tsx
import { Youtube, Twitch, Instagram, Twitter, Music } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Youtube className="w-6 h-6" />,
      href: "https://youtube.com/@creatorsplash",
      label: "YouTube",
      color: "bg-red-500",
    },
    {
      icon: <Twitch className="w-6 h-6" />,
      href: "https://www.twitch.tv/harp6288/",
      label: "Twitch",
      color: "bg-purple-500",
    },
    {
      icon: <Music className="w-6 h-6" />,
      href: "https://open.spotify.com/user/6mootkdohaai8rb15od6fy0ag",
      label: "Spotify",
      color: "bg-green-500",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/harp_6288",
      label: "Instagram",
      color: "bg-pink-500",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://x.com/CreatorSplash_",
      label: "Twitter",
      color: "bg-blue-500",
    },
  ];

  return (
    <footer className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] p-8 lg:p-12">
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${social.color} text-white rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px]`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative w-48 h-48 -m-18 ">
                  <Image
                    src="/logo.png"
                    alt="Creator Splash Logo"
                    fill
                    className="object-contain"
                    sizes="128px"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-black text-gray-900">
                  Creator Splash
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Since 2011 we&apos;ve been creating adventure maps, events, and
                content, and now we bring creators together for the most chaotic
                Minecraft events on the internet! Got a question for us? Use the
                Contact page, or email us at{" "}
                <a
                  href="mailto:contact@creatorsplash.com"
                  className="text-blue-600 hover:text-blue-800 font-bold"
                >
                  contact@creatorsplash.com
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-black text-gray-900">
                Looking for more?
              </h4>
              <div className="space-y-4">
                <a
                  href="https://discord.com/invite/YX2KZyeBeJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-indigo-500 text-white font-black rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] hover:bg-indigo-600"
                >
                  Join Discord
                </a>
                <div className="flex flex-wrap gap-2 text-gray-700">
                  <a href="/careers" className="hover:text-gray-900 font-bold">
                    Careers
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t-4 border-black">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                <a href="/terms" className="hover:text-gray-900">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="/privacy" className="hover:text-gray-900">
                  Privacy Notice
                </a>
                <span>•</span>
                <a href="/cookies" className="hover:text-gray-900">
                  Cookie Policy
                </a>
                <span>•</span>
                <a href="/help" className="hover:text-gray-900">
                  Help & FAQ
                </a>
              </div>
              <div className="text-sm text-gray-600">
                © 2025 Creator Splash. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
