import React from 'react'

const StockIndices = ({indices ,points, change}) => {
  return (
    <div className='Stock__Indices me-[22px] mt-[10px] mb-[9px]'>
        <p className="indices text-[10px] font-medium text-end">{ indices }</p>
        <span className='change text-[10px] font-medium'>{ change }</span>
        <span className='points text-[19px] font-medium'>{ points }</span>
    </div>
  )
}

export default StockIndices
