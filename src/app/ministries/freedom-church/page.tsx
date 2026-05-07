"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Heart, Shield, Users, Home } from "lucide-react";

export default function FreedomChurchPage() {
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
        title="Freedom Church"
        subtitle="Hope and healing for survivors of trafficking."
        breadcrumbs={[
          { label: "Ministries", href: "/ministries/freedom-church" },
          { label: "Freedom Church", href: "/ministries/freedom-church" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Over the past several years, the family of KCF has had the joy of
              partnering alongside like-minded bodies in the city with the
              desire to bring hope and healing to survivors of trafficking.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              God opened a new door for us as part of His great plan, and we
              were able to establish Freedom Church in July of 2015.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal-on-scroll">
            {[
              {
                title: "Location",
                desc: "Freedom Church meets in the Thakurpukur area of the city, serving a community in need.",
                icon: Home,
              },
              {
                title: "Mission",
                desc: "This church seeks to minister to survivors of trafficking in a manner that is relevant and compassionate.",
                icon: Heart,
              },
              {
                title: "Community",
                desc: "Building a caring worshipping community for traumatized and vulnerable women.",
                icon: Users,
              },
              {
                title: "Hope",
                desc: "Providing spiritual, emotional, and practical support for healing and restoration.",
                icon: Shield,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-white shadow-md border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-kcf-blue mb-3" />
                  <h3 className="text-lg font-bold text-kcf-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
