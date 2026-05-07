"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Heart, Search, Filter, CheckCircle, Clock, Users } from "lucide-react";

const prayerRequests = [
  {
    id: "prayer-1",
    requesterName: "Anonymous",
    requestText: "Please pray for my mother's health. She is undergoing surgery this Friday.",
    dateSubmitted: "2023-11-01T10:00:00Z",
    isAnswered: false,
    prayedForCount: 12,
    category: "Healing",
  },
  {
    id: "prayer-2",
    requesterName: "John D.",
    requestText: "Praise God! I got the job I was interviewing for. Thank you church family for your prayers.",
    dateSubmitted: "2023-11-02T14:30:00Z",
    isAnswered: true,
    prayedForCount: 45,
    category: "Praise",
  },
  {
    id: "prayer-3",
    requesterName: "Sarah",
    requestText: "Praying for peace and comfort for our family as we grieve the loss of my uncle.",
    dateSubmitted: "2023-11-03T09:15:00Z",
    isAnswered: false,
    prayedForCount: 8,
    category: "Comfort",
  },
  {
    id: "prayer-4",
    requesterName: "Michael",
    requestText: "Please pray for my marriage restoration. God is doing a miracle.",
    dateSubmitted: "2023-11-05T11:00:00Z",
    isAnswered: false,
    prayedForCount: 24,
    category: "Relationships",
  },
  {
    id: "prayer-5",
    requesterName: "Rachel",
    requestText: "Thank you Lord for providing for our family's needs this month.",
    dateSubmitted: "2023-11-07T16:45:00Z",
    isAnswered: true,
    prayedForCount: 32,
    category: "Praise",
  },
  {
    id: "prayer-6",
    requesterName: "David",
    requestText: "Praying for wisdom as I make decisions about my career path.",
    dateSubmitted: "2023-11-10T08:30:00Z",
    isAnswered: false,
    prayedForCount: 15,
    category: "Guidance",
  },
];

const prayerFocusAreas = [
  {
    title: "KCF Churches",
    items: [
      "Praise God for blessing us with the opportunity to start new church services.",
      "Pray that the Nayabad Church service will be a blessing to all in that area.",
      "Pray for the Newtown Bengali service to bring more people to the Lord.",
      "Pray that we will always strive to bring Him honour and praise.",
    ],
  },
  {
    title: "Healing & Restoration",
    items: [
      "Praise God that His healing is our portion.",
      "Pray for all who are battling cancer — that God will restore them completely.",
      "Pray for the complete healing of those suffering from various sicknesses.",
      "Pray that God will bless and sustain those who have lost loved ones.",
    ],
  },
  {
    title: "Medical Camp",
    items: [
      "Praise God for the opportunity to conduct a Medical Camp in Sulkuni every week.",
      "Pray for all the people who go there for check-up and treatment.",
      "Pray for the team from KCF that serves at this camp.",
    ],
  },
];

const categories = ["All", "Healing", "Praise", "Comfort", "Relationships", "Guidance"];

export default function PrayerPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredRequests = prayerRequests.filter((req) => {
    const matchesCategory = activeCategory === "All" || req.category === activeCategory;
    const matchesSearch =
      req.requestText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.requesterName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <PageHeader
        title="Prayer Wall"
        subtitle="Share your prayer requests and pray for others in our church family."
        breadcrumbs={[
          { label: "Prayer", href: "/prayer" },
          { label: "Prayer Wall", href: "/prayer" },
        ]}
      />

      {/* Prayer Focus Areas */}
      <section className="py-20 lg:py-28 bg-kcf-blue-lighter/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-kcf-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Prayer Focus
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4">
              How to Pray with Us
            </h2>
            <p className="text-gray-600 text-lg">
              Join us in prayer for these key areas of focus within our church and community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prayerFocusAreas.map((area, i) => (
              <div
                key={i}
                className="reveal-on-scroll bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-kcf-dark mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-kcf-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Requests */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-kcf-dark mb-2">Prayer Requests</h2>
                <p className="text-gray-600">
                  Lift up these requests in your prayers this week.
                </p>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-kcf-blue focus:ring-2 focus:ring-kcf-blue/20 outline-none text-sm w-full lg:w-64"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-kcf-blue text-white shadow-lg shadow-kcf-blue/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Prayer Request Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((req) => (
              <div
                key={req.id}
                className="reveal-on-scroll bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      req.isAnswered
                        ? "bg-green-50 text-green-600"
                        : "bg-kcf-blue-lighter text-kcf-blue"
                    }`}
                  >
                    {req.isAnswered ? "Answered" : req.category}
                  </span>
                  {req.isAnswered && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {req.requestText}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {req.prayedForCount} prayed
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {new Date(req.dateSubmitted).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-16">
              <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No prayer requests found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
