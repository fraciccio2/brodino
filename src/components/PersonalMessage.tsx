import React from 'react';
import { motion } from 'framer-motion';
import { birthdayData } from '../data/birthday';

export const PersonalMessage: React.FC = () => {
  return (
    <section className="relative py-36 px-6 sm:px-10 max-w-2xl mx-auto my-16">
      <div className="space-y-16">
        {/* The opening pause and sentence */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-zinc-200 leading-snug tracking-wide">
            «{birthdayData.personalMessage.leadIn}»
          </h2>
        </motion.div>

        {/* The Personal Letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 border-l border-zinc-800 pl-6 sm:pl-10"
        >
          <div className="space-y-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            {birthdayData.personalMessage.paragraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 + idx * 0.12 }}
                className="text-zinc-300/90"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Sincere Signoff */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="pt-8 space-y-1"
          >
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              {birthdayData.personalMessage.signature}
            </p>
            <p className="text-lg sm:text-xl font-serif italic text-amber-200">
              {birthdayData.authorSignature}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
