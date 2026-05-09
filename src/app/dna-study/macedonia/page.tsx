"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { Share2, Heart, Gift, Users, HandHelping, Star } from "lucide-react";

export default function MacedoniaPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Macedonia+${i + 1}`,
    alt: `Macedonia church gallery image ${i + 1}`,
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
      icon: Heart,
      title: "Generous Beyond Ability",
      description: "They gave not only what they could afford but far more, out of their deep joy and poverty.",
    },
    {
      icon: Gift,
      title: "Cheerful Giving",
      description: "They pleaded for the privilege of sharing in the service to the saints, giving with joyful hearts.",
    },
    {
      icon: Users,
      title: "Selfless Sacrifice",
      description: "They gave themselves first to the Lord and then to others, prioritising God's kingdom above their own needs.",
    },
    {
      icon: Star,
      title: "Joy in Giving",
      description: "Their overflowing joy and extreme poverty welled up in rich generosity — a paradox of the gospel.",
    },
    {
      icon: HandHelping,
      title: "Support for Others",
      description: "They contributed to the collection for the poor believers in Jerusalem, showing unity across regions.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Macedonia"
        subtitle="A SHARING Church"
        backgroundImage="/assets/heroes.jpg"
        breadcrumbs={[
          { label: "DNA Study", href: "/dna-study/macedonia" },
          { label: "Macedonia", href: "/dna-study/macedonia" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/dna-study/gallery"
        sectionTitle="Macedonia"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Scripture */}
          <div className="reveal-on-scroll mb-16 bg-kcf-blue-lighter/50 rounded-13 p-8 border-l-4 border-kcf-gold">
            <p className="text-lg text-kcf-dark italic leading-relaxed">
              "In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity. For I testify that they gave as much as they were able, and even beyond their ability. Entirely on their own, they urgently pleaded with us for the privilege of sharing in this service to the Lord's people."
            </p>
            <p className="text-sm text-gray-500 mt-3 font-medium">— 2 Corinthians 8:2-4</p>
          </div>

          {/* Overview */}
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Church That Gave Sacrificially
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Macedonian churches — including those in Philippi, Thessalonica, and Berea — set a powerful example of generous giving. Despite facing severe trials and extreme poverty, their joy in the Lord overflowed into remarkable generosity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes their giving so extraordinary is that they didn't give out of their abundance but out of their need. They gave beyond their ability, and they did so eagerly, pleading for the privilege of participating in supporting other believers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Macedonian churches teach us that generosity is not about how much we have but about the condition of our hearts. Their example challenges us to give joyfully, sacrificially, and eagerly.
            </p>
          </div>

          {/* Qualities */}
          <div className="reveal-on-scroll mb-16">
            <h3 className="text-2xl font-bold text-kcf-dark mb-8 text-center">
              Marks of Macedonian Generosity
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
              The Macedonian churches teach us that true generosity flows from a heart transformed by the gospel. When we experience God's grace deeply, we give joyfully — not out of obligation, but out of the desire to share the blessings we have received.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
