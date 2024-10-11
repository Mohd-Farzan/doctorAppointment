import React from 'react';
import logo from '../../../assets/images/logo.jpeg'
function Welcome() {
  return (
            <div className="flex">
              <div className="w-2/3 p-4">
                <h5 className="text-lg font-bold text-white">Book Your Next</h5>
                <p className="text-blue-600 border-2 border-white rounded font-bold bg-white">
                  Appointment
                  <span className="bg-cyan-500 text-white text-lg rounded font-bold ml-5">Online!</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  <small>Book Now And Get 30% OFF</small>
                </p>
                <button className="border-2 border-orange-500 text-lg bg-orange-500 rounded text-white font-bold mt-3">BOOK NOW</button>
              </div>
              <div className="w-1/4 hidden md:block">
                <img src={logo} alt="img" /> {/* Add your image source here */}
              </div>
            </div>
          
  );
}

export default Welcome;
