"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Eye,
  Target,
  Globe,
  PhoneCall,
  PartyPopper,
  Link2,
  TrendingUp,
  Send,
} from "lucide-react";

export default function VisionMissionPage() {
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
        title="Vision & Mission"
        subtitle="Our purpose, calling, and commission as a fellowship."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Vision & Mission", href: "/about/vision-mission" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Vision */}
          <div className="reveal-on-scroll mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Eye className="w-8 h-8 text-kcf-gold" />
              <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark">
                Our Vision
              </h2>
            </div>
            <div className="bg-kcf-blue-lighter rounded-13 p-8 lg:p-10">
              <p className="text-xl lg:text-2xl font-bold text-kcf-blue mb-6">
                To be a model church that the Father delights in for its:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Obedient Attitude",
                  "Courage to Serve",
                  "Fearless Proclamation",
                  "Accountability",
                  "Humility",
                  "Perseverance",
                  "Trust",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-kcf-gold" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-kcf-blue font-semibold mt-6 italic">
                That He will bring to fruition the plans He has, for His glory.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="reveal-on-scroll mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-kcf-gold" />
              <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Kolkata Christian Fellowship, as part of the body of Christ,
              exists to serve the urban community in the city of Kolkata
              through:
            </p>
            <div className="bg-kcf-blue-lighter rounded-13 p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Biblical Relationships",
                  "Neighborly Love",
                  "Evangelism",
                  "Kindness",
                  "Social Action",
                  "Reform based on Biblical Truths",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-kcf-gold shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 italic mt-6">
              While encouraging people to grow in their faith for the glory of
              God.
            </p>
          </div>

          {/* Commission */}
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-kcf-gold" />
              <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark">
                Our Commission
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              KCF is committed to following the Great Commission by reaching out
              to the hundreds of unreached people groups in Bengal and northern
              India through strategic partnerships based on prayer and support.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: PhoneCall,
                  word: "CALL",
                  desc: "All of God's creation to experience fullness of life.",
                },
                {
                  icon: PartyPopper,
                  word: "CELEBRATE",
                  desc: "The joy of corporate fellowship.",
                },
                {
                  icon: Link2,
                  word: "CONNECT",
                  desc: "To one another in caring relationships.",
                },
                {
                  icon: TrendingUp,
                  word: "COMMIT",
                  desc: "To growth and development.",
                },
                {
                  icon: Send,
                  word: "COMMISSION",
                  desc: "Each member to serve a needy world in Truth & Love.",
                  wide: true,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.word}
                    className={`p-6 rounded-13 bg-kcf-dark text-white ${
                      item.wide ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-13 bg-kcf-gold/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-kcf-gold" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.word}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
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
