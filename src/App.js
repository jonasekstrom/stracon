import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import ReactGa from "react-ga4";

import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from './components/Landing/Landing';

import Assignments from './components/Assignments/Assignments';
import Career from "./components/Career/Career";
import Contact from './components/Contact/Contact';
import About from './components/about/About';

import Dashboard from './components/admin/Dashboard';
import Login from "./components/admin/Login";

import './App.css';
import ListingForm from './components/admin/ListingForm';
import EditListing from './components/admin/EditListing';
import PreviewListing from './components/admin/PreviewListing';
import Privacy from './components/common/Privacy';
import JobListings from './components/JobListings/JobListings';
import Joblisting from './components/JobListings/JobListing';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-9G2G4LNQZP')

    ReactGa.send("pageview")
}, [])
  return (
    <>
    <Router>
    <div className="container-fluid p-0">
    <Topbar />
      <Navbar />
      
      <Routes>
      <Route  path="/" element={<Landing/>} />
        <Route  path="/uppdrag" element={<Assignments/>} />
        <Route  path="/karriar" element={<Career/>} />
{/*         <Route  path="/jobs" element={<JobListings/>}></Route>
        <Route  path="/jobs/:id" element={<Joblisting/>}></Route> */}
        <Route  path="/om-oss" element={<About/>} />
        <Route  path="/kontakta-oss" element={<Contact/>} />
        <Route  path="/privacy" element={<Privacy/>} />
        <Route  path="/admin/dashboard" element={<Dashboard/>} />
        <Route  path="/admin/dashboard/createJoblisting" element={<ListingForm/>} />
        <Route  path="/admin/dashboard/editjoblisting/:joblistingId" element={<EditListing/>} />
        <Route  path="/admin/dashboard/previewjoblisting/:previewlistingId" element={<PreviewListing/>} />
         <Route  path="/admin" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
