"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Heart, Users, BookOpen, Home, HandHelping, Star } from "lucide-react";

export default function PhilippiPage() {
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
      title: "Partnership in the Gospel",
      description: "From the first day until now, they partnered with Paul in spreading the gospel, supporting him financially and prayerfully.",
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "The church began with Lydia, a businesswoman, and included a former slave girl and a Roman jailer — a picture of gospel unity.",
    },
    {
      icon: BookOpen,
      title: "Joy in Suffering",
      description: "Paul and Silas sang hymns in prison, demonstrating that joy in Christ transcends circumstances.",
    },
    {
      icon: Home,
      title: "Hospitality",
      description: "Lydia opened her home to Paul and his team, and the church met in homes, showing generous hospitality.",
    },
    {
      icon: HandHelping,
      title: "Generous Support",
      description: "The Philippian church supported Paul's ministry repeatedly, even when he was in other cities.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Philippi"
        subtitle="A PARTNERING Church"
        backgroundImage="/assets/heroes.jpg"
        breadcrumbs={[
          { label: "DNA Study", href: "/dna-study/philippi" },
          { label: "Philippi", href: "/dna-study/philippi" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Scripture */}
          <div className="reveal-on-scroll mb-16 bg-kcf-blue-lighter/50 rounded-13 p-8 border-l-4 border-kcf-gold">
            <p className="text-lg text-kcf-dark italic leading-relaxed">
              "I thank my God every time I remember you. In all my prayers for all of you, I always pray with joy because of your partnership in the gospel from the first day until now, being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus."
            </p>
            <p className="text-sm text-gray-500 mt-3 font-medium">— Philippians 1:3-6</p>
          </div>

          {/* Overview */}
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Church That Partnered in the Gospel
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The church in Philippi was Paul's beloved church — the only church from which he accepted financial support. Their partnership in the gospel was marked by deep affection, consistent generosity, and joyful participation in Paul's ministry.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The church began in an unlikely way — by the river where Paul met Lydia, a wealthy businesswoman. From there, the church grew to include a diverse group of believers from different social backgrounds, united by their faith in Christ.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Philippian church demonstrates the beauty of partnership in the gospel. They didn't just receive teaching — they actively participated in the mission, supporting Paul through prayer, financial gifts, and personal encouragement.
            </p>
          </div>

          {/* Qualities */}
          <div className="reveal-on-scroll mb-16">
            <h3 className="text-2xl font-bold text-kcf-dark mb-8 text-center">
              Marks of the Philippian Church
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
              The Philippian church teaches us the joy of partnership in the gospel. When we support those who are on the front lines of ministry — through prayer, encouragement, and financial giving — we become partners in their work and share in their eternal reward.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
