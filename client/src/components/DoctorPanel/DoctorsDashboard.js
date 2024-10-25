// Dashboard.js

import Navbar from "../Dashboard/Navbar";
import DoctureSidebar from "./DoctureSidebar";


const DoctorsDashboard = () => {
  return (
    <div className="flex h-screen">
      <DoctureSidebar />
      <div className="flex-grow overflow-auto bg-gray-100">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="grid grid-cols-2 gap-3 px-6 mt-6 mb-6">
          
        </div>
      </div>
    </div>
  );
}

export default DoctorsDashboard
