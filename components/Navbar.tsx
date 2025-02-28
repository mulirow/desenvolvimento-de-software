import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">ArachWrite</h1>
      <div className="space-x-4">
        <Link
          href="/"
          className={`hover:underline ${pathname === "/" ? "text-light_blue" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/editor"
          className={`hover:underline ${pathname === "/editor" ? "text-light_blue" : ""}`}
        >
          Editor
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
