import React from "react";
import { Heart, Star, CalendarDays, Gauge, Radar } from "lucide-react";

const BikeCardBuy = ({bike}) => {
  return (
    <>
      <div className="flex flex-col border-2 border-gray-300 rounded-xl bg-white w-75 m-2">
        <div className="flex justify-center items-center relative">
          <p className="absolute flex bg-white rounded-full right-1 top-1 p-1 opacity-60">
            <Heart size={18} />
          </p>

          <img
            src={bike.vehicle_image}
            alt={bike.vehicle_brand}
            className="w-full object-cover rounded-t-xl"
          />
        </div>

        <div className="p-2 flex flex-col justify-between">
          <div className="flex justify-between py-1">
            <div>
              <p className="text-md">{bike.vehicle_brand}</p>
              <p className="text-2xl font-semibold">{bike.vehicle_model}</p>
            </div>

            <p className="flex items-center gap-2 px-2 bg-yellow-100 rounded-xl h-fit">
              <Star size={16} className="text-yellow-500" />
              {bike.vehicle_rating}
            </p>
          </div>

          <div className="flex gap-3 py-1 text-gray-500">
            <p className="flex items-center gap-1 text-sm">
              <CalendarDays size={16} />
              {bike.vehicle_model_year}
            </p>

            <p className="flex items-center gap-1 text-sm">
              <Gauge size={16} />
              {bike.vehicle_mileage} km
            </p>

            <p className="flex items-center gap-1 text-sm">
              <Radar size={16} />
              {bike.vehicle_type}
            </p>
          </div>

          <div className="flex justify-between items-end py-2">
            <div>
              <p className="text-sm text-gray-500">Price :</p>
              <p className="text-3xl">₹{bike.vehicle_selling_price}</p>
            </div>

            <button className="px-5 h-12 border-2 border-black rounded-xl font-bold">
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeCardBuy;
