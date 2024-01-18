import {ReactElement} from 'react';

interface IHamburger {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

function Hamburger({setIsOpen, isOpen}: IHamburger): ReactElement {
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="flex flex-col z-30">
      <div
        className={`h-0.5 w-6 mb-[5px] bg-white origin-center transition-all ease-in-out duration-300 ${
          isOpen ? 'rotate-45' : ''
        }`}
      />
      <div
        className={`h-0.5 w-6 mb-[5px] bg-white ${isOpen ? 'hidden' : 'block'}`}
      />
      <div
        className={`h-0.5 w-6 bg-white origin-center transition-all ease-in-out duration-300 ${
          isOpen ? '-rotate-45 absolute' : ''
        }`}
      />
    </div>
  );
}

export default Hamburger;
