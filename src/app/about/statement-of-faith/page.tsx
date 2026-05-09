"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import {
  Triangle,
  Cross,
  Flame,
  Apple,
  CircleUser,
  Heart,
  CalendarArrowUp,
  ShieldCheck,
} from "lucide-react";

function BookCrucifixIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Open book base */}
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5A1.5 1.5 0 0 0 4 19.5Z" />
      <path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H20" />
      {/* Cross on the book */}
      <path d="M12 5v11" />
      <path d="M8 10h8" />
    </svg>
  );
}


function CrownOfThornsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Circular band */}
      <ellipse cx="12" cy="12" rx="9" ry="4" />
      {/* Thorns pointing outward */}
      <path d="M3 12 L1 6 L5 10" />
      <path d="M21 12 L23 6 L19 10" />
      <path d="M6 9.5 L4 3.5 L9 7.5" />
      <path d="M18 9.5 L20 3.5 L15 7.5" />
      <path d="M9 8.5 L9 2 L12 6.5" />
      <path d="M15 8.5 L15 2 L12 6.5" />
      <path d="M12 8 L14 1.5 L12 4" />
      <path d="M12 8 L10 1.5 L12 4" />
      {/* Thorns pointing inward */}
      <path d="M5 13 L3 18 L7 14.5" />
      <path d="M19 13 L21 18 L17 14.5" />
      <path d="M8 14.5 L6 20 L10 16" />
      <path d="M16 14.5 L18 20 L14 16" />
    </svg>
  );
}

const beliefs = [
  {
    title: "The Bible",
    icon: BookCrucifixIcon,
    content:
      "KCF believes the Bible to be the complete Word of God; that the sixty-six books, as originally written, comprising the Old Testament and the New Testament, are inspired by the Holy Spirit and are inerrant. The Bible is the final authority in all matters of faith and practice and the basis of Christian life and unity.",
  },
  {
    title: "God",
    icon: Triangle,
    content:
      "KCF believes in One God, creator of all, holy, sovereign, eternal, existing in three equal persons: the Father, the Son, and the Holy Spirit.",
  },
  {
    title: "Christ",
    icon: CrownOfThornsIcon,
    content:
      "KCF believes in the absolute and essential deity of Jesus Christ, in His eternal existence with the Father in pre-incarnate glory, in His virgin birth, sinless life, substitutionary death, bodily resurrection, triumphant ascension, mediatorial work, and personal return.",
  },
  {
    title: "The Holy Spirit",
    icon: Flame,
    content:
      "KCF believes in the absolute and essential deity and personality of the Holy Spirit, who convicts of sin, righteousness, and judgment; who regenerates, sanctifies, illuminates, and comforts those who believe in Jesus Christ.",
  },
  {
    title: "Satan",
    icon: Apple,
    content:
      "KCF believes that Satan exists as an evil personality, the originator of sin, the archenemy of God and man.",
  },
  {
    title: "Man",
    icon: CircleUser,
    content:
      "KCF believes that man was divinely created in the image of God; that he sinned, becoming guilty before God, resulting in total depravity, thereby incurring physical and spiritual death.",
  },
  {
    title: "Salvation",
    icon: Heart,
    content:
      "KCF believes that salvation is by the sovereign, electing grace of God; that by the appointment of the Father, Christ voluntarily suffered a vicarious, expiatory, and propitiatory death; that justification is by faith alone in the all-sufficient sacrifice and resurrection of the Lord Jesus Christ; and that those whom God has effectually called shall be divinely preserved and finally perfected in the image of God.",
  },
  {
    title: "Future Things",
    icon: CalendarArrowUp,
    content:
      "KCF believes in the personal, bodily, and glorious return of the Lord Jesus Christ; in the bodily resurrection of the just and unjust; in the eternal blessedness of the redeemed; and in the eternal punishment of those who have rejected Christ.",
  },
];

export default function StatementOfFaithPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Faith+${i + 1}`,
    alt: `Statement of Faith ${i + 1}`,
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
        title="Statement of Faith"
        subtitle="What we believe as a fellowship."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Statement of Faith", href: "/about/statement-of-faith" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/about/gallery"
        sectionTitle="Statement of Faith"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          {/* Preamble */}
          <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-kcf-blue-lighter text-kcf-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              Our Confession
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              What We Believe
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The following truths form the foundation of our faith and practice.
              They are not merely doctrines we hold — they are the convictions
              that shape who we are as a community of believers.
            </p>
          </div>

          {/* Verse Block */}
          <div className="reveal-on-scroll mb-16 bg-kcf-dark rounded-13 p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Decorative cross */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Cross className="w-full h-full text-white" />
            </div>
            <p className="text-kcf-gold text-sm font-bold uppercase tracking-widest mb-4">
              Hebrews 11:1
            </p>
            <blockquote className="text-white/90 text-xl lg:text-2xl font-serif-custom italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;Now faith is the substance of things hoped for, the evidence
              of things not seen.&rdquo;
            </blockquote>
          </div>

          {/* Beliefs Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-on-scroll group relative bg-white rounded-13 border-l-4 border-kcf-gold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Number badge */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-kcf-blue-lighter/50 flex items-start justify-end p-3 rounded-bl-2xl">
                    <span className="text-2xl font-bold text-kcf-blue/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-kcf-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-kcf-dark">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-[15px]">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Declaration */}
          <div className="reveal-on-scroll mt-16 text-center border-t border-gray-200 pt-12">
            <p className="text-gray-500 italic max-w-2xl mx-auto">
              These beliefs are not merely a list — they are the bedrock upon
              which Kolkata Christian Fellowship stands. In a changing world, we
              hold fast to the unchanging truth of God&rsquo;s Word.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-kcf-blue">
              <Cross className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Soli Deo Gloria
              </span>
              <Cross className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
