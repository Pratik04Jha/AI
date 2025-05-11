"use client";
import { motion } from "framer-motion";
import { FaCrown, FaHeart, FaStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
};

export default function UpgradeToPro() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      icon: <FaStar size={24} />,
      features: [
        "Generate up to 4 images per prompt",
        "Basic image quality",
        "Limited prompt length",
        "No login required",
        "Community support only",
      ],
      buttonText: "You’re Using This",
      highlight: false,
    },
    {
      title: "Pro",
      price: "$20",
      icon: <FaCrown size={24} />,
      features: [
        "Unlimited image generations",
        "High-res HD quality images",
        "Faster generation speed",
        "Longer and more complex prompts",
        "Priority access to new features",
        "Exclusive styles, filters, and settings",
        "Smart prompt assist (AI-enhanced)",
        "24/7 Pro support",
      ],
      buttonText: "Upgrade to Pro",
      highlight: true,
    },
    {
      title: "Donate",
      price: "$Love",
      icon: <FaHeart size={24} />,
      features: [
        "Help keep this tool free for everyone",
        "Support future innovations",
        "Become part of our top supporters",
        "Buy us a coffee (literally!)",
        "Show some love if this helped you",
      ],
      buttonText: "Donate",
      highlight: false,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="min-h-screen pt-24 bg-black flex flex-col items-center px-4 ml-60"
    >
      {/* Heading */}
      <motion.h1
        variants={textVariants}
        className="text-white text-4xl font-bold mb-10 text-center"
      >
        Upgrade to Pro & Unlock Magic
      </motion.h1>

      {/* Pricing Cards */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className={`flex flex-col justify-between rounded-[10px] p-6 border ${
              plan.highlight
                ? "bg-gradient-to-br scale-110  text-white bg-[#1f2622a7] border-2 border-[#00692A] shadow-2xl z-10"
                : "bg-[#111113] text-white border-zinc-700"
            }`}
          >
            <div>
              <motion.div
                variants={textVariants}
                className="flex items-center gap-3 mb-4"
              >
                {plan.icon}
                <h2 className="text-2xl font-bold">{plan.title}</h2>
              </motion.div>

              <motion.p
                variants={textVariants}
                className={`text-3xl font-extrabold ${
                  plan.highlight ? "" : "text-zinc-300"
                }`}
              >
                {plan.price}
              </motion.p>

              <motion.ul
                variants={textVariants}
                className="mt-4 flex flex-col gap-2 text-sm"
              >
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </motion.ul>
            </div>

            {/* Button */}
            <motion.button
              variants={textVariants}
              className={`mt-6 py-2 px-4 rounded-xl font-semibold transition duration-300 ${
                plan.highlight
                  ? "text-white bg-[#00692A] cursor-pointer"
                  : "bg-white text-black cursor-pointer"
              }`}
              onClick={() => {
                toast("This functionality is not integrated yet!", {
                  icon: "🚧",
                  style: {
                    borderRadius: "5px",
                    background: "#222",
                    color: "#fff",
                  },
                });
              }}
            >
              {plan.buttonText}
            </motion.button>
          </motion.div>
        ))}
        <Toaster position="bottom-right" reverseOrder={false} />
      </motion.div>

      {/* Footer Text */}
      <motion.p
        variants={textVariants}
        className="text-zinc-400 mt-12 text-center text-sm max-w-xl mb-2"
      >
        Whether you're vibing with the Free version, going beast mode with Pro,
        or dropping love with a donation - every step helps me grow
      </motion.p>
    </motion.div>
  );
}
