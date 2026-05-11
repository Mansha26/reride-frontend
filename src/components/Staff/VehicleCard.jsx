import React from 'react';
// Switched to react-icons which you already have installed in your project!
import { 
  FaArrowRight, 
  FaRegClock 
} from 'react-icons/fa';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="border border-indigo-50 text-white rounded-3xl w-full max-w-md mx-auto flex flex-col items-center shadow-2xl">
     
      {/* Large Central Vehicle Image */}
      <div className="m-2 flex justify-center bg-transparent">
        <img 
          src={vehicle.image} 
          alt={`${vehicle.brand} ${vehicle.model || vehicle.name}`} 
          className="max-h-45 w-auto rounded-lg object-contain drop-shadow-lg" 
        />
      </div> 
      {/* Header with Vehicle Name & Brand */}
      <div className="text-center mb-3">
        <h1 className="text-2xl text-gray-600 font-bold tracking-tighter">{vehicle.model || vehicle.name}</h1>
        
      </div>


      {/* Essential Vehicle Info Section */}
    
      <div className="w-70 space-y-3 bg-gray-600 p-2 rounded-t-xl border border-gray-700/50 text-gray-200">
          {/* Status Badge */}
          <div className="flex justify-end items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
            <span className="text-sm font-medium">Ready</span>
          </div>
          <p className="text-md font-medium">{vehicle.brand}</p>
          <p><strong>Registration:</strong> <span className="font-mono">{vehicle.regNo}</span></p>
        
        
        <p><strong>Customer:</strong> {vehicle.customer}</p>
        <div className="flex gap-2 text-gray-400 text-sm">
          <FaRegClock className="text-gray-950" />
          <span>Added: {vehicle.date}</span>
        </div>
      </div>

      {/* Swipe to Unlock / Start Inspection Button */}
      <button className="w-70 flex items-center bg-blue-200 text-black p-2 mb-4 rounded-b-2xl font-bold text-lg hover:bg-green-200 transition duration-300 shadow-xl overflow-hidden group">
        <div className="bg-blue-400 text-white p-4 rounded-full group-hover:bg-green-400 transition">
           <FaArrowRight className="w-6 h-6" />
        </div>
        <span className="flex-1 text-center"> Start Inspection</span>
      </button>

    </div>
  );
};

export default VehicleCard;