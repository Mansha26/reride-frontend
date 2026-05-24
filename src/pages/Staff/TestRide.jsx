import React, { useEffect, useState } from "react";
import TestRideCard from "../../components/Staff/TestRideCard";
import StaffNav from "../../components/Staff/StaffNav";
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";

const TestRide = () => {
  const [rides, setRides] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const url = `${import.meta.env.VITE_API_URL}/api/test-ride/staff/pending`;

  const fetchRides = () => {
    fetch(`${url}`)
      .then((res) => {
        if (!res.ok) {toast.error("Failed to fetch");}
        return res.json();
      })
      .then((data) => {
        setRides(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-[#e6ded3] border-b">
        <h1 className="text-lg font-bold text-orange-600">Riderr</h1>

        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={22} />
        </button>
      </div>
      <div className="flex min-h-screen ">
        <StaffNav isOpen={isOpen} setIsOpen={setIsOpen}/>

        <div className="p-4 sm:p-6  bg-gray-100   md:ml-64 w-full md:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            Test Ride Requests
          </h1>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rides.map((ride) => (
              <TestRideCard
                key={ride.id}
                ride={ride}
                onUpdate={(updatedRide) => {
                  setRides((prev) =>
                    prev.filter((r) => r.id !== updatedRide.id),
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestRide;