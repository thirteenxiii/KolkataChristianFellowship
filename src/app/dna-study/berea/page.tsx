"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { BookOpen, Search, Users, Lightbulb, Shield, Star } from "lucide-react";

export default function BereaPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Berea+${i + 1}`,
    alt: `Berea ${i + 1}`,
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

  const qualities = [
    {
      icon: BookOpen,
      title: "Noble Character",
      description: "The Bereans were commended for their noble character because they received the Word with great eagerness.",
    },
    {
      icon: Search,
      title: "Daily Scripture Search",
      description: "They examined the Scriptures every day to verify that what Paul taught was true.",
    },
    {
      icon: Lightbulb,
      title: "Open-Minded Yet Discerning",
      description: "They were open to new teaching but not gullible — they tested everything against Scripture.",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "They studied together as a community, demonstrating that discipleship happens in relationship.",
    },
    {
      icon: Shield,
      title: "Protected from Error",
      description: "Their commitment to Scripture protected them from false teaching and kept them grounded in truth.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Berea"
        subtitle="A SEARCHING Church"
        backgroundImage="/assets/heroes.jpg"
        breadcrumbs={[
          { label: "DNA Study", href: "/dna-study/berea" },
          { label: "Berea", href: "/dna-study/berea" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/dna-study/gallery"
        sectionTitle="Berea"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Scripture */}
          <div className="reveal-on-scroll mb-16 bg-kcf-blue-lighter/50 rounded-13 p-8 border-l-4 border-kcf-gold">
            <p className="text-lg text-kcf-dark italic leading-relaxed">
              "Now the Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true."
            </p>
            <p className="text-sm text-gray-500 mt-3 font-medium">— Acts 17:11</p>
          </div>

          {/* Overview */}
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Church That Searched the Scriptures
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Berean church is remembered for one defining characteristic: they examined the Scriptures daily to verify the truth of what they heard. This commitment to God's Word earned them the highest commendation in Scripture — they were called "noble."
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When Paul and Silas preached in Berea, the people didn't simply accept or reject their message based on emotion or tradition. Instead, they went to the Scriptures themselves to confirm that what they heard aligned with God's revealed Word.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Bereans model for us the importance of being both eager learners and careful discerners. They were open to new teaching but not naive — they tested everything against the ultimate authority of Scripture.
            </p>
          </div>

          {/* Qualities */}
          <div className="reveal-on-scroll mb-16">
            <h3 className="text-2xl font-bold text-kcf-dark mb-8 text-center">
              The Berean Example
            </h3>
            <div className="space-y-6">
              {qualities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-13 border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-13 bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-kcf-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-kcf-dark mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lesson */}
          <div className="reveal-on-scroll bg-gradient-to-r from-kcf-blue to-kcf-blue-light rounded-13 p-8 text-white">
            <h3 className="text-xl font-bold mb-3">What We Can Learn</h3>
            <p className="text-white/90 leading-relaxed">
              The Bereans challenge us to be people of the Word. In a world of competing voices and conflicting messages, we must cultivate the habit of daily Scripture reading, testing everything we hear against the truth of God's Word. This is the mark of noble character.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
