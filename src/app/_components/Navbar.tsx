"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="autour-one-regular">
      <div>
        <div className="flex justify-center items-center h-16">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Art</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="text-orange-700"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden p-4">
          <NavLink href="/" onClick={() => setMenuOpen(false)}>
            Art
          </NavLink>
          <NavLink href="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

// Reusable NavLink component with type safety
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block py-2 text-orange-700 hover:font-bold hover:underline"
  >
    {children}
  </Link>
);
