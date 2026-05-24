import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { toast } from "react-toastify";

import { BsPersonFill } from "react-icons/bs";
import { FaLocationDot, FaMotorcycle } from "react-icons/fa6";
import { FaCalendarDay, FaRegEye } from "react-icons/fa";
import { GrDocumentStore } from "react-icons/gr";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BiHide } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

import HideVehicleModal from "../../components/Admin/HideVehicleModal";
import SoldStatusModal from "../../components/Admin/SoldStatusModal";
import Input from "../../components/Admin/Input";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ViewVehicleById = () => {
  const { id } = useParams();

  const url = `${import.meta.env.VITE_API_URL}`;
  const [data, setData] = useState([]);
  const [openHideModal, setOpenHideModal] = useState(false);
  const [openSoldModal, setOpenSoldModal] = useState(false);
  const [soldFormData, setSoldFormData] = useState({
    availability: "SOLD",
    soldDate: "",
    sellingPrice: "",
    customerName: "",
    phone: "",
    documents: "",
  });

  const fetchAllDetails = () => {
    fetch(`${url}/api/inspection/report/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setSoldFormData({
          availability: "SOLD",
          soldDate: data.vehicleId.SoldDate,
          sellingPrice: data.vehicleId.SellingPrice,
          customerName: data.vehicleId.customerName,
          phone: data.vehicleId.customerPhNo,
          documents: data.vehicleId.documentsGiven,
        });
      })
      .catch((e) => console.log(e));
  };

  const hideVehicle = () => {
    let payload = new FormData();
    payload.append("id", id);
    payload.append("isVisible", false);

    fetch(`${url}/bike/visibility`, {
      method: "PUT",
      body: payload,
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Visibility update unsuccesful");
          return;
        }
        setOpenHideModal(false);
        toast.info("Visibility have been updated");
        fetchAllDetails();
      })
      .catch((e) => console.log(e));
  };

  const unHideVehicle = () => {
    let payload = new FormData();
    payload.append("id", id);
    payload.append("isVisible", true);

    fetch(`${url}/bike/visibility`, {
      method: "PUT",
      body: payload,
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Visibility update unsuccesful");
          return;
        }
        setOpenHideModal(false);
        toast.info("Visibility have been updated");
        fetchAllDetails();
      })
      .catch((e) => console.log(e));
  };

  const editVehicle = () => {
    window.location.href = `/admin/editvehicle/${id}`;
  };

  const handleChangeSold = (e) => {
    const { name, value } = e.target;
    setSoldFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitSold = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("id", id);
    data.append("Availability", soldFormData.availability);
    data.append("SoldDate", soldFormData.soldDate);
    data.append("sellingPrice", soldFormData.sellingPrice);
    data.append("customerName", soldFormData.customerName);
    data.append("customerPhone", soldFormData.phone);
    data.append("documentsGiven", soldFormData.documents);

    fetch(`${url}/bike/manager/soldUpdates`, {
      method: "PUT",
      body: data,
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to mark as sold");
          return;
        }
        res.json();
        toast.success("Marked as sold");
        setOpenSoldModal(false);
        fetchAllDetails();
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchAllDetails();
  }, [openSoldModal]);

  const inspectionFields = [
    {
      label1: "vehicle AirFilter Condition",
      key1: "AirFilter",
      label2: "vehicle Body Condition",
      key2: "Body",
      label3: "vehicle Battery Condition",
      key3: "Battery",
    },
    {
      label1: "vehicle Tyre Condition",
      key1: "Tyre",
      label2: "vehicle Brake Condition",
      key2: "Brake",
      label3: "vehicle Damage Condition",
      key3: "Damage",
    },
    {
      label1: "vehicle Engine Condition",
      key1: "Engine",
      label2: "vehicle Exhaust Condition",
      key2: "Exhaust",
      label3: "vehicle Seat Condition",
      key3: "Seat",
    },
    {
      label1: "vehicle Handle Condition",
      key1: "Handles",
      label2: "vehicle Gear Condition",
      key2: "Gear",
      label3: "vehicle Light Condition",
      key3: "Light",
    },
    {
      label1: "vehicle Modification Condition",
      key1: "Modification",
      label2: "vehicle Seat Condition",
      key2: "Seat",
      label3: "vehicle MeterBoard Condition",
      key3: "MeterBoard",
    },
    {
      label1: "vehicle ShockAbsorber Condition",
      key1: "ShockAbsorber",
      label2: "vehicle Wheel Condition",
      key2: "Wheel",
      label3: "vehicle Overall",
      key3: "OK",
    },
  ];

  const vehicleFields = [
    {
      label1: "vehicl Id",
      key1: "id",
      label2: "vehicle Brand",
      key2: "Brand",
      label3: "vehicle Model",
      key3: "Model",
    },
    {
      label1: "vehicl Colour",
      key1: "Colour",
      label2: "vehicle Model Year",
      key2: "ModelYear",
      label3: "vehicle Owner Type",
      key3: "OwnerType",
    },
    {
      label1: "vehicl Purchased Amount",
      key1: "PurchasedAmount",
      label2: "vehicle Purchased Date",
      key2: "PurchasedDate",
      label3: "vehicle Register Number",
      key3: "RegisterNumber",
    },
    {
      label1: "vehicl Type",
      key1: "Type",
      label2: "vehicle Inspection Branch",
      key2: "inspectionBranch",
      label3: "vehicle Visibility",
      key3: "isVisible",
    },
    {
      label1: "vehicl Mileage",
      key1: "Mileage",
      label2: "vehicle OutLet Price",
      key2: "OutLetPrice",
      label3: "vehicle Availability",
      key3: "Availability",
    },
    {
      label1: "vehicl Documents Given",
      key1: "documentsGiven",
      label2: "vehicle Status",
      key2: "status",
      label3: "vehicle Rating",
      key3: "Rating",
    },
    {
      label1: "vehicl Inspection Branch",
      key1: "inspectionBranch",
      label2: "vehicle Selling Price",
      key2: "SellingPrice",
      label3: "vehicle Sold Date",
      key3: "SoldDate",
    },
  ];

  const formatValue = (value) => {
    if (value == null) return "N/A";

    switch (typeof value) {
      case "boolean":
        return value ? "Yes" : "No";

      case "number":
        return value;

      case "string":
        return value || "N/A";

      default:
        return value;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <div>
            <Link
              to="/admin/vehiclelist"
              className="text-gray-600 text-sm flex items-center gap-1 hover:text-gray-800 transition-colors"
            >
              ← Back
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-indigo-600 px-5 py-4 flex items-center justify-between">
              <h1 className="text-white text-xl font-bold">
                {data?.vehicleId?.Brand}{" "}
                {data?.vehicleId?.Model || "TVS Jupiter"}
              </h1>
              <span className="bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {data?.vehicleId?.RegisterNumber || "KA 03 AC 4321"}
              </span>
            </div>

            <div className="px-5 py-5 grid grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 text-indigo-500">
                  <BsPersonFill />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Customer
                  </p>
                  <p className="text-sm font-medium text-gray-800 mt-0.5">
                    {data?.vehicleId?.customerName || "xyz"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {data?.vehicleId?.customerPhNo || "8787879990"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 text-indigo-500">
                  <FaCalendarDay />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Scheduled
                  </p>
                  <p className="text-sm font-medium text-gray-800 mt-0.5">
                    {data?.vehicleId?.InspectionDate || "Mar 26, 2026"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 text-red-500">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-sm font-medium text-gray-800 mt-0.5">
                    {data?.vehicleId?.branchId || "bengaluru"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="text-indigo-500">
                <FaMotorcycle />
              </div>
              <h2 className="text-base font-semibold text-gray-800">
                {data?.vehicleId?.Brand} &nbsp; {data?.vehicleId?.Model}
              </h2>
            </div>
            <div className="w-full h-87.5">
              <div className="w-full h-full bg-blue-100 rounded-xl overflow-hidden">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {data?.vehicleId?.imagePath.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`${url}/${img.filePath}`}
                        className="w-full h-full object-cover"
                        alt="vehicle image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="text-indigo-500">
                <GrDocumentStore />
              </div>
              <h2 className="text-base font-semibold text-gray-800">
                Vehicle Details
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {vehicleFields.map((field, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      {field.label1}
                    </label>
                    <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50 min-h-9">
                      {formatValue(data?.vehicleId?.[field.key1])}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      {field.label2}
                    </label>
                    <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50 min-h-9">
                      {formatValue(data?.vehicleId?.[field.key2])}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      {field.label3}
                    </label>
                    <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50 min-h-9">
                      {formatValue(data?.vehicleId?.[field.key3])}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="text-indigo-500">
                <RiGitRepositoryFill />
              </div>
              <h2 className="text-base font-semibold text-gray-800">
                Vehicle Inspection Report
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {inspectionFields.map((field, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      {field.label1}
                    </label>
                    <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50 min-h-9">
                      {formatValue(data?.[field.key1])}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      {field.label2}
                    </label>
                    <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50 min-h-9">
                      {formatValue(data?.[field.key2])}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      {field.label3}
                    </label>
                    <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50 min-h-9">
                      {formatValue(data?.[field.key3])}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-evenly">
            <button
              type="button"
              onClick={() => {
                editVehicle();
              }}
              className="px-3 bg-yellow-500 hover:bg-yellow-700 active:bg-yellow-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm tracking-wide shadow-sm"
            >
              Edit Vehicle
            </button>

            {data?.vehicleId?.isVisible == true ? (
              <>
                <button
                  type="button"
                  onClick={() => setOpenHideModal(true)}
                  className="px-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm tracking-wide shadow-sm"
                >
                  Hide the Vehicle
                </button>

                <HideVehicleModal
                  isOpen={openHideModal}
                  onClose={() => setOpenHideModal(false)}
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <p>Hide Vehicle ?</p>
                    </div>
                    <div>
                      <p>
                        Are you sure you want to hide this vehicle on the
                        website?
                      </p>
                    </div>
                    <div className="flex justify-evenly">
                      <button
                        onClick={() => setOpenHideModal(false)}
                        className="border-2 border-gray-400 px-3 py-1 rounded-xl"
                      >
                        ✖ Close
                      </button>
                      <button
                        onClick={() => hideVehicle()}
                        className="border-2 border-gray-400 px-3 py-1 rounded-xl"
                      >
                        {" "}
                        <p className="flex items-center gap-2 text-xl">
                          {" "}
                          <BiHide />
                          Hide{" "}
                        </p>
                      </button>
                    </div>
                  </div>
                </HideVehicleModal>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setOpenHideModal(true)}
                  className="px-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm tracking-wide shadow-sm"
                >
                  Unhide the Vehicle
                </button>

                <HideVehicleModal
                  isOpen={openHideModal}
                  onClose={() => setOpenHideModal(false)}
                >
                  <div className="flex flex-col gap-5">
                    <div>
                      <p>Hide Vehicle ?</p>
                    </div>
                    <div>
                      <p>
                        Are you sure you want to hide this vehicle on the
                        website?
                      </p>
                    </div>
                    <div className="flex justify-evenly">
                      <button
                        onClick={() => setOpenHideModal(false)}
                        className="border-2 border-gray-400 px-3 py-1 rounded-xl"
                      >
                        ✖ Close
                      </button>
                      <button
                        onClick={() => unHideVehicle()}
                        className="border-2 border-gray-400 px-3 py-1 rounded-xl"
                      >
                        {" "}
                        <p className="flex items-center gap-2 text-xl">
                          {" "}
                          <FaRegEye />
                          Unhide{" "}
                        </p>
                      </button>
                    </div>
                  </div>
                </HideVehicleModal>
              </>
            )}

            {data?.vehicleId?.Availability != "SOLD" ? (
              <button
                type="button"
                onClick={() => setOpenSoldModal(true)}
                className="px-3 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm tracking-wide shadow-sm"
              >
                Mark As Sold
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setOpenSoldModal(true)}
                className="px-3 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm tracking-wide shadow-sm"
              >
                Edit Sold Details
              </button>
            )}

            <SoldStatusModal
              isOpen={openSoldModal}
              onClose={() => setOpenSoldModal(false)}
            >
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white w-full max-w-3xl rounded-2xl p-8 relative shadow-xl">
                  <button
                    onClick={() => setOpenSoldModal(false)}
                    className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-green-600 text-xl">✔</span>
                    <h2 className="text-2xl font-semibold">Mark As Sold</h2>
                  </div>

                  <form
                    onSubmit={handleSubmitSold}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-4">
                      <Input
                        label="Vehicle Availability"
                        name="availability"
                        value={soldFormData.availability}
                        onChange={handleChangeSold}
                        inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
                        labelClass="block text-sm font-medium mb-1"
                        disabled
                      />

                      <Input
                        label="Customer Name"
                        name="customerName"
                        placeholder="Enter customer name"
                        value={soldFormData.customerName}
                        onChange={handleChangeSold}
                        inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
                        labelClass="block text-sm font-medium mb-1"
                      />

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Documents Given
                        </label>
                        <select
                          name="documents"
                          value={soldFormData.documents}
                          onChange={handleChangeSold}
                          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
                        >
                          <option value="">-- Select Option --</option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Input
                        label="Vehicle Sold Date"
                        type="date"
                        name="soldDate"
                        value={soldFormData.soldDate}
                        onChange={handleChangeSold}
                        inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
                        labelClass="block text-sm font-medium mb-1"
                      />

                      <Input
                        label="Vehicle Selling Price"
                        name="sellingPrice"
                        placeholder="Enter selling price"
                        value={soldFormData.sellingPrice}
                        onChange={handleChangeSold}
                        inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
                        labelClass="block text-sm font-medium mb-1"
                      />

                      <Input
                        label="Customer Phone Number"
                        name="phone"
                        placeholder="Enter phone number"
                        value={soldFormData.phone}
                        onChange={handleChangeSold}
                        inputClass="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
                        labelClass="block text-sm font-medium mb-1"
                      />
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-4">
                      <button
                        type="submit"
                        className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </SoldStatusModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewVehicleById;