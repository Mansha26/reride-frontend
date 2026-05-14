import React, { useEffect } from 'react'

const HideVehicleModal = ({ isOpen, onClose, children}) => {

    if (!isOpen) return null;

    useEffect(() => {
        console.log("Modal is opened");
    },[]);

  return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
      
      <div className="bg-white p-6 rounded-xl shadow-lg w-100 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        {children}
      </div>

    </div>
  )
}

export default HideVehicleModal