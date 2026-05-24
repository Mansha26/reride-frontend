import React, { useEffect, useState } from "react";
import InspectionCard from "../../components/Admin/InspectionCard";
import AdminNav from "../../components/Admin/AdminNav";


import {  FaMotorcycle } from "react-icons/fa6";

const Inspection = () => {
  const [data, setData] = useState([]);
  const url = `${import.meta.env.VITE_API_URL}`;

  const fetchData = () => {
    fetch(`${url}/bike/approvedAll`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((e) => console.log("error", e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="relative w-full ">
        <div className="absolute left-68 top-4 text-black">
          <p className="text-3xl font-semibold flex items-center gap-3">
            <FaMotorcycle />
            Hello Manager, Start the Inspection...
          </p>
        </div>
        <div className="absolute flex justify-start flex-wrap left-64 top-20">
          {data.map((bike, index) => (
            <InspectionCard bike={bike} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Inspection;