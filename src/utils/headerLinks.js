const headerLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Investments",
    link: "#",
    subMenu: [
      { name: "Process", link: "/investments/process" },
      { name: "Benefits", link: "/investments/benefits" },
    ],
  },
  {
    name: "Partners",
    link: "/partners",
    subMenu: [
      { name: "Digiconnekt", link: "/partners/digiconnekt" },
      { name: "Buildnetic", link: "/partners/buildnetic" },
    ],
  },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
];

export default headerLinks;
