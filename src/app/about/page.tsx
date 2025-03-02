import Navbar from "@components/Navbar";
import ClickableLogo from "@components/ClickableLogo";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto p-5">
     <div className="mt-9 flex justify-center">
        <ClickableLogo />
      </div>
      <div className="mb-9">
        <Navbar />
      </div>

      <div>
        <p>Hello everyone</p>
      </div>
    </div>
  );
}
