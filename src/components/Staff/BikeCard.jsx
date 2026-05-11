import { React, useEffect, useState } from "react";
import {
  Heart,
  Star,
  CalendarDays,
  Gauge,
  Radar,
  Motorbike,
  Palette,
  User,
  MoveLeft,
  MoveRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const BikeCard = ({ bike }) => {
  const url = "http://localhost:8080";

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % bike.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? bike.images.length - 1 : prev - 1));
  };

  const updateStatus = (id , status) => {
    let data = new FormData();
    // let APPROVED = "APPROVED";
    data.append("id", id);
    data.append("status", status);
    try {
      fetch(`${url}/api/bike/status`, {
        method: "PUT",
        body: data,
      })
        .then((res) => {
          if (!res.ok) {
            alert("failed to update");
            return;
          }
          res.json();
          console.log("bike ",status);
        })
        .catch((e) => console.log("error: ", e));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("bike card");
  },[]);

  return (
    <>
      <div className="flex flex-row border-2 border-gray-300 rounded-xl bg-white w-240 h-fit m-2">
        <div className="flex flex-col justify-center items-center relative w-3/5 p-2">
          <div className="w-full h-100 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            {bike.images.map((img, index) => (
              <img
                key={index}
                src={`${url}/${img}`}
                className={`thumb ${currentIndex === index ? "active min-h-full min-w-full object-contain" : "hidden"}`}
                onClick={() => setCurrentIndex(index)}
                alt="thumb"
              />
            ))}
          </div>
          <div className="flex gap-4 justify-end p-2 absolute bottom-2">
            <button onClick={prevImage}>
              <MoveLeft className="bg-gray-200 p-1 rounded-sm" size={20} />
            </button>
            <p>
              {currentIndex + 1} / {bike.images.length}
            </p>
            <button onClick={nextImage}>
              <MoveRight className="bg-gray-200 p-1 rounded-sm" size={20} />
            </button>
          </div>
        </div>

        <div className="p-2 flex gap-5 flex-col justify-between w-2/5">
          <div className="flex flex-col justify-between my-1">
            <div className="flex justify-between">
              <p className="text-2xl">{bike.brand}</p>
              <p className="flex items-center gap-2 px-2 bg-gray-100 rounded-xl h-fit">
                {bike.modelYear}
              </p>
            </div>
            <p className="text-5xl font-semibold ">{bike.model}</p>
          </div>

          <div className="flex flex-col  my-1 text-gray-500">
            <p className="flex gap-3 justify-start items-center">
              <Motorbike className="bg-gray-200 p-1 rounded-sm" size={20} />{" "}
              Registration Number :{" "}
              <span className="font-semibold text-black">
                {" "}
                {bike.registrationNumber}
              </span>{" "}
            </p>
            <p className="flex gap-3 justify-start items-center">
              <Palette className="bg-gray-200 p-1 rounded-sm" size={20} /> Color
              :{" "}
              <span className="font-semibold text-black">
                {" "}
                {bike.color}
              </span>{" "}
            </p>
            <p className="flex gap-3 justify-start items-center">
              <CalendarDays className="bg-gray-200 p-1 rounded-sm" size={20} />{" "}
              Purchase Date :{" "}
              <span className="font-semibold text-black">
                {" "}
                {bike.purchaseDate}
              </span>{" "}
            </p>
            <p className="flex gap-3 justify-start items-center">
              <User className="bg-gray-200 p-1 rounded-sm" size={20} /> Owner
              Type :{" "}
              <span className="font-semibold text-black">
                {" "}
                {bike.ownerType}
              </span>
            </p>
          </div>

          <div className="flex flex-col  my-1 text-gray-500">
            <div className="flex gap-3">
              <User className="bg-gray-200 p-1 rounded-sm mt-1" size={20} />
              <div>
                <p className="text-gray-500 text-sm">Customer Name</p>
                <p className="font-semibold text-black wrap-break-word">
                  {bike.customerName}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="bg-gray-200 p-1 rounded-sm mt-1" size={20} />
              <div>
                <p className="text-gray-500 text-sm">Customer Email</p>
                <p className="font-semibold text-black wrap-break-word">
                  {bike.customerEmail}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="bg-gray-200 p-1 rounded-sm mt-1" size={20} />
              <div>
                <p className="text-gray-500 text-sm">Customer Phone</p>
                <p className="font-semibold text-black wrap-break-word">
                  {bike.customerPhone}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col  my-1 text-gray-500">
            <p className="flex gap-3 justify-start items-center">
              <CalendarDays className="bg-gray-200 p-1 rounded-sm" size={20} />{" "}
              Requested Date
              <span className="font-semibold text-black">
                {" "}
                {bike.inspectionDate}
              </span>
            </p>
            <p className="flex gap-3 justify-start items-center">
              <MapPin className="bg-gray-200 p-1 rounded-sm" size={20} />{" "}
              Location
              <span className="font-semibold text-black">
                {" "}
                {bike.inspectionBranch}
              </span>
            </p>
          </div>

          <div className="flex justify-between items-end py-2">
            <div>
              <p className="text-sm text-gray-500">Price :</p>
              <p className="text-xl">₹{bike.PurchasedAmount}</p>
            </div>

            <div className="flex gap-2">
              <button
              onClick={() => {updateStatus(bike.id,"APPROVED")}}
               className="px-5 h-12 border-2 border-black rounded-xl font-bold bg-green-200">
                Approve
              </button>
              <button 
              onClick={() => {updateStatus(bike.id,"REJECTED")}}
              className="px-5 h-12 border-2 border-black rounded-xl font-bold bg-red-200">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeCard;
