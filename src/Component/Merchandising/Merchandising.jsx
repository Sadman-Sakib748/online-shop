import light from '../../../public/asset/light.jpg';
import dark from '../../../public/asset/dark.png';
import none from '../../../public/asset/none.jpg';
import tablet from '../../../public/asset/tablet.jpg';
import { Button } from "@heroui/react";

const Merchandising = () => {
  return (
    <div className="flex justify-center items-center w-full h-full py-16 max-w-8xl min-h-screen bg-gray-100 p-6 overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        <div className="h-[450px] md:h-[550px] w-full md:w-[600px] relative overflow-hidden rounded-lg shadow-lg">
          <img src={light} alt="Light Theme"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105" />
          <Button className='absolute bottom-4 left-24 transform -translate-x-1/2 px-6 md:px-8 py-2 bg-white rounded-xl border-b-2 border-black' color="primary">
           Learn More</Button>
        </div>
        <div className="h-auto md:h-[550px] w-full flex flex-col justify-between gap-3">
          <div className="w-full h-[220px] md:h-[270px] relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={dark}
              alt="Dark Theme"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <Button className='absolute bottom-4 left-24 transform -translate-x-1/2 px-6 md:px-8 py-2 bg-white rounded-xl border-b-2 border-black' color="primary">
            View More</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            <div className="w-full h-[220px] md:h-[260px] relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={none}
                alt="None Image"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <Button className='absolute bottom-4 left-24 transform -translate-x-1/2 px-6 md:px-8 py-2 bg-white rounded-xl border-b-2 border-black' color="primary">
              Explore</Button>
            </div>
            <div className="w-full h-[220px] md:h-[260px] relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={tablet}
                alt="Tablet Image"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <Button className='absolute bottom-4 left-24 transform -translate-x-1/2 px-6 md:px-8 py-2 bg-white rounded-xl border-b-2 border-black' color="primary">
              Shop Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Merchandising;