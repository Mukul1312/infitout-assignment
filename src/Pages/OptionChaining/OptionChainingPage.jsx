import React, { useEffect } from 'react';
import IndiciesOverview from './IndiciesOverview';
import OptionChainTable from './OptionChainTable';

import {  createColumnHelper } from "@tanstack/react-table";


const OptionChainingPage = () => {
  const [data, setData] = React.useState([]);

  const columnHelper = createColumnHelper();


  const columns = React.useMemo(() => [
      columnHelper.accessor("OI Buildup", {
        id: "1",
        header: "OI Buildup",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("IV", {
        id: "2",
        header: "IV"
      }),
      columnHelper.accessor("OI", {
        id: "3",
        header: "OI"
      }),
      columnHelper.accessor("Volume", {
        id: "4",
        header: "Volume"
      }),
      columnHelper.accessor("Chng%", {
        id: "5",
        header: "Chng%"
      }),
      columnHelper.accessor("LTP", {
        id: "6",
        header: "LTP"
      }),
      columnHelper.accessor("Strike", {
        id: "7",
        header: "Strike"
      }),
      columnHelper.accessor("LTP", {
        id: "8",
        header: "LTP"
      }),
      columnHelper.accessor("Chng%", {
        id: "9",
        header: "Chng%"
      }),
      columnHelper.accessor("Volume", {
        id: "10",
        header: "Volume"
      }),
      columnHelper.accessor("OI", {
        id: "11",
        header: "OI"
      }),
      columnHelper.accessor("IV", {
        id: "12",
        header: "IV"
      }),
      columnHelper.accessor("OI Buildup", {
        id: "13",
        header: "OI Buildup"
      })
  ], [columnHelper])

  useEffect( () => async () => {
    const response = await fetch("staticData.json")
    const data = await response.json();
    setTimeout(() => {setData(data)}, 1000)

  }, [setTimeout])

  return (
    <div className="OptionChaining">
      <IndiciesOverview />
      {!data.length ? "Loading..." : <OptionChainTable data={data} columns={columns} /> }
    </div>
  )
}

export default OptionChainingPage


// [
//   columnHelper.accessor("firstName", {
//     cell: info => info.getValue(),
//     footer: info => info.column.id
//   }),
//   columnHelper.accessor(row => row.lastName, {
//     id: "lastName",
//     cell: info => <i>{info.getValue()}</i>,
//     header: () => <span>Last Name</span>,
//     footer: info => info.column.id
//   }),
//   columnHelper.accessor("age", {
//     header: () => "Age",
//     cell: info => info.renderValue(),
//     footer: info => info.column.id
//   }),
//   columnHelper.accessor("visits", {
//     header: () => <span>Visits</span>,
//     footer: info => info.column.id
//   }),
//   columnHelper.accessor("status", {
//     header: "Status",
//     footer: info => info.column.id
//   }),
//   columnHelper.accessor("progress", {
//     header: "Profile Progress",
//     footer: info => info.column.id
//   })
// ]


// (
//   () => [
//     {
//       // CALL Option
//       Header: "CALLS",
//       // Call columns
//       columns: [
//         {
//           Header: "OI Buildup",
//           accessor: "show[OI Buildup]",
//         },
//         {
//           Header: "IV",
//           accessor: "show.IV",
//         },
//         {
//           Header: "OI",
//           accessor: "show.OI",
//         },
//         {
//           Header: "Volume",
//           accessor: "show.Volume",
//         },
//         {
//           Header: "Chng%",
//           accessor: "show.Chng%",
//         },
//         {
//           Header: "LTP",
//           accessor: "show.LTP",
//         }
//       ],
//     },
//     {
//       // Second group - Details
//       Header: "PUTS",
//       // Second group columns
//       columns: [
//         {
//           Header: "LTP",
//           accessor: "show.LTP",
//         },
//         {
//           Header: "Chng%",
//           accessor: "show.Chng%",
//         },
//         {
//           Header: "Volume",
//           accessor: "show.Volume",
//         },
//         {
//           Header: "OI",
//           accessor: "show.OI",
//         },
//         {
//           Header: "IV",
//           accessor: "show.IV",
//         },
//         {
//           Header: "OI Buildup",
//           accessor: "show[OI Buildup]",
//         },
//       ],
//     },
//   ],
//   []
// );
