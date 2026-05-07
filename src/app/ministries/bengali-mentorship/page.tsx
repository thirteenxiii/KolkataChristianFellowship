"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { BookOpen, Users, Calendar } from "lucide-react";

export default function BengaliMentorshipPage() {
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
        title="Bengali Mentorship"
        subtitle="Empowering and equipping future Bengali leaders."
        breadcrumbs={[
          { label: "Ministries", href: "/ministries/bengali-mentorship" },
          { label: "Bengali Mentorship", href: "/ministries/bengali-mentorship" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              This is a monthly program specifically designed to empower and
              equip future Bengali leadership. We meet on the first Sunday of
              every month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 reveal-on-scroll">
            {[
              {
                title: "Practical Theology",
                icon: BookOpen,
                desc: "Topics chosen for discussion are intentionally focused on practical day-to-day challenges and how we need to address these as the people of this great state.",
              },
              {
                title: "Lifestyle Learning",
                icon: Users,
                desc: "Our desire is to look at lives that have impacted the Bengali people and seek to draw principles that can help us serve our people in an effective manner.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
                >
                  <Icon className="w-10 h-10 text-kcf-blue mb-4" />
                  <h3 className="text-xl font-bold text-kcf-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="reveal-on-scroll mt-12 p-6 rounded-xl bg-kcf-blue-lighter/50 flex items-center gap-4">
            <Calendar className="w-6 h-6 text-kcf-blue shrink-0" />
            <p className="text-gray-700">
              <strong>Meets:</strong> First Sunday of every month
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
