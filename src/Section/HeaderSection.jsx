import React from 'react';
import StockIndices from '../components/StockIndices';

const HeaderSection = () => {
  const headerTabs = ["Dashboard", "Option Chain", "Strategy builder", "Positions", "Order book"];

  return (
    <div className="header flex relative">
      <div className="logo ms-[52px] mt-[13px] mb-[9px]"><img src={"./tracktrades.png"} /></div>
      <div className="header__tabs ms-[64px] mt-[17px] mb-[16px]">
        {headerTabs.map(tab => <span className='me-[22px]' key={tab}>{tab}</span>)}
      </div>
      <div className='flex ms-[113px]'>
        <StockIndices indices={"NIFTY"} points={"18,245.32"} change={"0.35%"} />
        <StockIndices indices={"BANKNIFTY"} points={"39,156.1"} change={"0.7%"} />
        <StockIndices indices={"INDIA VIX"} points={"12.12"} change={"-10.9%"} />
      </div>
      <div className='profile__dropdown absolute end-[53px] top-[15px]'>
        <span>Profile</span>
        <img className='inline' src="./Forward.png" />
      </div>
    </div>
  )
}

export default HeaderSection