import React from "react";

function Table(props) {
  const { head, data } = props;

  return (
    <table className="relative z-10 text-white w-full text-start border-collapse table-auto bg-black/70">
      <thead>
        <tr>
          {/* Render the first column with wider width */}
          <th className="bg-gray-800 border-2 px-4 py-2 w-1/3">{head[0]}</th>
          {/* Render the remaining columns with smaller width */}
          {head.slice(1).map((item, index) => (
            <th key={index} className="bg-gray-800 border-2 px-4 py-2 w-1/6">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Map over the data array to render table rows */}
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* Render the first column with wider width */}
            <td className="border px-4 py-2 w-1/3">{row[0]}</td>
            {/* Render the remaining columns with smaller width */}
            {row.slice(1).map((item, columnIndex) => (
              <td key={columnIndex} className="border px-4 py-2 w-1/6">
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
