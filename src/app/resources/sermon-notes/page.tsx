"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { FileText, Download, BookOpen, User, Calendar } from "lucide-react";

const sermonNotes = [
  {
    title: "5 Revolutionary Secrets",
    author: "Pastor Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/4195-5%20Revolutionary%20Secrets.pdf",
    description: "God's formula to enjoying a life filled with purpose and joy, drawn from Proverbs 3.",
  },
  {
    title: "Lessons on Prayer from the Life of Nehemiah",
    author: "Pastor Ashok Andrews",
    parts: 3,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/22482-Lessons%20on%20Prayer%20from%20the%20life%20of%20Nehemiah.pdf",
    description: "Powerful lessons on effective prayer rooted in concern, posture, and consistency.",
  },
  {
    title: "3 Truths Learnt in Trials",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/26396-3%20Truths%20Learnt%20in%20Trials.pdf",
    description: "Finding hope and steadfastness in God even when everything feels hopeless.",
  },
  {
    title: "Keys to Being Successful",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/56865-Keys%20to%20being%20Successful.pdf",
    description: "Biblical principles for prosperity and success from 1 Kings 2:3.",
  },
  {
    title: "The Joy of the Lord is Our Strength",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/34102-4%20Keys%20to%20experiencing%20The%20Joy%20of%20the%20Lord%20is%20our%20Strength.pdf",
    description: "Four keys to experiencing the joy of the Lord as your strength.",
  },
  {
    title: "God Always Keeps His Promises",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/2967-God%20is%20God%20He%20always%20keeps%20his%20promises.pdf",
    description: "Learning from Sarah's journey of faith that God always fulfills His promises.",
  },
  {
    title: "God Will Carry You Through",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/10305-God%20will%20carry%20you%20through%20the%20worst%20of%20times.pdf",
    description: "God rescues and keeps us alive even in the worst of times.",
  },
  {
    title: "God Never Fails",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/8917-God%20Never%20Fails.pdf",
    description: "God's Word never fails — He is faithful to fulfill every promise.",
  },
  {
    title: "Lord, Have Your Way in Me",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/47981-Lord%20have%20Your%20way%20in%20me.pdf",
    description: "Surrendering to God's work of beauty through seasons of beauty and brokenness.",
  },
  {
    title: "Our God is Incomparable",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/27846-Our%20God%20is%20Incomparable.pdf",
    description: "David's declaration that our God is incomparable and His goodness is immeasurable.",
  },
  {
    title: "Make Me a Blessing",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/26106-Make%20me%20a%20Blessing%20to%20someone%20today.pdf",
    description: "Living a life that causes others to see God's blessing upon us.",
  },
  {
    title: "The Turning Point",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/19022-The%20Turning%20Point.pdf",
    description: "Enoch's turning point — walking in close fellowship with God.",
  },
  {
    title: "Trust Him Every Moment",
    author: "Reverend Ashok Andrews",
    parts: 1,
    pdfUrl: "http://kolkatachristianfellowship.net/admin/upload/note/33522-Trust%20Him%20every%20moment.pdf",
    description: "Learning to trust God every moment of every day for provision and guidance.",
  },
];

export default function SermonNotesPage() {
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
        title="Sermon Notes"
        subtitle="Downloadable sermon notes and study guides from our teaching series."
        breadcrumbs={[
          { label: "Resources", href: "/resources/sermon-notes" },
          { label: "Sermon Notes", href: "/resources/sermon-notes" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="reveal-on-scroll mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-kcf-blue-lighter text-kcf-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Study Resources
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4">
              Sermon Notes & Study Guides
            </h2>
            <p className="text-gray-600 text-lg">
              Download PDF sermon notes from our teaching series to deepen your understanding
              of God's Word. Each note includes scripture references and practical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermonNotes.map((note, i) => (
              <div
                key={i}
                className="reveal-on-scroll bg-white rounded-13 border border-gray-200 hover:border-kcf-blue/30 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-13 bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-kcf-blue" />
                    </div>
                    <span className="text-xs font-medium text-kcf-gold bg-kcf-gold/10 px-2.5 py-1 rounded-full">
                      PDF
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-kcf-dark mb-2 group-hover:text-kcf-blue transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {note.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {note.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {note.parts} Part{note.parts > 1 ? "s" : ""}
                    </span>
                  </div>
                  <a
                    href={note.pdfUrl}
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
        </div>
      </section>
    </div>
  );
}
