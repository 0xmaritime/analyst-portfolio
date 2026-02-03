"use client";

import { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-16">
      <div className="max-w-2xl mx-auto px-small py-large">
        <header className="border-b border-architectural-ink pb-large mb-large">
          <h1 className="text-architectural-ink text-5xl font-semibold tracking-[-0.02em] leading-tight">
            Contact
          </h1>
        </header>

        <section className="border-t border-architectural-ink pt-large">
          <form onSubmit={handleSubmit} className="space-y-medium">
            <div>
              <label htmlFor="name" className="block text-architectural-tertiary-text text-xs uppercase tracking-[0.02em] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full border border-architectural-ink bg-architectural-white px-small py-3 text-architectural-ink placeholder-architectural-graphite focus:outline-none focus:border-2"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-architectural-tertiary-text text-xs uppercase tracking-[0.02em] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full border border-architectural-ink bg-architectural-white px-small py-3 text-architectural-ink placeholder-architectural-graphite focus:outline-none focus:border-2"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-architectural-tertiary-text text-xs uppercase tracking-[0.02em] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full border border-architectural-ink bg-architectural-white px-small py-3 text-architectural-ink placeholder-architectural-graphite focus:outline-none focus:border-2"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-architectural-tertiary-text text-xs uppercase tracking-[0.02em] mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full border border-architectural-ink bg-architectural-white px-small py-3 text-architectural-ink placeholder-architectural-graphite focus:outline-none focus:border-2 resize-none"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-transparent border border-architectural-ink px-small py-3 text-xs uppercase tracking-[0.1em] text-architectural-ink hover:bg-architectural-ink hover:text-architectural-white transition-all duration-200 mt-small"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="mt-large border-t border-architectural-ink pt-large">
          <p className="text-architectural-graphite text-sm mb-small">
            Alternatively, email directly:
          </p>
          <a 
            href="mailto:hello@example.com" 
            className="text-architectural-ink hover:text-architectural-accent text-base font-medium transition-colors"
          >
            hello@example.com
          </a>
        </section>
      </div>
    </div>
  );
}
