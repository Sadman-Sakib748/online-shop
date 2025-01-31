import { Link } from 'react-router-dom';
import logo from '../../../public/asset/AC-LOGO.png'
import { Button,  } from "@heroui/button";

const Footer = () => {
    return (
        <div className='h-[400px] '>
            <footer className="footer  bg-[#404040] text-base-content p-10 h-[900px] md:h-[400px]">
                <aside className='mt-6'>
                    <img src={logo} alt="" className='w-36' />
                    <Link>
                        <p className='mt-4'>
                            Privacy Policy <span className='font-bold'>|</span> Cookie Policy
                        </p>
                    </Link>

                    <div className='flex justify-around mt-11'>
                        <img src="" alt="logo" />
                        <img src="" alt="logo" />
                    </div>
                    <p className='mt-24'>©2025 Advanced Commerce Ltd. All rights reserved.</p>
                </aside>
                <div className='flex mt-6'>
                    <nav className='flex-1 space-y-8'>
                        <h3 className="text-[20px] font-bold space-y-6">Ready to find out <br /> more?</h3>
                        <h5 className='text-[15px] mt-5'>Book a demo today with one of our experts.</h5>
                        <Button className='px-12 rounded-xl ' color="primary" variant="bordered">
                            Book a demo
                        </Button>

                    </nav>
                    <nav className='flex-1 ml-7'>
                        <h2 className="text-[20px] font-bold">Useful links</h2>
                        <div className='grid col-span-3 mt-12 '>
                        <Link href="#" className="text-[15px] hover:text-orange-600 text text-orange-400 hover:underline-none">FAQs</Link>
                            <Link href="#" className="ext-[15px] hover:text-orange-600 text text-orange-400 hover:underline-none">Newsletter signup</Link>
                            <Link href="#" className="ext-[15px] hover:text-orange-600 text-orange-400 hover:underline-none">Contact us</Link>
                            <Link href="#" className="ext-[15px] hover:text-orange-600 text text-orange-400 hover:underline-none">R&D</Link>

                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;