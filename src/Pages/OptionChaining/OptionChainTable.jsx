import React from "react";
import { 
    flexRender,
    getCoreRowModel,  
    useReactTable
 } from "@tanstack/react-table";

const OptionChainTable = ({ columns, data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const getHeaderStyles = (header) => {
    let styles = "bg-[#E8EFFB] satoshi-font text-[14px] text-center border-b-[1px] py-[10px]"
      if(header.depth === 1){
        styles = '';
      }
      else if(!header.id.includes("strike")){
        styles = styles.concat(" ", 'border-[#99B8ED]');
      }
      else if(header.depth === 2 && header.id.includes("strike")){
        styles = styles.concat(" ", 'bg-[#EFE8FB] border-x-[1px]  border-[#D5BCFE] mx-[12px]');
      }
      return styles;
  }

  const getCellStyles = cell => {
    let styles = "py-[10px] text-center border-b-[1px]";
    if(cell.id.includes("strike")){
      styles =  styles.concat(" ", "bg-[#EFE8FB] border-x-[1px]  border-[#D5BCFE] mx-[12px]");
    }
    else if(cell.id.replace(/\D/g, '') <= 10 && cell.id.includes("call") || cell.id.replace(/\D/g, '') > 10 && cell.id.includes("put")) {
      styles = styles.concat(" ", "bg-[#FFFACD]  border-[#F8EB77]")
    }
    else{
      styles = styles.concat(" ", " border-[#E0E0E0]")
    }
    return styles
  }

  // console.log(table.getRowModel().rows.map(row => row.getVisibleCells().map(cell => cell)))

  return <>
    <table className="w-full">
        <thead>
        {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan} className={getHeaderStyles(header)}>
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
                <td key={cell.id} className={getCellStyles(cell)} >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
    </table>
  </>;
};

export default OptionChainTable;
