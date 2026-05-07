"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Heart, Stethoscope, Home } from "lucide-react";

export default function SulkuniPage() {
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
        title="Sulkuni"
        subtitle="Village ministry and medical camp in the Sundarbans."
        breadcrumbs={[
          { label: "Our Impact", href: "/impact/sulkuni" },
          { label: "Sulkuni", href: "/impact/sulkuni" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Sulkuni Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our journey in Sulkuni began because of two unique stories of God
              and His people.
            </p>
          </div>

          <div className="space-y-10 mb-16">
            <div className="reveal-on-scroll p-8 rounded-2xl bg-rose-50">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-rose-600" />
                <h3 className="text-xl font-bold text-kcf-dark">
                  20 Rupees and a Heart of Love
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                When our field workers were returning home on a local train, they
                met a couple from Sulkuni who had been robbed and were in
                desperate need of money to return home. They gave them 20
                rupees. This act of kindness so moved this couple that they
                began to ask why these men cared for them, opening the door to
                share about the love of Jesus.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When the super cyclone Aila devastated many parts of Bengal in
                2006, one of the worst hit areas was Sulkuni. The family of KCF
                provided dry food, clean drinking water, and roofing materials
                for those who had lost everything.
              </p>
            </div>

            <div className="reveal-on-scroll p-8 rounded-2xl bg-blue-50">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-kcf-dark">
                  A Nurse on a Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                God burdened a young nurse from the UK to partner with KCF in a
                quest to take quality and affordable healthcare to an extremely
                needy community. When she began to survey the various fields
                that KCF worked in, the Lord placed an unmistakable burden on
                her heart for Sulkuni.
              </p>
            </div>
          </div>

          <div className="reveal-on-scroll p-8 rounded-2xl bg-kcf-dark text-white">
            <Home className="w-8 h-8 text-kcf-gold mb-4" />
            <h3 className="text-2xl font-bold mb-3">Community Center</h3>
            <p className="text-gray-300 leading-relaxed">
              Both of these incredible stories resulted in the establishment of
              a beautiful Community Center in November 2015, with a design that
              reflects the local culture. This center serves as a place of
              worship, a medical camp facility, and a hub for community
              development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
