import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import { MdEditSquare, MdRemoveRedEye } from 'react-icons/md';
import { RiWomenFill } from 'react-icons/ri';
import Navbar from './Navbar';
import { AiFillPlusSquare } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import MonitorBill from '../images/monitor bill.png';
import editinvoice from '../images/Edit Invoice.png'

const Monitorbilling = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
    const [isDetailsVisible, setDetailsVisible] = useState(false); // State for patient details visibility
    const [isDialogOpen, setDialogOpen] = useState(false); // State for dialog visibility
    const [uploadedFiles, setUploadedFiles] = useState([]); // State for uploaded files
    const [isDetailDialogOpen, setDetailDialogOpen] = useState(false);
    const [isEditInvoice, setisEditInvoice] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const openeditinvoice = () => {
        setisEditInvoice(true)
    }

    const openDetailDialog = (patient) => {
        setSelectedPatient(patient); // Set the selected patient details
        setDetailDialogOpen(true); // Open the detail dialog
    };

    const toggleNotification = () => {
        setDetailDialogOpen(prevState => !prevState);
    };

    const toggleNotification2 = () => {
        setisEditInvoice(prevState => !prevState);
    };

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible); // Toggle the visibility of the details
    };

    const toggleDialog = () => {
        setDialogOpen(!isDialogOpen); // Toggle the dialog visibility
    };

    return (
        <div className="flex h-screen">
            <div className="flex-grow bg-gray-100 overflow-auto">
                <div className="sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="gap-3 mt-6 px-6 mb-6 overflow-auto">
                    <div className="bg-white">
                        <div className='d-flex justify-between align-items-center p-3'>
                            <h5 className='text-semibold mt-1'>Monitor Billing</h5>
                            <div className='d-flex gap-3'>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search Patient"
                                        className="rounded-3xl py-2"
                                        style={{
                                            outline: "none",
                                            border: "none",
                                            backgroundColor: "#F6F8F8",
                                            paddingLeft: "40px",
                                            width: "250px",
                                        }}
                                    />
                                    <button className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg p-1">
                                        <LuSearch className='fw-bold' />
                                    </button>

                                </div>
                                <button onClick={()=>openeditinvoice()} className="px-2 fw-normal h-9 flex items-center rounded" style={{ color: "#0EABEB", border: "1px solid #0EABEB" }} ><MdEditSquare className='me-2' />Edit Design Invoice</button>
                                <button className="text-white px-2 rounded fw-normal h-9 flex items-center" style={{ backgroundColor: "#0EABEB" }}><AiFillPlusSquare className='me-1' />Create Bills</button>

                            </div>

                        </div>
                        <div className="gap-2 h-50 ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-600">
                                <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Bill Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Patient Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Dieses Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Time
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b fw-semibold dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-3 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>5654</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            Alfredo Vaccaro
                                        </td>
                                        <td className="px-6 py-2">
                                            Colds and Flu
                                        </td>
                                        <td className="px-6 py-2">
                                            879934 43456
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Paid</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            2 jan, 2022
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                        </td>
                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                            <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                                <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white fw-semibold border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-3 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>5654</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            Alfredo Vaccaro
                                        </td>
                                        <td className="px-6 py-2">
                                            Colds and Flu
                                        </td>
                                        <td className="px-6 py-2">
                                            879934 43456
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#FCE8EA] text-[#E11D29] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Unpaid</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            2 jan, 2022
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                        </td>
                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                            <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={() => openDetailDialog()}>
                                                <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                    {isDetailDialogOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                        <span className="text-gray-500 text-white d-flex align-items-center justify-content-center rounded-circle cursor-pointer" style={{ width: "14px", height: "14px", backgroundColor: "#E11D29",position:"absolute",top:"9%",right:"31%", zIndex:"900" }} onClick={toggleNotification}><IoClose /></span>
                            <img src={MonitorBill} width="40%" className='position-relative'/>

                        </div>
                    )}


                    {isEditInvoice && (
                        
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                        <span className="text-gray-500 text-white d-flex align-items-center justify-content-center rounded-circle cursor-pointer" style={{ width: "14px", height: "14px", backgroundColor: "#E11D29",position:"absolute",top:"4.5%",right:"15.3%", zIndex:"900" }} onClick={toggleNotification2}><IoClose /></span>
                            <img src={editinvoice} width="70%" className='position-relative bg-white p-3 rounded'/>

                        </div>
                       
                    )}
                </div>
            </div>
        </div>
    )
}

export default Monitorbilling;
