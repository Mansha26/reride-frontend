import React, { useEffect, useState } from "react";
import { FaUserPlus, FaEdit, FaTrash, FaUser, FaBars } from "react-icons/fa";
import SuperAdminNav from "../../components/SuperAdmin/SuperAdminNav";
import { toast } from "react-toastify";
import UserForm from "../../components/Admin/UserForm";
import { useParams } from "react-router";
import { Link } from "react-router";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const {branchId} = useParams();

  const url = `${import.meta.env.VITE_API_URL}/user`;
  // Fetch users
  const fetchUsers = () => {
    fetch(`${url}/branch/${branchId}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) => {console.log(e);
        toast.error('Failed to fetch users')
      });
  };

  // const fetchUsers = () => {
  // let endpoint = "";

  // if (role === "SUPERADMIN") {
  //   endpoint = `${url}/managers`; // only managers
  // } else {
  //   endpoint = `${url}/branch/${branchId}`; // all users in branch
  // }


  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  function deleteUser(id) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    fetch(`${url}/delete/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete user");
        return res.text();
      })
      .then(() => {
        toast.success("User deleted successfully");

        //UI update
        setUsers((prev) => prev.filter((u) => u.id !== id));
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }

  // Open Add
  function openAddModal() {
    setMode("add");
    setSelectedUser(null);
    setIsModalOpen(true);
  }

  // Open Edit
  function editUser(user) {
    setMode("edit");
    setSelectedUser(user);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-[#e6ded3] border-b">
        <h1 className="text-lg font-bold text-orange-600">Riderr</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={22} /> 
        </button>
      </div>

      <SuperAdminNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* { role=== "SUPERADMIN" &&<SuperAdminNav isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      

      <div className="p-4 sm:p-6 bg-gray-100 min-h-screen flex-1 md:ml-64 md:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-semibold text-orange-500 flex items-center gap-2">
            <FaUser /> Manage Users
          </h1>

          <button
            onClick={openAddModal}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-600"
          >
            <FaUserPlus /> Add Employee
          </button>
        </div>
        <div className="py-5">
          <Link
            to="/branches"
            className="text-gray-600 text-lg flex items-center gap-1 hover:text-gray-800 transition-colors"
          >
            ← Back
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-orange-100">
              <tr>
                <th className="p-4">Id</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Role</th>
                <th className="p-4">Actions</th>
                
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{user.id} </td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.phone}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.role === "MANAGER"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="p-4 flex gap-4">
                    <button
                      onClick={() => editUser(user)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <UserForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={mode}
        data={selectedUser}
        onSuccess={fetchUsers}
        BranchId={branchId}
      />
    </>
  );
};

export default ManageUsers;