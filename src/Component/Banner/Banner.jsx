import {Button} from "@heroui/react";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div 
            className="w-full h-screen bg-[url('/asset/Home-page-banner.jpg')] relative bg-cover bg-center flex items-start justify-start px-6 text-start text-white" >
            <div className="max-w-4xl mt-24 space-y-10">
                <h1 className="text-5xl font-bold leading-tight">
                    The Gold Standard for Online Merchandising
                </h1>
                <p className="mt-4 text-lg">
                    We combine site search, online visual merchandising, and real-time personalization in one easy-to-use platform for eCommerce stores, helping retailers compete online.
                </p>
               <Link>
               <Button className="bg-white relative mt-5 hover:text-orange-700 text-black px-7 rounded-xl" color="secondary">Discover our platform <span className="text-[12px] -top-3">></span> </Button>
               </Link>
            </div>
        </div>
    );
};

export default Banner;
