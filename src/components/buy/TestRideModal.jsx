import React from 'react'

const TestRideModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed -inset-3 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-100 relative">
        {children}
      </div>
    </div>
  );
}

export default TestRideModal