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

      <form name="contact" data-netlify="true">
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
