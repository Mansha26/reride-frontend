
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SellBanner from "../components/sell/SellBanner";
import StepCounter from "../components/sell/StepCounter";
import Brand from "../components/sell/Brand"; 
import VehicleType from "../components/sell/VehicleType";
import Model from "../components/sell/Model";
import ModelYear from "../components/sell/ModelYear";
import Color from "../components/sell/Color";
import PurchaseDetails from "../components/sell/PurchaseDetails";
import Owner from "../components/sell/Owner";
import Inspection from "../components/sell/Inspection";
import ContactDetails from "../components/sell/ContactDetails";
import Photos from "../components/sell/Photos";
import Addvehicle from "./Staff/Addvehicle";

const Sell = () => {
  const [step, setStep] = useState(0);
  const [showstep, setShowstep] = useState(false);
  const [startsell, setStartsell] = useState(true);

  const [vehicleDetails, setVehicleDetails] = useState({
    brand: "",
    type: "",
    model: "",
    year: "",
    color: "",
    purchasedDate: "",
    purchasedAmount: "",
    ownerType: "",
    inspectionDate: "",
    inspectionBranch: "",
    Name: "",
    Phone: "",
    Email: "",
    registrationNumber: "",

    images: {
      front: null,
      back: null,
      right: null,
      left: null,
      dashboard: null,
    },
  });

  
 

  const [data, setdata] = useState(null);

  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    fetch("./src/data/vehicles.json")
      .then((res) => res.json())
      .then((data) => {
       
        setdata(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Nav />

      {startsell && (
        <SellBanner
          setShowstep={setShowstep}
          setstartsell={setStartsell}
          setStep={setStep}
        />
      )}
      {showstep && <StepCounter step={step} setStep={setStep} />}
      {showstep && (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm mb-4">
          {step === 1 && data && (
            <Brand
              data={data}
              vehicleDetails={vehicleDetails}
              setStep={setStep}
              setVehicleDetails={setVehicleDetails}
            />
          )}
          

          {step === 2 && (
            <VehicleType
              data={data}
              vehicleDetails={vehicleDetails}
              setStep={setStep}
              setVehicleDetails={setVehicleDetails}
            />
          )}
          
          {step === 3 && (
            <Model
              vehicleDetails={vehicleDetails}
              setVehicleDetails={setVehicleDetails}
              setStep={setStep}
              data={data}
            />
          )}
          {step === 4 && (
            <ModelYear
              vehicleDetails={vehicleDetails}
              setVehicleDetails={setVehicleDetails}
              setStep={setStep}
            />
          )}
          {step === 5 && (
            <Color
              vehicleDetails={vehicleDetails}
              setVehicleDetails={setVehicleDetails}
              setStep={setStep}
            />
          )}
          {step === 6 && (
            <PurchaseDetails
              vehicleDetails={vehicleDetails}
              setVehicleDetails={setVehicleDetails}
              setStep={setStep}
            />
          )}
          
          {step === 7 && (
            <Owner
              vehicleDetails={vehicleDetails}
              setVehicleDetails={setVehicleDetails}
              setStep={setStep}
            />
          )}
          
          {step === 8 && (
            <Photos
              vehicleDetails={vehicleDetails}
              setVehicleDetails={setVehicleDetails}
              setStep={setStep}
            />
          )}
          {step === 9 && (
            <Inspection
              vehicleDetails={vehicleDetails}
              setVehicleDetails={setVehicleDetails}
              setStep={setStep}
            />
          )}
          

          {step === 10 && (
            <ContactDetails
              vehicleDetails={vehicleDetails}
              setVehicleDetails={setVehicleDetails}
              setStep={setStep}
              startsell={setStartsell}
              showstep={setShowstep}
            />
          )}
          
          
        </div>
      )}

      <Footer />
    </>
  );
};

export default Sell;
