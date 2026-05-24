import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { toast } from "react-toastify";

import Input from "../../components/Admin/Input";

const EditVehicle = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_API_URL}`;

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    type: "",
    modelYear: "",
    color: "",
    registrationNumber: "",
    purchaseDate: "",
    PurchasedAmount: "",
    ownerType: "",
    inspectionBranch: "",
    inspectionDate: "",
    isVisible: "",
    Mileage: "",
    outLetPrice: "",
  });

  const fetchData = () => {
    fetch(`${url}/bike/findById?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          id: data.id,
          brand: data.brand,
          model: data.model,
          type: data.type,
          modelYear: data.modelYear,
          color: data.color,
          registrationNumber: data.registrationNumber,
          purchaseDate: data.purchaseDate,
          PurchasedAmount: data.PurchasedAmount,
          ownerType: data.ownerType,
          inspectionBranch: data.inspectionBranch,
          inspectionDate: data.inspectionDate,
          isVisible: data.isVisible,
          Mileage: data.Mileage,
          outLetPrice: data.outLetPrice,
        });
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("id",formData.id);
    data.append("brand", formData.brand);
    data.append("model", formData.model);
    data.append("type", formData.type);
    data.append("modelYear", formData.modelYear);
    data.append("color", formData.color);
    data.append("registrationNumber", formData.registrationNumber);
    data.append("purchaseDate", formData.purchaseDate);
    data.append("PurchasedAmount", formData.PurchasedAmount);
    data.append("ownerType", formData.ownerType);
    data.append("inspectionBranch", formData.inspectionBranch);
    data.append("inspectionDate", formData.inspectionDate);
    data.append("isVisible", formData.isVisible);
    data.append("Mileage", formData.Mileage);
    data.append("outLetPrice", formData.outLetPrice);

    fetch(`${url}/bike/manager/edit`,{
      method: "PUT",
      body: data
    })
    .then((res) => {
      if(!res.ok){
        toast.error("Editing is unsuccessful");
      }
      else{toast.success("Edited successfully");}
      res.json();
      fetchData();
    })
    .catch(e => console.log(e));
  };

  return (
    <>
      <div className=" bg-gray-100 flex items-center justify-center p-2">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-4">
        <Link
          to={`/admin/vehiclelist/${id}`}
          className="text-gray-600 text-sm flex items-center gap-1 hover:text-gray-800 transition-colors"
        >
          ← Back
        </Link>
      </div>
      </div>

      <div className=" bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Edit Vehicle Details</h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <Input
                label="Vehicle Brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Vehicle Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Vehicle Colour"
                name="color"
                value={formData.color}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Purchased Date"
                type="date"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Owner Type"
                name="ownerType"
                value={formData.ownerType}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Inspection Date"
                type="date"
                name="inspectionDate"
                value={formData.inspectionDate}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Mileage"
                name="Mileage"
                value={formData.Mileage}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
            </div>

            <div className="space-y-4">
              <Input
                label="Vehicle Model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Model Year"
                name="modelYear"
                value={formData.modelYear}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Registration Number"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Purchased Amount"
                name="PurchasedAmount"
                value={formData.PurchasedAmount}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
              <Input
                label="Inspection Branch"
                name="inspectionBranch"
                value={formData.inspectionBranch}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />

              <div>
                <label className="block text-sm font-medium mb-1">
                  Website Visibility
                </label>
                <select
                  name="isVisible"
                  value={formData.isVisible}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="true">VISIBLE</option>
                  <option value="false">HIDDEN</option>
                </select>
              </div>

              <Input
                label="Outlet Price"
                name="outLetPrice"
                value={formData.outLetPrice}
                onChange={handleChange}
                inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                labelClass="block text-sm font-medium mb-1"
              />
            </div>

            <div className="col-span-1 md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default EditVehicle;