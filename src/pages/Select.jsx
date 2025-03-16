import React from "react";
import { Button } from "@mui/material";
import Capucino from '../assets/Capucino.jpg'
import Americano1 from '../assets/Americano.jpg'
import Latte from '../assets/Latte.webp';


const Select = () => {
  const handleSelectClick = (drinkName) => {
    alert(`Вы выбрали: ${drinkName}`);
  };
  return (
    <section className="container mx-auto px-4 py-10 bg-[#121517]">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#C9A14A]">Лучшие кофе</h1>
        <p className="text-white text-2xl mt-2">Выбирайте любимый напиток и наслаждайтесь вкусом!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
        <div className="h-[680px] bg-[#121517] shadow-lg rounded-xl border-3 border-[#C9A14A] p-4 text-center items-center ">
          <div className=" h-[300px] bg-[#121517] rounded-lg mb-4 "> <img src={Capucino} alt="" className="px-[60px]" /> </div>
          <h2 className="text-3xl text-[#FFFFFF] font-semibold">Капучино</h2>
          <p className="text-2xl text-[#D9D9D9] py-[50px]">Наше кафе обслужит вас быстро.</p>
          <div className="flex  ">
            <p className="text-[#D9D9D9] px-[88px] px-[35px] font-bold text-3xl">400 сом </p>
             <span className="text-2xl text-[#D9D9D9]">330 мл</span>
          </div>
          
          <Button variant="contained" color="success"  onClick={() => handleSelectClick("Капучино")} className=" w-[186px] h-[54.069766998291016px]" sx={{borderRadius:"59.72px", bgcolor: "#C9A14A", mt: "30px"}}>Выбрать</Button>
        </div>
        <div className="h-[680px] border-3 border-[#C9A14A] bg-[#121517] shadow-lg rounded-xl p-4 text-center items-center ">
          <div className=" h-[300px] bg-[#121517] rounded-lg mb-4 "> <img src={Americano1} alt="" className="px-[60px]" /> </div>
          <h2 className="text-3xl text-[#FFFFFF] font-semibold">Американо</h2>
          <p className="text-2xl text-[#D9D9D9] py-[50px]">Наше кафе обслужит вас быстро.</p>
          <div className="flex  ">
            <p className="text-[#D9D9D9] px-[88px] px-[35px] font-bold text-3xl">400 сом </p>
             <span className="text-2xl text-[#D9D9D9]">330 мл</span>
          </div>
          
          <Button variant="contained" color="success"  onClick={() => handleSelectClick("Американо")} className=" w-[186px] h-[54.069766998291016px]" sx={{borderRadius:"59.72px", bgcolor: "#C9A14A", mt: "30px"}}>Выбрать</Button>
        </div>
        <div className="h-[680px] border-3 border-[#C9A14A] bg-[#121517] shadow-lg rounded-xl p-4 text-center items-center ">
          <div className=" h-[300px] bg-[#121517] rounded-lg mb-4 "> <img src={Latte} alt="" className="px-[60px]" /> </div>
          <h2 className="text-3xl text-[#FFFFFF] font-semibold">Латте</h2>
          <p className="text-[#D9D9D9] text-2xl py-[50px]">Наше кафе обслужит вас быстро.</p>
          <div className="flex  ">
            <p className="text-[#D9D9D9] px-[88px] px-[35px] font-bold text-3xl">400 сом </p>
             <span className="text-2xl text-[#D9D9D9]">330 мл</span>
          </div>
          
          <Button variant="contained" color="success"  onClick={() => handleSelectClick("Латте")} className=" w-[186px] h-[54.069766998291016px]" sx={{borderRadius:"59.72px", bgcolor: "#C9A14A", mt: "30px"}}>Выбрать</Button>
        </div>
        
      </div>
    </section>
  );
};

export default Select;