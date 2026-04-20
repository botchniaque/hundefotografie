"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "/gallery/1.jpeg", alt: "Dog portrait 1" },
  { id: 2, src: "/gallery/2.jpeg", alt: "Dog portrait 2" },
  { id: 3, src: "/gallery/3.jpeg", alt: "Dog portrait 3" },
  { id: 4, src: "/gallery/4.jpeg", alt: "Dog portrait 4" },
  { id: 5, src: "/gallery/5.jpeg", alt: "Dog portrait 5" },
  { id: 6, src: "/gallery/6.jpeg", alt: "Dog portrait 6" },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = GALLERY_IMAGES.find((img) => img.id === selectedId);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
        <p className="text-gray-600 mb-12">Check out some of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="relative aspect-square rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </button>
          ))}
        </div>

        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedId(null)}
          >
            <div
              className="relative max-w-2xl w-full aspect-square bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
