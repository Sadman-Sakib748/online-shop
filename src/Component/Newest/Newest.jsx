import { Button } from "@heroui/react";
import int from '../../../public/asset/CTA-bottom-banner.png';
import { motion } from "framer-motion";

const Newest = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h6 className="text-orange-600 font-semibold uppercase">RESOURCES</h6>
                <h1 className="text-3xl font-bold text-gray-800 my-6">
                    Explore our newest case <br /> studies, articles, and helpful <br /> tips for our top insights
                </h1>
                <Button className="border-b-2 w-32 px-6 rounded-xl text-orange-600 font-bold" color="primary">Button</Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img src={int} alt="Resources Image" className="w-full rounded-lg shadow-lg" />
            </motion.div>
        </div>

    );
};

export default Newest;