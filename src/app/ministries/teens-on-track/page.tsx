"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { Users, Calendar, MessageCircle, Music } from "lucide-react";

export default function TeensOnTrackPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=TOT+${i + 1}`,
    alt: `Teens on Track ${i + 1}`,
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

  return (
    <div>
      <PageHeader
        title="Teens on Track"
        subtitle="A place for teenagers to connect, grow, and belong."
        breadcrumbs={[
          { label: "Ministries", href: "/ministries/teens-on-track" },
          { label: "Teens on Track", href: "/ministries/teens-on-track" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/ministries/gallery"
        sectionTitle="Teens on Track"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-12">
            <blockquote className="border-l-4 border-kcf-gold bg-kcf-blue-lighter/50 rounded-r-xl px-6 py-4 mb-8">
              <p className="text-lg text-kcf-blue italic font-medium">
                &ldquo;Don&rsquo;t let anyone look down on you because you are
                young, but set an example for the believers in speech, in
                conduct, in love, in faith and in purity.&rdquo;
              </p>
              <cite className="text-sm text-kcf-muted mt-2 block">
                1 Timothy 4:12
              </cite>
            </blockquote>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Teens on Track, or TOT as we call it, is a great place at KCF for
              teenagers to connect. TOT meets every 2nd and 4th Sunday of the
              month during the main service hour.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With the demanding schedule of a high schooler — school, studies,
              tuition classes, and exams — TOT provides a rest from a hectic
              schedule. Students are able to come together for worship, prayer,
              Bible study, and fellowship. It&rsquo;s a place to recharge and
              refuel as they head back out into the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal-on-scroll">
            {[
              {
                title: "Worship",
                desc: "Energetic and engaging worship sessions that speak to the teenage experience.",
                icon: Music,
              },
              {
                title: "Bible Study",
                desc: "Relevant and practical teaching from God's Word for everyday life.",
                icon: Calendar,
              },
              {
                title: "Fellowship",
                desc: "Building lasting friendships in a safe and welcoming environment.",
                icon: Users,
              },
              {
                title: "Connection",
                desc: "Staying connected through social media throughout the week.",
                icon: MessageCircle,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-13 bg-white shadow-md border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-kcf-blue mb-3" />
                  <h3 className="text-lg font-bold text-kcf-dark mb-2">
                    {item.title}
                  </h3>
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
