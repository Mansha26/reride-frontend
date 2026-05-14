import React from "react";
import { Link } from "react-router";
import {
  FaUser,
  FaClipboardList,
  FaWrench,
  FaBicycle,
  FaPlus,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

function AdminNav({ isOpen, setIsOpen }){
    return (
        <>
          {/* Overlay (mobile) */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/40 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            ></div>
          )}
    
          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#e6ded3] border-r flex flex-col justify-between z-50
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0`}
          >
            {/* Top Section */}
            <div>
              {/* Logo + Close */}
              <div className="p-5 border-b border-orange-400 flex items-center justify-between">
                <h1 className="text-xl font-bold text-orange-600">Riderr</h1>
    
                <button
                  className="md:hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes size={20} />
                </button>
              </div>
    
              {/* Profile */}
              <div className="flex items-center gap-3 p-5 border-b border-orange-400">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <FaUser className="text-gray-700" />
                </div>
    
                <div>
                  <p className="font-medium">Welcome admin</p>
                  <p className="text-sm text-orange-600">ADMIN</p>
                </div>
              </div>
    
              {/* Menu */}
              <div className="p-5 space-y-6">
                <Link to="/admin/inspection" className="flex items-center gap-3 hover:text-orange-600">
                  <FaClipboardList />
                  <span>Inspection</span>
                </Link>
    
                <Link to="/admin/vehiclelist" className="flex items-center gap-3 hover:text-orange-600">
                  <FaWrench />
                  <span>Vehicle Listing</span>
                </Link>
    

              </div>
            </div>
    
            {/* Logout */}
            <div className="p-5 border-t border-orange-400">
              <Link
                to="#"
                className="flex items-center gap-3 text-orange-600 hover:text-orange-800"
              >
                <FaSignOutAlt />
                <span>Log Out</span>
              </Link>
            </div>
          </div>
        </>
      );
}

export default AdminNav