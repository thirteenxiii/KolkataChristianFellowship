"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Send, Globe, Users, Heart, Lightbulb, ArrowRight } from "lucide-react";

export default function AntiochPage() {
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
      icon: Users,
      title: "Multi-Ethnic Community",
      description: "Antioch was a diverse church where Jews and Gentiles worshipped together, breaking down cultural barriers.",
    },
    {
      icon: Lightbulb,
      title: "Spirit-Led Leadership",
      description: "The church was led by prophets and teachers who were sensitive to the Holy Spirit's direction.",
    },
    {
      icon: Send,
      title: "Missionary Sending",
      description: "The Holy Spirit set apart Barnabas and Saul for missionary work, making Antioch the first sending church.",
    },
    {
      icon: Heart,
      title: "Generous Giving",
      description: "The church collected offerings to support believers in Judea during a time of famine.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From Antioch, the gospel spread throughout the Roman world through the missionary journeys of Paul and Barnabas.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Antioch"
        subtitle="A SENDING Church"
        backgroundImage="/assets/heroes.jpg"
        breadcrumbs={[
          { label: "DNA Study", href: "/dna-study/antioch" },
          { label: "Antioch", href: "/dna-study/antioch" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Scripture */}
          <div className="reveal-on-scroll mb-16 bg-kcf-blue-lighter/50 rounded-13 p-8 border-l-4 border-kcf-gold">
            <p className="text-lg text-kcf-dark italic leading-relaxed">
              "While they were worshiping the Lord and fasting, the Holy Spirit said, 'Set apart for me Barnabas and Saul for the work to which I have called them.' So after they had fasted and prayed, they placed their hands on them and sent them off."
            </p>
            <p className="text-sm text-gray-500 mt-3 font-medium">— Acts 13:2-3</p>
          </div>

          {/* Overview */}
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Church That Sent the Gospel to the World
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The church in Antioch holds a unique place in Christian history. It was in Antioch that believers were first called "Christians." More importantly, it was from Antioch that the first missionary journey was launched, making it the birthplace of organised Christian missions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antioch was a cosmopolitan city, and the church reflected this diversity. Jewish and Gentile believers worshipped together, demonstrating that the gospel transcends all cultural and ethnic boundaries. This multi-ethnic character prepared the church for its global mission.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The church in Antioch teaches us that a healthy church is not just a gathering place — it is a launching pad for mission. They were sensitive to the Holy Spirit's leading, obedient to His call, and generous in their support of those sent out.
            </p>
          </div>

          {/* Qualities */}
          <div className="reveal-on-scroll mb-16">
            <h3 className="text-2xl font-bold text-kcf-dark mb-8 text-center">
              What Made Antioch Special
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
              Antioch challenges us to be a sending church — a community that prioritises mission, supports those called to go, and rejoices in the spread of the gospel. It reminds us that the church exists not for itself but for the world God loves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
