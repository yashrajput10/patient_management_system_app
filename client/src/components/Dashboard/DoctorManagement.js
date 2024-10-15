import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

function DoctorManagement() {
  return (
    <div className="flex h-screen ">
      <Sidebar /> 
      <div className="flex-grow bg-gray-100 overflow-auto"> 
        <div className="sticky top-0 z-10">
        <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Doctor Management</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Patient"
            className="border border-gray-300 rounded-md p-2 w-64 focus:outline-none"
          />
          <Link to='/adddoctor' className="bg-blue-500 text-white px-4 py-2 rounded-md">
          <button>
            + Add New Doctor
          </button>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Doctor Name</th>
                <th className="text-left p-4">Gender</th>
                <th className="text-left p-4">Qualification</th>
                <th className="text-left p-4">Specialty</th>
                <th className="text-left p-4">Working Time</th>
                <th className="text-left p-4">Patient Check Up Time</th>
                <th className="text-left p-4">Break Time</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* You can map doctor data here */}
              {/* Example:
              {doctors.map((doctor, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{doctor.name}</td>
                  <td className="p-4">{doctor.gender}</td>
                  <td className="p-4">{doctor.qualification}</td>
                  <td className="p-4">{doctor.specialty}</td>
                  <td className="p-4">{doctor.workingTime}</td>
                  <td className="p-4">{doctor.patientCheckUpTime}</td>
                  <td className="p-4">{doctor.breakTime}</td>
                  <td className="p-4">
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
    
  );
}

export default DoctorManagement;
