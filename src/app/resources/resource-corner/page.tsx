"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import MiniGallery from "@/components/MiniGallery";
import type { GalleryImage } from "@/components/MiniGallery";
import { FileText, Download, Image, Music, BookOpen } from "lucide-react";

const pdfResources = [
  {
    title: "John Bunyan's Pilgrim's Progress (Part 1)",
    url: "http://kolkatachristianfellowship.net/admin/upload/resource/1537114774410_Pilgrims_Progress_Part_1.pdf",
  },
  {
    title: "John Bunyan's Pilgrim's Progress (Part 2)",
    url: "http://kolkatachristianfellowship.net/admin/upload/resource/153711477429_Pilgrims_Progress_Part_2.pdf",
  },
  {
    title: "John Bunyan's Pilgrim's Progress (Part 3)",
    url: "http://kolkatachristianfellowship.net/admin/upload/resource/153711477457_Pilgrims_Progress_Part_3.pdf",
  },
  {
    title: "John Bunyan's Pilgrim's Progress (Part 4)",
    url: "http://kolkatachristianfellowship.net/admin/upload/resource/153711477417_Pilgrims_Progress_Part_4.pdf",
  },
  {
    title: "John Bunyan's Pilgrim's Progress (Part 5)",
    url: "http://kolkatachristianfellowship.net/admin/upload/resource/153711477438_Pilgrims_Progress_Part_5.pdf",
  },
  {
    title: "John Bunyan's Pilgrim's Progress (Part 6)",
    url: "http://kolkatachristianfellowship.net/admin/upload/resource/153711477457_Pilgrims_Progress_Part_6.pdf",
  },
];

const imageResources = [
  { title: "Jesus", url: "http://kolkatachristianfellowship.net/admin/upload/resource/153725450519_jesus.jpeg" },
  { title: "Jesus", url: "http://kolkatachristianfellowship.net/admin/upload/resource/15683-kcf1.jpg" },
  { title: "Jesus", url: "http://kolkatachristianfellowship.net/admin/upload/resource/37423-kcf5.jpg" },
];

const tabs = [
  { id: "pdf", label: "PDF", icon: FileText },
  { id: "images", label: "Colouring Pages", icon: Image },
  { id: "audio", label: "Audio", icon: Music },
];

export default function ResourceCornerPage() {
  const galleryImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x600/e8f0fe/1a3a6b?text=Resources+${i + 1}`,
    alt: `Resource Corner ${i + 1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }));

  const [activeTab, setActiveTab] = useState("pdf");

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
        title="Resource Corner"
        subtitle="Downloadable Christian resources including books, colouring pages, and audio."
        breadcrumbs={[
          { label: "Resources", href: "/resources/resource-corner" },
          { label: "Resource Corner", href: "/resources/resource-corner" },
        ]}
      />

      <MiniGallery
        images={galleryImages}
        galleryHref="/resources/gallery"
        sectionTitle="Resource Corner"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-kcf-blue-lighter text-kcf-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Free Resources
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4">
              Resource Corner
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our collection of free Christian resources including classic literature,
              colouring pages for children, and audio content.
            </p>
          </div>

          {/* Tabs */}
          <div className="reveal-on-scroll mb-10">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-t-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-kcf-blue text-white"
                        : "text-gray-500 hover:text-kcf-blue hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PDF Tab */}
          {activeTab === "pdf" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfResources.map((resource, i) => (
                <div
                  key={i}
                  className="reveal-on-scroll bg-white rounded-13 border border-gray-200 hover:border-kcf-blue/30 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-13 bg-red-50 flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-base font-bold text-kcf-dark mb-3 group-hover:text-kcf-blue transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-kcf-blue hover:text-kcf-blue-light transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Images Tab */}
          {activeTab === "images" && (
            <div>
              <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                Download and print these colouring pages for your children. A wonderful way
                to engage kids with biblical themes through creative expression.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {imageResources.map((resource, i) => (
                  <div
                    key={i}
                    className="reveal-on-scroll group rounded-13 overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                      <img
                        src={resource.url}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/400x300/e8f0fe/1a3a6b?text=Colouring+Page";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-kcf-dark mb-2">
                        {resource.title}
                      </h3>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-kcf-blue hover:text-kcf-blue-light transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Image
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audio Tab */}
          {activeTab === "audio" && (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-kcf-blue-lighter flex items-center justify-center mx-auto mb-6">
                <Music className="w-10 h-10 text-kcf-blue" />
              </div>
              <h3 className="text-2xl font-bold text-kcf-dark mb-3">Audio Resources</h3>
              <p className="text-gray-600 max-w-lg mx-auto">
                Audio resources are being compiled and will be available soon. Check back for
                worship songs and sermon audio recordings.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
