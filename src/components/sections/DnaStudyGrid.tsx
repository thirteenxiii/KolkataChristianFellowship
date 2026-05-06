'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const churches = [
  {
    id: 'jerusalem',
    name: 'Jerusalem',
    dna: 'A Church that set STANDARDS',
    description: 'Devoted to fellowship, breaking bread, and prayer. A model of unity and generosity.',
    scripture: 'Acts 2:42-47',
    color: 'from-amber-500/20 to-amber-600/10',
  },
  {
    id: 'antioch',
    name: 'Antioch',
    dna: 'A SENDING Church',
    description: 'The first missionary church. Set apart Barnabas and Saul for the work God called them to.',
    scripture: 'Acts 13:1-3',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    id: 'macedonia',
    name: 'Macedonia',
    dna: 'A SHARING Church',
    description: 'Overflowing in generosity despite extreme poverty. Gave beyond their ability.',
    scripture: '2 Corinthians 8:1-5',
    color: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    id: 'philippi',
    name: 'Philippi',
    dna: 'A SUPPORTING Church',
    description: 'Faithful partners in the gospel. Supported Paul\'s ministry consistently and sacrificially.',
    scripture: 'Philippians 4:15-16',
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    id: 'berea',
    name: 'Berea',
    dna: 'A STUDYING Church',
    description: 'Noble-minded. Examined the Scriptures daily to verify the truth of what they heard.',
    scripture: 'Acts 17:10-12',
    color: 'from-rose-500/20 to-rose-600/10',
  },
  {
    id: 'thessalonica',
    name: 'Thessalonica',
    dna: 'The SECOND-COMING Church',
    description: 'A church with a living hope. Turned from idols to serve the living God and await His Son.',
    scripture: '1 Thessalonians 1:9-10',
    color: 'from-cyan-500/20 to-cyan-600/10',
  },
];

export default function DnaStudyGrid() {
  return (
    <section id="dna-study" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-liturgical-gold/10 border border-liturgical-gold/20 text-liturgical-gold text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            How They Are Remembered
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-charcoal mb-4">
            Exploring the DNA of the Early Church
          </h2>
          <p className="text-deep-charcoal/60 max-w-2xl mx-auto text-lg">
            Join us in this unique study of prominent New Testament Churches and discover what made them unforgettable.
          </p>
        </motion.div>

        {/* 3x2 Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {churches.map((church, index) => (
            <motion.div
              key={church.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hoverScale={1.05}>
                <div className="flex flex-col h-full">
                  {/* Church Name & DNA */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-deep-charcoal mb-1">
                      {church.name}
                    </h3>
                    <p className="text-liturgical-gold font-semibold text-sm uppercase tracking-wider">
                      {church.dna}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-deep-charcoal/70 text-sm leading-relaxed flex-grow mb-6">
                    {church.description}
                  </p>

                  {/* Scripture Reference */}
                  <div className="flex items-center gap-2 text-xs text-deep-charcoal/50 font-mono mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-liturgical-gold" />
                    {church.scripture}
                  </div>

                  {/* Hover-reveal "Discover DNA" Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-liturgical-gold hover:text-liturgical-gold-dark transition-colors">
                      Discover DNA
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/note"
            className="inline-flex items-center gap-2 text-deep-charcoal/60 hover:text-liturgical-gold transition-colors font-semibold text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Explore sermon notes and video teachings
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
