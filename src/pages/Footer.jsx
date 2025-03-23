import React from 'react';  
import Ds from '../assets/D’s Coffee House.webp'

const Footer = () => {  
  return (  
    <footer className="bg-[#0B0C0D] text-white p-4 text-center overflow-x-hidden h-[333px] overflow-y-hidden ">  
    <div className='flex  py-[46px] text-[#BBB3B36E]'>
      <h1 className='text-4xl font-bold text-[#C9A14A] px-[116px]  max-w-lg'>D’s Coffee</h1> 
      <nav className='flex text-center '>
        <ul className='pr-[36px] pl-[107px]   '> 
           <li className='text-[#BBB3B3]'>Main</li>  
          <li>Buy</li>
          <li>More</li>
        </ul>
        <ul className='px-[36px]'> 
        <li className='text-[#BBB3B3] whitespace-nowrap'>Мы делаем </li>  
          <li>Прогрессы</li>
        </ul>
        <ul className='px-[36px]'> 
        <li className='text-[#BBB3B3]'>Продукты</li>  
          <li>Капучино</li>
          <li>Американо</li>
          <li>Латте</li>
        </ul>
        <ul className='px-[36px]'>
        <li className='text-[#BBB3B3]'>Events</li>  
          <li>Напитки</li>
          <li>Еда</li>
        </ul>
        <ul className='px-[36px] '>  
        <li className='text-[#BBB3B3]'>Contacts</li>  
          <li>Instagram</li>
          <li>Number</li>
        </ul>
      </nav>
    </div>

    <div className=' flex justify-between  '>
        <h1 className='py-[30px] text-[#C9A14A] px-[124px] text-2xl'>+7-999-999-99-99</h1>
        <h3 className='py-[30px] text-[#C9A14A] font-bold'>Made by K.Dastan </h3>
        <img src={Ds} alt="" className=" w-[70px] h-[70px] rounded-full pb-0 mr-[127px] "  />
      </div>
      
    </footer>  
  );  
};  

export default Footer;