import { GoDotFill } from "react-icons/go";
import Billingpayment from '../images/billingpayment.png'
import { NavLink, useNavigate } from "react-router-dom";

// BillingPayments.js
export default function BillingPayments() {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg" style={{ width: "70%", height: "520px" }}>
      <div className="p-4 rounded-lg shadow-xs">
        <div className="pb-2 d-flex aling-items-center justify-content-between border-bottom" >
          <h3 className="text-lg font-bold">Billing & Payments</h3>
          <NavLink to="/createbillform"> {/* Use NavLink instead of button */}
            <button className="h-8 px-3 text-white rounded fw-normal" style={{ backgroundColor: "#0EABEB" }}>
              Create Bills
            </button>
          </NavLink>
        </div>
        <span className="py-2 text-lg d-flex"><GoDotFill className="mt-1 text-red-600 me-1" />Pending Bills : 00</span>
        <div className="d-flex aling-items-center justify-content-center">
          <img
            src={Billingpayment}
            className="py-4 my-5 d-flex aling-items-center justify-content-center"
          />
        </div>
      </div>
    </div>
  );
}


// <ul>
//       <li className="flex justify-between p-2">
//         <span>Charlie Vaccaro (Colds and Flu)</span>
//         <span className="text-green-500">Paid</span>
//       </li>
//       <li className="flex justify-between p-2">
//         <span>James George (Conjunctivitis)</span>
//         <span className="text-red-500">Unpaid</span>
//       </li>
//       <li className="flex justify-between p-2">
//         <span>James George (Conjunctivitis)</span>
//         <span className="text-red-500">Unpaid</span>
//       </li>
//     </ul>