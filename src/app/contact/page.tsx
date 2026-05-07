"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { MapPin, Mail, Phone, Clock, Send, Church } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us."
        breadcrumbs={[
          { label: "Contact", href: "/contact" },
          { label: "Get in Touch", href: "/contact" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="reveal-on-scroll mb-10">
                <div className="inline-flex items-center gap-2 bg-kcf-blue-lighter text-kcf-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Church className="w-4 h-4" />
                  Get in Touch
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-kcf-dark mb-4">
                  We'd Love to Connect
                </h2>
                <p className="text-gray-600 text-lg">
                  Whether you have a question, a prayer request, or want to know more about
                  KCF, we're here for you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="reveal-on-scroll flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-kcf-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kcf-dark mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Kolkata Christian Fellowship
                      <br />
                      896 & 897 Shatabdi Park, Block - D
                      <br />
                      Das Para, Mukundapur
                      <br />
                      Kolkata - 700099
                    </p>
                  </div>
                </div>

                <div className="reveal-on-scroll flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-kcf-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kcf-dark mb-1">Phone</h3>
                    <a
                      href="tel:7003621706"
                      className="text-gray-600 text-sm hover:text-kcf-blue transition-colors"
                    >
                      +91 7003621706
                    </a>
                  </div>
                </div>

                <div className="reveal-on-scroll flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-kcf-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kcf-dark mb-1">Email</h3>
                    <a
                      href="mailto:kcf@kolkatachristianfellowship.net"
                      className="text-gray-600 text-sm hover:text-kcf-blue transition-colors"
                    >
                      kcf@kolkatachristianfellowship.net
                    </a>
                  </div>
                </div>

                <div className="reveal-on-scroll flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-kcf-blue-lighter flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-kcf-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kcf-dark mb-1">Service Times</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sunday Main Service: 9:00 AM
                      <br />
                      Sunday Bengali Service: 11:30 AM
                      <br />
                      Wednesday Hour of Power: 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="reveal-on-scroll mt-10 rounded-xl overflow-hidden border border-gray-200 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5!2d88.4!3d22.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMwJzAwLjAiTiA4OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
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

            {/* Contact Form */}
            <div className="reveal-on-scroll">
              {submitted ? (
                <div className="bg-green-50 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-kcf-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-kcf-blue hover:text-kcf-blue-light font-medium text-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-kcf-dark mb-6">Send Us a Message</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kcf-blue focus:ring-2 focus:ring-kcf-blue/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kcf-blue focus:ring-2 focus:ring-kcf-blue/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kcf-blue focus:ring-2 focus:ring-kcf-blue/20 outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-kcf-blue focus:ring-2 focus:ring-kcf-blue/20 outline-none transition-all resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-kcf-blue hover:bg-kcf-blue-light text-white font-semibold py-3.5 rounded-lg transition-all shadow-lg shadow-kcf-blue/25 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
