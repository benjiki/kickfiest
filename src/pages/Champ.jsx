import React from "react";
import Navigation from "../components/Navigation";
import Table from "../components/Table";
function Champ(props) {
  const tableHead = [
    "Players",
    "total lost comptition",
    "total won comptition",
    "total comptition",
  ];
  const tableData = [
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
    ["Natan", "2", "10", "12"],
  ];

  return (
    <div className="w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/champ.jpg")` }}
      ></div>
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />
        {/* Table */}
        <div className="w-full h-auto  p-8 flex items-center ">
          <div className="w-[70%] ml-[15%]">
            {/* Pass table head and data as props to the Table component */}
            <Table head={tableHead} data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Champ;
