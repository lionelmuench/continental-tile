export interface Project {
  slug: string;
  title: string;
  location: string;
  type?: string;
  date?: string;
  description?: string;
  thumbnailMatch?: string; // string to match for the main image
}

export const projects: Project[] = [
  {
    slug: "25-n-lex",
    title: "25 N Lex",
    location: "White Plains, NY",
    type: "Multifamily",
    date: "2025",
    description: "Installation of all flooring (tile, LVT, carpet) and wall tiles for units and all amenity spaces, including the pool.",
    thumbnailMatch: "6713b4097ca741acb339cee633f0f045~mv2"
  },
  {
    slug: "porsche",
    title: "Porsche of White Plains",
    location: "White Plains, NY",
    type: "Commercial / Auto Dealership"
  },
  {
    slug: "100-east-putnam",
    title: "100 East Putnam",
    location: "Greenwich, CT",
    type: "Commercial"
  },
  {
    slug: "overland-crossings",
    title: "Overland Crossings",
    location: "Brookfield, CT",
    type: "Residential / Multifamily",
    thumbnailMatch: "OverlookLaurelHill2"
  },
  {
    slug: "the-allen",
    title: "The Allen",
    location: "New Rochelle, NY",
    type: "Residential / Multifamily"
  }
];
