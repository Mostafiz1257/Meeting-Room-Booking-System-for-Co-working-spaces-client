import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003580] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h5 className="text-lg font-bold mb-4">About Meeting.com</h5>
            <p className="text-gray-300">
              Meeting.com is your trusted platform for booking meeting rooms, conference spaces, and more. Our mission is to provide seamless and efficient booking experiences for all your professional needs.
            </p>
          </div>
      
          <div>
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="https://meeting-room-theta.vercel.app/about-us/meeting-rooms" className="hover:text-gray-300">Meeting Rooms</a></li>
              <li><a href="https://meeting-room-theta.vercel.app/about-us" className="hover:text-gray-300">About Us</a></li>
              <li><a href="https://meeting-room-theta.vercel.app/contract-us" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                 
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692V11.42h3.128V8.89c0-3.1 1.893-4.79 4.659-4.79 1.325 0 2.463.099 2.795.143v3.242h-1.918c-1.504 0-1.795.714-1.795 1.763v2.313h3.59l-.467 3.287h-3.123V24h6.123C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                 
                  <path d="M23.953 4.569c-.885.39-1.83.654-2.825.775a4.932 4.932 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482c-4.09-.205-7.713-2.165-10.141-5.144a4.822 4.822 0 0 0-.66 2.475c0 1.71.87 3.213 2.188 4.096a4.903 4.903 0 0 1-2.229-.616c-.054 1.997 1.396 3.868 3.444 4.287a4.897 4.897 0 0 1-2.224.084c.631 1.972 2.445 3.405 4.6 3.444A9.864 9.864 0 0 1 0 19.539 13.92 13.92 0 0 0 7.548 22c9.14 0 14.307-7.72 14.307-14.425 0-.22-.005-.439-.015-.657a10.246 10.246 0 0 0 2.512-2.617l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                
                  <path d="M22.23 0H1.77C.791 0 0 .785 0 1.75v20.495C0 23.216.791 24 1.77 24h20.46c.979 0 1.77-.784 1.77-1.755V1.75C24 .785 23.209 0 22.23 0zm-13.54 20.452h-3.7v-11.92h3.7v11.92zM5.75 7.748c-1.175 0-2.125-.958-2.125-2.142 0-1.18.95-2.14 2.125-2.14s2.125.96 2.125 2.14c0 1.184-.95 2.142-2.125 2.142zM20.45 20.452h-3.7v-6.35c0-1.514-.027-3.463-2.112-3.463-2.118 0-2.442 1.654-2.442 3.356v6.457h-3.7v-11.92h3.556v1.63h.051c.497-.941 1.71-1.933 3.52-1.933 3.765 0 4.459 2.48 4.459 5.703v6.52z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; 2024 Meeting.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
