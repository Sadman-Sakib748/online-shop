import { motion } from "framer-motion";
import mor from "../../../public/asset/Mori-logo.png";
import ego from "../../../public/asset/EGO-logo.png";
import fer from "../../../public/asset/Fenwick-logo.png";
import hellas from "../../../public/asset/Heals-logo.png";
import jig from "../../../public/asset/Jigsaw-logo.png";
import ik from "../../../public/asset/l-k-bennett-logo.png";
import any from "../../../public/asset/Anya-Hindmarch.png";
import oka from "../../../public/asset/OKA-logo.png";
import tro from "../../../public/asset/Tropic-logo.png";

const images = [
  { src: any, alt: "Anya Hindmarch" },
  { src: ego, alt: "EGO" },
  { src: fer, alt: "Fenwick" },
  { src: hellas, alt: "Heals" },
  { src: jig, alt: "Jigsaw" },
  { src: ik, alt: "L.K. Bennett" },
  { src: mor, alt: "Mori" },
  { src: oka, alt: "OKA" },
  { src: tro, alt: "Tropic" },
];

const SectionImage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 max-w-8xl p-8">
      {images.map((item, index) => (
        <motion.div
          key={index}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: index * 0.1,
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center"
        >
          <img src={item.src} alt={item.alt} className="w-full h-auto" />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionImage;
