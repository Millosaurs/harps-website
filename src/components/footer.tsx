import {
  FaYoutube,
  FaTwitch,
  FaSpotify,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0F4C5C] text-white w-full font-sans [font-family:var(--font-1)] py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://youtube.com/@creatorsplash?si=D23xBsHPxKg64dgf"
            className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#FF0000] hover:-translate-y-0.5 hover:opacity-80 transition"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={26} />
          </a>
          <a
            href="https://www.twitch.tv/harp6288/"
            className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#6441A4] hover:-translate-y-0.5 hover:opacity-80 transition"
            aria-label="Twitch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch size={26} />
          </a>
          <a
            href="https://open.spotify.com/user/6mootkdohaai8rb15od6fy0ag?si=d0fe891d989849b0&nd=1&dlsi=5c56579d79ce433b"
            className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#1DB954] hover:-translate-y-0.5 hover:opacity-80 transition"
            aria-label="Spotify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify size={26} />
          </a>
          <a
            href="https://www.instagram.com/harp_6288"
            className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] hover:-translate-y-0.5 hover:opacity-80 transition"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={26} />
          </a>
          <a
            href="https://x.com/CreatorSplash_"
            className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-black hover:-translate-y-0.5 hover:opacity-80 transition"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={26} />
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-8 gap-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start flex-1 max-w-[600px]">
            <div className="w-[100px] h-[100px] flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Creator Splash"
                className="object-contain"
                width={100}
                height={100}
              />
            </div>
            <div className="flex-1">
              <p className="leading-relaxed text-sm md:text-base">
                Since 2011 Noxcrew™ have been creating adventure maps, skins and
                texture packs, and now we sell them on the Minecraft
                Marketplace! Got a question for us? Use the Contact page, or
                email us at
                <a
                  href="mailto:contact@noxcrew.com"
                  className="underline hover:no-underline ml-1"
                >
                  contact@noxcrew.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end md:items-end text-right">
            <h3 className="mb-2 text-base font-bold">Looking for more?</h3>
            <div className="flex flex-col items-end gap-1">
              <div>
                <a
                  href="https://discord.com/invite/YX2KZyeBeJ"
                  className="hover:underline"
                >
                  Discord
                </a>
                <span className="mx-1">•</span>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full text-center border-t border-white/20 pt-6">
          <div className="flex flex-wrap justify-center items-center gap-2 mb-2 text-xs">
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
            <span className="dot">•</span>
            <a href="/privacy" className="hover:underline">
              Privacy Notice
            </a>
            <span className="dot">•</span>
            <a href="/cookies" className="hover:underline">
              Cookie Policy
            </a>
            <span className="dot">•</span>
            <a href="/help" className="hover:underline">
              Help & FAQ
            </a>
          </div>
          <div className="text-xs opacity-80">
            © 2025 Creator Splash. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
