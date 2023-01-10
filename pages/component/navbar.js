import React, { useEffect, useState } from "react";
import { GiChewedSkull } from "react-icons/gi";
import { DataNavigation } from "../../datadummy/dumy";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaSwatchbook, FaHistory } from "react-icons/fa";
import { BsGearWide, BsBook } from "react-icons/bs";
const Navbar = () => {
  const [preview, setPreview] = useState(1);

  return (
    <div className="container px-0 md:px-20 h-16 text-xs bg-mud text-white flex items-center justify-center ">
      {DataNavigation.map((val) => {
        return (
          <div
            key={val.id}
            onClick={() => setPreview(val.id)}
            className={`flex items-center h-full px-2 md:px-10 cursor-pointer ${
              val.id === preview ? "border-b-4 border-white" : null
            }`}
          >
            {val.id === 1 ? (
              <MdOutlineMenuBook />
            ) : val.id === 2 ? (
              <FaSwatchbook />
            ) : val.id === 3 ? (
              <BsGearWide />
            ) : (
              <FaHistory />
            )}
            <p className="ml-2">{val.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
