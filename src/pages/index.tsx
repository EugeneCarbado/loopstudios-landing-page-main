import {useState} from 'react';
import Image from 'next/image';

import Hamburger from '@/components/Hamburger';

import LoopStudioLogo from '@/images/logos/loopstudios.svg';
import ImageHeroMobile from '@/images/mobile/image-hero-mobile.jpg';
import ImageInteractive from '@/images/mobile/image-interactive.jpg';
import FacebookLogo from '@/images/logos/icon-facebook.svg';
import TwitterLogo from '@/images/logos/icon-twitter.svg';
import PinterestLogo from '@/images/logos/icon-pinterest.svg';
import InstagramLogo from '@/images/logos/icon-instagram.svg';
import creationsDataMobile from '@/data/creations';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-auto relative">
      <Image src={ImageHeroMobile} alt="hero image" />
      {/* Menu opened section */}
      <div
        className={`bg-black fixed top-0 right-0 w-full h-screen z-10 ${
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
      <nav className="flex absolute top-0 width-full justify-between items-center px-6 pt-10">
        <Image src={LoopStudioLogo} alt="loopstuido logo" />
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <div className="mx-6 absolute top-[227px] border-2">
        <h1 className="text-white p-6 font-josefinSans uppercase text-[40px] leading-[40px]">
          Immersive experiences that deliver
        </h1>
      </div>
      <div className="px-6 pt-24">
        <Image src={ImageInteractive} alt="VR image" />
        <div className="pt-12 text-center px-6">
          <h2 className="uppercase font-josefinSans text-[32px] leading-[32px] mb-4">
            The leader in interactive vr
          </h2>
          <p className="font-alata leading-6 text-[15px] text-textGrey">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className="px-6 pt-24 pb-24">
        <h2 className="uppercase text-center font-josefinSans text-[32px] leading-[32px] mb-4">
          Our creations
        </h2>
        <div className="pt-12">
          {creationsDataMobile.map(image => (
            <div className="relative mb-6 last:mb-0" key={image.text}>
              <Image src={image.image} alt={image.text} />
              <p className="absolute bottom-[20px] left-[20px] font-josefinSans uppercase text-white text-[24px] leading-6 w-[123px]">
                {image.text}
              </p>
            </div>
          ))}
        </div>
        <p className="w-fit mt-[34px] px-[38px] py-[7px] border border-black font-alata uppercase text-[14px] tracking-[5px] text-center mx-auto">
          See all
        </p>
      </div>
      <footer className="bg-black pb-[56px] flex flex-col items-center justify-center">
        <Image
          className="pt-[56px]"
          src={LoopStudioLogo}
          alt="loopstuido logo"
        />
        <div className="font-alata text-white text-center text-[15px] pt-[32px]">
          <p className="mb-4">About</p>
          <p className="mb-4">Carrers</p>
          <p className="mb-4">Events</p>
          <p className="mb-4">Products</p>
          <p>Support</p>
        </div>
        <div className="pt-[48px] flex">
          <Image className="mr-4" src={FacebookLogo} alt="Facebook" />
          <Image className="mr-4" src={TwitterLogo} alt="Twitter" />
          <Image className="mr-4" src={PinterestLogo} alt="Pinterest" />
          <Image src={InstagramLogo} alt="Instagram" />
        </div>
        <p className="pt-4 text-textGrey text-[15px] font-alata">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
