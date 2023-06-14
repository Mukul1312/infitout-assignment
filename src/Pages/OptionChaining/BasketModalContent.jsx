import React from "react";
import useFetch from "../../hooks/useFetch";
import BasketTable from "./BasketTable";

const basketData = [
  {
    indicator: "Max profit",
    value: "24,000/-",
  },
  {
    indicator: "Max loss",
    value: "Unlimited",
  },
  {
    indicator: "Risk:Reward",
    value: "NA",
  },
  {
    indicator: "Probability",
    value: "32%",
  },
  {
    indicator: "Breakeven",
    value: "> 38124.2",
  },
];


const BasketModalContent = ({ handleClose }) => {
    const { data, loading } = useFetch("BasketStaticData.json");

    const columns = React.useMemo(() => [
      {
        accessorKey: "Instrument",
        header: "Instrument",
        // id: "Instrument",
      },
      {
        accessorKey: "B/S",
        header: "B/S",
        cell: props => <img className="inline" src={props.getValue().includes("Buy") ? "BuyBlue.png"  : "SellPink.png"} />,
      },
      {
        accessorKey: "Type",
        header: "Type",
        cell: props => <img className="inline" src={props.getValue().includes("MIS") ? "MIS.png"  : "NRML.png"} />,
        // id: "Type",
      },
      {
        accessorKey: "Qty",
        header: "Qty",
        cell: props => <input placeholder={props.getValue()} type="number" className="placeholder:text-black placeholder:font-[500] w-[60px] h-[20px] border-[1px] border-[#D9D9D9]" />
        // id: "Qty",
      },
      {
        accessorKey: "Price",
        header: "Price",
        cell: props => <input placeholder={props.getValue()} type="number" className="placeholder:text-black placeholder:font-[500] w-[60px] h-[20px] border-[1px] border-[#D9D9D9]" />

        // id: "Price",
      },
      {
        accessorKey: "Trigger",
        header: "Trigger",
        cell: <input type="number"  className="w-[60px] h-[20px] border-[1px] border-[#D9D9D9] " />
        // id: "Trigger",
      },
      {
        accessorKey: "SL",
        header: "",
        cell: <img className="inline" src="SL.png" />
        // id: "SL",
      },
      {
        accessorKey: "Tgt",
        header: "",
        cell: <img className="inline" src="Tgt.png" />
        // id: "Tgt",
      },
      {
        accessorKey: "delete",
        header: "",
        cell: <img className="inline" src="Delete.png" />
      }
    ])
    

  return (
    <div className="">
      <div className="flex justify-around items-center bg-[#2C57F5] h-[58px] ">
        {basketData.map((factor) => (
          <div key={factor.indicator}>
            <p className="text-white text-[12px] playfair-font  ">
              {" "}
              {factor.indicator}{" "}
            </p>
            <p className="text-white text-[12px] satoshi-font ">
              {" "}
              {factor.value}{" "}
            </p>
          </div>
        ))}
      </div>
      <div className="h-[260px]">
        {loading ? <p className="flex justify-center items-center">Loading...</p> : <BasketTable columns={columns} data={data} />}
      </div>
      <div className="flex items-center h-[64px] border-t-[1px] border-[#D3D3D3]">
        <div className="ms-[20px]">
          <div>
            <span className="playfair-font text-[12px] font-[400]">
              Margin required:
            </span>
            <span className="satoshi-font text-[12px] ms-[9px]">
              ₹ 2,43,630.3
            </span>
          </div>
          <div>
            <span className="playfair-font text-[12px]">Available funds:</span>
            <span className="satoshi-font text-[12px] ms-[16px]">
              ₹ 12,00,000,00
            </span>
          </div>
        </div>
        <button className="rounded-none bg-[#FFD700] w-[106px] h-[29px] ms-[22px] ">
          <img className="inline" src={"Circle_Actions_Close.png"} />
          <span className="text-[12px]">Auto hedge</span>
        </button>
        <button
          onClick={() => handleClose()}
          className="rounded-none border-[#2C57F5] border-[1px] w-[97px] h-[29px] ms-[63px]"
        >
          <span className="text-[#2C57F5] text-[12px] ">Close Basket</span>
        </button>
        <button className="rounded-none bg-[#2C57F5] w-[97px] h-[29px] text-white ms-[11px] text-[12px] ">
          Place Order
        </button>
      </div>
    </div>
  );
};
export default BasketModalContent;
