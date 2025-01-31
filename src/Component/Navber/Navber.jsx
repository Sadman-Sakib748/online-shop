import { useState } from "react";
import pic from "../../../public/asset/AC-LOGO.png";

const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the mobile menu state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-white w-full  shadow-md px-6 md:px-24 py-3 md:py-6 flex justify-between items-center">
            <div className="flex items-center">
                <a href="#" className="flex items-center">
                    <div className="bg-gradient-to-r from-white to-purple-400 p-1 rounded-xl">
                        <img src={pic} alt="Logo" className="md:h-10 h-6 rounded-xl" />
                    </div>
                </a>
            </div>
            <div className="md:hidden">
                <button className="text-black" onClick={toggleMenu}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </button>
            </div>
            <div className="hidden md:flex md:gap-6">
                <div className="relative group">
                    <a href="#" className="text-black">Home</a>
                </div>
                <div className="relative group">
                    <a href="#" className="text-black">Solution</a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 mt-2 p-2 w-max">
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a></li>
                    </ul>
                </div>
                <div className="relative group">
                    <a href="#" className="text-black">Integrations</a>
                </div>
                <div className="relative group">
                    <a href="#" className="text-black">Clients</a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 mt-2 p-2 w-max">
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a></li>
                    </ul>
                </div>
                <div className="relative group">
                    <a href="#" className="text-black">Partner</a>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 mt-2 p-2 w-max">
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a></li>
                    </ul>
                </div>
                <div className="relative group">
                    <a href="#" className="text-black">Resources</a>
                </div>
                <div className="relative group">
                    <a href="#" className="text-black">Our story</a>
                </div>
                <div className="relative group">
                    <a href="#" className="text-black">Contact</a>
                </div>
            </div>
            <div
                id="mobileMenu"
                className={`fixed top-0 left-0 w-full h-full bg-white z-50 p-6 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:hidden`}>
                <button className="absolute top-4 right-6 text-2xl" onClick={toggleMenu}>
                    &times;
                </button>
                <div className="space-y-6 mt-10">
                    <div className="relative group">
                        <a href="#" className="block text-lg text-black">Home</a>
                    </div>
                    <div className="relative group">
                        <a href="#" className="block text-lg text-black">Solution</a>
                        <ul className="hidden group-hover:block bg-gray-100 p-2 mt-2">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a></li>
                        </ul>
                    </div>
                    <div className="relative group">
                        <a href="#" className="block text-lg text-black">Integrations</a>
                    </div>
                    <div className="relative group">
                        <a href="#" className="block text-lg text-black">Clients</a>
                        <ul className="hidden group-hover:block bg-gray-100 p-2 mt-2">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a></li>
                        </ul>
                    </div>
                    <div className="relative group">
                        <a href="#" className="block text-lg text-black">Partner</a>
                        <ul className="hidden group-hover:block bg-gray-100 p-2 mt-2">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a></li>
                        </ul>
                    </div>
                    <div className="relative group">
                        <a href="#" className="block text-lg text-black">Resources</a>
                    </div>
                    <div className="relative group">
                        <a href="#" className="block text-lg text-black">Our story</a>
                    </div>
                    <div className="relative group">
                        <a href="#" className="block text-lg text-black">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;
