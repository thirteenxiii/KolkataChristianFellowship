"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Flame, Heart, Users, Shield, Cross, Star } from "lucide-react";

export default function ThessalonicaPage() {
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
      icon: Flame,
      title: "Faith in Action",
      description: "Their faith was not passive but active — they worked diligently to live out their beliefs in practical ways.",
    },
    {
      icon: Heart,
      title: "Love in Labour",
      description: "Their love for God and one another motivated them to labour tirelessly for the kingdom.",
    },
    {
      icon: Shield,
      title: "Endurance in Persecution",
      description: "Despite severe suffering, they received the Word with joy and became a model to other believers.",
    },
    {
      icon: Users,
      title: "Model to Others",
      description: "Their faith became known everywhere — they were an example to all believers in Macedonia and beyond.",
    },
    {
      icon: Cross,
      title: "Hope in Christ",
      description: "They lived with confident hope in Christ's return, which sustained them through trials.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Thessalonica"
        subtitle="A SUFFERING Church"
        backgroundImage="/assets/heroes.jpg"
        breadcrumbs={[
          { label: "DNA Study", href: "/dna-study/thessalonica" },
          { label: "Thessalonica", href: "/dna-study/thessalonica" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Scripture */}
          <div className="reveal-on-scroll mb-16 bg-kcf-blue-lighter/50 rounded-xl p-8 border-l-4 border-kcf-gold">
            <p className="text-lg text-kcf-dark italic leading-relaxed">
              "We also thank God continually because, when you received the word of God, which you heard from us, you accepted it not as a human word, but as it actually is, the word of God, which is indeed at work in you who believe. You became imitators of us and of the Lord, for you welcomed the message in the midst of severe suffering with the joy given by the Holy Spirit."
            </p>
            <p className="text-sm text-gray-500 mt-3 font-medium">— 1 Thessalonians 2:13, 6:6</p>
          </div>

          {/* Overview */}
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Church That Suffered with Joy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Thessalonian church was born in the midst of persecution. Paul preached in the synagogue for three weeks, and many believed — but opposition quickly arose. Despite this, the church grew and became a model of faith, hope, and love.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes the Thessalonians remarkable is not that they suffered but how they suffered. They welcomed the gospel with joy even in the midst of severe trials. Their faith became known throughout the region, inspiring other believers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Paul's letters to the Thessalonians reveal a church that was grounded in the hope of Christ's return. This hope sustained them through persecution and gave them the strength to continue in faith, love, and endurance.
            </p>
          </div>

          {/* Qualities */}
          <div className="reveal-on-scroll mb-16">
            <h3 className="text-2xl font-bold text-kcf-dark mb-8 text-center">
              Marks of the Thessalonian Church
            </h3>
            <div className="space-y-6">
              {qualities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-kcf-blue-lighter flex items-center justify-center shrink-0">
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
          <div className="reveal-on-scroll bg-gradient-to-r from-kcf-blue to-kcf-blue-light rounded-xl p-8 text-white">
            <h3 className="text-xl font-bold mb-3">What We Can Learn</h3>
            <p className="text-white/90 leading-relaxed">
              The Thessalonian church teaches us that suffering and joy are not opposites in the Christian life. When we receive God's Word as it truly is — not human words but the Word of God — it works in us and gives us joy that transcends our circumstances. Our hope in Christ's return sustains us through every trial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
