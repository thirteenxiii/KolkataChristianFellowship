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

  const commitments = [
    {
      title: "Encounter the Saviour",
      desc: "KCF desires that all men encounter the Saviour through worship, prayer, and the Word.",
      icon: Heart,
      bgColor: "bg-rose-50",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      borderColor: "border-rose-200",
      shadowColor: "shadow-rose-200/50",
    },
    {
      title: "Equip the Saints",
      desc: "KCF is committed to equip the saints for the work of ministry through systematic teaching and discipleship.",
      icon: BookOpen,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      shadowColor: "shadow-blue-200/50",
    },
    {
      title: "Encourage Service",
      desc: "KCF is focused on encouraging service, motivating every member to be salt and light in their sphere of influence.",
      icon: Shield,
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
      shadowColor: "shadow-amber-200/50",
    },
  ];

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
          {/* Three Pillars — Side by Side */}
          <div className="reveal-on-scroll mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-8 text-center">
              Our Threefold Commitment
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {commitments.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`rounded-13 border ${item.borderColor} ${item.bgColor} shadow-md ${item.shadowColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  >
                    <div className="flex flex-col items-center text-center px-6 py-8">
                      <div
                        className={`w-14 h-14 rounded-13 ${item.iconBg} border ${item.borderColor} flex items-center justify-center shrink-0 mb-4`}
                      >
                        <Icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-kcf-dark mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
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
                },
                {
                  letter: "U",
                  word: "Unite",
                  desc: "We want to grow in unity in the fellowship.",
                },
                {
                  letter: "I",
                  word: "Intercede",
                  desc: "We want to be known as a body that intercedes.",
                },
                {
                  letter: "L",
                  word: "Labour",
                  desc: "We want to be diligent in labouring for the Lord.",
                },
                {
                  letter: "D",
                  word: "Disciple",
                  desc: "We want to stay committed to discipleship.",
                },
              ].map((item) => (
                <div
                  key={item.letter}
                  className="flex items-center gap-8 p-8 rounded-13 bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-20 h-20 bg-black rounded-13 flex items-center justify-center shrink-0"
                  >
                    <span
                      className="text-5xl font-bold text-white"
                      style={{ fontFamily: "'Old English Text MT', 'Old English', 'Cloister Black', 'UnifrakturMaguntia', serif" }}
                    >
                      {item.letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-kcf-dark">
                      {item.word}
                    </h3>
                    <p className="text-gray-600 text-base mt-1">{item.desc}</p>
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
