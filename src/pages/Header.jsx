import React from "react";
import Ds from '../assets/D’s Coffee House.webp'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#121517] text-white  flex   ">
      <div className="px-[130px] flex">
        <h1 className="text-4xl ml-4 text-[#C9A14A] py-[40px] font-bold">
        D’s Coffee House
        </h1>
        <nav className="flex py-[48px]  px-[93.49px] ">
          <ul className="flex space-x-4">
            <li className="px-[23px] text-[#D9D9D9] hover:text-white">
              <Link to="/">Главная</Link>
            </li>
            <li className="px-[23px] text-[#D9D9D9] hover:text-white">
              <Link to="/select">Выбрать</Link>
            </li>
            <li className="px-[23px] text-[#D9D9D9] hover:text-white">
              <Link to="/shop">Магазин</Link>
            </li>
          </ul>
        </nav>
      </div>
      <img src={Ds} alt="" className="w-[70px] h-[70px] rounded-full mt-[28px]"  />
    </header>
  );
};

export default Header;
