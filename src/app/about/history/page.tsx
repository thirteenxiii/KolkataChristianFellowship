"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Calendar, Heart } from "lucide-react";

export default function HistoryPage() {
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
        title="Our Story"
        subtitle="The journey of Kolkata Christian Fellowship from 2005 to today."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Our Story", href: "/about/history" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* The Beginning */}
          <div className="reveal-on-scroll mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-kcf-gold" />
              <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark">
                The Beginning
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The second of October 2005 will be etched in the minds of the
              family of KCF forever. This was the God-moment that has propelled
              KCF to become what it is today. Ashok Andrews, our Pastor, and his
              family had just moved to their rented apartment in Kasba and were
              in the process of settling into a new phase in their lives.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This was also a time of uncertainty because the way ahead was far
              from clear. The one thing that greatly encouraged them, however,
              was that God had given them a promise to hold on to:
            </p>
            <blockquote className="border-l-4 border-kcf-gold bg-kcf-blue-lighter/50 rounded-r-13 px-6 py-4 my-6">
              <p className="text-lg text-kcf-blue italic font-medium">
                &ldquo;Look at the nations and watch and be utterly amazed. For I
                am going to do something in your days that you would not believe,
                even if you were told.&rdquo;
              </p>
              <cite className="text-sm text-kcf-muted mt-2 block">
                Habakkuk 1:5 & Acts 13:41
              </cite>
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              The Lord&rsquo;s plans were way bigger and far more exciting than
              anything they had ever imagined!
            </p>
          </div>

          {/* The Birth of a Fellowship */}
          <div className="reveal-on-scroll mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-kcf-gold" />
              <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark">
                The Birth of a Fellowship
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              On that morning, Pastor and his family were in for a really big
              surprise. God used a very dear friend to encourage them to do the
              unimaginable. She insisted that Pastor&rsquo;s family would meet
              along with her for the first official service of a nameless
              fellowship.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This was going to be the smallest church service they had ever been
              a part of, with just 5 members, or so they thought! From that very
              first service, the Lord had His own purposes. When they finally got
              to the home of the friend, the Lord had brought together 9 people
              (4 were visitors). This was the Master&rsquo;s Church, and He was
              going to guide it in ways that only He could.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Each passing week saw the Lord bring in people of His choice.
              Pastor&rsquo;s home had to be re-arranged each Saturday with all
              the furniture being moved into the bedrooms to facilitate eager
              worshipers. As God brought more and more people each week, there
              was a need to cater to the children that came with the families.
            </p>
          </div>

          {/* Timeline */}
          <div className="reveal-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-10 text-center">
              Our Journey
            </h2>
            <div className="space-y-8">
              {[
                {
                  year: "2005",
                  title: "The First Service",
                  desc: "October 2nd — 9 people gather for the first official service in a rented apartment in Kasba.",
                },
                {
                  year: "2007",
                  title: "Partnership with Sonarpur",
                  desc: "KCF begins partnering with the work in Sonarpur, starting Saturday School and Sunday services.",
                },
                {
                  year: "2010",
                  title: "Community Center Phase 1",
                  desc: "Construction and completion of the first phase of the Sonarpur community center.",
                },
                {
                  year: "2014",
                  title: "Community Center Phase 2",
                  desc: "Second phase of the Sonarpur community center completed, expanding ministry reach.",
                },
                {
                  year: "2015",
                  title: "Freedom Church & Sulkuni Center",
                  desc: "Establishment of Freedom Church in Thakurpukur and the Sulkuni Community Center.",
                },
                {
                  year: "Present",
                  title: "Growing Impact",
                  desc: "KCF now supports over 30 house churches, ministers to 1,000+ children, and serves communities across Bengal and beyond.",
                },
              ].map((item) => (
                <div
                  key={item.year}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-kcf-blue group-hover:bg-kcf-gold transition-colors shrink-0 mt-1" />
                    <div className="w-0.5 flex-1 bg-gray-200 group-last:hidden" />
                  </div>
                  <div className="pb-8 group-last:pb-0">
                    <span className="inline-block text-sm font-bold text-kcf-gold bg-kcf-gold/10 px-3 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-kcf-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
