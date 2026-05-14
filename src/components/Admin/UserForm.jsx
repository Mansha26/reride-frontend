import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiX } from "react-icons/fi";

function UserForm({ isOpen, onClose, mode, data, onSuccess, BranchId }) {
  const url = `${import.meta.env.VITE_API_URL}/user`;

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    BranchId:""
  });

  // Prefill (edit)
  useEffect(() => {
    if (mode === "edit" && data) {
      setFormData({
        id: data.id,
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        role: data.role || "",
        password: "",
      });
    }
  }, [mode, data]);

  // Reset (add)
  useEffect(() => {
    if (mode === "add" && isOpen) {
      setFormData({
        id: "",
        name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
      });
    }
  }, [mode,isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    const endpoint =
      mode === "add" ? `${url}/add` : `${url}/update/${formData.id}`;

    const method = mode === "add" ? "POST" : "PUT";

    const payload = {
      ...formData,
      branch: BranchId,
    };

    //remove empty password in edit
    // if (mode === "edit" && !payload.password) {
    //   delete payload.password;
    // }

    fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.text();
          throw new Error(err || "Request failed");
        }
        return res.json();
      })
      .then(() => {
        toast.success(
          mode === "add"
            ? "Employee added successfully"
            : "Employee updated successfully",
        );

        onSuccess();
        onClose();
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] sm:w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-orange-500 text-xl font-semibold">
            {mode === "add" ? "Add Employee" : "Edit Employee"}
          </h2>

          <button onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mb-3"
          />

            <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            maxLength={10}
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mb-3"
          />

            <label htmlFor="role">Role</label>
           <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mb-3"
          >
            <option value="">Select Role</option>
            <option value="STAFF">STAFF</option>
            <option value="MANAGER">MANAGER</option>
          </select>
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mb-3"
          />

            <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mb-4"
          />

          <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            {mode === "add" ? "Add Employee" : "Update Employee"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;