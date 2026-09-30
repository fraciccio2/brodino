import React from 'react';
import { motion } from 'framer-motion';
import { birthdayData } from '../data/birthday';

export const FakeConclusion: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-32 text-center bg-[#050507]">
      <div className="max-w-xl mx-auto space-y-16">
        {/* Fake THE END */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-6xl font-serif tracking-widest text-zinc-600 font-normal">
            {birthdayData.fakeConclusion.theEnd}
          </h2>
        </motion.div>

        {/* Dramatic Ellipsis */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl text-zinc-700 tracking-[0.6em]"
        >
          ...
        </motion.div>

        {/* The Reversal */}
        <div className="space-y-4 pt-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl font-serif italic text-zinc-400"
          >
            {birthdayData.fakeConclusion.wait}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100"
          >
            {birthdayData.fakeConclusion.notYet}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
