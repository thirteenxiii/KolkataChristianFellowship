"use client";

import { useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { ArrowRight, MapPin, Clock, Church } from "lucide-react";

const cards = [
  {
    title: "Our Story",
    desc: "The journey of KCF from 2005 to today.",
    excerpt:
      "The second of October 2005 was the God-moment that propelled KCF to become what it is today. From a humble gathering of 9 people in a rented apartment in Kasba, God has done something utterly amazing — a work you would not believe even if you were told.",
    href: "/about/history",
    image: "/assets/heroes.jpg",
    gradient: "from-rose-900/70 to-rose-800/30",
  },
  {
    title: "Vision & Mission",
    desc: "Our purpose, calling, and commission.",
    excerpt:
      "KCF exists to be a model church the Father delights in — marked by obedient attitude, courage to serve, fearless proclamation, accountability, humility, perseverance, and trust. We serve the urban community of Kolkata through biblical relationships, neighborly love, evangelism, and social action.",
    href: "/about/vision-mission",
    image: "/assets/Welcome.png",
    gradient: "from-blue-900/70 to-blue-800/30",
  },
  {
    title: "Foundational Principles",
    desc: "The B-U-I-L-D values that guide us.",
    excerpt:
      "KCF is built on a threefold commitment: Encounter the Saviour through worship and the Word, Equip the Saints for ministry through systematic teaching and discipleship, and Encourage Service — motivating every member to be salt and light in their sphere of influence.",
    href: "/about/foundational-principles",
    image: "/assets/heroes.jpg",
    gradient: "from-amber-900/70 to-amber-800/30",
  },
  {
    title: "Statement of Faith",
    desc: "What we believe as a fellowship.",
    excerpt:
      "We believe the Bible is the inspired, inerrant Word of God and the final authority in all matters of faith. We affirm one God in three persons, the deity of Christ, salvation by grace alone through faith, and the personal, bodily return of our Lord Jesus Christ.",
    href: "/about/statement-of-faith",
    image: "/assets/palm-sunday.jpg",
    gradient: "from-green-900/70 to-green-800/30",
  },
];

export default function AboutPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=About+${i + 1}`,
    alt: `About KCF ${i + 1}`,
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
        title="About KCF"
        subtitle="Discover our story, our vision, and what we believe."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/about/gallery"
        sectionTitle="About KCF"
      />

      {/* ── Info Cards (2×2 grid, 1/3 image + 2/3 content) ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 reveal-on-scroll flex overflow-hidden"
              >
                {/* Image — 1/3 width */}
                <div className="relative w-1/3 shrink-0 overflow-hidden bg-kcf-dark">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/90 text-xs font-bold uppercase tracking-widest text-center px-2 leading-relaxed">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Content — 2/3 width */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-kcf-dark mb-2 group-hover:text-kcf-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.desc}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-kcf-blue group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location / Map ── */}
      <section id="location" className="py-20 lg:py-28 bg-kcf-blue-lighter/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kcf-blue text-white mb-5">
              <MapPin className="w-7 h-7" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-3">
              Visit Us In Person
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We meet every Sunday at Mukundapur, Kolkata. You are warmly invited
              to join us for worship, fellowship, and the Word.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <div className="reveal-on-scroll overflow-hidden shadow-xl border border-gray-200 h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=22.48920663962569,88.41305106322854&z=17&hl=en&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KCF Location"
                className="w-full h-full"
              />
            </div>

            {/* Details */}
            <div className="reveal-on-scroll space-y-6">
              <div className="bg-white p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-kcf-dark mb-6 flex items-center gap-2">
                  <Church className="w-5 h-5 text-kcf-blue" />
                  Service Times
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-kcf-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-kcf-dark">Sunday Morning</p>
                      <p className="text-sm text-gray-600">9:45 AM — Main Service</p>
                      <p className="text-sm text-gray-600">11:00 AM — Main Service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-kcf-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-kcf-dark">Address</p>
                      <p className="text-sm text-gray-600">
                        Mukundapur, Kolkata
                        <br />
                        West Bengal, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-kcf-dark p-8 shadow-lg text-center">
                <p className="text-white/80 text-sm mb-3">
                  &ldquo;For where two or three gather in my name, there am I with them.&rdquo;
                </p>
                <p className="text-kcf-gold text-xs font-semibold">Matthew 18:20</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
