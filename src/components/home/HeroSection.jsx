import React from "react";
import { Link } from "react-router";
import { Wrench, Shield, CreditCard, ArrowLeftRight, Search, Camera, ShieldCheck } from "lucide-react";
import HeroBikeImg from '../../assets/bikes/apache-bike-1.png'

const HeroSection = () => {
  return (
    <section className="hero w-full h-fit flex p-2 bg-primary">
      <div className="flex justify-around">
        <article className="w-2/5 p-5 h-fit">
          <div className="flex flex-col">
            <p className="w-fit pr-2 pl-2 pt-1 pb-1 text-secondary bg-white flex justify-between items-center gap-2 border-2 rounded-2xl font-bold text-xs">
              <ShieldCheck className="text-green-500"/>
              Verified listings in Bengaluru
            </p>
            <br />
            <p className="text-5xl font-semibold ">
              Re-Ride where every <br /> bike gets second <br />
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">
                chance of love
              </span>
            </p>
          </div>
          <br />
          <hr /> <br />
          <div className="justify-center align-center w-full h-fit">
            <div className="flex flex-col w-full">
              <div className="w-full flex flex-wrap justify-start align-center gap-5">
                <div className="w-full flex flex-wrap justify-between align-center gap-5">
                  <div className="flex text-secondary w-1/2">
                    <div className="flex justify-center items-start p-2">
                      <Wrench className="size-10 p-2 border-2 border-red rounded-xl bg-blue-50 text-blue-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-1xl">100% Refurbished</p>
                      <p className="text-xs">
                        Re-Ride certified and restored to like new condition.
                      </p>
                    </div>
                  </div>
                  <div className="flex text-secondary w-2/5">
                    <div className="flex justify-center items-start p-2">
                      <Shield className="size-10 p-2 border-2 border-red rounded-xl bg-green-50 text-green-400" />
                    </div>
                    <div>
                      <p className="font-bold text-1xl">Warranty & Service</p>
                      <p className="text-xs">
                        Up to I-year warranty and free services included.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap justify-between align-center gap-5">
                  <div className="flex text-secondary w-2/5">
                    <div className="flex justify-center items-start p-2">
                      <CreditCard className="size-10 p-2 border-2 border-red rounded-xl bg-pink-50 text-pink-400" />
                    </div>
                    <div>
                      <p className="font-bold text-1xl">Easy Financing</p>
                      <p className="text-xs">
                        Finance up to 85% of the cost with instant approval.
                      </p>
                    </div>
                  </div>
                  <div className="flex text-secondary w-2/5">
                    <div className="flex justify-center items-start p-2">
                      <ArrowLeftRight className="size-10 p-2 border-2 border-red rounded-xl bg-blue-50 text-red-400" />
                    </div>
                    <div>
                      <p className="font-bold text-1xl">Easy Exchange</p>
                      <p className="text-xs">
                        Sell or exchange your two-wheeler stress-free.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8 flex">
                <Link
                  to="/buy"
                  className="m-2 pl-8 pr-8 pt-5 pb-5 bg-secondary border-2 border-primary rounded-xl text-white flex gap-2 font-semibold"
                >
                  <Search/> Buy Used Bikes
                </Link>
                <Link
                  to="/sell"
                  className="m-2 pl-8 pr-8 pt-5 pb-5 bg-white text-secondary border-2 rounded-xl border-gray-300 flex gap-2 font-semibold"
                >
                  <Camera/> Sell Your Bike
                </Link>
              </div>
              <br />
              <hr /> <br />
            </div>
            <div className="w-4/5 flex flex-row justify-between gap-10">
              <div className="flex flex-col text-secondary">
                <p className="font-medium text-3xl">5k+</p>
                <p className="text-sm">Bikes sold</p>
              </div>
              <div className="flex flex-col text-secondary">
                <p className="font-medium text-3xl">Bengaluru</p>
                <p className="text-sm">Focus Area</p>
              </div>
              <div className="flex flex-col text-secondary">
                <p className="font-medium text-3xl">Verified</p>
                <p className="text-sm">Sellers</p>
              </div>
            </div>
          </div>
        </article>
        <article className="w-2/5">
          <div>
            <img src={HeroBikeImg} alt="bike-hero-section" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
