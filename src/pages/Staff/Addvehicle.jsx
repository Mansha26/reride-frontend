import React from "react";
import { useState, useEffect } from "react";
import StaffNav from "../../components/Staff/StaffNav";
import { FaBars } from "react-icons/fa";

function Addvehicle() {
  const [data, setdata] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    fetch("./src/data/vehicles.json")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      })
      .catch((err) => console.log(err));
  }
  const brands = Object.keys(data);
  const url = "http://localhost:8080/api/bike/add";
  // const today = new Date().toISOString().split("T")[0];
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const todayStr = today.toISOString().split("T")[0];
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  const colors = [
    "Black",
    "White",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Gray",
    "Silver",
    "Orange",
    "Purple",
    "Brown",
    "Gold",
  ];
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let y = currentYear; y >= 2006; y--) {
    years.push(y);
  }

  const [formData, setFormData] = useState({
    brand: "",
    type: "",
    model: "",
    year: "",
    color: "",
    purchaseDate: "",
    purchasedAmount: "",
    ownerType: "",
    registrationNumber: "",
    inspectionDate: "",
    inspectionBranch: "",
    customerName: "",
    mobile: "",
    email: "",
    photos: [],
  });

  function handleSubmit(e) {
    e.preventDefault();

    let vdata = new FormData();

    vdata.append("brand", formData.brand);
    vdata.append("type", formData.type);
    vdata.append("model", formData.model);
    vdata.append("modelYear", formData.year);
    vdata.append("color", formData.color);
    vdata.append("purchaseDate", formData.purchaseDate);
    vdata.append("PurchasedAmount", formData.purchasedAmount);
    vdata.append("ownerType", formData.ownerType);
    vdata.append("registrationNumber", formData.registrationNumber);
    vdata.append("inspectionDate", formData.inspectionDate);
    vdata.append("inspectionBranch", formData.inspectionBranch);

    vdata.append("customerName", formData.customerName);
    vdata.append("customerPhone", formData.mobile);
    vdata.append("customerEmail", formData.email);

    formData.photos.forEach((photo) => {
      vdata.append("images", photo);
    });

    fetch(url, {
      method: "POST",
      body: vdata,
    })
      .then((res) => {
        if (!res.ok) {
          alert("Try again");
          return;
        }
        alert("Vehicle added successfully");
        console.log(formData);
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedPhotos = [...formData.photos, ...files];

    if (updatedPhotos.length > 5) {
      alert("Maximum 5 photos allowed");
      return;
    }

    setFormData({
      ...formData,
      photos: updatedPhotos,
    });
  };

  const removePhoto = (index) => {
    const updatedPhotos = formData.photos.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      photos: updatedPhotos,
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

      <div className="flex min-h-screen ">
        <StaffNav isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex-1 md:ml-64 w-full md:p-10 p-4">
          <div className="w-full max-w-5xl mx-auto bg-white p-6 md:p-10 ">
            <h2 className="text-2xl font-bold text-center text-orange-600 mb-8">
              Vehicle Information Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Vehicle Information */}

              <div>
                <label className="block font-medium mb-1" htmlFor="brand">
                  Brand
                </label>

                <select
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">-- Select Brand --</option>

                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}

                  <option value="Other">Other</option>
                </select>

                {formData.brand === "Other" && (
                  <input
                    id="brandOther"
                    type="text"
                    name="brand"
                    placeholder="Enter Brand Name"
                    className="w-full border rounded-lg p-2 mt-2"
                    onChange={handleChange}
                  />
                )}
              </div>

              <div>
                <label className="block font-medium mb-1" htmlFor="type">
                  Type
                </label>

                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">-- Select Type --</option>
                  <option value="Bike">Bike</option>
                  <option value="Scooty">Scooty</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1" htmlFor="model">
                  Model
                </label>

                <input
                  id="model"
                  type="text"
                  name="model"
                  placeholder="e.g. Pulsar 150"
                  className="w-full border rounded-lg p-2"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block font-medium mb-1" htmlFor="year">
                  Model Year
                </label>

                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">-- Select Year --</option>

                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1" htmlFor="color">
                  Color
                </label>

                <select
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">-- Select Color --</option>

                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              {/* Purchase Details */}

              <h3 className="text-lg font-semibold pt-6">Purchase Details</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block font-medium mb-1"
                    htmlFor="purchaseDate"
                  >
                    Purchase Date
                  </label>

                  <input
                    id="purchaseDate"
                    type="date"
                    name="purchaseDate"
                    className="w-full border rounded-lg p-2"
                    onChange={handleChange}
                    max={yesterdayStr}
                  />
                </div>

                <div>
                  <label
                    className="block font-medium mb-1"
                    htmlFor="purchasedAmount"
                  >
                    Purchase Amount (₹)
                  </label>
                  <input
                    id="purchasedAmount"
                    type="number"
                    name="purchasedAmount"
                    placeholder="e.g. 60000"
                    className="w-full border rounded-lg p-2"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1" htmlFor="ownerType">
                  Owner Type
                </label>
                <select
                  id="ownerType"
                  name="ownerType"
                  className="w-full border rounded-lg p-2"
                  onChange={handleChange}
                >
                  <option value="">-- Select Owner Type --</option>
                  <option value="1st Owner">1st Owner</option>
                  <option value="2nd Owner">2nd Owner</option>
                  <option value="3rd Owner">3rd Owner</option>
                  <option value="4+ Owner">4+ Owner</option>
                </select>
              </div>

              <div>
                <label
                  className="block font-medium mb-1"
                  htmlFor="registrationNumber"
                >
                  Vehicle Registration Number
                </label>
                <input
                  id="registrationNumber"
                  type="text"
                  name="registrationNumber"
                  placeholder="e.g. KA 01 AB 1234"
                  className="w-full border rounded-lg p-2"
                  onChange={handleChange}
                />
              </div>

              {/* Upload Photos */}

              <div>
                <label className="block font-medium mb-1">
                  Upload Vehicle Photos (Max 5)
                </label>

                <label className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer inline-block">
                  Choose Files
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    disabled={formData.photos.length >= 5}
                  />
                </label>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="vehicle"
                        className="w-full h-24 object-cover rounded-lg"
                      />

                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <p className="text-sm mt-2 text-gray-600">
                  {formData.photos.length} files selected
                </p>
              </div>

              {/* Inspection Details */}

              <h3 className="text-lg font-semibold pt-6">Inspection Details</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block font-medium mb-1"
                    htmlFor="inspectionDate"
                  >
                    Inspection Date
                  </label>
                  <input
                    id="inspectionDate"
                    type="date"
                    name="inspectionDate"
                    className="w-full border rounded-lg p-2"
                    onChange={handleChange}
                    min={todayStr}
                  />
                </div>

                <div>
                  <label
                    className="block font-medium mb-1"
                    htmlFor="inspectionBranch"
                  >
                    Inspection Branch
                  </label>
                  <select
                    id="inspectionBranch"
                    name="inspectionBranch"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  >
                    <option>Jalahalli</option>
                    <option>City Center</option>
                    <option>Main Branch</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}

              <h3 className="text-lg font-semibold pt-6">
                Contact Information
              </h3>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <div>
                  <label
                    className="block font-medium mb-1"
                    htmlFor="customerName"
                  >
                    Customer Name
                  </label>
                  <input
                    id="customerName"
                    type="text"
                    name="customerName"
                    placeholder="Full Name"
                    autoComplete="name"
                    className="border rounded-lg p-2"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="mobile">
                    Mobile No
                  </label>
                  <input
                    id="mobile"
                    type="text"
                    name="mobile"
                    maxLength={10}
                    placeholder="Mobile Number"
                    autoComplete="tel"
                    className="border rounded-lg p-2"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    className="border rounded-lg p-2"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg"
                >
                  Submit Vehicle Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addvehicle;
