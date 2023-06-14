import React from "react";
import IndiciesOverview from "./IndiciesOverview";
import OptionChainTable from "./OptionChainTable";
import useFetch from "../../hooks/useFetch";

const OptionChainingPage = () => {
  const { data, loading } = useFetch("staticData.json");

  const columns = React.useMemo(() => [
    {
      // CALL Option
      header: "CALLS",  
      // Call columns
      columns: [
        {
          accessorKey: "callOption.OI Buildup",
          header: "OI Buildup",
        },
        {
          accessorKey: "callOption.IV",
          header: "IV",
        },
        {
          accessorKey: "callOption.OI",
          header: "OI",
        },
        {
          accessorKey: "callOption.Volume",
          header: "Volume",
        },
        {
          accessorKey: "callOption.Chng%",
          header: "Chng%",
        },
        {
          accessorKey: "callOption.LTP",
          header: "LTP",
        },
        {
          accessorKey: "callOption.Buy",
          header: "",
          cell: props => props.getValue() ? <img className="inline" src="Buy.png" />  : "",
        },
        {
          accessorKey: "callOption.Sell",
          header: "",
          cell: props => props.getValue() ? <img className="inline" src="Sell.png" />  : "",
        },
      ],
    },
    {
      header: "Strike",
      accessorKey: "strike"
    },
    {
      // Second group - Details
      header: "PUTS",
      // Second group columns
      columns: [
        {
          accessorKey: "putOption.Buy",
          header: "",
          cell: props => props.getValue() ? <img className="inline" src="Buy.png" />  : "",
        },
        {
          accessorKey: "putOption.Sell",
          header: "",
          cell: props => props.getValue() ? <img className="inline" src="Sell.png" />  : "",
        },
        {
          accessorKey: "putOption.LTP",
          header: "LTP",
        },
        {
          accessorKey: "putOption.Chng%",
          header: "Chng%",
        },
        {
          accessorKey: "putOption.Volume",
          header: "Volume",
        },
        {
          accessorKey: "putOption.OI",
          header: "OI",
        },
        {
          accessorKey: "putOption.IV",
          header: "IV",
        },
        {
          accessorKey: "putOption.OI Buildup",
          header: "OI Buildup",
        },
      ],
    },
  ]);

  if(loading) {
    return <p className="flex justify-center items-center">Loading... </p>
  }

  return (
    <div className="OptionChaining bg-[#FBFBFB] px-[88px]">
      <IndiciesOverview />
      {data && <OptionChainTable data={data} columns={columns} />}
    </div>
  );
};

export default OptionChainingPage;

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

// const columns = React.useMemo(() => [
//   columnHelper.accessor("callOption.OI Buildup", {
//     header: "OI Buildup",
//   }),
//   columnHelper.accessor("callOption.IV", {
//     // id: "2",
//     header: "IV"
//   }),
//   columnHelper.accessor("callOption.OI", {
//     // id: "3",
//     header: "OI"
//   }),
//   columnHelper.accessor("callOption.Volume", {
//     // id: "4",
//     header: "Volume"
//   }),
//   columnHelper.accessor("callOption.Chng%", {
//     // id: "5",
//     header: "Chng%"
//   }),
//   columnHelper.accessor("callOption.LTP", {
//     // id: "6",
//     header: "LTP"
//   }),
//   columnHelper.accessor("Strike", {
//     // id: "7",
//     header: "Strike"
//   }),
//   columnHelper.accessor("putOption.LTP", {
//     // id: "8",
//     header: "LTP"
//   }),
//   columnHelper.accessor("putOption.Chng%", {
//     // id: "9",
//     header: "Chng%"
//   }),
//   columnHelper.accessor("putOption.Volume", {
//     // id: "10",
//     header: "Volume"
//   }),
//   columnHelper.accessor("putOption.OI", {
//     // id: "11",
//     header: "OI"
//   }),
//   columnHelper.accessor("putOption.IV", {
//     // id: "12",
//     header: "IV"
//   }),
//   columnHelper.accessor("putOption.OI Buildup", {
//     // id: "13",
//     header: "OI Buildup"
//   })
// ], [columnHelper])
