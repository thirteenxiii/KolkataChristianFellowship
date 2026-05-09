"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";

export default function PartnersPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Partners+${i + 1}`,
    alt: `Our Partners ${i + 1}`,
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

  const regions = [
    { name: "North 24 Parganas", churches: "9 House Churches", children: "~550 children" },
    { name: "Sonarpur", churches: "Church & Thihuria Outreach", children: "~200 children" },
    { name: "Madhyamgram", churches: "Church meeting", children: "~50 children" },
    { name: "Howrah, South 24 Parganas & Midnapore", churches: "8 House Churches", children: "~200 children" },
    { name: "North Bengal (Darjeeling)", churches: "9 Churches + Rabha tribe", children: "~300 children" },
    { name: "Dharni, Maharashtra", churches: "3 House Churches + Orphanage", children: "" },
    { name: "Bondamunda, Orissa", churches: "Main Service + 3 House Churches", children: "" },
    { name: "Manipur", churches: "One church (300+ members)", children: "" },
  ];

  return (
    <div>
      <PageHeader
        title="Our Partners"
        subtitle="Mission partners we support across India."
        breadcrumbs={[
          { label: "Our Impact", href: "/impact/partners" },
          { label: "Our Partners", href: "/impact/partners" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/impact/gallery"
        sectionTitle="Our Partners"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Right from our inception, one of the burdens that God laid on our
              heart was to be a Church that invests sacrificially in missions.
              Our commitment to the Great Commission has consistently propelled
              us to support men and women who have a burden to usher holistic
              transformation to their communities.
            </p>
          </div>

          <div className="overflow-hidden rounded-13 border border-gray-200 reveal-on-scroll">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-kcf-blue text-white">
                  <th className="text-left px-4 py-3 font-semibold">Region</th>
                  <th className="text-left px-4 py-3 font-semibold">Churches / Outreach</th>
                  <th className="text-left px-4 py-3 font-semibold">Children Impacted</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((region, i) => (
                  <tr key={region.name} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-kcf-dark">{region.name}</td>
                    <td className="px-4 py-3 text-gray-600">{region.churches}</td>
                    <td className="px-4 py-3 text-gray-600">{region.children || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
