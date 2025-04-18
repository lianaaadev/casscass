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
      <div className="mx-10 mb-6 px-7 py-7 bg-slate-100 autour-one-regular border border-purple-300 border-3 rounded-lg ">
        <p>Cassie Mifflin is a Vancouver based interdisciplinary artist whose work often grows from the stories she reads, as well as her own experiences. Growing up in the city of Abbotsford, Cassie spent much of her youth immersed in novels, creating wild imagery to accompany the words on the pages.</p>
      </div>
      <div className="mx-10 my-6 px-7 py-7 bg-slate-100 autour-one-regular border border-purple-300 border-3 rounded-lg ">
        <p>Cassie's work is inherently personal as she often explores topics of memory and fantasy, using memories she has of her childhood summers spent visiting family in Newfoundland, and combining them with the fantasy worlds that she immerses herself in.</p>
      </div>
      <div className="mx-10 my-6 px-7 py-7 bg-slate-100 autour-one-regular border border-purple-300 border-3 rounded-lg ">
        <p>While using a multitude of mediums, Cassie's work is primarily done using pens and paper to create interesting and complex textures and landscapes before often adding elements of collage, and paint.</p>
      </div>
    </div>
  );
}
