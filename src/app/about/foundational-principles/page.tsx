"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Heart, Shield, BookOpen } from "lucide-react";

export default function FoundationalPrinciplesPage() {
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
        title="Foundational Principles"
        subtitle="The B-U-I-L-D values that guide our fellowship."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Foundational Principles", href: "/about/foundational-principles" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Three Pillars */}
          <div className="reveal-on-scroll mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-8 text-center">
              Our Threefold Commitment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Encounter the Saviour",
                  desc: "KCF desires that all men encounter the Saviour through worship, prayer, and the Word.",
                  icon: Heart,
                  color: "bg-rose-50",
                  iconColor: "text-rose-600",
                },
                {
                  title: "Equip the Saints",
                  desc: "KCF is committed to equip the saints for the work of ministry through systematic teaching and discipleship.",
                  icon: BookOpen,
                  color: "bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  title: "Encourage Service",
                  desc: "KCF is focused on encouraging service, motivating every member to be salt and light in their sphere of influence.",
                  icon: Shield,
                  color: "bg-amber-50",
                  iconColor: "text-amber-600",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`${item.color} rounded-2xl p-8 text-center`}
                  >
                    <Icon className={`w-10 h-10 ${item.iconColor} mx-auto mb-4`} />
                    <h3 className="text-lg font-bold text-kcf-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* B-U-I-L-D Values */}
          <div className="reveal-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4 text-center">
              Our Desire: To B-U-I-L-D
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              The acronym that captures our heart for the body of Christ.
            </p>

            <div className="space-y-6">
              {[
                {
                  letter: "B",
                  word: "Bless",
                  desc: "We want to be a Church that blesses the Lord and one another.",
                  color: "bg-kcf-blue",
                },
                {
                  letter: "U",
                  word: "Unite",
                  desc: "We want to grow in unity in the fellowship.",
                  color: "bg-kcf-blue-light",
                },
                {
                  letter: "I",
                  word: "Intercede",
                  desc: "We want to be known as a body that intercedes.",
                  color: "bg-kcf-blue",
                },
                {
                  letter: "L",
                  word: "Labour",
                  desc: "We want to be diligent in labouring for the Lord.",
                  color: "bg-kcf-blue-light",
                },
                {
                  letter: "D",
                  word: "Disciple",
                  desc: "We want to stay committed to discipleship.",
                  color: "bg-kcf-blue",
                },
              ].map((item) => (
                <div
                  key={item.letter}
                  className="flex items-center gap-6 p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <span className="text-3xl font-bold text-white">
                      {item.letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-kcf-dark">
                      {item.word}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
