import React from 'react'
import logo from '../assets/logo/logo_white.png'
import {Camera} from 'lucide-react'
import { Link } from 'react-router'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className="bg-white">
        <section className="bg-secondary py-10">
            <article className="bg-white max-w-6xl mx-auto rounded-[30px] flex flex-col py-10 ">
                <div className="text-center text-secondary text-5xl font-semibold py-3">
                    <p>Ready for Ride ?</p>
                </div>
                <div className="text-center text-secondary text-md pb-6">
                    <p>Whether you are upgrading or selling, we make it simple.</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-5">
                    <Link to="/buy"
                        className="border-2 border-secondary rounded-full bg-white text-secondary px-7 py-2 text-xl text-center align-middle font-bold">Buy
                        a Bike</Link>
                    <Link to="/sell"
                        className="border-2 border-primary bg-secondary text-white rounded-full px-7 py-2 text-xl text-center align-middle font-bold">Sell
                        Your Bike</Link>
                </div>
            </article>
            <article>
                <div className="flex flex-col max-w-6xl mx-auto gap-5 py-10">
                    <div className="flex flex-row justify-center">
                        <div className="w-1/3"><img src={logo} alt="logo" width="200px"/></div>
                        <div className="w-1/3 text-white text-2xl font-bold pl-20">
                            <p>Quick Links</p>
                        </div>
                        <div className="w-1/3 text-white text-2xl font-bold pl-20">
                            <p>Reach Us</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div className="w-1/3 text-white">
                            <p>Trusted by thousands of riders in Bengaluru.
                                The safest way to buy and sell used two-wheelers.</p>
                        </div>
                        <div className="w-1/3 text-white pl-20">
                            <ul className="flex flex-col gap-3">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="#">Privacy Policies</Link></li>
                            </ul>
                        </div>
                        <div className="w-1/3 text-white flex flex-col gap-5  pl-20">
                            <div className="flex flex-col ">
                                <p>Jalahalli, Bengaluru, KA 560003</p>
                                <p>support@reride.com</p>
                            </div>
                            <div className="flex gap-8">
                                <Link to="https://www.facebook.com/" target="_blank"><Camera /></Link>
                                <Link to="https://www.instagram.com/?hl=en" target="_blank"><FaInstagram size={24}/></Link>
                                <Link to="https://x.com/" target="_blank"><Camera /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <div className="bg-secondary flex justify-center text-white text-center pb-[35px]">
            <p> &copy; 2026 ReRide Bikes. design and developed by thincnext</p>
        </div>
    </footer>
    </>
  )
}

export default Footer