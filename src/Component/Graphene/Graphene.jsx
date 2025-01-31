import tea from '../../../public/asset/Passenger-category-page.jpg';
import { motion } from "framer-motion";

const Graphene = () => {
  return (

<div className="my-16 min-h-screen px-4 overflow-hidden">
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ type: "spring", stiffness: 100, damping: 10 }}
    viewport={{ once: false, amount: 0.2 }}
    className="text-center mb-8"
  >
    <h5 className="text-sm font-semibold uppercase text-orange-600">Our Platform</h5>
    <h2 className="text-2xl font-bold text-gray-800">GrapheneHC</h2>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex justify-center overflow-hidden"
    >
      <img
        className="w-full max-w-[600px] h-[auto] md:h-[400px] object-contain"
        src={tea}
        alt="GrapheneHC Platform"
      />
    </motion.div>

    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 50 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full space-y-8 overflow-hidden"
    >
      <p className="text-gray-700">
        Our GrapheneHC platform is popular because of its speed, unique merchandising functionality, and best-in-class user interface, making it a very cost-effective solution. Discover the innovative technology driving the platform and its seamless integration capabilities with your existing eCommerce platform.
      </p>
      <h6 className="my-6 text-[#576071]">Why choose GrapheneHC?</h6>
      <p className="my-6 text-gray-700">
        <span className="text-orange-600">Simple:</span> API-first architecture for effortless implementation, tailored for headless environments.
      </p>
      <p className="my-6 text-gray-700">
        <span className="text-orange-600">Speedy:</span> Lightning-fast performance, with backend changes instantly mirrored on the storefront.
      </p>
      <p className="my-6 text-gray-700">
        <span className="text-orange-600">Scalable:</span> Infinitely scalable architecture, primed to handle surges during peak trading.
      </p>
      <p className="my-6 text-gray-700">
        <span className="text-orange-600">Secure:</span> Next-generation Enterprise platform built with safety and protection in mind.
      </p>
      <p className="my-12 text-gray-700">
        <span className="text-orange-600">Special:</span> The only platform designed for merchandisers, offering best-in-class user interface and a high degree of automation.
      </p>
    </motion.div>
  </div>
</div>





  );
};

export default Graphene;