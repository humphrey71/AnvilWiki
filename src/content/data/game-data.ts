/**
 * Single source of truth for game facts (P0-A of the content audit).
 *
 * Every data table in articles renders from this file, so a fact can never
 * disagree with itself across pages. `status` is the trust tier, shown as a
 * column badge on the page:
 *   - confirmed : two or more independent sources agree (or official patch notes)
 *   - community : single-source community data, name ≠ verified fact
 *   - estimated : genre-pattern inference, never presented as game data
 *
 * When a fact is verified in-game, bump its status here and every page
 * that renders it updates on the next build.
 */

export type FactStatus = 'confirmed' | 'community' | 'estimated';

export interface Mutation {
  name: string;
  multiplier: string;
  source: string;
  tier: string;
  status: FactStatus;
}

export const MUTATIONS: Mutation[] = [
  { name: 'Eternal', multiplier: '100x', source: 'Eternal weather event', tier: 'S', status: 'confirmed' },
  { name: 'Rainbow', multiplier: '10x', source: 'Hatching', tier: 'S', status: 'community' },
  { name: 'Void', multiplier: '10x', source: 'Void weather event', tier: 'A', status: 'confirmed' },
  { name: 'Rage', multiplier: '4x', source: 'Rage weather event', tier: 'A', status: 'confirmed' },
  { name: 'Volted', multiplier: '3x', source: 'Volt weather event', tier: 'B', status: 'confirmed' },
  { name: 'Gold', multiplier: '2x or 3x (sources disagree)', source: 'Hatching', tier: 'B', status: 'community' },
  { name: 'Shocked', multiplier: '2x', source: 'Thunder weather event', tier: 'C', status: 'confirmed' },
  { name: 'Diamond', multiplier: '2x', source: 'Hatching', tier: 'C', status: 'community' },
];

export interface PetStat {
  pet: string;
  hatchChance: string;
  speed: string;
  income: string;
  notes: string;
  status: FactStatus;
}

/** Pets with published numbers. All 30 names live in PET_TIERS; only rows
 *  with a source carry stats here — absent pets are simply not listed. */
export const PET_STATS: PetStat[] = [
  { pet: 'Kitsune', hatchChance: '1 in 1,000,000,000,000,000,000', speed: '~1,000,000,000', income: '—', notes: 'Fastest mount; Ethereal', status: 'confirmed' },
  { pet: 'Phoenix', hatchChance: '1 in 30,000,000,000,000', speed: '1,000,000', income: '100,000/s', notes: '146 jump; Ethereal', status: 'community' },
  { pet: 'T-Rex', hatchChance: '1 in 10,000,000,000,000', speed: '266,000', income: '50,000/s', notes: 'A-tier', status: 'community' },
  { pet: 'Unicorn', hatchChance: '1 in 1,000,000,000,000', speed: '137,000', income: '30,000/s', notes: 'Rebirth 3 requirement', status: 'community' },
  { pet: 'Horse', hatchChance: '1 in 500,000', speed: '5,340', income: '—', notes: 'Rebirth 1 requirement', status: 'community' },
  { pet: 'Dragon', hatchChance: 'unknown', speed: 'unknown', income: '—', notes: 'Egg source unverified — see note below table', status: 'community' },
];

export const DRAGON_EGG_NOTE =
  'Community guides call the endgame egg a "Dragon Egg", but no verified source confirms the name or that it hatches Dragon exclusively. The name is community usage, not a verified fact.';

export interface Egg {
  name: string;
  /** Find odds, "1 in N" semantics — N only, spelled out. */
  odds: string;
  rarity: string;
  status: FactStatus;
}

export const EGGS: Egg[] = [
  { name: 'White Egg', odds: '1', rarity: 'Common', status: 'confirmed' },
  { name: 'Brown Egg', odds: '5', rarity: 'Common', status: 'community' },
  { name: 'Cracked Egg', odds: '30', rarity: 'Rare', status: 'community' },
  { name: 'Easter Egg', odds: '50', rarity: 'Rare', status: 'community' },
  { name: 'Stone Egg', odds: '100', rarity: 'Rare', status: 'community' },
  { name: 'Leaf Egg', odds: '200', rarity: 'Rare', status: 'community' },
  { name: 'Mushroom Egg', odds: '500', rarity: 'Epic', status: 'community' },
  { name: 'Flower Egg', odds: '750', rarity: 'Epic', status: 'community' },
  { name: 'Slime Egg', odds: '1,000', rarity: 'Epic', status: 'community' },
  { name: 'Ice Egg', odds: '3,000', rarity: 'Epic', status: 'community' },
  { name: 'Glass Egg', odds: '10,000', rarity: 'Legendary', status: 'community' },
  { name: 'Golden Egg', odds: '30,000', rarity: 'Legendary', status: 'community' },
  { name: 'Crystal Egg', odds: '150,000', rarity: 'Mythic', status: 'community' },
  { name: 'Skull Egg', odds: '250,000', rarity: 'Mythic', status: 'community' },
  { name: 'Dominus Egg', odds: '700,000', rarity: 'Mythic', status: 'community' },
  { name: 'Flaming Egg', odds: '1,000,000', rarity: 'Mythic', status: 'community' },
  { name: 'Sinister Egg', odds: '3,000,000', rarity: 'Mythic', status: 'community' },
  { name: 'Soul Egg', odds: '7,000,000', rarity: 'Mythic', status: 'community' },
  { name: 'Aurora Egg', odds: '300,000,000', rarity: 'Divine', status: 'community' },
  { name: 'Galaxy Egg', odds: '1,500,000,000', rarity: 'Divine', status: 'community' },
  { name: 'Black Hole Egg', odds: '100,000,000,000', rarity: 'Ethereal', status: 'community' },
  { name: 'Solaris Egg', odds: '300,000,000,000', rarity: 'Ethereal', status: 'community' },
  { name: 'Cherub Egg', odds: '1,000,000,000,000', rarity: 'Ethereal', status: 'community' },
];

export interface Rebirth {
  tier: number;
  money: string;
  pet: string;
  status: FactStatus;
}

export const REBIRTHS: Rebirth[] = [
  { tier: 1, money: '$1M', pet: 'Horse', status: 'community' },
  { tier: 2, money: '$500M', pet: 'Fox', status: 'community' },
  { tier: 3, money: '$2.5B', pet: 'Unicorn', status: 'community' },
  { tier: 4, money: '$125B+', pet: 'Phoenix', status: 'estimated' },
  { tier: 5, money: 'unconfirmed', pet: 'Kitsune', status: 'community' },
  { tier: 6, money: 'unconfirmed', pet: 'Kitsune', status: 'community' },
  { tier: 7, money: 'unconfirmed', pet: 'Dragon', status: 'community' },
];

/** The one canonical wording for the weather mechanic. Every page that
 *  mentions it links to the mutations guide instead of re-explaining. */
export const WEATHER_TLDR =
  'Weather events run 5 minutes, trigger equally at random, and mutate every egg on the map — full mechanics in the mutations guide.';
