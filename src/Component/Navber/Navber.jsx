import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import pic from "../../../public/asset/AC-LOGO.png";
import { useState } from "react";

const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar isBordered className="bg-white w-full shadow-md px-6 md:px-24 py-6 flex justify-between items-center">
            {/* Logo */}
            <NavbarBrand>
                <Link href="#" className="flex items-center">
                    <div className="bg-gradient-to-r from-white to-purple-400 p-1 rounded-xl">
                        <img src={pic} alt="Logo" className=" h-10 rounded-xl" />
                    </div>
                </Link>

            </NavbarBrand>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <Button className="text-black" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </Button>
            </div>

            {/* Desktop Navigation */}
            <NavbarContent className="hidden md:flex md:gap-6">
                {['Home', 'Solution', 'Integrations', 'Clients', 'Partner', 'Resources', 'Our story', 'Contact'].map((item, index) => (
                    <NavbarItem key={index} className="relative group">
                        <Link color="foreground" href="#">{item}</Link>
                        {/* Dropdown */}
                        {['Solution', 'Clients', 'Partner'].includes(item) && (
                            <ul className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 mt-2 p-2 w-max">
                                {['Option 1', 'Option 2', 'Option 3'].map((option, i) => (
                                    <li key={i}><Link href="#" className="block px-4 py-2 hover:bg-gray-200">{option}</Link></li>
                                ))}
                            </ul>
                        )}
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Mobile Navigation */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 p-6 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:hidden`}>
                <button className="absolute top-4 right-6 text-2xl" onClick={() => setMenuOpen(false)}>&times;</button>
                <div className="space-y-6 mt-10">
                    {['Home', 'Solution', 'Integrations', 'Clients', 'Partner', 'Resources', 'Our story', 'Contact'].map((item, index) => (
                        <div key={index} className="relative group">
                            <Link color="foreground" href="#" className="block text-lg">{item}</Link>
                            {['Solution', 'Clients', 'Partner'].includes(item) && (
                                <ul className="hidden group-hover:block bg-gray-100 p-2 mt-2">
                                    {['Option 1', 'Option 2', 'Option 3'].map((option, i) => (
                                        <li key={i}><Link href="#" className="block px-4 py-2 hover:bg-gray-200">{option}</Link></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Navbar>
    );
};

export default Navber;