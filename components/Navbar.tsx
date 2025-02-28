import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/editor", label: "Editor" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">ArachWrite</h1>
      <div className="space-x-4 flex items-center">
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

        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;