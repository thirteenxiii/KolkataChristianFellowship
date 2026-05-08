"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Clock, MapPin, Globe, Users } from "lucide-react";

export default function RajarhatPage() {
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
        title="Rajarhat Fellowship"
        subtitle="New Town community gathering."
        breadcrumbs={[
          { label: "Services", href: "/services/rajarhat" },
          { label: "Rajarhat Fellowship", href: "/services/rajarhat" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
                KCF New Town
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                KCF New Town is our fellowship gathering in the New Town /
                Rajarhat area of Kolkata. We meet weekly for worship, prayer,
                and the Word of God.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-kcf-gold mt-0.5" />
                  <div>
                    <p className="font-semibold text-kcf-dark">Service Times</p>
                    <p className="text-sm text-gray-600">
                      Bengali Service: 9:00 AM - 10:15 AM
                      <br />
                      English Service: 10:30 AM - 11:30 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-kcf-gold mt-0.5" />
                  <div>
                    <p className="font-semibold text-kcf-dark">Venue</p>
                    <p className="text-sm text-gray-600">
                      Community Hall, Rose Dale Plaza
                      <br />
                      BLK-3, Action Area-III, New Town
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll rounded-13 overflow-hidden shadow-xl aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pm_PIvFITFQ"
                title="KCF New Town"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="reveal-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-8 text-center">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Bilingual Services",
                  desc: "We offer both Bengali and English services to serve the diverse community of New Town.",
                  icon: Globe,
                },
                {
                  title: "Kids Church",
                  desc: "A special program for children during the service, teaching biblical truths in an engaging way.",
                  icon: Users,
                },
                {
                  title: "Teens Ministry",
                  desc: "TOT (Teens on Track) meets regularly, providing a space for teenagers to connect and grow.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-13 bg-kcf-blue-lighter/50 text-center"
                  >
                    <Icon className="w-8 h-8 text-kcf-blue mx-auto mb-3" />
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
