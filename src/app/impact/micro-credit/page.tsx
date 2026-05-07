"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Users, Briefcase, GraduationCap } from "lucide-react";

export default function MicroCreditPage() {
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
        title="Micro Credit"
        subtitle="Women empowerment and financial independence."
        breadcrumbs={[
          { label: "Our Impact", href: "/impact/micro-credit" },
          { label: "Micro Credit", href: "/impact/micro-credit" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-6 reveal-on-scroll">
            {[
              {
                title: "Women's Self Help Groups",
                icon: Users,
                desc: "Providing job-oriented skill training, financial management skills, accountability systems, and helping set up local bank accounts.",
                points: [
                  "Job-oriented skill training",
                  "Business & financial management",
                  "Accountability within groups",
                  "Job opportunities after training",
                  "Local bank accounts",
                  "Rights and privileges awareness",
                ],
              },
              {
                title: "Small Business Ventures",
                icon: Briefcase,
                desc: "Providing small loans to individuals to establish small businesses that help them move towards financial independence.",
              },
              {
                title: "Skills Training",
                icon: GraduationCap,
                desc: "Specialized skill training to develop creative abilities and open new avenues for jobs and income generation.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-white shadow-md border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-kcf-blue mb-3" />
                  <h3 className="text-lg font-bold text-kcf-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  {item.points && (
                    <ul className="space-y-1.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-xs text-gray-500"
                        >
                          <div className="w-1 h-1 rounded-full bg-kcf-gold" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
