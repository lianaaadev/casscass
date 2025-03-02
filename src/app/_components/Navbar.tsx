import { JSX } from "react";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <nav className="autour-one-regular">
      <div>
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-6">
            <NavLink href="/">Art</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

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
