import { motion } from "framer-motion";

const Graph = () => {
    return (
        <div
        className="w-full h-screen bg-[url('/asset/GrapheneHC-banner.jpg')] relative bg-cover
         bg-center flex items-start justify-center px-6 text-white">
        <motion.div 
          className="md:max-w-4xl mt-28 space-y-10 md:text-center"
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          viewport={{ once: false, amount: 0.2 }}  
        >
          <h1 className="md:text-5xl font-bold">
          Our platform, GrapheneHC
          </h1>
          <p className="mt-4  text-lg">
          The platform designed for online merchandisers
          </p>
        </motion.div>
      </div>
      
    );
};

export default Graph;