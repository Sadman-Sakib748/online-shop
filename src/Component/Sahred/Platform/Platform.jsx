import { Button } from '@heroui/react';
import teblet from '../../../../public/asset/CTA-bottom-banner.png';
import { motion } from 'framer-motion';

const Platform = () => {
    return (


        <div className="min-h-screen bg-[#E3E5E9] max-w-7xl mx-auto rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-2 p-4">
        <motion.div
          className="flex flex-col justify-center text-start items-start md:col-span-2 md:px-24 lg:col-span-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}  
        >
          <h6 className="text-orange-500 uppercase text-sm mb-2">Find out more</h6>
          <h1 className="md:text-4xl font-bold mb-4">
            Get in touch with one of our experts for a <span className="text-orange-500">platform demo</span>
          </h1>
          <Button className="px-4 py-2 border-b-2 my-10 border-black text-black rounded-lg transition">
            Get in touch
          </Button>
        </motion.div>
        <motion.div
          className="flex justify-center items-center md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }} 
        >
          <img src={teblet} alt="Tablet" className="w-full rounded-xl" />
        </motion.div>
      
      </div>
      
        
        
      
      
    );
};

export default Platform;