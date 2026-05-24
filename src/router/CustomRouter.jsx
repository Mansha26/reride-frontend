import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Buy from '../pages/Buy'
import Sell from '../pages/Sell'
import About from '../pages/About'
import Contact from '../pages/Contact'
import RequestInspection from '../pages/Staff/RequestInspection'
import Addvehicle from '../pages/Staff/Addvehicle'
import InspectionAdmin from '../pages/Admin/Inspection'
import InspectionForm from '../pages/Admin/InspectForm'
import InspectVehicle from '../pages/Staff/InspectVehicle'
import VehicleListing from '../pages/Admin/VehicleListing'
import ViewVehicleById from '../pages/Admin/ViewVehicleById'
import EditVehicle from '../pages/Admin/EditVehicle'
import ManageUsers from '../pages/Admin/ManageUsers'
import Branches from '../pages/SuperAdmin/Branches'
import Nav from '../components/SuperAdmin/Nav'
import { LogOut } from 'lucide-react'
import Login from '../pages/Login'
import ViewBike from '../pages/Web/ViewBike'
import InspectList from '../pages/Staff/InspectList'
import TestRide from '../pages/Staff/TestRide'


const CustomRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/buy' element={<Buy/>}></Route>
        <Route path='/sell' element={<Sell/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/requestInspect' element={<RequestInspection/>}></Route>
        <Route path='/addvehicle' element={<Addvehicle/>}></Route>
        <Route path='/admin/inspection' element={<InspectionAdmin/>}></Route>
        <Route path='/admin/inspect-form/:id' element={<InspectionForm/>}></Route>
        {/* <Route path='/InspectVehicle'element={<InspectVehicle/>}></Route> */}
        <Route path='/admin/vehiclelist'element={<VehicleListing/>}></Route>
        <Route path='/admin/vehiclelist/:id'element={<ViewVehicleById/>}></Route>
        <Route path='/admin/editvehicle/:id'element={<EditVehicle/>}></Route>
        <Route path='/InspectVehicle' element={<InspectList/>}></Route>
        <Route path='/branches/:branchId' element={<ManageUsers/>}></Route>
        <Route path='/admin/manageusers' element={<ManageUsers/>}></Route>
        <Route path='/branches' element={<Branches/>}></Route>
        <Route path='/nav' element={<Nav/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/buy/:id' element={<ViewBike/>}></Route>
        <Route path='/inspectionReport/:id' element={<InspectVehicle/>}></Route>
        <Route path='/testriderequests' element={<TestRide/>}></Route>
    </Routes>
  )
}

export default CustomRouter