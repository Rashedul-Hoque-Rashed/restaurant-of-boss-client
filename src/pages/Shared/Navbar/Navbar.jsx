import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const Navigate = useNavigate()
    const [cart] = useCart();

    const navOptions = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}>Home</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}>Contact Us</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}>Dashboard</NavLink></li>
        <li><NavLink to="/menu" className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}>Our Menu</NavLink></li>
        <li><NavLink to="/shop/salad" className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}>Our Shop</NavLink></li>
        <li><NavLink to="/dashboard/cart" className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}> <div className="flex items-center">
            <TiShoppingCart className="w-8 h-8" />
            <div className="badge badge-secondary">+{cart.length}</div></div></NavLink></li>

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log out successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                Navigate("/");
            })
            .catch(err => console.error(err.message))

    }

    return (
        <div className="navbar fixed z-10 bg-opacity-40 bg-[#151515] px-14 pt-8 pb-6 text-white max-w-[1920px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-semibold font-inter text-black">
                        {navOptions}
                        <li>
                            {
                                user ? <div className="flex items-center gap-3">
                                    <button onClick={handleLogOut} className="normal-case text-base font-semibold font-inter">Log Out</button>
                                    <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full ml-4" />
                                </div> : <Link to="/login" className="normal-case text-base font-semibold font-inter">Login</Link>
                            }
                        </li>
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-black font-cinzel flex items-center gap-4"> <img src={logo} alt="" className="h-16" /> <p>BISTRO BOSS <br /><span className="text-xl font-bold">RESTAURANT</span></p></Link>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-6 px-1 text-xl font-bold font-inter">
                    {navOptions}
                </ul>
            </div> */}
            <div className="navbar-end hidden lg:flex">
                <div className="">
                    <ul className="menu-horizontal gap-6 px-1 text-base font-semibold font-inter items-center">
                        {navOptions}
                    </ul>
                </div>
                {
                    user ? <>
                        <button onClick={handleLogOut} className="normal-case text-base font-semibold font-inter  ml-6">Log Out</button>
                        <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full ml-4" />
                    </> : <Link to="/login" className="normal-case text-base font-semibold font-inter ml-6">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;