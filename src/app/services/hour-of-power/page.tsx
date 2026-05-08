"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Clock, Flag, MapPin, Building2, Globe, Church, Heart } from "lucide-react";

export default function HourOfPowerPage() {
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

  const prayerFocus = [
    { title: "Our Nation", icon: Flag, desc: "Praying for India — its leaders, its people, and its future." },
    { title: "Our State", icon: MapPin, desc: "Interceding for West Bengal and its diverse communities." },
    { title: "Our City", icon: Building2, desc: "Standing in the gap for Kolkata, the city of joy." },
    { title: "Our World", icon: Globe, desc: "Lifting up global needs before the throne of grace." },
    { title: "The Church", icon: Church, desc: "Praying for churches in Kolkata and across the world." },
    { title: "The KCF Family", icon: Heart, desc: "Covering our own fellowship in prayer." },
  ];

  return (
    <div>
      <PageHeader
        title="Hour of Power"
        subtitle="Start your Sunday with prayer."
        breadcrumbs={[
          { label: "Services", href: "/services/hour-of-power" },
          { label: "Hour of Power", href: "/services/hour-of-power" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-kcf-gold" />
              <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark">
                Every Sunday at 9:00 AM
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              We meet together for a time of seeking the face of God every
              Sunday at 9:00 AM. This is a very central part of our weekly
              activities — a sacred hour where we intercede for our world, our
              nation, and our community.
            </p>
          </div>

          <div className="reveal-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-10 text-center">
              Our Prayer Focus
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prayerFocus.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-13 bg-kcf-blue-lighter/50 hover:bg-kcf-blue-lighter transition-colors"
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
        </div>
      </section>
    </div>
  );
}
