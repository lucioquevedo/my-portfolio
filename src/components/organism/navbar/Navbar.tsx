import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[45px] top-0 container mx-auto md:ml-28 2xl:ml-auto px-4 max-w-screen-sm">
      <ul className="flex gap-x-3 h-full items-end justify-between font-light">
        {links.map((link, idx) => (
          <li key={link.ref + idx} className="hover:overline">
            <Link href={link.ref}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const links = [
  { text: "about", ref: "#about" },
  { text: "experience", ref: "#experience" },
  { text: "projects", ref: "#projects" },
  { text: "contact", ref: "#contact" },
];
