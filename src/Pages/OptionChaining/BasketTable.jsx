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
            <th key={header.id} colSpan={header.colSpan} className={""}>
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
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className={""} >
            Hi
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