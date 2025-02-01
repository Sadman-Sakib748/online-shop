import { Button } from '@heroui/react';
import egg from '../../../../public/asset/EGO-logo.png'
import formik from '../../../../public/asset/Fenwick-logo.png'
import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <div className="md:min-h-screen h-full flex flex-col items-center justify-center p-6 bg-gray-100">

            {/* Section Title with Motion */}
            <motion.h6
                className="text-orange-500 uppercase text-sm mb-2 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Testimonials
            </motion.h6>

            <motion.h2
                className="text-3xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                What Our Clients Say
            </motion.h2>

            <div className="w-full max-w-6xl">

                {/* Grid layout for cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:mt-12 gap-6">

                    {/** Card 1 */}
                    <motion.div
                        className="bg-white shadow-lg rounded-2xl text-center p-6 w-full flex flex-col items-center justify-between min-h-[350px]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <img src={egg} alt="Online merchandising" className="w-16 mx-auto" />
                        <h2 className="text-2xl mt-6 font-semibold">EGO</h2>
                        <p className="text-gray-700 mt-4">
                            “Comparing 60 days pre and post live data for EGO’s UK website,
                            Advanced Commerce has delivered a 15% increase in click-through rate,
                            30% increase in CVR and 16% average revenue per user.”
                        </p>
                        <p className="text-gray-700 mt-2">
                            <span className="text-gray-600 font-semibold">MANUEL PEREZ</span>, HEAD OF DEVELOPMENT
                        </p>
                    </motion.div>

                    {/** Card 2 */}
                    <motion.div
                        className="bg-white shadow-lg rounded-2xl text-center p-6 w-full flex flex-col items-center justify-between min-h-[350px]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <img src={formik} alt="Site Search" className="w-16 mx-auto" />
                        <h2 className="text-2xl mt-6 font-semibold">Fenwick</h2>
                        <p className="text-gray-700 mt-4">
                        “You can see in real time how all the strategies are working within the Merchandising Insights tool which is a nice element that a lot of tools don’t have.”
                        </p>
                        <p className="text-gray-700 mt-2">
                            <span className="text-gray-600 font-semibold">SMARSHALL JOHNSON,</span>SENIOR DIGITAL TRADING MANAGER
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>



    );
};

export default Testimonials;