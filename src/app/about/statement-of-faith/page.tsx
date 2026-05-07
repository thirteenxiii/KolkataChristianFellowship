"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Book, Cross, Wind, Skull, User, Heart, Clock } from "lucide-react";

export default function StatementOfFaithPage() {
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

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="space-y-10">
            {[
              {
                title: "The Bible",
                icon: Book,
                content:
                  "KCF believes the Bible to be the complete Word of God; that the sixty-six books, as originally written, comprising the Old Testament and the New Testament, are inspired by the Holy Spirit and are inerrant. The Bible is the final authority in all matters of faith and practice and the basis of Christian life and unity.",
              },
              {
                title: "God",
                icon: Cross,
                content:
                  "KCF believes in One God, creator of all, holy, sovereign, eternal, existing in three equal persons: the Father, the Son, and the Holy Spirit.",
              },
              {
                title: "Christ",
                icon: Heart,
                content:
                  "KCF believes in the absolute and essential deity of Jesus Christ, in His eternal existence with the Father in pre-incarnate glory, in His virgin birth, sinless life, substitutionary death, bodily resurrection, triumphant ascension, mediatorial work, and personal return.",
              },
              {
                title: "The Holy Spirit",
                icon: Wind,
                content:
                  "KCF believes in the absolute and essential deity and personality of the Holy Spirit, who convicts of sin, righteousness, and judgment; who regenerates, sanctifies, illuminates, and comforts those who believe in Jesus Christ.",
              },
              {
                title: "Satan",
                icon: Skull,
                content:
                  "KCF believes that Satan exists as an evil personality, the originator of sin, the archenemy of God and man.",
              },
              {
                title: "Man",
                icon: User,
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
                icon: Clock,
                content:
                  "KCF believes in the personal, bodily, and glorious return of the Lord Jesus Christ; in the bodily resurrection of the just and unjust; in the eternal blessedness of the redeemed; and in the eternal punishment of those who have rejected Christ.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-on-scroll flex gap-6 p-6 lg:p-8 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-kcf-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-kcf-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
