"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const videoSeries = [
  {
    title: "The Battle Plan",
    parts: [
      { title: "Part 1 of 7", url: "https://www.youtube.com/watch?v=pm_PIvFITFQ" },
      { title: "Part 2 of 7", url: "https://www.youtube.com/watch?v=Ya8X4Xq8mxw" },
      { title: "Part 3 of 7", url: "https://www.youtube.com/watch?v=_F-8MoE38IU" },
      { title: "Part 5 of 7", url: "https://www.youtube.com/watch?v=gwK-OAi-X6Y" },
      { title: "Part 6 of 7", url: "https://www.youtube.com/watch?v=8_LpOD40se4" },
      { title: "Part 7 of 7", url: "https://www.youtube.com/watch?v=5Qx4CBD-BjA" },
    ],
  },
  {
    title: "Living in the Light of His Glory",
    subtitle: "A Study on Isaiah 6",
    parts: [
      { title: "Part 1 of 3", url: "https://www.youtube.com/watch?v=example4" },
      { title: "Part 2 of 3", url: "https://www.youtube.com/watch?v=example5" },
      { title: "Part 3 of 3", url: "https://www.youtube.com/watch?v=example6" },
    ],
  },
];

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeSeries, setActiveSeries] = useState(0);
  const [activePart, setActivePart] = useState(0);

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

  const currentSeries = videoSeries[activeSeries];
  const currentVideo = currentSeries.parts[activePart];

  return (
    <div>
      <PageHeader
        title="Videos"
        subtitle="Watch our sermon series and teachings on YouTube."
        breadcrumbs={[
          { label: "Resources", href: "/resources/videos" },
          { label: "Videos", href: "/resources/videos" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <YoutubeIcon className="w-4 h-4" />
              KCF Newtown YouTube Channel
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4">
              Sermon Videos
            </h2>
            <p className="text-gray-600 text-lg">
              Browse our collection of sermon videos and teaching series from KCF Newtown.
              Click on any video to watch directly.
            </p>
          </div>

          {/* Video Player */}
          {activeVideo && (
            <div className="reveal-on-scroll mb-12">
              <div className="relative aspect-video rounded-13 overflow-hidden bg-black shadow-2xl">
                <iframe
                  src={activeVideo}
                  title="KCF Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Series Navigation */}
          <div className="reveal-on-scroll mb-8">
            <div className="flex flex-wrap gap-3">
              {videoSeries.map((series, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveSeries(i);
                    setActivePart(0);
                    setActiveVideo(null);
                  }}
                  className={`px-5 py-2.5 rounded-13 text-sm font-medium transition-all ${
                    activeSeries === i
                      ? "bg-kcf-blue text-white shadow-lg shadow-kcf-blue/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {series.title}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSeries.parts.map((video, i) => (
              <div
                key={i}
                className="reveal-on-scroll group cursor-pointer"
                onClick={() => {
                  setActiveVideo(getYouTubeEmbedUrl(video.url));
                  setActivePart(i);
                }}
              >
                <div className="relative aspect-video rounded-13 overflow-hidden bg-gray-900 mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-kcf-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-medium text-white bg-black/50 px-2.5 py-1 rounded-full">
                      {video.title}
                    </span>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-kcf-dark group-hover:text-kcf-blue transition-colors">
                  {currentSeries.title} — {video.title}
                </h3>
                {currentSeries.subtitle && (
                  <p className="text-sm text-gray-500 mt-0.5">
                    {currentSeries.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Part Navigation */}
          {currentSeries.parts.length > 1 && (
            <div className="reveal-on-scroll mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  const prev = activePart > 0 ? activePart - 1 : currentSeries.parts.length - 1;
                  setActivePart(prev);
                  setActiveVideo(getYouTubeEmbedUrl(currentSeries.parts[prev].url));
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-13 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <span className="text-sm text-gray-500">
                {activePart + 1} of {currentSeries.parts.length}
              </span>
              <button
                onClick={() => {
                  const next = activePart < currentSeries.parts.length - 1 ? activePart + 1 : 0;
                  setActivePart(next);
                  setActiveVideo(getYouTubeEmbedUrl(currentSeries.parts[next].url));
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-13 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors text-sm font-medium"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* YouTube Channel Link */}
          <div className="reveal-on-scroll mt-16 text-center">
            <a
              href="https://www.youtube.com/channel/UCarY3HkQ3_xWbVFJPIOVi3Q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-13 font-semibold transition-all shadow-lg shadow-red-600/25"
            >
              <YoutubeIcon className="w-6 h-6" />
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
