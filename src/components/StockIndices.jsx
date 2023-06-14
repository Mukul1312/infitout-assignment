import React from 'react'

const StockIndices = ({indices ,points, change}) => {
  return (
    <div className='Stock__Indices me-[22px] mt-[10px] mb-[9px] flex flex-col items-end '>
        <p className="satoshi-font text-[#4A4A4A] text-[10px] font-medium text-end">{ indices }</p>
        <div>
          <span className={`${change.includes("-") ? "text-red-500" : "text-green-500"} change text-[10px] font-medium pr-[8px] `}>{ change }</span>
          <span className='points text-[14px] font-medium'>{ points }</span>
        </div>
    </div>
  )
}

export default StockIndices
