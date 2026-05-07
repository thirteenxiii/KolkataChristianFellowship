"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Play,
  MapPin,
  Clock,
  ChevronRight,
  Heart,
  Users,
  BookOpen,
  Music,
  Church,
  Globe,
  ArrowRight,
} from "lucide-react";

// Scroll reveal hook
function useScrollReveal() {
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
}

export default function HomePage() {
  useScrollReveal();

  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION (Sermon Video + Bold Headline) ===== */}
      <section className="relative min-h-screen flex items-center bg-kcf-dark">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-kcf-blue/90 via-kcf-dark/95 to-black/90 z-10" />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(201, 168, 76, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(43, 94, 167, 0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="reveal-on-scroll">
              <p className="inline-block text-kcf-gold text-sm font-bold uppercase tracking-[0.2em] mb-4 bg-kcf-gold/10 px-4 py-1.5 rounded-full">
                Kolkata Christian Fellowship
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-6">
                Encountering
                <br />
                <span className="text-kcf-gold">the Saviour</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mb-8">
                Equipping the saints. Encouraging service. Join us in our
                journey of faith, fellowship, and transformation in the heart of
                Kolkata.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-kcf-gold text-kcf-dark font-semibold px-8 py-3.5 rounded-full hover:bg-kcf-gold/90 transition-all hover:scale-105"
                >
                  Plan Your Visit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/main-service"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
                >
                  <Play className="w-4 h-4" />
                  Watch Sermons
                </Link>
              </div>

              {/* Service info badges */}
              <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-kcf-gold" />
                  <span className="text-sm text-gray-400">
                    Sunday 9:45 AM & 11:00 AM
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-kcf-gold" />
                  <span className="text-sm text-gray-400">
                    Mukundapur, Kolkata
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Video/Sermon Embed */}
            <div className="reveal-on-scroll lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-kcf-blue/20 aspect-video bg-white/5 backdrop-blur-sm border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/pm_PIvFITFQ"
                  title="KCF Sermon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Latest Sermon: The Battle Plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION / SERVICE INFO SECTION ===== */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-on-scroll">
              <p className="text-kcf-blue text-sm font-bold uppercase tracking-[0.2em] mb-3">
                Join Us This Sunday
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-kcf-dark leading-tight mb-6">
                We Would Love to{" "}
                <span className="text-kcf-blue">Welcome You</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are exploring faith for the first time or have
                walked with God for years, you are welcome at KCF. Our doors
                are open, and our family is ready to embrace you.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-kcf-blue-lighter/50">
                  <div className="w-12 h-12 rounded-lg bg-kcf-blue flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kcf-dark">Service Times</h4>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Sunday: 9:45 AM (English) & 11:00 AM (English)
                      <br />
                      Hour of Power: 9:00 AM (Prayer)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-kcf-blue-lighter/50">
                  <div className="w-12 h-12 rounded-lg bg-kcf-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kcf-dark">Location</h4>
                    <p className="text-sm text-gray-600 mt-0.5">
                      896 & 897 Shatabdi Park, Block-D, Das Para
                      <br />
                      Mukundapur, Kolkata - 700099
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="reveal-on-scroll rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.123456789!2d88.394!3d22.498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI5JzUyLjgiTiA4OMKwMjMnMzguNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KCF Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHOTO BANNER ===== */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/Welcome.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kcf-dark/80 via-kcf-dark/50 to-transparent" />
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-xl reveal-on-scroll">
            <p className="text-kcf-gold text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Our Community
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
              A Family of Faith, Hope & Love
            </h2>
            <p className="text-gray-300 text-lg">
              Join us in our journey of encountering the Saviour, equipping the
              saints, and encouraging service.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THE LATEST (Card Grid) ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14 reveal-on-scroll">
            <p className="text-kcf-blue text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Stay Connected
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-kcf-dark">
              The Latest from KCF
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "DNA Study: Early Church Series",
                desc: "Exploring the DNA of prominent New Testament churches and discovering how they are remembered.",
                image: "/assets/heroes.jpg",
                href: "/dna-study/jerusalem",
                tag: "Bible Study",
              },
              {
                title: "Kids Church Ministry",
                desc: "Planting seeds of faith in the next generation through engaging biblical teaching and fun activities.",
                image: "/assets/palm-sunday.jpg",
                href: "/ministries/kids-church",
                tag: "Ministry",
              },
              {
                title: "Easter Celebration",
                desc: "Celebrating the resurrection of our Lord Jesus Christ with joy and thanksgiving.",
                image: "/assets/easter.jpg",
                href: "/updates",
                tag: "Event",
              },
            ].map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 reveal-on-scroll"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-kcf-blue bg-kcf-blue-lighter px-3 py-1 rounded-full mb-3">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold text-kcf-dark mb-2 group-hover:text-kcf-blue transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCROLLING TICKER ===== */}
      <section className="bg-kcf-blue py-6 overflow-hidden">
        <div className="ticker-animate flex whitespace-nowrap">
          <span className="text-white/90 text-lg lg:text-xl font-bold tracking-wider mx-8 flex items-center gap-8">
            <span className="text-kcf-gold">✦</span>
            YOU ARE LOVED
            <span className="text-kcf-gold">✦</span>
            YOU BELONG HERE
            <span className="text-kcf-gold">✦</span>
            SUNDAY 9:45 AM & 11:00 AM
            <span className="text-kcf-gold">✦</span>
            MUKUNDAPUR, KOLKATA
            <span className="text-kcf-gold">✦</span>
            ENCOUNTERING · EQUIPPING · ENCOURAGING
          </span>
          <span className="text-white/90 text-lg lg:text-xl font-bold tracking-wider mx-8 flex items-center gap-8">
            <span className="text-kcf-gold">✦</span>
            YOU ARE LOVED
            <span className="text-kcf-gold">✦</span>
            YOU BELONG HERE
            <span className="text-kcf-gold">✦</span>
            SUNDAY 9:45 AM & 11:00 AM
            <span className="text-kcf-gold">✦</span>
            MUKUNDAPUR, KOLKATA
            <span className="text-kcf-gold">✦</span>
            ENCOUNTERING · EQUIPPING · ENCOURAGING
          </span>
        </div>
      </section>

      {/* ===== WAYS WE DO COMMUNITY (Dark Card Grid) ===== */}
      <section className="py-20 lg:py-28 bg-kcf-dark">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14 reveal-on-scroll">
            <p className="text-kcf-gold text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Our Ministries
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ways We Do Community
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              From children to seniors, there is a place for everyone at KCF.
              Discover a ministry that fits your season of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              {
                title: "Kids Church",
                desc: "Ages 0–12. Biblical truths taught in a fun, engaging way.",
                color: "bg-teal-600",
                href: "/ministries/kids-church",
                icon: Heart,
              },
              {
                title: "Teens on Track",
                desc: "Youth ministry helping teens navigate faith and life.",
                color: "bg-orange-600",
                href: "/ministries/teens-on-track",
                icon: Users,
              },
              {
                title: "College & Career",
                desc: "Young adults exploring faith and friendship together.",
                color: "bg-purple-600",
                href: "/ministries/college-career",
                icon: BookOpen,
              },
              {
                title: "Freedom Church",
                desc: "Hope and healing for survivors of trafficking.",
                color: "bg-rose-600",
                href: "/ministries/freedom-church",
                icon: Heart,
              },
              {
                title: "Bengali Mentorship",
                desc: "Empowering future Bengali leaders for ministry.",
                color: "bg-blue-600",
                href: "/ministries/bengali-mentorship",
                icon: Users,
              },
              {
                title: "Hour of Power",
                desc: "Sunday morning prayer for our world and community.",
                color: "bg-amber-600",
                href: "/services/hour-of-power",
                icon: Church,
              },
              {
                title: "Main Service",
                desc: "Weekly worship, word, walk, and work together.",
                color: "bg-kcf-blue",
                href: "/services/main-service",
                icon: Music,
              },
              {
                title: "Our Impact",
                desc: "Transforming communities across Bengal and beyond.",
                color: "bg-emerald-600",
                href: "/impact/sonarpur",
                icon: Globe,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`${item.color} rounded-2xl p-6 lg:p-8 min-h-[200px] flex flex-col justify-end group cursor-pointer hover:scale-[1.02] transition-transform duration-300 reveal-on-scroll`}
                >
                  <Icon className="w-8 h-8 text-white/80 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY WE EXIST (Parallax Banner) ===== */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/assets/heroes.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kcf-dark/80 via-kcf-blue/70 to-kcf-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-6 text-center reveal-on-scroll">
          <p className="text-kcf-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Our Purpose
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            To Be a Model Church
            <br />
            <span className="text-kcf-gold">the Father Delights In</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Through obedient attitude, courage to serve, fearless proclamation,
            accountability, humility, perseverance, and trust — all for His
            glory.
          </p>
          <Link
            href="/about/vision-mission"
            className="inline-flex items-center gap-2 bg-white text-kcf-blue font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
          >
            Learn More About Our Vision
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== WAYS TO GIVE / GET INVOLVED ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-on-scroll">
              <p className="text-kcf-blue text-sm font-bold uppercase tracking-[0.2em] mb-3">
                Get Involved
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-kcf-dark leading-tight mb-6">
                Ways to{" "}
                <span className="text-kcf-blue">Connect & Give</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Your partnership makes our ministry possible. Whether through
                prayer, volunteering, or financial support, every contribution
                helps us serve the community of Kolkata and beyond.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Pray with Us",
                    desc: "Submit your prayer requests and join our prayer community.",
                    href: "/prayer",
                  },
                  {
                    title: "Visit Us",
                    desc: "Plan your visit and experience KCF in person.",
                    href: "/contact",
                  },
                  {
                    title: "Serve with Us",
                    desc: "Discover volunteer opportunities in our ministries.",
                    href: "/about",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-kcf-blue-lighter transition-colors group"
                  >
                    <div>
                      <h4 className="font-semibold text-kcf-dark group-hover:text-kcf-blue transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-kcf-blue opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="reveal-on-scroll">
              <div className="bg-kcf-dark rounded-3xl p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Our Partners in Mission
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Right from our inception, God laid on our heart a burden to
                  invest sacrificially in missions. We currently support partners
                  across North Bengal, Maharashtra, Orissa, Manipur, and beyond.
                </p>
                <Link
                  href="/impact/partners"
                  className="inline-flex items-center gap-2 text-kcf-gold font-semibold hover:underline"
                >
                  Meet Our Partners
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-bold text-white">2005</p>
                    <p className="text-xs text-gray-500 mt-1">Founded</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">30+</p>
                    <p className="text-xs text-gray-500 mt-1">House Churches</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">1,000+</p>
                    <p className="text-xs text-gray-500 mt-1">Children Reached</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DNA STUDY PREVIEW ===== */}
      <section className="py-20 lg:py-28 bg-kcf-blue-lighter">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14 reveal-on-scroll">
            <p className="text-kcf-blue text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Bible Study
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-kcf-dark">
              Early Church DNA Study
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Exploring prominent New Testament churches and discovering how
              they are remembered. Join us in this unique study.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { name: "Jerusalem", tagline: "A Church that set STANDARDS", href: "/dna-study/jerusalem" },
              { name: "Antioch", tagline: "A SENDING Church", href: "/dna-study/antioch" },
              { name: "Macedonia", tagline: "A SHARING Church", href: "/dna-study/macedonia" },
              { name: "Philippi", tagline: "A SUPPORTING Church", href: "/dna-study/philippi" },
              { name: "Berea", tagline: "A STUDYING Church", href: "/dna-study/berea" },
              { name: "Thessalonica", tagline: "The SECOND-COMING Church", href: "/dna-study/thessalonica" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 reveal-on-scroll"
              >
                <div className="w-10 h-10 rounded-full bg-kcf-blue flex items-center justify-center text-white font-bold text-sm mb-4">
                  {item.name[0]}
                </div>
                <h3 className="text-lg font-bold text-kcf-dark group-hover:text-kcf-blue transition-colors mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.tagline}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/resources/videos"
              className="inline-flex items-center gap-2 bg-kcf-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-kcf-blue-light transition-all"
            >
              <Play className="w-4 h-4" />
              Watch the Series
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
