import React, { useState } from "react";
import { motion } from "framer-motion";
import p1 from "../../assets/Clever.png";
import p2 from "../../assets/Saver.png";
import p3 from "../../assets/Simple.png";
import p4 from "../../assets/Reliable.png";
import p5 from "../../assets/Rising.png";
import p6 from "../../assets/Convenient.png";

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export default function KYC() {
  const [hovered, setHovered] = useState(null);

  /* ---------- Animation variants ---------- */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  };

  const cards = [
    {
      id: 1,
      image: p1,
      title: "Clever",
      description:
        "KYC thinks like a regulator : smart, interactive, and analytical. It interprets data scientifically to highlight key compliance points. Users can instantly view insights and understand exactly where they stand with clear, pointed interpretations.",
    },
    {
      id: 2,
      image: p2,
      title: "Saver",
      description:
        "KYC helps you save time, money, and effort. With negligible operating costs, no need for external experts, and automated documentation, it reduces manual work while keeping compliance records accurate and organized.",
    },
    {
      id: 3,
      image: p3,
      title: "Simple",
      description:
        "KYC is designed for simplicity and ease of use. Its clean, web-based dashboard allows quick navigation and real-time monitoring. Every process happens online, needing only minimal input from users to stay compliant.",
    },
    {
      id: 4,
      image: p4,
      title: "Reliable",
      description:
        "KYC ensures your data is always safe and accessible. Built with a strong backend and four-level encryption, it secures every input and output. Users can retrieve information anytime in regulator-approved formats without worry.",
    },
    {
      id: 5,
      image: p5,
      title: "Rising",
      description:
        "KYC continuously evolves with your data. It checks the quality of inputs, performs detailed multi-modal analysis, and identifies areas for improvement. The system grows smarter over time, offering adaptive features and helpful error prompts.",
    },
    {
      id: 6,
      image: p6,
      title: "Convenient",
      description:
        "KYC makes compliance easy for everyone involved. Multiple users can add data quickly using built-in defaults, completing entries in under 30 seconds. It supports shared responsibility, third-party inputs, and on-the-go access from any device.",
    },
  ];

  return (
    /* ---- Replaced <section> with <div> (optional) ---- */
    <div className="relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* ---- Header (title + description) ---- */}
        <div className="max-w-screen-2xl mx-auto py-5 px-4 md:px-8 lg:px-12">
          {/* Title – flush left, no extra padding */}
          <motion.h1
            className="text-left text-4xl md:text-6xl mb-4 font-bold text-blue-900 leading-tight"
            variants={itemVariants}
          >
            Know Your Compliance
          </motion.h1>

          {/* Description – flush left */}
          <motion.div
            className="border-l-4 border-blue-800 pl-4 text-left"
            variants={itemVariants}
          >
            <p className="text-blue-800 font-medium text-2xl">
              “Know Your Compliance is an MPCB-partnered platform designed to
              help industries track, analyze, and maintain environmental
              compliance effortlessly across operations.”
            </p>
          </motion.div>
        </div>

        {/* ---- Cards container – wider & more spaced ---- */}
        <motion.div
          className="flex flex-wrap justify-center items-stretch gap-8 py-12 max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative flex-1 min-w-[280px] max-w-sm rounded-xl p-6 bg-white/80 shadow-xl transition-all duration-300 ease-out border border-gray-200",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
              )}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-contain rounded-xl border border-gray-200"
                whileHover={{ scale: 1.05 }}
              />
              <p className="mt-4 mb-2 text-2xl font-bold text-blue-800">
                {card.title}
              </p>
              <p className="text-sm text-neutral-700 text-left">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
