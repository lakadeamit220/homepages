import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/CN";

import p1 from "../../assets/Clever.png";
import p2 from "../../assets/Saver.png";
import p3 from "../../assets/Simple.png";
import p4 from "../../assets/Reliable.png";
import p5 from "../../assets/Rising.png";
import p6 from "../../assets/Convenient.png";
import { TextGenerateEffect } from "./TextGenerateEffect";
import TextType from "./TextType";
import PixelBlast from "./PixelBlast";

export default function Demo() {
  const [hovered, setHovered] = useState(null);

  // Animation Variants
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

  const tagline = `Know Your Compliance is an MPCB-partnered platform designed to help industries track, analyze, and maintain environmental compliance effortlessly across operations.`;

  const cards = [
    {
      id: 1,
      image: p1,
      title: "Clever",
      description:
        "KYC thinks like a regulator: smart, interactive, and analytical. It interprets data scientifically to highlight key compliance points. Users can instantly view insights and understand exactly where they stand with clear, pointed interpretations.",
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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10"
      >
        <div className="max-w-screen-2xl mx-auto py-8 px-4 md:px-8 lg:px-12">
          {/* Title */}
          <motion.h1
            className="bg-linear-to-r from-indigo-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent text-4xl md:text-7xl mb-6 font-bold leading-tight"
            variants={itemVariants}
          >
            Know Your Compliance
          </motion.h1>

          {/* Tagline with Typing Effect */}
          <div className="pl-4 border-l-4 border-blue-800 rounded">
            <TextType
              text={[tagline]}
              typingSpeed={30}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-blue-800 font-medium text-lg md:text-xl lg:text-2xl leading-snug max-w-5xl"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative rounded-xl p-6 bg-white/90 backdrop-blur-sm shadow-xl border border-gray-200 transition-all duration-300",
                "flex flex-col",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-80"
              )}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.12)",
                zIndex: 10,
              }}
              layout
            >
              {/* Image */}
              <motion.div
                className="mb-4 overflow-hidden rounded-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-neutral-700 flex-1">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}