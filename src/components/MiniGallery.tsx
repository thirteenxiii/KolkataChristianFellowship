"use client";

import { useState, useEffect, useCallback } from "react";
import { Image, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import Link from "next/link";

export interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

interface MiniGalleryProps {
  images: GalleryImage[];
  galleryHref: string;
  sectionTitle: string;
}

const FALLBACK_IMG = "https://placehold.co/600x600/e8f0fe/1a3a6b?text=KCF";

export default function MiniGallery({
  images,
  galleryHref,
  sectionTitle,
}: MiniGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  }, [lightboxIndex, images.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + images.length) % images.length
      );
    }
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const displayImages = images.slice(0, 8);

  return (
    <section className="py-16 lg:py-20 bg-kcf-blue-lighter/30">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-kcf-blue-lighter text-kcf-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Gallery
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-kcf-dark mb-3">
            {sectionTitle}
          </h2>
          <p className="text-gray-500 text-sm">
            Click on an image to view full size
          </p>
        </div>

        {/* 4x2 Square Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {displayImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-13 overflow-hidden bg-gray-100 cursor-pointer group"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_IMG;
                }}
              />
              {/* Hover overlay with description */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center p-3">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <Image className="w-6 h-6 text-white mx-auto mb-1" />
                  <p className="text-white text-xs leading-tight line-clamp-3">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="text-center mt-8">
          <Link
            href={galleryHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-kcf-blue hover:text-kcf-blue-light transition-colors"
          >
            <Camera className="w-4 h-4" />
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="max-w-3xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayImages[lightboxIndex].src}
              alt={displayImages[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-13"
              onError={(e) => {
                (e.target as HTMLImageElement).src = FALLBACK_IMG;
              }}
            />
            <p className="text-white/70 text-sm text-center mt-4">
              {displayImages[lightboxIndex].description} — {lightboxIndex + 1} of{" "}
              {displayImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
