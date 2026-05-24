import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { toast } from "react-toastify";

import { IoCalendarSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import BookNowModal from "../../components/buy/BookNowModal";
import TestRideModal from "../../components/buy/TestRideModal";
import ConfirmBookModal from "../../components/buy/ConfirmBookModal";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ViewBike = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [openBookNow, setOpenBookNow] = useState(false);
  const [bookConfirm, setBookConfirm] = useState(false);
  const [openTestRide, setOpenTestRide] = useState(false);
  const [bookForm, setBookForm] = useState({
    name: "",
    mobile: "",
    email: "",
    date: "",
    time: "",
  });
  const [testForm, setTestForm] = useState({
    name: "",
  });

  const url = `${import.meta.env.VITE_API_URL}`;

  const fetchData = () => {
    fetch(`${url}/bike/findById?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => console.log(e));
  };

  const handleChange = (e) =>
    setTestForm({ ...testForm, [e.target.name]: e.target.value });

  const handleChangeBook = (e) =>
    setBookForm({ ...bookForm, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(testForm);
    setOpenTestRide(false);
  };

  const handleSubmitTest = () => {
    const testData = new FormData();
    testData.append("vehicleId", id);
    testData.append("branchId", 2);
    testData.append("customerName", testForm.name);
    testData.append("customerPhone", testForm.mobile);
    testData.append("customerEmail", testForm.email);
    testData.append("requestedDate", testForm.date);

    fetch(`${url}/api/test-ride/request`, {
      method: "POST",
      body: testData
    })
    .then((res) => {
      if(!res.ok){
        toast.error("Failed to Boook Test");
        return;
      }

      res.json();
      toast.success("Test ride Booking Confirmed");
    })
    .catch(e => console.log(e));

    console.log(testForm);
    setOpenTestRide(false);
  };

  const handleSubmitBook = () => {
    setOpenBookNow(false);
    setBookConfirm(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav />

      <div className="w-full bg-[#f6f3f1] py-6">
        <div className=" bg-[#f6f3f1] flex items-center justify-center">
          <div className="bg-transparent rounded-2xl w-full max-w-6xl p-1 pb-4">
            <Link
              to={`/buy`}
              className="text-gray-600 text-sm flex items-center gap-1 hover:text-gray-800 transition-colors"
            >
              ← Back
            </Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex gap-6">
          <div className="flex-1 space-y-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm ">
              <div className="space-y-2 mb-4">
                <p className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 inline-block rounded-full">
                  Riderrr Certified
                </p>
                <p className="text-3xl font-bold text-blue-900">
                  {data.brand} {data.model}
                </p>
              </div>

              <div className="rounded-xl overflow-hidden">
                <div className="w-192.5 h-100 bg-blue-200">
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
                    {data?.images?.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={`${url}/${img}`}
                          className="w-full h-full object-cover"
                          alt="vehicle image"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  Vehicle Details
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-900 text-white rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase opacity-80">
                      Registration Number
                    </p>
                    <p className="text-xl font-bold mt-1">
                      {data.registrationNumber}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs opacity-80">Vehicle Type</p>
                    <p className="font-semibold">{data.type}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <p className="text-sm">
                      <IoCalendarSharp />
                    </p>
                    <p className="text-xs text-gray-500">Model Year</p>
                    <p className="font-semibold">{data.modelYear}</p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <p className="text-sm">
                      <FaLocationDot />
                    </p>
                    <p className="text-xs text-gray-500">Branch</p>
                    <p className="font-semibold">{data.inspectionBranch}</p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <p className="text-sm">
                      <BsFillFuelPumpFill />
                    </p>
                    <p className="text-xs text-gray-500">Mileage</p>
                    <p className="font-semibold">{data.Mileage}</p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <p className="text-sm">
                      <GoPersonFill />
                    </p>
                    <p className="text-xs text-gray-500">Ownership</p>
                    <p className="font-semibold">{data.ownerType} Owner</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm">
                    <FaStar />
                  </p>
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="font-semibold">{data.Rating} </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm">
                    <IoIosColorPalette />
                  </p>
                  <p className="text-xs text-gray-500">Color</p>
                  <p className="font-semibold">{data.color} </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm">
                    <IoDocumentTextSharp />
                  </p>
                  <p className="text-xs text-gray-500">Documents Ready ?</p>
                  {data.documentsGiven == true ? (
                    <p className="font-semibold">Yes</p>
                  ) : (
                    <p className="font-semibold">No</p>
                  )}
                </div>
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm">
                    <FaMotorcycle />
                  </p>
                  <p className="text-xs text-gray-500">Vehicle Condition</p>
                  <p className="font-semibold">Excellent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[320px]">
            <div className="bg-white p-5 rounded-2xl shadow-sm top-6 sticky">
              <div className="mb-4">
                <p className="text-sm text-gray-500">Total Price</p>
                <p className="text-3xl font-bold text-blue-900">
                  ₹{data.outLetPrice}
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setOpenBookNow(true)}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Book Now →
                </button>

                <BookNowModal
                  isOpen={openBookNow}
                  onClose={() => setOpenBookNow(false)}
                >
                  <button
                    onClick={() => setOpenBookNow(false)}
                    className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">
                      Book the Vehicle
                    </h2>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookForm.name}
                        onChange={handleChangeBook}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        maxLength={10}
                        value={bookForm.mobile}
                        onChange={handleChangeBook}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookForm.email}
                        onChange={handleChangeBook}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          min = { new Date().toISOString().split("T")[0]}
                          value={bookForm.date}
                          onChange={handleChangeBook}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Time (9AM - 8PM) *
                        </label>
                        <input
                          type="time"
                          name="time"
                          min="09:00"
                          max="20:00"
                          value={bookForm.time}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (!val) return handleChangeBook(e);

                            const [hours, minutes] = val.split(":").map(Number);
                            const totalMinutes = hours * 60 + minutes;

                            if (totalMinutes >= 540 && totalMinutes <= 1200) {
                              handleChangeBook(e);
                            }
                          }}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                          required
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleSubmitBook}
                      className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </BookNowModal>

                <ConfirmBookModal
                  isOpen={bookConfirm}
                  onClose={() => setBookConfirm(false)}
                  bookForm={bookForm}
                  setBookForm={setBookForm}
                  bike={data}
                />

                <button
                  onClick={() => setOpenTestRide(true)}
                  className="w-full border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Book Test Ride
                </button>

                <TestRideModal
                  isOpen={openTestRide}
                  onClose={() => setOpenTestRide(false)}
                >
                  <button
                    onClick={() => setOpenTestRide(false)}
                    className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">
                      Book a Test Ride
                    </h2>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={testForm.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        maxLength={10}
                        value={testForm.mobile}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={testForm.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          min = { new Date().toISOString().split("T")[0]}
                          value={testForm.date}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Time (9AM - 8PM) *
                        </label>
                        <input
                          type="time"
                          name="time"
                          min="09:00"
                          max="20:00"
                          value={testForm.time}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (!val) return handleChange(e);

                            const [hours, minutes] = val.split(":").map(Number);
                            const totalMinutes = hours * 60 + minutes;

                            if (totalMinutes >= 540 && totalMinutes <= 1200) {
                              handleChange(e);
                            }
                          }}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-900"
                        />
                      </div>
                    </div>

                    <button
                      // onClick={() => {setOpenTestRide(false)}}
                      onClick={() => {
                        handleSubmitTest();
                      }}
                      className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition"
                    >
                      Confirm Test Ride Booking
                    </button>
                  </div>
                </TestRideModal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewBike;