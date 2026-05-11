import React from "react";
import { UserCheck, IndianRupee, BookCheck } from "lucide-react";

const WhyUsSection = () => {
  return (
    <>
      <section className="flex flex-col py-4 bg-white text-secondary">
        <div className="w-full flex flex-col text-center py-8">
          <p className="text-5xl py-4">Why Riderrr?</p>
          <p className="text-xl">
            We bridge the gap between trust and affordability in the second-hand
            market.
          </p>
        </div>
        <div className="flex flex-row max-w-7xl mx-auto text-center pb-4">
          <div className="px-5 py-6">
            <div className="flex justify-center mb-8">
              <UserCheck
                className="size-16 p-2 rounded-xl bg-cyan-50 text-cyan-700" />
            </div>
            <div className="mb-3">
              <p className="text-2xl font-semibold">Verified Sellers Only</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                We verify the identity of every seller in Bengaluru to ensure
                you aren't dealing with bots or fraud.
              </p>
            </div>
          </div>
          <div className="ppx-5 py-6">
            <div className="flex justify-center mb-8">
              <IndianRupee
                className="size-16 p-2 rounded-xl bg-purple-50 text-purple-700"/>
            </div>
            <div className="mb-3">
              <p className="text-2xl font-semibold">Fair & Transparent Pricing</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                No hidden dealer commissions. Negotiate directly with the owner
                and get the real market value.
              </p>
            </div>
          </div>
          <div className="px-5 py-6">
            <div className="flex justify-center mb-8">
              <BookCheck
                className="size-16 p-2 rounded-xl bg-blue-50 text-blue-700"/>
            </div>
            <div className="mb-3">
              <p className="text-2xl font-semibold">Easy Ownership Transfer</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                We provide RTO assistance and paperwork guidance to make the
                ownership transfer seamless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsSection;
