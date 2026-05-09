"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { Baby, Heart, BookOpen, Music } from "lucide-react";

export default function KidsChurchPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Kids+${i + 1}`,
    alt: `Kids Church ${i + 1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }));

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

  const ageGroups = [
    { name: "Smallies", age: "Ages 0 – 3", color: "bg-pink-100 text-pink-700", icon: Baby },
    { name: "Beginners", age: "Ages 4 – 6", color: "bg-blue-100 text-blue-700", icon: Heart },
    { name: "Primaries", age: "Ages 7 – 9", color: "bg-green-100 text-green-700", icon: BookOpen },
    { name: "Juniors", age: "Ages 10 – 12", color: "bg-purple-100 text-purple-700", icon: Music },
  ];

  return (
    <div>
      <PageHeader
        title="Kids Church"
        subtitle="Planting seeds of faith in the next generation."
        breadcrumbs={[
          { label: "Ministries", href: "/ministries/kids-church" },
          { label: "Kids Church", href: "/ministries/kids-church" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/ministries/gallery"
        sectionTitle="Kids Church"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At KCF we believe in teaching children biblical truths in a manner
              they can understand. Our Kids Church is for children below 13
              years of age. The children first join the church in worship and
              leave before the sermon. They have their own time of enthusiastic
              singing before dividing into different classes according to age.
            </p>
          </div>

          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-8 text-center">
              Age Groups
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ageGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.name}
                    className="p-6 rounded-13 bg-white shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                  >
                    <div
                      className={`w-14 h-14 rounded-13 ${group.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-kcf-dark">
                      {group.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{group.age}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
