"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Globe, Heart, Users } from "lucide-react";

export default function PartnersPage() {
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

          <div className="space-y-4 reveal-on-scroll">
            {regions.map((region) => (
              <div
                key={region.name}
                className="p-5 rounded-xl bg-white shadow-md border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-kcf-blue shrink-0" />
                  <span className="font-semibold text-kcf-dark">{region.name}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  {region.churches && (
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-kcf-gold" />
                      {region.churches}
                    </span>
                  )}
                  {region.children && (
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-kcf-gold" />
                      {region.children}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
