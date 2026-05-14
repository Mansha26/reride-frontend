import React, { useEffect, Li } from "react";
import { Heart, Star, CalendarDays, Gauge, Radar } from "lucide-react";

const VehicleListCard = ({ bike }) => {
  const url = `${import.meta.env.VITE_API_URL}`;

  const viewBikeById = (id) => {
    window.location.href = `/admin/vehiclelist/${id}`;
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="flex flex-col border-2 border-gray-300 rounded-xl bg-white w-100 m-2">
        <div className="flex justify-center items-center relative h-60 overflow-hidden p-2">
          <img
            src={`${url}/${bike.images[0]}`}
            alt="bike image"
            className="w-full object-cover rounded-t-xl"
          />
        </div>

        <div className="p-2 flex flex-col justify-between">
          <div className="flex justify-start gap-3 items-center py-1 text-2xl">
            <p>{bike.brand}</p>
            <p className="font-semibold">{bike.model}</p>
          </div>

          <div className="flex gap-3 py-1 text-gray-500">
            <p className="flex items-center text-sm">{bike.modelYear}</p>
            <p>•</p>
            <p className="flex items-center text-sm">{bike.color}</p>
            <p>•</p>
            <p className="flex items-center text-sm">{bike.type}</p>
          </div>

          <div className="flex flex-col py-2 gap-3">
            <div>
              <p className="text-sm text-gray-500">Registration Number :</p>
              <p className="text-md">{bike.registrationNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Branch :</p>
              <p className="text-md">{bike.inspectionBranch}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date :</p>
              <p className="text-md">{bike.inspectionDate}</p>
            </div>

            <button
              onClick={() => {
                viewBikeById(bike.id);
              }}
              className="px-5 h-12 rounded-xl font-bold bg-blue-600 text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleListCard;