import React, { useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
const SideNav = () => {

  return (
    <nav className="flex h-[900px] w-[256px] flex-col items-center justify-between  py-12 shadow-inner">
      <div className="flex flex-col gap-[24px] ">
        <h1 className="font-[Ubuntu] text-xl text-purple-700">
          @Do some coding
        </h1>

        <div className="flex flex-col gap-1">
          <Link
            to="/Dashboard"
            className="flex h-[42]  w-[232px] items-center gap-3 rounded bg-[#EEEEF4]"
          >
            <MdDashboard /> Dashboard
          </Link>
          <Link
            className="flex h-[42]  w-[232px] items-center gap-4 rounded "
            to="Transaction"
          >
            <GrTransaction />
            Transaction{" "}
          </Link>
        </div>
      </div>
      <Link
        to="Services"
        className="flex h-[42]  w-[232px] items-center gap-4 rounded"
      >
        <BiSupport />
        Support
      </Link>
    </nav>
  );
};

export default SideNav;
