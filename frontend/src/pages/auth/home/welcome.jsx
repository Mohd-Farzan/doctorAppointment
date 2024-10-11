import React from 'react';
import logo from '../../../assets/images/logo.jpeg'
import { BriefcaseMedical, CalendarCheck, GraduationCapIcon, Home, Pill } from 'lucide-react';
function Welcome() {
  return (
    <>
    <div className="flex items-center justify-evenly bg-blue-400">
      <div className='flex mt-4 ml-2'>
        <div className="flex space-x-2 w-full md:w-1/2  ">
            <div className="max-w-sm bg-blue-700 shadow-lg rounded-lg overflow-hidden">
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
                        <button className="border-2 border-orange-500 text-lg bg-orange-500 rounded text-white font-bold mt-3">BOOK NOW -</button>
                    </div>
                    <div className="w-1/3 hidden md:block">
                        <img src={logo} alt=""  className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex space-x-2 w-full md:w-1/2 ">
            <div className="max-w-sm bg-orange-400 shadow-lg rounded-lg overflow-hidden">
                <div className="flex">
                    <div className="w-2/3 p-4">
                        <h5 className="text-lg font-semibold text-blue-600 mt-1">Find Your Right</h5>
                        <p className="text-gray-700  text-lg">Specialist Doctor</p>
                        <p className="text-gray-500 text-sm mt-1">
                            <small>Book Now And Get 30% OFF</small>
                        </p>
                        <button className="border-2 border-black text-lg bg-black rounded text-white font-bold mt-3">BOOK NOW </button>
                    </div>
                    <div className="w-1/3 hidden md:block">
                        <img src={logo} alt="img" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
          

            <div className="con">
            <div className="flex flex-wrap justify-center mt-7 mx-10 gap-6 ">

            <div className=" p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-box bg-white">
                <i className="text-blue-600"><GraduationCapIcon/></i>
                <h2 className="text-lg font-bold mt-2"><a href="/read">Doctor</a></h2>
            </div>
              <div className=" p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-box bg-white">
                <i className="text-blue-500"><CalendarCheck /></i>
                <h2 className="font-bold text-lg mt-2"><a href="/appointment">Appointment</a></h2>
              </div>
              <div className=" p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-box bg-white">
                <i className="text-blue-500"><BriefcaseMedical /></i>
                <h2 className="font-bold text-lg mt-2">Prescription</h2>
              </div>
              <div className=" p-4 border-2  shadow-inherit rounded w-32 sm:w-40 md:w-48 transform-box bg-white">
                <i className="text-blue-500"><Pill /></i>
                <h2 className="text-lg font-bold">Medicines</h2>
              </div>
            </div>
            </div>
            <section>

    <div className="flex items-center justify-center mt-6">
        <h1 className="text-lg font-bold text-center">Top Doctor</h1>
      </div>

      <div className="flex flex-wrap justify-center mt-7 mx-10 gap-6 ">
        <div className="bg-white p-4 border-2 shadow-md rounded w-32  transform-doc sm:w-40 md:w-48 ">
        <img src={logo} alt="img" />
         <br /><h2 className="font-bold">Dr.Taylor Samaro</h2>
          <samp className="text-gray-500"> Dentel Sergon</samp>
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img"  className='rounded'/><br />
             <h2 className="font-bold">Dr.Aqib Samaro</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
        
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img" className='rounded' />
            <br />
            <h2 className="font-bold">Dr.Adil Samaro</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img" />
            <br />
            <h2 className="font-bold">Dr.Aman</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
        </div>
      </div>
    </section>

    <section>
    <div className="flex items-center justify-center mt-6">
        <h1 className="text-lg font-bold text-center">Available Doctor</h1>
      </div>
      
    


      <div className="flex flex-wrap justify-center mt-7 mx-10 gap-6 ">
        <div className="bg-white p-4 border-2 shadow-md rounded w-32  transform-doc sm:w-40 md:w-48 ">
        <img src={logo} alt="img" className='rounded'/>
         <br /> <h2 className="font-bold">Dr.Taylor Samaro</h2>
          <samp className="text-gray-500"> Dentel Sergon</samp>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
        </div>
        
        <p>100 </p>
        
                    <button className="border-2 shadow-md  bg-blue-700 text-white rounded w-19"> See Doctor Now <i className="fa-solid fa-video text-white"></i></button>
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img" />
            <br /><h2 className="font-bold">Dr.Aqib Samaro</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
            </div>
            
            <p>100 </p>
            
                        <button className="border-2 shadow-md  bg-blue-700 text-white rounded w-19"> See Doctor Now <i className="fa-solid fa-video text-white"></i></button>
        
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img" />
            <br />
            <h2 className="font-bold">Dr.Adil Samaro</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
            </div>
            
            <p>100 </p>
            
                        <button className="border-2 shadow-md  bg-blue-700 text-white rounded w-19"> See Doctor Now <i className="fa-solid fa-video text-white"></i></button>
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img" />
          <br />
            <h2 className="font-bold">Dr.Aman</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
            </div>
            
            <p>100 </p>
            
                        <button className="border-2 shadow-md  bg-blue-700 text-white rounded w-19"> See Doctor Now <i className="fa-solid fa-video text-white"></i></button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-7 mx-10 gap-6 ">
        <div className="bg-white p-4 border-2 shadow-md rounded w-32  transform-doc sm:w-40 md:w-48 ">
        <img src={logo} alt="img" />
         <br /><h2 className="font-bold">Dr.Taylor Samaro</h2>
          <samp className="text-gray-500"> Dentel Sergon</samp>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
        </div>
        
        <p>100 </p>
        
                    <button className="border-2 shadow-md  bg-blue-700 text-white rounded w-19"> See Doctor Now <i className="fa-solid fa-video text-white"></i></button>
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img" />
            <br /><h2 className="font-bold">Dr.Aqib Samaro</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
            
{/* <!-- rating code --> */}
<div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
</div>

<p>100 </p>

            <button className="border-2 shadow-md  bg-blue-700 text-white rounded w-19"> See Doctor Now <i className="fa-solid fa-video text-white"></i></button>
        
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img" />
            <br />
            <h2 className="font-bold">Dr.Adil Samaro</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
            </div>
            
            <p>100 </p>
            
                        <button className="border-2 shadow-md  bg-blue-700 text-white rounded w-19"> See Doctor Now <i className="fa-solid fa-video text-white"></i></button>
        </div>
        <div className="bg-white p-4 border-2 shadow-md rounded w-32 sm:w-40 md:w-48 transform-doc">
        <img src={logo} alt="img" />
            <br />
            <h2 className="font-bold">Dr.Aman</h2>
            <samp className="text-gray-500"> Dentel Sergon</samp>
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
            </div>
            
            <p>100 </p>
            
                        <button className="border-2 shadow-md  bg-blue-700 text-white rounded w-19"> See Doctor Now <i className="fa-solid fa-video text-white"></i></button>
        </div>
      </div>
  </section>
  </>
          
  );
}

export default Welcome;
