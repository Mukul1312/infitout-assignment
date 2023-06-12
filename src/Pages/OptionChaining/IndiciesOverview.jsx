import React from "react";
import Modal from "../../components/Modal";
import BasketModalContent from "./BasketModalContent";
import FilterModalContent from "./FilterModalContent";


const optionIndicator = [
  {
    indicatorType: "Max pain",
    image: null,
    value: "18,200",
  },
  {
    indicatorType: "PCR",
    image: null,
    value: "0.92",
  },
  {
    indicatorType: "Support 1",
    image: "ArrowSelect.png",
    value: "18100",
  },
  {
    indicatorType: "Resistance 1",
    image: "ArrowSelect.png",
    value: "18500",
  },
];


const IndiciesOverview = () => {
  const [isBasketModalOpen, setIsBasketModalOpen] = React.useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);

  return (
    <div className="pt-[32px] px-[3rem] flex items-start justify-around">
      <InputElement label={"Scrip"} options={"NIFTY"} />
      <InputElement label={"Exp"} options={"18 May 2023"} />
      <Prize typeOfPrice={"Spot"} points={"18,245.3"} change={"0.35%"} />
      <Prize typeOfPrice={"Fut"} points={"18,251.1"} change={"0.35%"} />
      {
        optionIndicator.map(indicator => 
          <div key={indicator.indicatorType}>
            {indicator.image ? <span className="indices m-0 p-0  text-[10px] font-medium" > {indicator.indicatorType} </span>  : <p className="indices text-[10px] font-medium"> {indicator.indicatorType} </p>}
            <p className="points text-[14px] font-medium"> {indicator.value} </p>
          </div>
        )
      }
      <div>
        <div className="">
          <img className="inline-block" src={"Configure.png"} />
          <span onClick={() => setIsFilterModalOpen(true)} className="mr-[27px]">Filters</span>
          <Modal handleClose={() => setIsFilterModalOpen(false)} isOpen={isFilterModalOpen} modalHeight="306px" modalWidth="265px">
            <FilterModalContent handleClose={() => setIsFilterModalOpen(false)} />
          </Modal>
          <button onClick={() => setIsBasketModalOpen(true)} className="rounded-none bg-[#2C57F5] w-[105px] h-[30px] text-white">Basket</button>
          <Modal handleClose={() => setIsBasketModalOpen(false)} isOpen={isBasketModalOpen} modalHeight="382px" modalWidth="618px">
            <BasketModalContent handleClose={() => setIsBasketModalOpen(false)} />
          </Modal>
        </div>
        <div className="mt-[23px]">
          <button className="rounded-md bg-[#2C57F5] w-[80px] h-[30px] mr-[8px] text-white">LTP</button>
          <button className="rounded-md bg-[#E1E1E1] w-[80px] h-[30px]">Greeks</button>
        </div>
      </div>
    </div>
  );
};

export default IndiciesOverview;

const InputElement = ({ label, options }) => {
  return (
    <div className="w-[135px] h-[36px] relative mr-[12px]">
      <span className="absolute -top-[8px] left-[30%] bg-[#fff] p-x-0 p-y-[8px] font-medium text-[#8F8F8F] text-[10px] -translate-x-1/2 ">
        {label}
      </span>
      <select className="w-full h-full bg-white border-[1px] border-[#c2c2c2] satoshi-font text-[14px]">
        <option value="option1">{options}</option>
        {/* <option value="option2">NIFT</option>
      <option value="option3">Option 3</option> */}
      </select>
    </div>
  );
};

const Prize = ({ typeOfPrice, points, change }) => {
  return (
    <div className="">
      <p className="indices text-[10px] font-medium text-start">
        {typeOfPrice}
      </p>
      <span className="points text-[14px] font-medium">{points}</span>
      <span className="change text-[10px] font-medium">{change}</span>
    </div>
  );
};
