"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Image, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

const photoCategories = [
  "All",
  "Night to Shine",
  "Kids Church",
  "School of Excellence",
  "Rajarhat Fellowship",
  "Sonarpur",
  "Madhyamgram",
  "Sulkuni",
  "Nirmaan",
  "KCF Main Church",
  "Our Partners",
];

const galleryImages = [
  { src: "http://kolkatachristianfellowship.net/admin/upload/58049-Our_Partners.jpg", alt: "Our Partners", category: "Our Partners" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/41781-Liluah%201.jpg", alt: "Liluah", category: "KCF Main Church" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/62219-Liluah%203%20news.jpg", alt: "Liluah News", category: "KCF Main Church" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/18349-Liluah%202.jpg", alt: "Liluah", category: "KCF Main Church" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/30211-Rajarhat%203.jpg", alt: "Rajarhat", category: "Rajarhat Fellowship" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/49762-Rajarhat%204.jpg", alt: "Rajarhat", category: "Rajarhat Fellowship" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/32797-Sonarpur%20Church%201.jpg", alt: "Sonarpur Church", category: "Sonarpur" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/66891-Sonarpur%20Church%202.JPG", alt: "Sonarpur Church", category: "Sonarpur" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/56150-Madhyamgram%201.jpg", alt: "Madhyamgram", category: "Madhyamgram" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/16730-Madhyamgram%202.jpg", alt: "Madhyamgram", category: "Madhyamgram" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/50775-Sulkuni%201.jpg", alt: "Sulkuni", category: "Sulkuni" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/35183-Sulkuni%202.jpg", alt: "Sulkuni", category: "Sulkuni" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/47066-KCF%20Main2.jpg", alt: "KCF Main", category: "KCF Main Church" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/153530319946_150477902439_k1.jpg", alt: "KCF", category: "KCF Main Church" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/153530330816_150477902528_k2.jpg", alt: "KCF", category: "KCF Main Church" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/1535303338110_150477902546_k3.jpg", alt: "KCF", category: "KCF Main Church" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/1535303364310_150477902546_k4.jpg", alt: "KCF", category: "KCF Main Church" },
  { src: "http://kolkatachristianfellowship.net/admin/upload/153530340047_150477902558_k5.jpg", alt: "KCF", category: "KCF Main Church" },
];

export default function PhotosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div>
      <PageHeader
        title="Photos"
        subtitle="A visual journey through the life and ministry of Kolkata Christian Fellowship."
        breadcrumbs={[
          { label: "Photos", href: "/photos" },
          { label: "Gallery", href: "/photos" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-kcf-blue-lighter text-kcf-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Camera className="w-4 h-4" />
              Photo Gallery
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4">
              Our Ministry in Pictures
            </h2>
            <p className="text-gray-600 text-lg">
              Browse through photos capturing moments from our services, outreaches, and community events.
            </p>
          </div>

          {/* Category Filters */}
          <div className="reveal-on-scroll mb-10 overflow-x-auto">
            <div className="flex flex-wrap gap-2">
              {photoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-kcf-blue text-white shadow-lg shadow-kcf-blue/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                className="reveal-on-scroll group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x450/e8f0fe/1a3a6b?text=KCF+Photo";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-white font-medium">{img.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
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
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/1200x800/e8f0fe/1a3a6b?text=KCF+Photo";
              }}
            />
            <p className="text-white/70 text-sm text-center mt-4">
              {filteredImages[lightboxIndex].category} — {lightboxIndex + 1} of{" "}
              {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
