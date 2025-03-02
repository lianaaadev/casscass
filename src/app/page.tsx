import Image from "next/image";
import styles from "../styles/Landing.module.css";
import Navbar from "@components/Navbar";
import ClickableLogo from "@components/ClickableLogo";

export default function Landing() {
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
    { src: "/art/grid-1.jpg", alt: "Grid 1" },
    { src: "/art/grid-2.jpg", alt: "Grid 2" },
    { src: "/art/tree.jpg", alt: "Tree" },
    { src: "/art/collage-cinema.jpg", alt: "Collage 7" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="mt-9 flex justify-center">
        <ClickableLogo />
      </div>
      <div className="mb-9">
        <Navbar />
      </div>

      <div className={styles["portfolio-grid"]}>
        {IMAGES.map((img, index) => (
          <div key={index} className={styles["image-wrapper"]}>
            <Image src={img.src} alt={img.alt} width={500} height={750} />
          </div>
        ))}
      </div>
    </div>
  );
}
