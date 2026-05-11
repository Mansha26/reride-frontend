import React from 'react'
import { Search, ListFilter, MessageCircleMore, FlaskConical, Camera, List, Link, Shrub } from 'lucide-react'

const WorksSection = () => {
  return (
    <>
        <section class="flex flex-col min-w-6xl h-fit py-14 bg-gradient-to-t from-blue-900 to-secondary">
            <div class="flex justify-center items-center pb-14">
                <p class="text-5xl text-white">How It Works</p>
            </div>
            <div class="flex flex-col mx-auto max-w-6xl">
                <div class="flex w-full">
                    <div class="w-1/2 px-8 py-2 flex items-end">
                        <p class="text-6xl text-white font-medium">For Buyers</p>
                    </div>
                    <div class="w-1/2 flex">
                        <div
                            class="w-1/2 m-1 p-2 flex flex-col justify-between border-2 border-black rounded-xl size-48  text-secondary bg-white">
                            <div>
                                <p class="text-5xl flex items-center justify-between">01 <Search
                                        class="size-10 p-2 border-2 border-red rounded-xl bg-pink-50 text-pink-400"/>
                                </p>
                                <p class="text-3xl">Browse</p>
                            </div>
                            <div>
                                <p class="text-1xl">There are 100s of bikes to have a look</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 m-1 p-2 flex flex-col justify-between border-2 border-black rounded-xl size-48  text-secondary bg-white">
                            <div>
                                <p class="text-5xl flex items-center justify-between">02 <ListFilter
                                        class="size-10 p-2 border-2 border-red rounded-xl bg-green-50 text-green-400"/>
                                </p>
                                <p class="text-3xl">Filter out</p>
                            </div>
                            <div>
                                <p class="text-1xl">Find bikes buy budgets, model or location near you</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full">
                    <div class="w-1/2 flex justify-start">
                        <div class=" px-8 py-2 flex items-start">
                            <p class="text-xl text-white font-medium">From browsing to test riding, we make buying
                                <br/> your next bike simple, safe and fast.
                            </p>
                        </div>
                    </div>
                    <div class="w-1/2 flex">
                        <div
                            class="w-1/2 m-1 p-2 flex flex-col justify-between border-2 border-black rounded-xl size-48  text-secondary bg-white">
                            <div>
                                <p class="text-5xl flex items-center justify-between">03 
                                    <MessageCircleMore
                                        class="size-10 p-2 border-2 border-red rounded-xl bg-blue-50 text-blue-400"/>
                                </p>
                                <p class="text-3xl">Chat with sellers</p>
                            </div>
                            <div>
                                <p class="text-1xl">Ask questions via our secure chat system</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 m-1 p-2 flex flex-col justify-between border-2 border-black rounded-xl size-48  text-secondary bg-white">
                            <div>
                                <p class="text-5xl flex items-center justify-between">04 <FlaskConical
                                        class="size-10 p-2 border-2 border-red rounded-xl bg-red-50 text-red-400"/>
                                </p>
                                <p class="text-3xl">Test Ride & Buy</p>
                            </div>
                            <div>
                                <p class="text-1xl">Meet safety, verify documents and ride away</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="flex flex-col min-w-6xl h-fit py-14 bg-primary">
            <div class="flex flex-col mx-auto max-w-6xl">

                <div class="flex w-full">
                    <div class="w-1/2 flex">
                        <div
                            class="w-1/2 m-1 p-2 flex flex-col justify-between border-2 border-gray-500 rounded-xl size-48  text-secondary bg-white">
                            <div>
                                <p class="text-5xl flex items-center justify-between">01 <Camera
                                        class="size-10 p-2 border-2 border-red rounded-xl bg-green-50 text-green-400"/>
                                </p>
                                <p class="text-3xl">Click shots</p>
                            </div>
                            <div>
                                <p class="text-1xl">Click images as per instructions of your Bike</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 m-1 p-2 flex flex-col justify-between border-2 border-gray-500 rounded-xl size-48  text-secondary bg-white">
                            <div>
                                <p class="text-5xl flex items-center justify-between">02 <List
                                        class="size-10 p-2 border-2 border-red rounded-xl bg-blue-50 text-blue-400"/>
                                </p>
                                <p class="text-3xl">Create Listing</p>
                            </div>
                            <div>
                                <p class="text-1xl">Add images and details of Bike for getting listed</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 px-8 py-2 flex justify-center items-end text-center">
                        <p class="text-6xl text-secondary font-medium">For Sellers</p>
                    </div>
                </div>
                <div class="flex w-full">
                    <div class="w-1/2 flex">
                        <div
                            class="w-1/2 m-1 p-2 flex flex-col justify-between border-2 border-gray-500 rounded-xl size-48  text-secondary bg-white">
                            <div>
                                <p class="text-5xl flex items-center justify-between">03 <Link
                                        class="size-10 p-2 border-2 border-red rounded-xl bg-cyan-50 text-cyan-400"/>
                                </p>
                                <p class="text-3xl">Connect</p>
                            </div>
                            <div>
                                <p class="text-1xl">Recieve offers from genuine buyers and its negotiable</p>
                            </div>
                        </div>
                        <div
                            class="w-1/2 m-1 p-2 flex flex-col justify-between border-2 border-gray-500 rounded-xl size-48  text-secondary bg-white">
                            <div>
                                <p class="text-5xl flex items-center justify-between">04 <Shrub
                                        class="size-10 p-2 border-2 border-red rounded-xl bg-pink-50 text-pink-400"/>
                                </p>
                                <p class="text-3xl">Close the Deal</p>
                            </div>
                            <div>
                                <p class="text-1xl">Get paid instantly and transfer the Bike to given location</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex justify-end" dir="ltr">
                        <div class=" py-2 flex justify-start items-start">
                            <p class="text-xl text-secondary font-medium text-start">From browsing to test riding, we
                                make buying <br/> your next bike simple, safe and fast.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WorksSection