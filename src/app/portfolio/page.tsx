import Image from "next/image";
import { LikeButton } from "@/components/LikeButton";

const photos = [
  "/images/photo1.jpeg",
  "/images/photo2.jpeg",
  "/images/photo3.jpeg",
  "/images/photo4.jpeg",
  "/images/photo5.jpeg",
  "/images/photo6.jpeg",
];

export default function PortfolioPage() {
  return (
    <main className="px-8 py-12">
      <h1 className="mb-10 text-4xl font-semibold">Portfolio</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo}
            className="relative aspect-4/5 overflow-hidden rounded-xl"
          >
            <Image
              src={photo}
              alt="Photographie du portfolio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <LikeButton />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
