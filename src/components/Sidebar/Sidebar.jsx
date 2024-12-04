// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transition-transform transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } w-64`}
//       >
//         <nav className="flex flex-col p-4 space-y-4">
//           <Link to="/" className="text-lg font-medium hover:text-yellow-400">
//             Home
//           </Link>
//           <Link to="/about" className="text-lg font-medium hover:text-yellow-400">
//             About
//           </Link>
//           <Link to="/contact" className="text-lg font-medium hover:text-yellow-400">
//             Contact
//           </Link>
//           <Link to="/login" className="text-lg font-medium hover:text-yellow-400">
//             Login
//           </Link>
//           <Link to="/github" className="text-lg font-medium hover:text-yellow-400">
//             GitHub
//           </Link>
//         </nav>
//       </div>

//       {/* Toggle Button */}
//       <button
//         className="fixed top-4 left-4 z-50 bg-gray-700 text-white p-2 rounded"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "Close" : "Menu"}
//       </button>
//     </>
//   );
// }






import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

export default function Sidebar() {
  return (
//   <div style={{display:'flex'}}>
    <div className="w-64  bg-gray-600 text-white fixed  " style={{top:50,height:895}} >
      <nav className="flex flex-col p-4 space-y-4"  >
        <Link
          to="/"
          className="text-lg font-medium hover:text-yellow-400 transition py-4  "
        >
          Home
        </Link>
        <Link
          to="/About"
          className="text-lg font-medium hover:text-yellow-400 transition py-3 "
        >
          About
        </Link>
        <Link
          to="/Contact"
          className="text-lg font-medium hover:text-yellow-400 transition py-3 "
        >
          Contact
        </Link>
        <Link
          to="/Login"
          className="text-lg font-medium hover:text-yellow-400 transition py-3 "
        >
          Login
        </Link>
        <Link
          to="/Github"
          className="text-lg font-medium hover:text-yellow-400 transition py-3 "
        >
          GitHub
        </Link>
      </nav>
    </div> 
      
  );
}
