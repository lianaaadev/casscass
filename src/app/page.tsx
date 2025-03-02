import Image from "next/image";

export default function Home() {
  const IMAGES = [
    { src: "/art/self-portrait-1.jpg", alt: "Self Portrait 1" },
    { src: "/art/self-portrait-2.jpg", alt: "Self Portrait 2" },
    { src: "/art/man-with-slit-throat.jpg", alt: "Man With Slit Throat" },
    { src: "/art/self-portrait-3.jpg", alt: "Self Portrait 3" },
    { src: "/art/collage-people-flowers.jpg", alt: "Collage 1" },
    { src: "/art/collage-orange.jpg", alt: "Collage 2" },
    { src: "/art/collage-girl.jpg", alt: "Collage 3" },
    { src: "/art/collage-person.jpg", alt: "Collage 4" },
    { src: "/art/collage-flower.jpg", alt: "Collage 5" },
    { src: "/art/girl-covering-her-face.jpg", alt: "Collage 6" },
    { src: "/art/hands-1.jpg", alt: "Hands 1" },
    { src: "/art/Hands-2.jpg", alt: "Hands 2" },
    { src: "/art/Hands-3.jpg", alt: "Hands 3" },
    { src: "/art/Hands-4.jpg", alt: "Hands 4" },
    { src: "/art/house-1.jpg", alt: "House 1" },
    { src: "/art/house-2.jpg", alt: "House 2" },
    { src: "/art/tree.jpg", alt: "Tree" },
    { src: "/art/collage-cinema.jpg", alt: "Collage 7" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-center text-3xl mb-5 font-semibold">
        Cassie Mifflin
      </h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {IMAGES.map((img, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={750}
              layout="intrinsic"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
