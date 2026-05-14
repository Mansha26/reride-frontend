import React, { useEffect } from "react";

const SoldStatusModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  useEffect(() => {
    console.log("Modal is opened");
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-100 relative">
        {children}
      </div>
    </div>
  );
};

export default SoldStatusModal;