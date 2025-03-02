import { JSX } from "react";

export default function ClickableLogo(): JSX.Element {
  return (
    <a
      href="/"
      className="mb-5 text-center text-4xl md:text-6xl lg:text-7xl emilys-candy-regular text-purple-600 hover:text-purple-500"
    >
      Cassie Mifflin
    </a>
  );
}
