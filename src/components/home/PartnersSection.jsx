import React from "react";

const PartnersSection = () => {
  return (
    <>
      <section class="bg-primary flex flex-col py-14">
        <div class="text-center py-1">
          <p class="text-2xl">Born in Bengaluru and growing in India</p>
        </div>
        <div class="text-center pb-5">
          <p class="text-md">
            Currently serving all major zones of Bengaluru. Coming soon to
            Mysuru, Mangaluru and Hubli
          </p>
        </div>
        <div class="flex flex-row justify-center items-center gap-10 text-4xl font-bold text-gray-500">
          <p>SecurePayment</p>
          <p>RTO-Assist</p>
          <p>BikeCheck</p>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
