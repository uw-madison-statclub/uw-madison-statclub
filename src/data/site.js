export const site = {
  name: "UW–Madison Statistics Club",
  shortName: "Stat Club",
  tagline: "Data, statistics, and community at UW–Madison.",
  email: "statclub@studentorg.wisc.edu",
  instagram: "https://www.instagram.com/uwstatclub",
  linkedin: "https://www.linkedin.com/company/uw-madison-statistics-club",
  discord: "https://discord.gg/replace-with-invite",
  wisconsinOrgsUrl: "https://win.wisc.edu/",
};

// paths are relative to the site's base URL (see astro.config.mjs `base`)
export const nav = [
  { path: "", label: "Home" },
  { path: "about/", label: "About" },
  { path: "events/", label: "Events" },
  { path: "resources/", label: "Resources" },
  { path: "contact/", label: "Join / Contact" },
];
