"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: PageHeaderProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
        }}
      />
      <div
        className={`absolute inset-0 ${
          backgroundImage
            ? "bg-gradient-to-b from-kcf-dark/85 via-kcf-dark/70 to-kcf-dark/90"
            : "bg-gradient-to-b from-kcf-blue to-kcf-blue-light"
        }`}
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.5) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 reveal-on-scroll">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-kcf-gold">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <div className="reveal-on-scroll">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg lg:text-xl text-gray-300 mt-4 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
