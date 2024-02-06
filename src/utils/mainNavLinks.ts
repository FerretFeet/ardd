interface navLinks {
  href: string;
  text: string;
}

const mainNavLinks = new Array<navLinks>(
  // FIRST ELEMENT SHOULD ALWAYS BE HOME
  {
    href: ".",
    text: "Home",
  },
  {
    href: "./services",
    text: "Services",
  },
  {
    href: "./faq",
    text: "FAQ",
  },
  {
    href: "./contact",
    text: "Contact Us",
  },
);

export default mainNavLinks;
