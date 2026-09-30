import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';
import { birthdayData } from '../data/birthday';

export const BookReveal: React.FC = () => {
  const [coverError, setCoverError] = useState(false);
  const book = birthdayData.book;

  return (
    <section className="relative py-32 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto my-12">
      <div className="space-y-16">
        {/* Intro sentence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto space-y-2"
        >
          <h2 className="text-2xl sm:text-4xl font-serif italic text-zinc-200 leading-snug">
            {book.tagline}
          </h2>
        </motion.div>

        {/* The Book Object Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-10 sm:gap-14"
        >
          {/* Hardcover Book Graphic */}
          <div className="w-52 sm:w-60 shrink-0 group perspective-1000">
            <div className="relative rounded-lg overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-amber-500/20 transform transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-102">
              {!coverError ? (
                <img
                  src={book.cover}
                  alt={`Copertina del libro: ${book.title}`}
                  className="w-full aspect-[2/3] object-cover"
                  onError={() => setCoverError(true)}
                />
              ) : (
                <div className="w-full aspect-[2/3] bg-zinc-900 flex flex-col items-center justify-center p-6 text-center text-zinc-500 space-y-2">
                  <ImageOff className="w-7 h-7 text-zinc-600" />
                  <span className="text-sm font-semibold text-zinc-300">{book.title}</span>
                  <span className="text-[11px] text-zinc-600">Copertina in /public/book</span>
                </div>
              )}
              {/* Spine highlight sheen */}
              <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-white/15 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-5 text-center sm:text-left">
            <div className="space-y-1.5">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
                {book.title}
              </h3>
              <p className="text-lg text-amber-300 font-serif italic">
                di {book.author}
              </p>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              {book.description}
            </p>

            <div className="pt-2">
              <p className="text-zinc-200 font-medium text-sm sm:text-base border-t border-zinc-800/80 pt-4">
                {book.note}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
