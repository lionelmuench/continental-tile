// src/data/locations.ts
// Continental Tile Contractors — Service Area Locations
// Add new towns by appending to the array.
// Each entry generates an SEO page at /areas/[slug].

export interface Location {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  region: string; // For grouping on the index page
}

function loc(city: string, stateAbbr: string, region: string): Location {
  const state = stateAbbr === 'NY' ? 'New York'
    : stateAbbr === 'CT' ? 'Connecticut'
    : stateAbbr === 'NJ' ? 'New Jersey'
    : 'Maine';
  const slug = city.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    + '-' + stateAbbr.toLowerCase();
  return { slug, city, state, stateAbbr, region };
}

export const locations: Location[] = [
  // ── Bronx, NY ────────────────────────────────────────
  loc('Bronx', 'NY', 'Bronx, NY'),

  // ── Westchester County, NY ───────────────────────────
  loc('Amawalk', 'NY', 'Westchester County, NY'),
  loc('Ardsley', 'NY', 'Westchester County, NY'),
  loc('Ardsley on Hudson', 'NY', 'Westchester County, NY'),
  loc('Armonk', 'NY', 'Westchester County, NY'),
  loc('Baldwin Place', 'NY', 'Westchester County, NY'),
  loc('Bedford', 'NY', 'Westchester County, NY'),
  loc('Bedford Hills', 'NY', 'Westchester County, NY'),
  loc('Briarcliff Manor', 'NY', 'Westchester County, NY'),
  loc('Bronxville', 'NY', 'Westchester County, NY'),
  loc('Buchanan', 'NY', 'Westchester County, NY'),
  loc('Chappaqua', 'NY', 'Westchester County, NY'),
  loc('Cortlandt Manor', 'NY', 'Westchester County, NY'),
  loc('Crompond', 'NY', 'Westchester County, NY'),
  loc('Cross River', 'NY', 'Westchester County, NY'),
  loc('Croton Falls', 'NY', 'Westchester County, NY'),
  loc('Croton on Hudson', 'NY', 'Westchester County, NY'),
  loc('Dobbs Ferry', 'NY', 'Westchester County, NY'),
  loc('Eastchester', 'NY', 'Westchester County, NY'),
  loc('Elmsford', 'NY', 'Westchester County, NY'),
  loc('Garrison', 'NY', 'Westchester County, NY'),
  loc('Goldens Bridge', 'NY', 'Westchester County, NY'),
  loc('Granite Springs', 'NY', 'Westchester County, NY'),
  loc('Harrison', 'NY', 'Westchester County, NY'),
  loc('Hartsdale', 'NY', 'Westchester County, NY'),
  loc('Hastings on Hudson', 'NY', 'Westchester County, NY'),
  loc('Hawthorne', 'NY', 'Westchester County, NY'),
  loc('Irvington', 'NY', 'Westchester County, NY'),
  loc('Jefferson Valley', 'NY', 'Westchester County, NY'),
  loc('Katonah', 'NY', 'Westchester County, NY'),
  loc('Lake Peekskill', 'NY', 'Westchester County, NY'),
  loc('Larchmont', 'NY', 'Westchester County, NY'),
  loc('Lincolndale', 'NY', 'Westchester County, NY'),
  loc('Mamaroneck', 'NY', 'Westchester County, NY'),
  loc('Maryknoll', 'NY', 'Westchester County, NY'),
  loc('Millwood', 'NY', 'Westchester County, NY'),
  loc('Mohegan Lake', 'NY', 'Westchester County, NY'),
  loc('Montrose', 'NY', 'Westchester County, NY'),
  loc('Mount Kisco', 'NY', 'Westchester County, NY'),
  loc('Mount Vernon', 'NY', 'Westchester County, NY'),
  loc('New Rochelle', 'NY', 'Westchester County, NY'),
  loc('North Salem', 'NY', 'Westchester County, NY'),
  loc('Ossining', 'NY', 'Westchester County, NY'),
  loc('Peekskill', 'NY', 'Westchester County, NY'),
  loc('Pelham', 'NY', 'Westchester County, NY'),
  loc('Pleasantville', 'NY', 'Westchester County, NY'),
  loc('Port Chester', 'NY', 'Westchester County, NY'),
  loc('Pound Ridge', 'NY', 'Westchester County, NY'),
  loc('Purchase', 'NY', 'Westchester County, NY'),
  loc('Purdys', 'NY', 'Westchester County, NY'),
  loc('Rye', 'NY', 'Westchester County, NY'),
  loc('Scarsdale', 'NY', 'Westchester County, NY'),
  loc('Shenorock', 'NY', 'Westchester County, NY'),
  loc('Shrub Oak', 'NY', 'Westchester County, NY'),
  loc('Somers', 'NY', 'Westchester County, NY'),
  loc('South Salem', 'NY', 'Westchester County, NY'),
  loc('Tarrytown', 'NY', 'Westchester County, NY'),
  loc('Thornwood', 'NY', 'Westchester County, NY'),
  loc('Tuckahoe', 'NY', 'Westchester County, NY'),
  loc('Valhalla', 'NY', 'Westchester County, NY'),
  loc('Verplanck', 'NY', 'Westchester County, NY'),
  loc('Waccabuc', 'NY', 'Westchester County, NY'),
  loc('West Harrison', 'NY', 'Westchester County, NY'),
  loc('White Plains', 'NY', 'Westchester County, NY'),
  loc('Yonkers', 'NY', 'Westchester County, NY'),
  loc('Yorktown Heights', 'NY', 'Westchester County, NY'),

  // ── Putnam County, NY ────────────────────────────────
  loc('Mahopac', 'NY', 'Putnam County, NY'),
  loc('Mahopac Falls', 'NY', 'Putnam County, NY'),
  loc('Putnam Valley', 'NY', 'Putnam County, NY'),

  // ── Rockland County, NY ──────────────────────────────
  loc('Blauvelt', 'NY', 'Rockland County, NY'),
  loc('Congers', 'NY', 'Rockland County, NY'),
  loc('Garnerville', 'NY', 'Rockland County, NY'),
  loc('Haverstraw', 'NY', 'Rockland County, NY'),
  loc('Hillburn', 'NY', 'Rockland County, NY'),
  loc('Monsey', 'NY', 'Rockland County, NY'),
  loc('Nanuet', 'NY', 'Rockland County, NY'),
  loc('New City', 'NY', 'Rockland County, NY'),
  loc('Nyack', 'NY', 'Rockland County, NY'),
  loc('Orangeburg', 'NY', 'Rockland County, NY'),
  loc('Palisades', 'NY', 'Rockland County, NY'),
  loc('Pearl River', 'NY', 'Rockland County, NY'),
  loc('Piermont', 'NY', 'Rockland County, NY'),
  loc('Pomona', 'NY', 'Rockland County, NY'),
  loc('Sparkill', 'NY', 'Rockland County, NY'),
  loc('Spring Valley', 'NY', 'Rockland County, NY'),
  loc('Stony Point', 'NY', 'Rockland County, NY'),
  loc('Suffern', 'NY', 'Rockland County, NY'),
  loc('Tallman', 'NY', 'Rockland County, NY'),
  loc('Tappan', 'NY', 'Rockland County, NY'),
  loc('Thiells', 'NY', 'Rockland County, NY'),
  loc('Tomkins Cove', 'NY', 'Rockland County, NY'),
  loc('Valley Cottage', 'NY', 'Rockland County, NY'),
  loc('West Haverstraw', 'NY', 'Rockland County, NY'),
  loc('West Nyack', 'NY', 'Rockland County, NY'),

  // ── Orange County, NY ────────────────────────────────
  loc('Orange County', 'NY', 'Orange County, NY'),
  loc('Newburgh', 'NY', 'Orange County, NY'),
  loc('Middletown', 'NY', 'Orange County, NY'),

  // ── Nassau County & Queens, NY ───────────────────────
  loc('Nassau County', 'NY', 'Long Island, NY'),
  loc('Queens', 'NY', 'New York City, NY'),

  // ── Fairfield County, CT ─────────────────────────────
  loc('Fairfield County', 'CT', 'Fairfield County, CT'),
  loc('Stamford', 'CT', 'Fairfield County, CT'),
  loc('Greenwich', 'CT', 'Fairfield County, CT'),
  loc('Norwalk', 'CT', 'Fairfield County, CT'),
  loc('Danbury', 'CT', 'Fairfield County, CT'),

  // ── New Haven County, CT ─────────────────────────────
  loc('New Haven County', 'CT', 'New Haven County, CT'),
  loc('New Haven', 'CT', 'New Haven County, CT'),
  loc('Waterbury', 'CT', 'New Haven County, CT'),

  // ── Northern New Jersey ──────────────────────────────
  loc('Bergen County', 'NJ', 'Bergen County, NJ'),
  loc('Hackensack', 'NJ', 'Bergen County, NJ'),
  loc('Paramus', 'NJ', 'Bergen County, NJ'),
  loc('Hudson County', 'NJ', 'Hudson County, NJ'),
  loc('Jersey City', 'NJ', 'Hudson County, NJ'),
  loc('Hoboken', 'NJ', 'Hudson County, NJ'),
  loc('Essex County', 'NJ', 'Essex County, NJ'),
  loc('Newark', 'NJ', 'Essex County, NJ'),

  // ── Maine ────────────────────────────────────────────
  loc('Southern Maine', 'ME', 'Maine'),
  loc('Portland', 'ME', 'Maine'),
  loc('York County', 'ME', 'Maine'),
  loc('Bangor', 'ME', 'Maine'),
];

export function getLocation(slug: string): Location | undefined {
  return locations.find(l => l.slug === slug);
}
