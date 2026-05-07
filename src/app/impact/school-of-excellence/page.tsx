"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { BookOpen, Monitor, Scissors, Palette, Heart } from "lucide-react";

export default function SchoolOfExcellencePage() {
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
        title="School of Excellence"
        subtitle="Education and hope for survivors in Liluah."
        breadcrumbs={[
          { label: "Our Impact", href: "/impact/school-of-excellence" },
          { label: "School of Excellence", href: "/impact/school-of-excellence" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The School of Excellence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The School of Excellence in Liluah was birthed by the tireless
              efforts of the IJM family during 2006-2007. This school provided
              the opportunity of bringing hope and healing to survivors of great
              trauma, working alongside one of the neediest correctional
              facilities in West Bengal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the year 2013-2014, the KCF family prayerfully began our
              journey with the School of Excellence. The primary focus of the
              school has been to prepare survivors to reintegrate back to their
              homes and societies when they leave the correctional facility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 reveal-on-scroll mb-16">
            <div className="p-8 rounded-2xl bg-blue-50">
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-kcf-dark mb-4">
                Non-Formal Education
              </h3>
              <ul className="space-y-2">
                {["Basic reading & writing in Bengali", "Basic Hindi skills", "Basic English skills", "Basic Math skills", "Life Skills"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-amber-50">
              <Monitor className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-kcf-dark mb-4">
                Vocational Training
              </h3>
              <ul className="space-y-2">
                {["Basic Computer Education", "Sewing and Stitching", "Basic Beautician Course", "Art, Drama & Dance", "Exercise Therapy"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal-on-scroll p-8 rounded-2xl bg-kcf-blue-lighter">
            <Heart className="w-8 h-8 text-kcf-blue mb-4" />
            <h3 className="text-xl font-bold text-kcf-dark mb-3">
              Story of a Braveheart
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ruma and her 7-year-old son were at the Liluah Home for almost 3
              years. During her time there she attended our School of
              Excellence. She enjoyed all of her classes and was a very keen
              learner. She was particularly good at sewing and made several
              dresses for her son. Today, Ruma is back home with her family and
              has started a small business with her sewing skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
