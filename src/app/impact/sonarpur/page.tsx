"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { Calendar, Heart, Users, Monitor, Scissors, Sun } from "lucide-react";

export default function SonarpurPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Sonarpur+${i + 1}`,
    alt: `Sonarpur ${i + 1}`,
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

  const weeklySchedule = [
    { day: "Mon - Fri", time: "5:00 PM", activity: "Computer Training Program" },
    { day: "Tuesday", time: "6:00 PM", activity: "House Group Meetings" },
    { day: "Wednesday", time: "2:30 PM", activity: "Sewing School" },
    { day: "Wednesday", time: "5:00 PM", activity: "Women's Fellowship" },
    { day: "Thursday", time: "6:00 PM", activity: "Youth Fellowship" },
    { day: "Friday", time: "2:30 PM", activity: "Sewing School" },
    { day: "Saturday", time: "4:00 PM", activity: "Saturday School & Outreach" },
    { day: "Saturday", time: "6:00 PM", activity: "Discipleship Training" },
    { day: "Sunday", time: "5:30 PM", activity: "Worship Service" },
  ];

  return (
    <div>
      <PageHeader
        title="Sonarpur"
        subtitle="Community outreach and church in the Sonarpur region."
        breadcrumbs={[
          { label: "Our Impact", href: "/impact/sonarpur" },
          { label: "Sonarpur", href: "/impact/sonarpur" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/impact/gallery"
        sectionTitle="Sonarpur"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Sonarpur Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The story of the work in Sonarpur is one that highlights the
              incredible power of partnerships. It is a story of how men and
              women from different parts of the world, having different gifts
              and abilities, were drawn together by God for a special purpose.
            </p>
          </div>

          {/* Timeline */}
          <div className="reveal-on-scroll mb-16">
            <h3 className="text-2xl font-bold text-kcf-dark mb-6">
              Key Moments
            </h3>
            <div className="space-y-4">
              {[
                "The arrival of missionaries from Brazil in the year 2000 and their friendship with Pastor Andrews and family.",
                "The establishment of football schools to help produce quality football players.",
                "The coming together of four friends through the football schools.",
                "A partnership with KCF from our inception in 2005.",
                "The 1st Saturday School Meeting in Sonarpur — 1st December, 2007.",
                "The 1st Sunday Service in Sonarpur — 2nd December, 2007.",
                "Construction and completion of 1st Phase of our community center — 4th April, 2010.",
                "Construction and completion of 2nd Phase of our community center — 9th February, 2014.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-kcf-gold mt-2 shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="reveal-on-scroll">
            <h3 className="text-2xl font-bold text-kcf-dark mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-kcf-gold" />
              A Week at Sonarpur
            </h3>
            <div className="overflow-hidden rounded-13 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-kcf-blue text-white">
                    <th className="text-left px-4 py-3 font-semibold">Day</th>
                    <th className="text-left px-4 py-3 font-semibold">Time</th>
                    <th className="text-left px-4 py-3 font-semibold">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-medium text-kcf-dark">
                        {item.day}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{item.time}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {item.activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
