import { FaBook, FaHome, FaShopify, FaShoppingCart, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoWalletSharp } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { RiContactsBookFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

    const admin = isAdmin;

    const navOptions = <>
        {
            admin ? <>
                <li><NavLink to="/dashboard/adminHome" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <FaHome className="w-6 h-6" />Admin Home</div></NavLink></li>
                <li><NavLink to="/dashboard/addItems" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <ImSpoonKnife className="w-6 h-6" />Add Items</div></NavLink></li>
                <li><NavLink to="/dashboard/manageItems" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <TfiMenuAlt className="w-6 h-6" />Manage Items</div></NavLink></li>
                <li><NavLink to="/dashboard/manageBookings" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <FaBook className="w-6 h-6" />Manage Bookings</div></NavLink></li>
                <li><NavLink to="/dashboard/allUsers" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <FaUsers className="w-6 h-6" />All Users</div></NavLink></li>
            </> : <>
                <li><NavLink to="/dashboard/userHome" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <FaHome className="w-6 h-6" />User Home</div></NavLink></li>
                <li><NavLink to="/dashboard/reservation" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <SlCalender className="w-6 h-6" />Reservation</div></NavLink></li>
                <li><NavLink to="/dashboard/paymentHistory" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <IoWalletSharp className="w-6 h-6" />Payment History</div></NavLink></li>
                <li><NavLink to="/dashboard/cart" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <FaShoppingCart className="w-6 h-6" />My cart</div></NavLink></li>
                <li><NavLink to="/dashboard/review" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <VscFeedback className="w-6 h-6" />Add review</div></NavLink></li>
                <li><NavLink to="/dashboard/booking" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
                    <RiContactsBookFill className="w-6 h-6" />My booking</div></NavLink></li>
            </>
        }

        <br /> <hr /> <br />

        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
            <FaHome className="w-6 h-6" />Home</div></NavLink></li>
        <li><NavLink to="/menu" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
            <IoMenu className="w-6 h-6" />Menu</div></NavLink></li>
        <li><NavLink to="/shop/salad" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
            <FaShopify className="w-6 h-6" />Shop</div></NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-white font-bold" : ""}> <div className="flex items-center gap-4">
            <MdContactMail className="w-6 h-6" />Contact</div></NavLink></li>


    </>



    return (
        <div className="flex w-[1600px] mx-auto flex-col md:flex-row
        ">
            <div className="w-[280px] px-9 py-12 bg-[#D1A054] min-h-screen">
                <Link to="/" className="text-2xl font-black font-cinzel mb-16 text-[#151515]"><p>BISTRO BOSS <br /><span className="text-xl font-bold">RESTAURANT</span></p></Link>
                <div className="mt-16">
                    <ul className="text-xl font-medium font-cinzel space-y-6">
                        {navOptions}
                    </ul>
                </div>
            </div>
            <div className="px-6 py-12 bg-base-200 flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;