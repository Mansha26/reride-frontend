import React, { useEffect, useState } from "react";
import { FaUserPlus, FaEdit, FaTrash, FaUser, FaBars } from "react-icons/fa";
import { FiPlus, FiSearch } from "react-icons/fi";
import SuperAdminNav from "../../components/SuperAdmin/SuperAdminNav";
import BranchCard from "../../components/SuperAdmin/BranchCard";
import BranchForm from "../../components/SuperAdmin/BranchForm";
import { toast } from "react-toastify";

function Branches() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const url = `${import.meta.env.VITE_API_URL}/branch`;
  const [branches, setBranches] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [mode, setMode] = useState("add");

  //Fetch all branches
  // const fetchBranches = () => {
  //   fetch(`${url}/all`)
  //     .then((res) => res.json())
  //     .then((data) => setBranches(data))
  //     .catch((e) => console.log(e));
  // };

  const fetchBranches = (keyword = "") => {
    const endpoint = keyword.trim()
      ? `${url}/search?keyword=${encodeURIComponent(keyword)}`
      : `${url}/all`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setBranches(data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchBranches(search);
    }, 500); // debounce to avoid continuous calls

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this branch?")) return;

    fetch(`${url}/delete/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete branch");
        return res.text();
      })
      .then(() => {
        setBranches((prev) => prev.filter((b) => b.id !== id));
        // fetchBranches();
        toast.success("Branch deleted successfully");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-[#e6ded3] border-b">
        <h1 className="text-lg font-bold text-orange-600">Riderr</h1>

        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={22} />
        </button>
      </div>
      <SuperAdminNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="p-4 sm:p-6 bg-gray-100 min-h-screen flex-1 md:ml-64 md:p-10">
        <p className="text-orange-400 text-3xl font-semibold pb-10">
          Manage Branches
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
          {/* Add Branch Button */}
          <button
            onClick={() => {
              setMode("add");
              setSelectedBranch(null);
              setShowModal(true);
            }}
            className="flex items-center justify-center gap-2 
            bg-orange-500 hover:bg-orange-600 text-white 
            px-3 py-2 sm:px-5 sm:py-2.5 
            text-sm sm:text-base 
            rounded-lg shadow-md transition w-full sm:w-auto"
          >
            <FiPlus className="text-base sm:text-lg" />
            <span className="sm:inline">Add Branch</span>
          </button>

          {/*  Search Bar */}
          <div className="relative w-full sm:w-80">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />

            <input
              type="text"
              placeholder="Search branches..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 
              py-2 sm:py-2.5 
              text-sm sm:text-base 
              border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>
        <div>
          {branches.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              onEdit={(b) => {
                setSelectedBranch(b);
                setMode("edit");
                setShowModal(true);
              }}
              onDelete={handleDelete}
            />
          ))}
        </div>
        <BranchForm
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setMode("add"); // reset
            setSelectedBranch(null);
          }}
          onSuccess={fetchBranches}
          mode={mode}
          data={selectedBranch}
        />
      </div>
    </>
  );
}

export default Branches;