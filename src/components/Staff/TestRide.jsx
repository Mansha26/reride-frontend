// import { FiMail, FiPhone } from "react-icons/fi";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { LuClock } from "react-icons/lu";
// import { FiMapPin } from "react-icons/fi";
// import { toast } from "react-toastify";

// const TestRideCard = ({ ride, onUpdate }) => {
//   const url = `${import.meta.env.VITE_API_URL}/api/test-ride/staff/update-status`;

//   function handleSubmit(id) {
//     fetch(`${url}?testRideId=${id}&status=COMPLETED`, {
//       method: "POST",
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed");
//         return res.json();
//       })
//       .then((data) => {
//         toast.success("Status updated successfully");

    
//         onUpdate && onUpdate(data);
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error("Try again");
//       });
//   }
//   const imageUrl = ride.vehicle?.imagePath?.[0]?.filePath
//     ? `${import.meta.env.VITE_API_URL}/${ride.vehicle.imagePath[0].filePath.replace(/\\/g, "/")}`
//     : "/placeholder.jpg";

//   return (
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
//       {/* IMAGE */}
//       <div className="relative h-48 bg-gray-400">
//         <img
//           src={imageUrl}
//           alt={ride.vehicle?.Model || "vehicle"}
//           className="w-full h-full object-cover"
//         />
//         <p className="absolute bottom-2 left-3 text-white font-semibold text-sm">
//           {ride.vehicle.Brand} • {ride.vehicle.Model}
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="p-4 space-y-3">
//         <h3 className="text-lg font-semibold text-gray-800">
//           {ride.customerName}
//         </h3>

//         <div className="text-gray-600 text-sm space-y-2">
//           <p className="flex items-center gap-2">
//             <FiMail /> {ride.customerEmail}
//           </p>

//           <p className="flex items-center gap-2">
//             <FiPhone /> {ride.customerPhone}
//           </p>

//           <div className="flex justify-between">
//             <p className="flex items-center gap-2">
//               <FaRegCalendarAlt /> {ride.requestedDate}
//             </p>

//             {/* <p className="flex items-center gap-2">
//               <LuClock /> {ride.time}
//             </p> */}
//           </div>

//           <p className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
//             <FiMapPin /> Branch: {ride.branch?.name}
//           </p>
//         </div>

//         {/* STATUS */}
//         <button
//           onClick={() => handleSubmit(ride.id)}
//           className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold"
//         >
//           Completed
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestRideCard;