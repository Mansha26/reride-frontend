import React from "react";

function SellBanner({setShowstep,setstartsell,setStep}) {
  return (
    <>
      <section
        id="sellBanner"
        className="relative overflow-hidden bg-primary py-20 px-6"
      >
        <div className="absolute top-100 right-0 w-72 h-72 rounded-bl-full bg-secondary opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-tr-full bg-secondary opacity-5"></div>
        <div
          className="absolute inset-0  pointer-events-none opacity-10 bg-[radial-gradient(#0a1f58_4px,transparent_1px)] bg-[size:20px_20px]"
          
        ></div>

        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">
          <div className="flex-1 mt-10">
            <span className="inline-flex items-center gap-2 bg-secondary text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Free Inspection · Best Price Guaranteed
            </span>
            <h1 className="text-5xl font-extrabold text-secondary leading-tight mb-4">
              Sell Your Bike
              <br />
              <span className="relative inline-block">
                the Smart Way.
                <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-secondary opacity-20"></span>
              </span>
            </h1>
            <p className="text-secondary opacity-60 text-lg mb-8 max-w-md leading-relaxed">
              Hassle-free selling with instant valuation, free doorstep
              inspection, and same-week payment.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                id="startSellBtn"
                onClick={()=> {setShowstep(true); setstartsell(false); setStep(1);}}
                className="bg-secondary text-white px-8 py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-md"
              >
                Start Selling →
              </button>
              <div className="flex items-center gap-2 text-secondary opacity-50 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Secure · No hidden fees
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 shrink-0">
            <div className="bg-white rounded-2xl px-6 py-5 text-center shadow-sm border border-black border-opacity-5 col-span-2">
              <p className="text-4xl font-extrabold text-secondary">5,000+</p>
              <p className="text-sm text-gray-400 mt-1 font-medium">
                Bikes Sold in Bengaluru
              </p>
            </div>
            <div className="bg-white rounded-2xl px-5 py-5 text-center shadow-sm border border-black border-opacity-5">
              <p className="text-2xl font-extrabold text-secondary">48 hrs</p>
              <p className="text-xs text-gray-400 mt-1">Avg. Sell Time</p>
            </div>
            <div className="bg-white rounded-2xl px-5 py-5 text-center shadow-sm border border-black border-opacity-5">
              <p className="text-2xl font-extrabold text-secondary">98%</p>
              <p className="text-xs text-gray-400 mt-1">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SellBanner;
