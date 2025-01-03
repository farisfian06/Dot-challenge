import React from "react";
import {
  FaUserPlus,
  FaListAlt,
  FaQuestionCircle,
  FaTrophy,
} from "react-icons/fa";
import HowItWorkCard from "../../landing/HowItWorkCard";
import { motion } from "framer-motion";

const howItWorkData = [
  {
    judul: "Sign up",
    deskripsi: "Create your account to start your trivia quiz journey",
    icon: <FaUserPlus />,
  },
  {
    judul: "Choose a Category",
    deskripsi: "Find your favorite quiz category and start playing",
    icon: <FaListAlt />,
  },
  {
    judul: "Answer Quizzes",
    deskripsi: "Answer questions quickly and correctly to earn points",
    icon: <FaQuestionCircle />,
  },
  {
    judul: "Earn Points",
    deskripsi: "Collect as many points as possible and become the champion!",
    icon: <FaTrophy />,
  },
];

const HowItWork = () => {
  return (
    <section className="bg-gray-50 py-20" id="how-it-work">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-primaryBold text-gray-800 mb-10"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center  gap-8">
          {howItWorkData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px", once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <HowItWorkCard judul={item.judul} deskripsi={item.deskripsi}>
                {item.icon}
              </HowItWorkCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
