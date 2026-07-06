export const SITE_CONFIG = {
  name: "INDOSM Official",
  description: "Indian Developers Open Source Movement - Student-driven community building production applications.",
  links: {
    github: "https://github.com/indosm",
    discord: "https://discord.gg/indosm",
    twitter: "https://twitter.com/indosm_org"
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Community", href: "/community" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ]
} as const;

export type SiteConfig = typeof SITE_CONFIG;