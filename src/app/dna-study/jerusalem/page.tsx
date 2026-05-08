"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { BookOpen, Cross, Heart, Users, Shield, Flame } from "lucide-react";

export default function JerusalemPage() {
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

  const characteristics = [
    {
      icon: BookOpen,
      title: "Devoted to Teaching",
      description: "They devoted themselves to the apostles' teaching, establishing a firm foundation in God's Word.",
    },
    {
      icon: Heart,
      title: "Fellowship",
      description: "They shared life together, breaking bread and meeting with joyful and sincere hearts.",
    },
    {
      icon: Shield,
      title: "Prayer",
      description: "They were devoted to prayer, seeking God's guidance and power for their mission.",
    },
    {
      icon: Users,
      title: "Unity",
      description: "All believers were together and had everything in common, caring for one another's needs.",
    },
    {
      icon: Flame,
      title: "Witness",
      description: "With great power the apostles continued to testify to the resurrection of the Lord Jesus.",
    },
    {
      icon: Cross,
      title: "Sacrifice",
      description: "They rejoiced in being counted worthy to suffer for the name of Jesus.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Jerusalem"
        subtitle="A Church that set STANDARDS"
        backgroundImage="/assets/heroes.jpg"
        breadcrumbs={[
          { label: "DNA Study", href: "/dna-study/jerusalem" },
          { label: "Jerusalem", href: "/dna-study/jerusalem" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Scripture */}
          <div className="reveal-on-scroll mb-16 bg-kcf-blue-lighter/50 rounded-13 p-8 border-l-4 border-kcf-gold">
            <p className="text-lg text-kcf-dark italic leading-relaxed">
              "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer. Everyone was filled with awe at the many wonders and signs performed through the apostles."
            </p>
            <p className="text-sm text-gray-500 mt-3 font-medium">— Acts 2:42-43</p>
          </div>

          {/* Overview */}
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Church That Set the Standard
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Jerusalem church was the first Christian church, born on the day of Pentecost when the Holy Spirit descended upon the apostles. It became the model for all churches that would follow — a community marked by devotion, unity, and the power of the Holy Spirit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under the leadership of Peter and the apostles, the church in Jerusalem grew rapidly as thousands were added to their number. Their commitment to the apostles' teaching, fellowship, breaking of bread, and prayer created a vibrant community that attracted many to the faith.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Jerusalem church set standards of devotion, generosity, and witness that continue to inspire believers today. They demonstrated what it means to be a community transformed by the gospel.
            </p>
          </div>

          {/* Key Characteristics */}
          <div className="reveal-on-scroll mb-16">
            <h3 className="text-2xl font-bold text-kcf-dark mb-8 text-center">
              Key Characteristics
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {characteristics.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-13 border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-13 bg-kcf-blue-lighter flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-kcf-blue" />
                    </div>
                    <h4 className="text-lg font-bold text-kcf-dark mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lesson */}
          <div className="reveal-on-scroll bg-gradient-to-r from-kcf-blue to-kcf-blue-light rounded-13 p-8 text-white">
            <h3 className="text-xl font-bold mb-3">What We Can Learn</h3>
            <p className="text-white/90 leading-relaxed">
              The Jerusalem church reminds us that the foundation of any healthy church is devotion to God's Word, fellowship with one another, prayer, and a commitment to witness. When we prioritise these things, we create a community where God's presence dwells and lives are transformed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
