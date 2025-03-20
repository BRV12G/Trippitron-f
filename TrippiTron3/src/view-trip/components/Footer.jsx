
// import React from 'react';
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="shadow-lg py-6 rounded-lg">
//       <div className="container mx-auto flex  md:flex-row justify-between px-5">
        
//         {/* Logo & About */}
//         <div>
//           <h2 className="text-xl font-bold">TrippiTron</h2>
//           <p className="text-gray-400 text-sm">Your AI Travel Planner.</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-semibold">Quick Links</h3>
//           <ul className="text-gray-400 text-sm">
//             <li><a href="/">About Us</a></li>
//             <li><a href="/create-trip">Create trip</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="font-semibold">Follow Us</h3>
//           <div className="flex gap-3">
//             <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
//             <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
//             <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div>
//         <p>Email: support@trippitron.com</p>
//         <p>Phone: +1 123 456 7890</p>
//         <p>Location: Remote, Worldwide</p>
//         </div>
        
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-gray-500 text-sm">
//         © 2025 TrippiTron. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="shadow-lg py-8 rounded-lg bg-white mx-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-5">
        
        {/* Logo & About */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">TrippiTron</h2>
          <p className="text-gray-400 text-sm">Your AI Travel Planner.</p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="/">About Us</a></li>
            <li><a href="/create-trip">Create Trip</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-xl hover:text-blue-600" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-xl hover:text-pink-500" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-xl hover:text-blue-400" /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left text-gray-400 text-sm">
          <p>Email: support@trippitron.com</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Location: Remote, Worldwide</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2025 TrippiTron. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
