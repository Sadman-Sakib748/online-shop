import { motion } from "framer-motion";
import {Button} from "@heroui/react";

const Demo = () => {
    return (


        <div className="flex flex-col w-full md:h-[700px]  bg-white items-center md:justify-center md:text-center max-w-7xl mx-auto space-y-6 p-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ type: "spring", stiffness: 100, damping: 10 }} 
            viewport={{ once: false, amount: 0.2 }}
          >
            <h1 className="text-xl text-black max-w-4xl md:text-4xl font-bold">
              Create the perfect merchandising strategy for your eCommerce store with your <span className="text-orange-400">own custom merchandising blends and templates</span> which can be applied to online visual merchandising, site search, and personalization.
            </h1>
          </motion.div>
        
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }} 
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="md:text-lg mt-12 max-w-4xl text-gray-700">
              Built to outperform the competition, GrapheneHC boasts blistering speed, breadth of functionality, and low costs. Find out more about the technology behind the platform and its seamless integration possibilities for your eCommerce store, no matter the industry.
            </p>
          </motion.div>
        
          <motion.button 
            className=" text-white px-14 py-3 rounded-lg font-semibold transition"
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 10 }} 
            viewport={{ once: false, amount: 0.2 }}
          >
            <Button className="bg-[#FFFFFF] text-black w-32 h-10 rounded-xl font-medium border-b-2 border-black" color="primary">Button</Button>
          </motion.button>
        </div>
        
      
    );
};

export default Demo;