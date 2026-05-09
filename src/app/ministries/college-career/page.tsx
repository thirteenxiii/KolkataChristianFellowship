"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { BookOpen, Users, Heart, Globe } from "lucide-react";

export default function CollegeCareerPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=CnC+${i + 1}`,
    alt: `College & Career ${i + 1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }));

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
        title="College & Career"
        subtitle="Strengthening faith and friendship among young adults."
        breadcrumbs={[
          { label: "Ministries", href: "/ministries/college-career" },
          { label: "College & Career", href: "/ministries/college-career" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/ministries/gallery"
        sectionTitle="College & Career"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              College and Career (CnC) was started with the desire of
              strengthening faith and friendship among the church youth. CnC
              focuses mainly on college students and young professionals.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              It provides a platform where young adults can discuss and explore
              biblical answers that are relevant to the challenges of the
              present time. Over the years we have addressed a wide array of
              topics ranging from the Ten Commandments, Freedom and Justice,
              Stress Management, Discerning the Truth, and Euthanasia.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have also undertaken detailed book studies on the Gospel of
              John, Hebrews, and Revelation. The group has actively engaged in
              many gospel outreaches and community service projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal-on-scroll">
            {[
              {
                title: "Bible Studies",
                desc: "In-depth exploration of Scripture with practical application for young adults.",
                icon: BookOpen,
              },
              {
                title: "Community Service",
                desc: "Active engagement in outreach projects that make a difference in our city.",
                icon: Heart,
              },
              {
                title: "Discussion Forums",
                desc: "Open conversations about faith, culture, and contemporary issues.",
                icon: Users,
              },
              {
                title: "Missions Focus",
                desc: "Opportunities to participate in local and global mission initiatives.",
                icon: Globe,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-13 bg-white shadow-md border border-gray-100"
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
