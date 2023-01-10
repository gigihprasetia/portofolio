import React, { useMemo, useState } from "react";
import Navbar from "./component/navbar";
import SideContent from "./component/sideContent";

const index = () => {
  return (
    <div className="bg-realBlack h-screen text-white">
      <Navbar />
      <SideContent />
    </div>
  );
};

export default index;
