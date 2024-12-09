import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import GMapLogo from "../assets/GmapLogo.jpeg";
import WazeLogo from "../assets/WazeLogo.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

const StoreLocation = () => {
    const [isOpen, setIsOpen] = useState(true);

    const isStoreOpen = () => {
        const now = new Date();
        const currentHour = now.getHours();

        // Check if time is between 9 AM and 6 PM
        return currentHour >= 9 && currentHour < 18;
    };

    const getDayName = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const now = new Date();
        return days[now.getDay()];
    };

    return (
        <div>
            <Navbar />
            <Searchbar />

            <div className="mt-32 text-black text-center" id="store-location-header">
                <h1 className="text-3xl font-bold" id="store-location-title">Store Location</h1>
                <p className="mt-4" id="store-location-description">
                    Our knowledgeable staff is always on hand to assist you with any
                    questions you may have and help you find the perfect solution.
                </p>
            </div>

            <div className="max-w-4xl mx-auto p-6 mt-8 flex flex-col items-start justify-center gap-4 bg-light-container shadow-md mb-12 rounded-md" id="store-location-map">
                <div className="relative w-full h-[10%]" style={{ paddingBottom: '37.29%' }} id="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.935359326679!2d120.98749907577411!3d14.65960977562786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b682e6ff675d%3A0xc373eb96f28ced82!2siRIG%20Computers!5e0!3m2!1sen!2sph!4v1733323747814!5m2!1sen!2sph"
                        width="100%" // Adjust width to 100%
                        height="100%" // Adjust height to 100%
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute top-0 left-0 rounded-lg shadow-lg"
                        id="store-location-map-frame"
                    ></iframe>
                </div>

                <div className="flex items-center justify-start w-full gap-2" id="map-directions-links">
                    <div className="w-full md:w-[25%] bg-light-button bg-opacity-10 text-light-button border border-light-button p-2 rounded-lg flex items-center justify-start gap-2 transform transition-all duration-300 hover:scale-110" id="google-maps-link">
                        <img src={GMapLogo} alt="Google Maps" className="w-8 h-8" />
                        <a
                            href="https://www.google.com/maps/place/iRIG+Computers/@14.6596046,120.990074,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b682e6ff675d:0xc373eb96f28ced82!8m2!3d14.6596046!4d120.990074!16s%2Fg%2F1jmd0mv4j?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-md"
                            id="google-maps-link-text"
                        >
                            Directions to Maps
                        </a>
                    </div>

                    <a
                        href="https://www.waze.com/en/live-map/directions/ph/ncr/caloocan/irig-computers?to=place.ChIJXWf_5oK2lzMRgu2M8pbrc8M"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-[25%] bg-light-button bg-opacity-10 text-light-button border border-light-button flex items-center justify-start gap-2 p-2 shadow rounded-lg transform transition-all duration-300 hover:scale-110"
                        id="waze-link"
                    >
                        <img src={WazeLogo} alt="Waze" className="w-8 h-8" />
                        iRIG Computers
                    </a>
                </div>

                <div className="flex flex-col item-center justify-start text-black gap-4" id="store-details">
                    <p><span className="font-bold mr-2">Address: </span>23 General Tinio, Morning Breeze Subdivision, Caloocan, 1401 Metro Manila</p>

                    <div className="flex flex-col sm:flex-row gap-2 items-start justify-start" id="store-hours">
                        <p className="font-bold mr-2">Store Hours: </p>
                        <div className="flex gap-2 items-center w-full md:w-[50%]" onClick={() => setIsOpen(!isOpen)} id="toggle-store-hours">
                            {isOpen ? (
                                <>
                                    <div>{isStoreOpen() ? <p className="text-green-600 font-semibold">Open</p> : <p className="text-red-600 font-semibold">Closed</p>}</div>
                                    <p>Opens 9AM {getDayName()}</p>
                                    <BiSolidDownArrow size={10} id="down-arrow" />
                                </>
                            ) : (
                                <div className="flex flex-col w-full gap-4 font-base" id="expanded-store-hours">
                                    <div className="flex items-center justify-between w-full sm:w-[68%]">
                                        <p>Monday</p>
                                        <div className="flex items-center justify-center gap-4">9 AM - 6 PM <BiSolidUpArrow size={10} id="up-arrow" /></div>
                                    </div>
                                    <div className="flex items-center justify-between w-full sm:w-[60%]">
                                        <p>Tuesday</p>
                                        <p>9 AM - 6 PM</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full sm:w-[60%]">
                                        <p>Wednesday</p>
                                        <p>9 AM - 6 PM</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full sm:w-[60%]">
                                        <p>Thursday</p>
                                        <p>9 AM - 6 PM</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full sm:w-[60%]">
                                        <p>Friday</p>
                                        <p>9 AM - 6 PM</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full sm:w-[60%]">
                                        <p>Saturday</p>
                                        <p>9 AM - 6 PM</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full sm:w-[60%]">
                                        <p>Sunday</p>
                                        <p>Closed</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StoreLocation;
