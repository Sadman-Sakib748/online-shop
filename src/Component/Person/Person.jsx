import { motion } from "framer-motion";
import {Button} from "@heroui/react";
const Person = () => {
    return (

        <div className="grid md:grid-cols-2 grid-cols-1 p-10 my-10 min-h-screen max-w-full text-start md:text-start overflow-hidden">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex-col px-5"
            >
                <h6 className="text-orange-600 font-semibold">What we do</h6>
                <h2 className="md:text-4xl text-2xl font-semibold my-4 py-4 text-black">
                    Three functions in one <br /> easy to use platform: <br /> site search, online <br /> merchandising and <br /> personalisation
                </h2>
              
                <Button className="text-orange-700 font-medium border-b-2 border-black" color="primary">Button</Button>
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="px-11"
            >
                <h1 className="md:text-xl text-start mt-28 w-full text-red-500">
                    Our highly-automated system with a best-in-class user interface is the only platform designed for eCommerce merchandisers. We’re your one-stop shop for online merchandising, full site search functionality and real-time personalisation.
                </h1>
                <p className="my-8 text-gray-700">
                    Founded by André Brown (former CEO and Founder of Attraqt), Advanced Commerce delivers an enterprise-level online merchandising platform to small and mid-tier eCommerce stores.
                </p>
                <p className="my-8 text-gray-700">
                    Most shoppers only view a few pages on an eCommerce site, typically seeing only 3% of a retailer’s product catalogue, often meaning they quickly click out if they aren’t presented with something they like. This makes the ranking or prioritisation of products on your site extremely important.
                </p>
                <p className="my-8 py-10 text-gray-700">
                    Using our unique merchandising blends, online retailers can take complete control of the prioritisation of their product display sequences to create a tailored shopping experience for every kind of customer. Choose any combination of attributes and use our merchandising templates to determine when and where your blends appear to boost conversion rate, average order value, and high order volume purchases whilst reducing returns and cart abandonment.
                </p>
            </motion.div>
        </div>


    );
};

export default Person;