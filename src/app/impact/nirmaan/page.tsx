"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { Heart, Monitor, BookOpen, Users, Home, Shield } from "lucide-react";

export default function NirmaanPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Nirmaan+${i + 1}`,
    alt: `Nirmaan ${i + 1}`,
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

  const components = [
    { title: "Sponsorship", icon: Heart, desc: "We assist and encourage children to pursue their education, knowing this is the key to fulfilling their dreams and changing their futures." },
    { title: "Computer Education", icon: Monitor, desc: "Our centers provide quality and affordable computer education, helping children advance their skills through practical learning." },
    { title: "English Learning", icon: BookOpen, desc: "Basic spoken English skills greatly enhance a child's ability and provide a competitive edge in life." },
    { title: "Character Building", icon: Users, desc: "We work towards the all-round development of children, desiring that each becomes a responsible and good citizen." },
    { title: "Family Development", icon: Home, desc: "We help families develop alongside their children through self-help groups and vocational training." },
    { title: "Child Protection", icon: Shield, desc: "We are committed to promoting the rights of every child, including their right to be protected from all forms of abuse." },
  ];

  return (
    <div>
      <PageHeader
        title="Nirmaan"
        subtitle="Child development and transformation program."
        breadcrumbs={[
          { label: "Our Impact", href: "/impact/nirmaan" },
          { label: "Nirmaan", href: "/impact/nirmaan" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/impact/gallery"
        sectionTitle="Nirmaan"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Nirmaan Story
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              NIRMAAN means &ldquo;To Build.&rdquo; This is our program for child
              development and transformation, encompassing multiple components
              designed for holistic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal-on-scroll">
            {components.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-13 bg-white shadow-md border border-gray-100">
                  <Icon className="w-8 h-8 text-kcf-blue mb-3" />
                  <h3 className="text-lg font-bold text-kcf-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
