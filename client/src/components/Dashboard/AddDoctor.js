import React from 'react';
import { Clock, ChevronDown, Link } from 'lucide-react';

function AddDoctorform() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white">
      <h1 className="text-2xl font-bold mb-6">Add New Doctor</h1>
      <div className="md:col-span-3 flex items-center space-x-4">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
          </div>
          <button className="text-blue-600">Choose Photo</button>
        </div>
        
        <div className="md:col-span-3">
          <p className="font-semibold mb-2">Upload Signature</p>
          <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="mt-1 text-sm text-blue-600">Upload a file</p>
            <p className="text-xs text-gray-500">PNG Up To 5MB</p>
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <InputField label="Doctor Name" placeholder="Enter Doctor Name" />
        <InputField label="Doctor Qualification" placeholder="Enter Doctor Qualification" />
        <SelectField label="Gender" placeholder="Select Gender" />
        
        <InputField label="Specialty Type" placeholder="Enter Specialty Type" />
        <SelectField label="Work On" placeholder="Select Work On" />
        <InputField label="Working Time" placeholder="Enter Working Time" icon={<Clock size={20} />} />
        
        <InputField label="Check Up Time" placeholder="Enter Checkup Time" icon={<Clock size={20} />} />
        <InputField label="Break Time" placeholder="Enter Break Time" icon={<Clock size={20} />} />
        <InputField label="Experience" placeholder="Enter Experience" />
        
        <InputField label="Phone Number" placeholder="Enter Phone Number" />
        <InputField label="Age" placeholder="Enter Age" />
        <InputField label="Doctor Email" placeholder="Enter Email" />
        
        <SelectField label="Country" placeholder="Select Country" />
        <SelectField label="State" placeholder="Select State" />
        <SelectField label="City" placeholder="Select City" />
        
        <InputField label="Zip code" placeholder="Enter Zip Code" />
        <InputField label="Doctor Address" placeholder="Enter Doctor Address" />
        <InputField label="Description" placeholder="Enter Description" />
        
        <div className="md:col-span-3">
          <InputField label="Online Consultation Rate" placeholder="00000" prefix="₹" />
        </div>
        
        <InputField label="Doctor Current Hospital" placeholder="Enter Current Hospital" />
        <InputField label="Hospital Name" placeholder="Enter Hospital Name" />
        <InputField label="Hospital Address" placeholder="Enter Hospital Address" />
        
        <InputField label="Hospital Website Link" placeholder="Enter Hospital Website Link" icon={<Link size={20} />} />
        <InputField label="Emergency Contact Number" placeholder="Enter Emergency Contact Number" />
      </div>
      
      <div className="mt-6 text-right">
        <button className="px-4 py-2 bg-gray-800 text-white rounded">
          Add
        </button>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, icon, prefix }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{prefix}</span>
          </div>
        )}
        <input
          type="text"
          className={`w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${prefix ? 'pl-7' : ''} ${icon ? 'pr-10' : ''}`}
          placeholder={placeholder}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

function SelectField({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <select className="w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 appearance-none">
          <option value="">{placeholder}</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
}

export default AddDoctorform;