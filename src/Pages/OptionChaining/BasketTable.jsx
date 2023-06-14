import React from 'react';

import { 
    flexRender,
    getCoreRowModel,  
    useReactTable
 } from "@tanstack/react-table";


const BasketTable = ({data, columns}) => {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });

      console.log(table.getRowModel().rows.map(row => row.getVisibleCells().map(cell => cell)))
    
  return (
    <table className="w-full">
    <thead>
    {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} colSpan={header.colSpan} className={`${ header.id.includes("Instrument") ? `pl-[22px]` : `` } satoshi-font text-[12px] text-start font-[400] py-[9px]`} >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} className={row.id.replace(/\D/g, '') % 2 === 0 ? "bg-[#F9F9F9]" : ""} >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className={`${ cell.id.includes("Instrument") ? `pl-[22px]` : `` } satoshi-font text-[12px] text-start font-[500] py-[9px]`} >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
</table>

  )
}

export default BasketTable