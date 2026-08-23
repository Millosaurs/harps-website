# Creator Splash Website - Project Context

## Overview
Creator Splash Minecraft server website. Next.js 15, React 19, Tailwind CSS v4, motion/react.
Repo: https://github.com/Creator-Splash/Website (main branch)

## Key Files
- src/data.ts - All team members and departments
- src/app/teams/page.tsx - Teams page with tab filtering and badge logic
- src/components/TeamMemberCard.tsx - Water-themed cards (waterTheme defaults true)
- src/components/MinecraftSkin.tsx - Canvas skin renderer (64x64 + legacy 64x32)
- src/components/DepartmentSection.tsx - Animated section wrapper

## Axolotl Badges (public/)
- axolotl.png - Rainbow (Owner/Harp)
- axolotl_pink.png - Pink (Artists)
- axolotl_dev_new.png - Orange bee (Developers)
- axolotl_discord.png - Orange/yellow (Discord Staff)
- axolotl_testing.png - Coral (Testing)
- axolotl_models.png - Pink hearts (Models)
- axolotl_voice.png - Teal (Voice)
- axolotl_builders.png - Brown/gold (Builders)
- axolotl_events.png - Scarf/hat (Event Staff)
- axolotl_managers.png - Blue snowflake (Managers)

## Design
- Pink #fb64b6, Aqua #22d3ee
- Water-themed teal card backgrounds
- Badges: top-right, 73x73px, rotated 15deg clockwise, fully opaque
- Two-row tab nav: Top row All-Developer, Bottom row Artists-Testing

## Notes
- npm install --force if lightningcss issues
- Skins in public/skins/
- Some members in multiple depts with separate skin files
- WinterStory, itscrayne, Kaboodle have empty skinFile (placeholder)
