import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/editor", label: "Editor" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">ArachWrite</h1>
      <div className="space-x-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline ${
              pathname === href ? "text-light_blue" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;