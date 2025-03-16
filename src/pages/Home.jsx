import React from "react";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import CookProgress from "../assets/CookProgress.png";
import Poligon1 from "../assets/Polygon 1.png";
import Ds from "../assets/caffeDS.jpg";
import { Link } from "react-router-dom";
import Americano from "../assets/Americano.webp";
import Coffe from "../assets/Coffe.jpg";

const Home = () => {
  return (
    <section className="bg-[#121517] text-white px-[130px]  ">
      {/* {Header} */}
      <div className="flex items-center">
        <div className="py-[105px] max-w-lg ">
          <h1 className="text-7xl font-bold ">Новое Кафе</h1>
          <span className="text-[#C9A14A] text-7xl font-bold">
            D’s Coffee House
          </span>
          <div className="py-[54px]">
            <p className="">Успейте купить самые горячие напитки в </p>
            <span>новой кафе D’s Coffee House и не забудьте про скидку!</span>
          </div>
          <div className="rounded-full flex justify-between py-[54px]">
            <Button
              sx={{ borderRadius: "82px", bgcolor: "#C9A14A" }}
              variant="contained"
              color="success"
              className="w-[222px] font- h-[52px]  "
            >
              <Link to="/select">Выбрать Кофе</Link>
            </Button>
            <Button
              sx={{
                borderRadius: "82px",
                borderColor: "#DADADA",
                color: "#DADADA",
              }}
              variant="outlined"
              className="w-[122px]  h-[52px] "
              onClick={() =>
                window.open(
                  "https://about.starbucks.com/backtostarbucks/?utm_source=stripe&utm_medium=homepage&utm_campaign=backtostarbucks"
                )
              }
            >
              Подробнее
            </Button>
          </div>
        </div>
        <div></div>

        <img
          src={Americano}
          alt=""
          className="w-[500px] w-1/2 flex justify-end mx-[155px] py-[54px]"
        />
      </div>

      <div className="flex justify-between max-w-lg py-[54px] font-bold">
        <div className="text-xl ">
          <h2 className="text-5xl text-[#C9A14A]">9k+</h2>
          <p className="">Премиум </p>
          <span>Пользователи</span>
        </div>
        <div className="text-xl">
          <h2 className="text-5xl text-[#C9A14A]">2k+</h2>
          <p className="">Счастливый </p>
          <span>Клиент</span>
        </div>
        <div className="text-xl">
          <h2 className="text-5xl text-[#C9A14A]">28k+</h2>
          <p className="">Награды </p>
          <span>Победителя</span>
        </div>
      </div>

      <div className="text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Tasty Block */}
          <div className="bg-[#C9A14A] w-[300px] h-[300px] text-black rounded-full p-6 shadow-lg flex flex-col items-center">
            <div
              className=" flex items-center justify-center rounded-full"
              style={{ backgroundColor: "white" }}
            >
              <img
                src="https://img.freepik.com/premium-vector/best-coffee-icon_1186366-103472.jpg"
                alt="Heart Icon"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <h3 className=" text-3xl  font-bold mt-4">Tasty</h3>
            <p className="text-center mt-2">
              We have the most delicious coffee
            </p>
          </div>

          {/* Fast Block */}
          <div className="bg-[#C9A14A]  w-[300px] h-[300px] text-black rounded-full p-6 shadow-lg flex flex-col items-center">
            <div
              className=" flex items-center justify-center rounded-full"
              style={{ backgroundColor: "white" }}
            >
              <img
                src="https://media.lordicon.com/icons/wired/gradient/489-rocket-space.svg"
                alt="Rocket Icon"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <h3 className=" text-3xl  font-bold mt-4">Fast</h3>
            <p className="text-center mt-2">Our cafe will serve you quickly</p>
          </div>

          {/* Available Block */}
          <div className="bg-[#C9A14A]  w-[300px] h-[300px] text-black rounded-full p-6 shadow-lg flex flex-col items-center">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ backgroundColor: "white" }}
            >
              <img
                src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png"
                alt="Wallet Icon"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <h3 className="text-3xl  font-bold mt-4">Available</h3>
            <p className="text-center mt-2">
              Cafe will serve at the most pleasant prices
            </p>
          </div>
        </div>
      </div>

      {/* {About} */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#121517] text-white px-10 py-16 space-y-10 lg:space-y-0">
        <img src={Coffe} alt="" className="w-[700px] h-[780px]" />

        <div className="flex flex-col items-start text-white space-y-4 max-w-md">
          <h2 className="text-7xl font-bold leading-tight ">
            Мы делаем <span className="text-[#C9A14A]">деликотесы</span>
          </h2>
          <p className="text-gray-300 text-lg py-[63px] font-bold">
            Только в 2021 году мы сделали более 100 000 заказов для вас, ваших
            близких, всех вас, а в 2022 году мы готовы уничтожить рынок
          </p>

          <div className="relative w-full max-w-sm py-[63px] ">
            <img
              src={CookProgress}
              alt="Cooking Process"
              className="rounded-lg shadow-lg w-[447px] h-[275px]"
            />
            <Button
              variant="contained"
              disableElevation
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#C9A14A",
                "&:hover": { bgcolor: "#4B2E1A" },
                color: "white",
                fontWeight: "bold",
                minWidth: "326px",
                minHeight: "75px",
                borderRadius: "82px",
              }}
              className="text-2xl "
              onClick={() => window.open("https://youtu.be/o86p0cKwjUw")}
            >
              <img src={Poligon1} alt="" className="block mx-4" />
              Процесс приготовления
            </Button>
          </div>
        </div>
      </div>

      {/* Contacts */}
      <div className="py-[148px] flex justify-between">
        <div>
          <div className="max-w-lg">
            <div className="flex flex-col">
              <span className="text-8xl font-bold">Наши</span>
              <span className="text-[#C9A14A] text-8xl  font-bold">
                Контакты
              </span>
            </div>
            <p className="flex flex-col py-[52px] font-bold text-2xl">
              <span>Успейте купить самые горячие </span>
              <span>напитки в новый кофе D’s Coffee House и </span>
              <span>не забудьте про скидку!</span>
            </p>
          </div>

          <div className="max-w-lg font-bold ">
            <div className="flex mt-[56px] ">
              <InstagramIcon style={{color:"#C9A14A", width:"40px", height:"40px"}}/>
              <h2 className="text-3xl">@dastancoffeehouse</h2>
            </div>
            <div className="flex mt-[28px]  ">
              <PhoneIcon style={{color:"#C9A14A", width:"40px", height:"40px"  }}  />
              <h2 className="text-3xl">+7-999-999-99-99</h2>
            </div>
          </div>
        </div>
        <img src={Ds} alt="" className="w-[700px]" />
      </div>
    </section>
  );
};

export default Home;
