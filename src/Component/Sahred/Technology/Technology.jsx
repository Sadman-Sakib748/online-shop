
import shelves from '../../../../public/asset/shelves.png'
import search from '../../../../public/asset/search.png'
import user from '../../../../public/asset/user.png'
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

const Technology = () => {
    return (


        <div className="md:min-h-screen h-full flex flex-col items-center justify-center p-6 bg-gray-100">

            <motion.h6
                className="text-orange-500 uppercase text-sm mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                IN DETAIL
            </motion.h6>

            <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Our Technology
            </motion.h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-6">

                {/** First Card */}
                <motion.div
                    className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full text-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img src={shelves} alt="" className="w-16" />
                    <h2 className="md:text-2xl text-start mt-6 font-semibold mb-3">
                        Online Merchandising
                    </h2>
                    <p className="text-gray-700 mb-4 mt-6 text-start">
                        Online merchandising strategies determine when and who sees your chosen merchandising blends and templates across your eCommerce store, and what facets and filters will be used. These strategies can be deployed across full categories, search results and product recommendations.

                        You can also take personalisation one step further with GrapheneHC’s persona merchandising tools to create strategies aimed at groups of individuals, ensuring a tailored experience for every kind of customer.
                    </p>
                    <motion.button
                        className="px-3 py-2 border-b-2 border-black text-black rounded-lg transition  "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button>Learn More</Button>
                    </motion.button>
                </motion.div>

                {/** Second Card */}
                <motion.div
                    className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full text-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img src={search} alt="" className="w-16" />
                    <h2 className="md:text-2xl text-start mt-6 font-semibold mb-3">
                        Site Search
                    </h2>
                    <p className="text-gray-700 mb-4 mt-6 text-start">
                        GrapheneHC’s intelligent, native search engine equips you with the tools you need to avoid empty search results, safeguarding your customers’ shopping journey and reducing bounce rates.

                        You have full control of display sequencing, with search terms triggering your personalised merchandising effects.
                    </p>
                    <motion.button
                        className="px-3 py-2 border-b-2 border-black text-black rounded-lg transition  "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button>Learn More</Button>
                    </motion.button>
                </motion.div>
                <motion.div
                    className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full text-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.7 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img src={user} alt="" className="w-16" />
                    <h2 className="md:text-2xl text-start mt-6 font-semibold mb-3">
                        Personalization
                    </h2>
                    <p className="text-gray-700 mb-4 mt-6 text-start">
                        GrapheneHC offers a range of personalisation tools that empower you to provide tailored experiences for every visitor, enhancing site performance.

                        Effortlessly craft exceptional personalised shopping journeys that delight your customers by utilising any onsite action or referring URL to activate merchandising effects.
                    </p>
                    <motion.button
                        className="px-3 py-2 border-b-2 border-black text-black rounded-lg transition  "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button>Learn More</Button>
                    </motion.button>
                </motion.div>

            </div>
        </div>

    );
};

export default Technology;