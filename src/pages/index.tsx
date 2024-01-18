import {useState} from 'react';
import Image from 'next/image';

import LoopStudioLogo from '../../public/images/loopstudios.svg';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-hero-mobile bg-auto relative">
      {/* Menu opened section */}
      <div
        className={`bg-black fixed top-0 right-0 w-full h-screen ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-all ease-in-out duration-300`}>
        <nav className="flex justify-between items-center px-6 pt-10">
          <Image src={LoopStudioLogo} alt="loopstuido logo" />
        </nav>
        <div className="font-josefinSans text-2xl text-white uppercase flex flex-col pl-6 gap-6 mt-[159px]">
          <a>About</a>
          <a>Careers</a>
          <a>Events</a>
          <a>Products</a>
          <a>Support</a>
        </div>
      </div>
      <nav className="flex justify-between items-center px-6 pt-10">
        <Image src={LoopStudioLogo} alt="loopstuido logo" />
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex-col ${isOpen ? 'hidden' : 'flex'}`}>
          <div className="h-[2px] w-[24px] mb-[5px] bg-white"></div>
          <div className="h-[2px] w-[24px] mb-[5px] bg-white"></div>
          <div className="h-[2px] w-[24px] bg-white"></div>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex-col relative ${isOpen ? 'flex' : 'hidden'}`}>
          <div
            className={`h-[2px] w-[24px] bg-white origin-center transition-all ease-in-out duration-1000 ${
              isOpen ? 'rotate-45' : ''
            }`}></div>
          <div
            className={`h-[2px] w-[24px] absolute bg-white origin-center transition-all ease-in-out duration-1000 ${
              isOpen ? '-rotate-45' : ''
            }`}></div>
        </div>
      </nav>
    </section>
  );
}
