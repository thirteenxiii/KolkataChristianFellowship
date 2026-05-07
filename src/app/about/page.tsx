"use client";

import { useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Heart, Eye, BookOpen, Shield } from "lucide-react";

export default function AboutPage() {
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
        title="About KCF"
        subtitle="Discover our story, our vision, and what we believe."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Our Story",
                desc: "The journey of KCF from 2005 to today.",
                href: "/about/history",
                icon: Heart,
                color: "bg-rose-50 text-rose-600",
              },
              {
                title: "Vision & Mission",
                desc: "Our purpose, calling, and commission.",
                href: "/about/vision-mission",
                icon: Eye,
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "Foundational Principles",
                desc: "The B-U-I-L-D values that guide us.",
                href: "/about/foundational-principles",
                icon: BookOpen,
                color: "bg-amber-50 text-amber-600",
              },
              {
                title: "Statement of Faith",
                desc: "What we believe as a fellowship.",
                href: "/about/statement-of-faith",
                icon: Shield,
                color: "bg-green-50 text-green-600",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 reveal-on-scroll"
                >
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-kcf-dark mb-2 group-hover:text-kcf-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-kcf-blue group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
