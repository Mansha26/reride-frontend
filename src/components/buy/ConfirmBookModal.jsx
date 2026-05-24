import { React, useEffect, useState } from 'react'



const ConfirmBookModal = ({ isOpen, onClose, bike, bookForm, setBookForm }) => {

  const [submitted, setSubmitted] = useState(false);
  const [timeError, setTimeError] = useState("");

  const handleClose = () => {
    setSubmitted(false);
    setBookForm({ name: "", mobile: "", email: "", date: "", time: "", branch: "" });
    onClose();
  };

  const handleSubmit = () => {
    onClose();
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric", month: "long", year: "numeric",
    });
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "—";
    const [h, m] = timeStr.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${ampm}`;
  };

  const refNumber = `TRD-${Math.floor(10000 + Math.random() * 90000)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed -inset-3 flex items-center justify-center bg-black/50 z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">

        <button onClick={handleClose} className="absolute top-4 right-5 text-blue-900 text-xl font-medium hover:text-gray-500">✕</button>

        <div className="w-18 h-18 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <svg className="w-9 h-9 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-blue-900 text-center mb-1">Booking Confirmed!</h2>
            <p className="text-sm text-gray-500 text-center mb-5">Your test ride has been successfully scheduled.</p>

            <div className="flex justify-center mb-5">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                REF #{refNumber}
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 mb-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Booking Details</p>

              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">🏍️</span>
                <div>
                  <p className="text-xs text-gray-500">Vehicle</p>
                  <p className="text-sm font-semibold text-slate-800">{bike.model}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">📅</span>
                <div>
                  <p className="text-xs text-gray-500">Date & Time</p>
                  <p className="text-sm font-semibold text-slate-800">
                    {formatDate(bookForm.date)} &nbsp;·&nbsp; {formatTime(bookForm.time)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <div>
                  <p className="text-xs text-gray-500">Branch</p>
                  <p className="text-sm font-semibold text-slate-800">{bike.inspectionBranch}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">👤</span>
                <div>
                  <p className="text-xs text-gray-500">Booked For</p>
                  <p className="text-sm font-semibold text-slate-800">
                    {bookForm.name} &nbsp;·&nbsp; {bookForm.mobile}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex gap-3 items-start mb-6">
              <span className="text-base mt-0.5">📞</span>
              <p className="text-xs text-blue-700 leading-relaxed">
                Our team will contact you at <strong>{bookForm.mobile}</strong> within{" "}
                <strong>24 hours</strong> to confirm your appointment and share branch directions.
              </p>
            </div>

            <button onClick={handleClose}
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition">
              Done
            </button>
      </div>
    </div>
  );
};

export default ConfirmBookModal