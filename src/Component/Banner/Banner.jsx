import {Button} from "@heroui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Banner = () => {
    return (
        <div
        className="w-full h-screen bg-[url('/asset/Home-page-banner.jpg')] relative bg-cover bg-center flex items-start justify-start px-6 text-start text-white"
      >
        <motion.div
          className="max-w-4xl mt-24 space-y-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="md:text-5xl font-bold leading-tight">
            The Gold Standard for Online Merchandising
          </h1>
          <p className="mt-4 text-lg">
            We combine site search, online visual merchandising, and real-time personalization in one easy-to-use platform for eCommerce stores, helping retailers compete online.
          </p>
          <Link href="#">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white relative mt-5 hover:text-orange-700 text-black px-7 py-3 rounded-xl transition-all"
            >
              Discover our platform <span className="text-[12px] -top-3">></span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
};

export default Banner;
