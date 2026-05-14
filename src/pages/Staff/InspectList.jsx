import React, { useEffect, useState } from "react";

import StaffNav from "../../components/Staff/StaffNav";
import InspectCard from "../../components/Staff/InspectCard";

import {  FaMotorcycle } from "react-icons/fa6";

const InspectList = () => {
  const url = `${import.meta.env.VITE_API_URL}`;

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`${url}/bike/draftAll`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StaffNav />
      <div className="relative w-full">
        <div className="absolute left-68 top-4 text-black">
          <p className="text-3xl font-semibold flex items-center gap-3">
            <FaMotorcycle />
            Hello Staff, here is the list of approved for inspection....
          </p>
        </div>
        <div className="absolute flex justify-center flex-wrap bg-gray-100 left-64 top-20">
          {data.map((bike, index) => (
            <InspectCard bike={bike} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InspectList;