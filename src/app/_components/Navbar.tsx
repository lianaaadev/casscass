import { JSX } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Navbar(): JSX.Element {
  return (
    <nav className="autour-one-regular">
      <div>
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-6">
            <NavLink href="/">Art</NavLink>
            <NavLink href="/about">About</NavLink>
            <a
              href="https://www.instagram.com/silverone1019"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 hover:text-orange-500 transition duration-300"
            >
              <FaInstagram size={32} />
            </a>
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
    className="block py-2 text-orange-700 hover:font-bold hover:text-orange-500 hover:underline"
  >
    {children}
  </Link>
);
