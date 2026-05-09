"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { Calendar } from "lucide-react";

export default function MadhyamgramPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Madhyamgram+${i + 1}`,
    alt: `Madhyamgram ${i + 1}`,
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

  const schedule = [
    { day: "Monday", time: "5:30 PM", activity: "Sewing School" },
    { day: "Tuesday", time: "5:30 PM", activity: "Sewing School" },
    { day: "Wednesday", time: "5:30 PM", activity: "Women's Fellowship" },
    { day: "Thursday", time: "5:30 PM", activity: "Sewing School (Practical)" },
    { day: "Friday", time: "6:00 PM", activity: "Fasting and Prayer Time" },
    { day: "Saturday", time: "3:00 PM", activity: "Computer Training" },
    { day: "Saturday", time: "4:00 PM", activity: "Spoken English Class" },
    { day: "Saturday", time: "6:00 PM", activity: "Discipleship Training" },
    { day: "Sunday", time: "10:30 AM", activity: "Worship Service & Junior Church" },
    { day: "Sunday", time: "4:00 PM", activity: "Computer Training" },
  ];

  return (
    <div>
      <PageHeader
        title="Madhyamgram"
        subtitle="Rural development center near Kolkata Airport."
        breadcrumbs={[
          { label: "Our Impact", href: "/impact/madhyamgram" },
          { label: "Madhyamgram", href: "/impact/madhyamgram" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/impact/gallery"
        sectionTitle="Madhyamgram"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-6">
              The Madhyamgram Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The work in the Madhyamgram region (close to the Kolkata Airport)
              began in the year 2002 when God placed an unmistakable burden in
              the heart of K. P. Mark, an air-conditioning mechanic from Andhra
              Pradesh, to reach out into the Doltala area of this municipality.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This area is semi-urban with a wide cross-section of people. It is
              quite a complex area for ministry because one is constantly
              challenged with the task of making the Gospel relevant to the
              urban middle class as well as the urban poor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              K. P. Mark began working in partnership with KCF from the year
              2007. As the work began to grow, we sensed the need for a
              permanent transformation center that would also serve as a place
              of worship. We rejoice in the wonderful facility God has provided
              for us in this area.
            </p>
          </div>

          <div className="reveal-on-scroll">
            <h3 className="text-2xl font-bold text-kcf-dark mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-kcf-gold" />
              A Week at Madhyamgram
            </h3>
            <div className="overflow-hidden rounded-13 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-kcf-blue text-white">
                    <th className="text-left px-4 py-3 font-semibold">Day</th>
                    <th className="text-left px-4 py-3 font-semibold">Time</th>
                    <th className="text-left px-4 py-3 font-semibold">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-kcf-dark">{item.day}</td>
                      <td className="px-4 py-3 text-gray-600">{item.time}</td>
                      <td className="px-4 py-3 text-gray-600">{item.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
