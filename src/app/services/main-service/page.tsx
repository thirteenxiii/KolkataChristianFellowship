"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { Music, BookOpen, Users, Heart, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function MainServicePage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=MainService+${i + 1}`,
    alt: `Main Service ${i + 1}`,
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

  const pillars = [
    {
      title: "Worship",
      icon: Music,
      desc: "One of the unique features of our worship experience is the blending of traditional, contemporary, and vernacular music in our service every week. We encourage various expressions of corporate prayer with a desire to motivate and equip the saints to desire greater intimacy with the Master.",
    },
    {
      title: "Word",
      icon: BookOpen,
      desc: "The family of KCF is committed to teaching the whole counsel of God in a systematic fashion in a manner that is relevant today. Our messages are translated into Bengali, keeping in view our commitment to serving the people of this great state.",
    },
    {
      title: "Walk",
      icon: Users,
      desc: "KCF is a place where all are welcome! We rejoice in the fact that people from all over India and the world have the joy of walking hand in hand with one another in faith and fellowship.",
    },
    {
      title: "Work",
      icon: Heart,
      desc: "We desire to be a community that serves together. We rejoice in the fact that each one who worships at KCF is being salt and light in the places where God has placed them.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="KCF Main Service"
        subtitle="Worship. Word. Walk. Work."
        breadcrumbs={[
          { label: "Services", href: "/services/main-service" },
          { label: "Main Service", href: "/services/main-service" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/services/gallery"
        sectionTitle="Main Service"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Service Info */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
                Join Us Every Sunday
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The family of KCF joins together each week to celebrate the
                Triune God and our togetherness in His body. Our services are
                designed to be accessible, meaningful, and spiritually enriching
                for everyone who walks through our doors.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-kcf-gold" />
                  <span>Sunday: 9:45 AM & 11:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-kcf-gold" />
                  <span>896 & 897 Shatabdi Park, Mukundapur, Kolkata</span>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll rounded-13 overflow-hidden shadow-xl aspect-video bg-gray-100">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pm_PIvFITFQ"
                title="KCF Service"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Four Pillars */}
          <div className="reveal-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-10 text-center">
              Our Four Pillars
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-8 rounded-13 bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-10 h-10 text-kcf-blue mb-4" />
                    <h3 className="text-xl font-bold text-kcf-dark mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.desc}
                    </p>
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
