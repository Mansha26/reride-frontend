import React from "react";
import { CircleOff, Wallet, Podcast } from "lucide-react";

const CTASection = () => {
  return (
    <>
      <section class="bg-secondary py-5 bg-gradient-to-b from-blue-900 to-secondary">
        <div class="max-w-4xl mx-auto bg-white rounded-[40px]">
          <div class="text-secondary py-5 flex justify-center">
            {" "}
            <Podcast
              class="size-16 p-2 rounded-xl bg-blue-50 text-secondary"/>{" "}
          </div>
          <div class="text-secondary text-center py-5">
            <p class="text-5xl">Let's Make Your Next Ride</p>
          </div>
          <div class="text-secondary flex flex-row justify-center gap-2">
            <div class="flex justify-center items-center">
              <p class="text-xl text-center inline-block">Your Best Move</p>
            </div>
            <div>
              <button class="text-2xl px-4 py-1 bg-gradient-to-t from-blue-900 to-blue-600 text-primary border-1 rounded-full flex items-center gap-1">
                Book Discovery Call{" "}
                <i data-lucide="move-up-right" class="text-primary"></i>
              </button>
            </div>
          </div>
          <div class="text-secondary flex flex-row justify-center items-center gap-4 py-5">
            <p class="flex items-center text-sm">
              <Wallet class="p-1"/>No Upfront Payment
            </p>
            <p class="flex items-center text-sm">
              <CircleOff class="p-1"/>Easily Cancellation
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
