"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Calendar, MapPin, Clock, Bell, Church, Users, Heart } from "lucide-react";

const updates = [
  {
    date: "2025-12-25",
    title: "Christmas Celebration Service",
    description:
      "Join us for a special Christmas Day service as we celebrate the birth of our Saviour Jesus Christ. The service will include carols, a special message, and fellowship.",
    type: "Special Service",
    time: "9:00 AM",
  },
  {
    date: "2025-12-31",
    title: "Watch Night Service",
    description:
      "Ring in the new year with a night of prayer, worship, and thanksgiving. Let us enter the new year together as a church family, seeking God's guidance and blessing.",
    type: "Special Service",
    time: "10:00 PM",
  },
  {
    date: "2026-01-12",
    title: "New Sunday Service at Nayabad",
    description:
      "We are excited to announce the launch of a new Sunday service in the Nayabad area. Pray for this new work and for all those who will be reached with the gospel.",
    type: "Announcement",
    time: "All Day",
  },
  {
    date: "2026-01-19",
    title: "Baptism Service",
    description:
      "A special baptism service for those who have accepted Christ and wish to make a public declaration of their faith. If you are interested in being baptised, please speak to a pastor.",
    type: "Sacrament",
    time: "10:30 AM",
  },
  {
    date: "2026-02-02",
    title: "Community Outreach — Sulkuni Medical Camp",
    description:
      "Our weekly medical camp in Sulkuni continues to serve the community. Volunteers are welcome to join the team. Contact the church office for more details.",
    type: "Outreach",
    time: "8:00 AM",
  },
  {
    date: "2026-02-14",
    title: "Youth Fellowship Meeting",
    description:
      "Monthly youth fellowship gathering with worship, games, and a relevant message for young people. All teens and young adults are welcome.",
    type: "Youth",
    time: "5:00 PM",
  },
];

const serviceTimes = [
  {
    day: "Sunday",
    services: [
      { name: "Main Service (English)", time: "9:00 AM" },
      { name: "Bengali Service", time: "11:30 AM" },
      { name: "Rajarhat Fellowship", time: "9:00 AM" },
    ],
  },
  {
    day: "Wednesday",
    services: [
      { name: "Hour of Power — Prayer Meeting", time: "6:00 PM" },
    ],
  },
  {
    day: "Saturday",
    services: [
      { name: "Youth Fellowship", time: "5:00 PM" },
    ],
  },
];

export default function UpdatesPage() {
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
        title="Updates"
        subtitle="Stay informed with the latest news, events, and announcements from KCF."
        breadcrumbs={[
          { label: "Updates", href: "/updates" },
          { label: "Church Updates", href: "/updates" },
        ]}
      />

      {/* Service Times */}
      <section className="py-20 lg:py-28 bg-kcf-blue-lighter/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-kcf-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Service Times
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4">
              When We Meet
            </h2>
            <p className="text-gray-600 text-lg">
              Join us for worship, prayer, and fellowship throughout the week.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceTimes.map((day, i) => (
              <div
                key={i}
                className="reveal-on-scroll bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-kcf-blue-lighter flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-kcf-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-kcf-dark">{day.day}</h3>
                </div>
                <div className="space-y-3">
                  {day.services.map((svc, j) => (
                    <div key={j} className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-kcf-dark">{svc.name}</p>
                        <p className="text-xs text-gray-500">{svc.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-kcf-blue-lighter text-kcf-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Bell className="w-4 h-4" />
              Church Updates
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4">
              Latest News & Events
            </h2>
            <p className="text-gray-600 text-lg">
              Stay connected with what's happening at KCF. Check back regularly for updates.
            </p>
          </div>

          <div className="space-y-6">
            {updates.map((update, i) => (
              <div
                key={i}
                className="reveal-on-scroll bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          update.type === "Special Service"
                            ? "bg-purple-50 text-purple-600"
                            : update.type === "Announcement"
                            ? "bg-blue-50 text-blue-600"
                            : update.type === "Outreach"
                            ? "bg-green-50 text-green-600"
                            : update.type === "Youth"
                            ? "bg-orange-50 text-orange-600"
                            : "bg-kcf-blue-lighter text-kcf-blue"
                        }`}
                      >
                        {update.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        {update.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-kcf-dark mb-2">
                      {update.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {update.description}
                    </p>
                  </div>
                  <div className="text-center lg:text-right shrink-0">
                    <div className="text-2xl font-bold text-kcf-blue">
                      {new Date(update.date).getDate()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(update.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
