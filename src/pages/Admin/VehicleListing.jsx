import React, { useEffect, useState } from "react";
import AdminNav from "../../components/Admin/AdminNav";
import VehicleListCard from "../../components/Admin/VehicleListCard";

import { FaMotorcycle } from "react-icons/fa6";

const VehicleListing = () => {
  const [data, setData] = useState([]);

  const url = `${import.meta.env.VITE_API_URL}`;

  const fetchData = () => {
    fetch(`${url}/bike/acceptedAll`)
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
      <div className=" w-full ">
        <div className="absolute left-68 top-4 text-black">
          <p className="text-3xl font-semibold flex items-center gap-3">
            <FaMotorcycle />
            Vehicles in your list...
          </p>
        </div>
        <div className="absolute flex justify-start flex-wrap left-64 top-20">
          {data.map((bike, index) => (
            <VehicleListCard bike={bike} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VehicleListing;