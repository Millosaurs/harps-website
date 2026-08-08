export interface Department {
  id: string;
  label: string;
  isPrivate?: boolean;
  privateMessage?: string;
}

export const departments: Department[] = [
  { id: 'owner', label: 'Owner' },
  { id: 'managers', label: 'Managers' },
  { id: 'discord', label: 'Discord Staff Team' },
  { id: 'events', label: 'Event Staff Team' },
  { id: 'developers', label: 'Developer Dept' },
  { id: 'artists', label: 'Artists Dept' },
  { id: 'builders', label: 'Builder Dept' },
  { id: 'voice', label: 'Voice Dept' },
  { id: 'models', label: 'Model Dept' },
  { id: 'testing', label: 'Testing Dept' },
];

export interface TeamMember {
  name: string;
  skinFile: string;
  role: string;
  country: string;
  countryFlag: string;
  department: string;
}

export const teamMembers: TeamMember[] = [
  // Owner
  { name: 'Harp', skinFile: 'harp.png', role: 'Owner', country: 'United Kingdom', countryFlag: 'GB', department: 'owner' },

  // Managers
  { name: 'Seapeekay', skinFile: 'seapeekay.png', role: 'Multiple', country: 'United Kingdom', countryFlag: 'GB', department: 'managers' },
  { name: 'Rice', skinFile: 'rice.png', role: 'Tester Manager', country: 'United Kingdom', countryFlag: 'GB', department: 'managers' },

  // Discord Staff
  { name: 'Chloe', skinFile: 'chloe.png', role: 'Discord Staff', country: 'United Kingdom', countryFlag: 'GB', department: 'discord' },
  { name: 'Keltic', skinFile: 'keltic.png', role: 'Discord Staff', country: 'United Kingdom', countryFlag: 'GB', department: 'discord' },
  { name: 'Fridge', skinFile: 'fridge.png', role: 'Discord Staff', country: 'America', countryFlag: 'US', department: 'discord' },

  // Event Staff
  { name: 'Poke', skinFile: 'poke.png', role: 'Event Staff', country: 'America', countryFlag: 'US', department: 'events' },
  { name: 'Jordan', skinFile: 'jordan_event.png', role: 'Event Staff', country: 'America', countryFlag: 'US', department: 'events' },
  { name: 'Ashlyn', skinFile: 'ashlyn.png', role: 'Event Staff', country: 'United Kingdom', countryFlag: 'GB', department: 'events' },
  { name: 'Cutie', skinFile: 'cutie.png', role: 'Event Staff', country: 'United Kingdom', countryFlag: 'GB', department: 'events' },
  { name: 'DatKid', skinFile: 'datkid.png', role: 'Event Staff', country: 'United Kingdom', countryFlag: 'GB', department: 'events' },

  // Developer Dept
  { name: 'Logic', skinFile: 'logic.png', role: 'Developer', country: 'America', countryFlag: 'US', department: 'developers' },
  { name: 'Cammy', skinFile: 'cammy.png', role: 'Developer', country: 'Australia', countryFlag: 'AU', department: 'developers' },
  { name: 'King', skinFile: 'king.png', role: 'Developer', country: 'Canada', countryFlag: 'CA', department: 'developers' },
  { name: 'bumpyJake', skinFile: 'bumpyjake.png', role: 'Developer', country: 'United Kingdom', countryFlag: 'GB', department: 'developers' },
  { name: 'Kovah', skinFile: 'kovah.png', role: 'Developer', country: 'America', countryFlag: 'US', department: 'developers' },
  { name: 'Yeet', skinFile: 'yeet.png', role: 'Developer', country: 'America', countryFlag: 'US', department: 'developers' },
  { name: 'Apoco', skinFile: 'apoco.png', role: 'Developer', country: 'Spain', countryFlag: 'ES', department: 'developers' },
  { name: 'Alex', skinFile: 'alex.png', role: 'Developer', country: 'America', countryFlag: 'US', department: 'developers' },
  { name: 'Street', skinFile: 'street.png', role: 'Developer', country: 'America', countryFlag: 'US', department: 'developers' },
  { name: 'Carson', skinFile: 'carson.png', role: 'Assistant Developer', country: 'America', countryFlag: 'US', department: 'developers' },
  { name: 'Desau', skinFile: 'desau.png', role: 'Assistant Developer', country: 'Spain', countryFlag: 'ES', department: 'developers' },
  { name: 'Arthur', skinFile: 'arthur.png', role: 'Assistant Developer', country: 'Spain', countryFlag: 'ES', department: 'developers' },
  { name: 'ElongatedOrange', skinFile: 'elongatedorange.png', role: 'Assistant Developer', country: 'United Kingdom', countryFlag: 'GB', department: 'developers' },

  // Artists Dept
  { name: 'Boss Isaz', skinFile: 'boss_isaz.png', role: 'Texture Pack Artist', country: 'France', countryFlag: 'FR', department: 'artists' },
  { name: 'Rhais', skinFile: 'rhais.png', role: 'Block Entity Artist', country: 'Russia', countryFlag: 'RU', department: 'artists' },
  { name: 'WinterStory', skinFile: 'winterstory.png', role: 'Weapons Artist', country: 'Slovakia', countryFlag: 'SK', department: 'artists' },
  { name: 'Gonzalo', skinFile: 'gonzalo.png', role: 'Logo Artist', country: 'Argentina', countryFlag: 'AR', department: 'artists' },
  { name: 'Danny Pistachio', skinFile: 'danny_pistachio.png', role: 'Logo Artist', country: 'Canada', countryFlag: 'CA', department: 'artists' },
  { name: 'Jordan', skinFile: 'jordan_artist.png', role: 'Pixel Artist', country: 'America', countryFlag: 'US', department: 'artists' },
  { name: 'Allie', skinFile: 'allie.png', role: 'Pixel Artist', country: 'Brazil', countryFlag: 'BR', department: 'artists' },
  { name: 'Ale', skinFile: 'ale.png', role: 'Bossbar Artist', country: 'Spain', countryFlag: 'ES', department: 'artists' },
  { name: 'Tsgumi', skinFile: 'tsgumi.png', role: 'Skin Designer', country: 'United Kingdom', countryFlag: 'GB', department: 'artists' },
  { name: 'itscrayne', skinFile: 'itscrayne.png', role: 'Skin Designer', country: 'America', countryFlag: 'US', department: 'artists' },
  { name: 'Smoog', skinFile: 'smoog.png', role: 'Concept Designer', country: 'United Kingdom', countryFlag: 'GB', department: 'artists' },
  { name: 'Kint', skinFile: 'kint.png', role: 'Artist', country: 'America', countryFlag: 'US', department: 'artists' },

  // Builder Dept
  { name: 'Smoog', skinFile: 'smoog_builder.png', role: 'Builder', country: 'United Kingdom', countryFlag: 'GB', department: 'builders' },
  { name: 'Ubi', skinFile: 'ubi.png', role: 'Builder', country: 'America', countryFlag: 'US', department: 'builders' },
  { name: 'Avery', skinFile: 'avery.png', role: 'Builder', country: 'United Kingdom', countryFlag: 'GB', department: 'builders' },
  { name: 'Bizzie', skinFile: 'bizzie.png', role: 'Builder', country: 'America', countryFlag: 'US', department: 'builders' },

  // Voice Dept
  { name: 'Seapeekay', skinFile: 'seapeekay_voice.png', role: 'Voice Actor', country: 'United Kingdom', countryFlag: 'GB', department: 'voice' },
  { name: 'Talenthia R.', skinFile: 'talenthia.png', role: 'Voice Actor', country: 'America', countryFlag: 'US', department: 'voice' },
  { name: 'Evelynn/Kaboodle', skinFile: 'kaboodle.png', role: 'Voice Actor', country: 'Australia', countryFlag: 'AU', department: 'voice' },
  { name: 'Holly Lindin', skinFile: 'holly_lindin.png', role: 'Voice Actor', country: 'America', countryFlag: 'US', department: 'voice' },

  // Model Dept
  { name: 'KatieGoBrr', skinFile: 'katiegobrrr.png', role: 'Model', country: 'United Kingdom', countryFlag: 'GB', department: 'models' },
  { name: 'Seapeekay', skinFile: 'seapeekay_model.png', role: 'Model', country: 'United Kingdom', countryFlag: 'GB', department: 'models' },
  { name: 'Alina/Egg', skinFile: 'alina_egg.png', role: 'Model', country: 'United Kingdom', countryFlag: 'GB', department: 'models' },
  { name: 'Ambear', skinFile: 'ambear.png', role: 'Model', country: 'Belgium', countryFlag: 'BE', department: 'models' },

  // Testing Dept
  { name: 'A_FatPenguin', skinFile: 'a_fatpenguin.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Beariok', skinFile: 'beariok.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Benji_Button', skinFile: 'benji_button.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Buggedwyvern', skinFile: 'buggedwyvern.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'CyaNideJ', skinFile: 'cyanidej.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'DaneLolDane', skinFile: 'daneloldane.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'JohnnyHT', skinFile: 'johnnyht.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Keiltic', skinFile: 'keiltic.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'KingDixie', skinFile: 'kingdixie.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'LGasp', skinFile: 'lgasp.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'LiariVT', skinFile: 'liarivt.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'LogyBanana', skinFile: 'logybanana.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Lydianaa', skinFile: 'lydianaa.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Menaces', skinFile: 'menaces.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'MidnightSunna', skinFile: 'midnightsunna.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Neochampy', skinFile: 'neochampy.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'OceanTSQ', skinFile: 'oceantsq.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'oErrex', skinFile: 'oerrex.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'ogglide', skinFile: 'ogglide.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'PatMonster101', skinFile: 'patmonster.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Pedrinhocas', skinFile: 'pedrinhocas.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'RainiiBlue', skinFile: 'rainiiblue.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'SaltContent', skinFile: 'saltcontent.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Skeletonie', skinFile: 'skeletonie.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'SpicyRaider', skinFile: 'spicyraider.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'StarGazxr', skinFile: 'stargazxr.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'TankMatt', skinFile: 'tankmatt.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'ThatIrishFella', skinFile: 'thatirishfella.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
  { name: 'Vesper1706', skinFile: 'vesper.png', role: 'Tester', country: '', countryFlag: '', department: 'testing' },
];

export function getFlagEmoji(countryCode: string): string {
  if (!countryCode) return '';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export const getMembersByDepartment = (deptId: string) => teamMembers.filter(m => m.department === deptId);
