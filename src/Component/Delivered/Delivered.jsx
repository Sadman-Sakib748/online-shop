import shopping from '../../../public/asset/online-shopping.png';
import search from '../../../public/asset/search.png';
import mony from '../../../public/asset/money-bag.png';
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

const Delivered = () => {
    return (
      <div className="bg-[#f2f2f2] mt-6 text-center md:min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-700 relative text-2xl md:text-4xl mb-8"
        >
          The proof is in the data. Comparing 60 days pre and post live data for EGO’s UK website, Advanced Commerce delivered:
        </motion.h1>
        <div className="grid grid-cols-1 text-center md:grid-cols-3 my-16 gap-8 justify-center">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center w-[300px] mx-auto bg-white p-6 rounded-lg shadow-lg"
          >
            <img src={shopping} alt="Shopping icon" className="mb-4" />
            <h1 className="text-3xl text-orange-500 font-semibold">+15%</h1>
            <p>increased click-through <br /> rate</p>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center w-[300px] mx-auto bg-white p-6 rounded-lg shadow-lg"
          >
            <img src={search} alt="Search icon" className="mb-4" />
            <h1 className="text-3xl text-orange-500 font-semibold">+15%</h1>
            <p>increased conversion <br /> rate</p>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center w-[300px] mx-auto bg-white p-6 rounded-lg shadow-lg"
          >
            <img src={mony} alt="Money icon" className="mb-4" />
            <h1 className="text-3xl text-orange-500 font-semibold">+15%</h1>
            <p>increased AOV per user</p>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center text-center relative md:relative -top-32 md:-top-[100px]"
        >
          <Button className="flex items-center justify-center text-center mt-[94px] px-10 py-6 outline-none border-b-2 border-black rounded-2xl w-[290px]">
            View all case studies
          </Button>
        </motion.div>
      </div>
    </div>

    );
};

export default Delivered;