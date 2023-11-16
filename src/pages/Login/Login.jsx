import loginImg from "../../assets/others/authentication2.png"
import loginBg from "../../assets/others/authentication.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {

    const { login } = useContext(AuthContext);
    const Navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        if (validateCaptcha(captcha)) {
            login(email, password)
                .then(res => {
                    console.log(res.user)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    Navigate(from, { replace: true });
                })
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: err.message,
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                })
        }

        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Captcha Does Not Match",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

        console.log(email, password, captcha)
    }



    return (
        <div style={{ backgroundImage: `url(${loginBg})` }} className="w-full h-screen py-28">
            <div style={{ backgroundImage: `url(${loginBg})` }} className="mx-auto max-w-[1673px] shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-14 px-28">
                    <div className="flex-1">
                        <img src={loginImg} alt="" className="w-[648px] h-[455px]" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-4xl font-bold font-inter text-center text-[#151515]">Login</h4>
                        <form onSubmit={handleLogin} className="card-body w-3/4 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444]">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444]">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name="captcha" placeholder="Type the captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-white bg-[#D1A054B3] hover:bg-[#f0c27eb3]">Login</button>
                            </div>
                        </form>
                        <p className="text-xl font-medium text-[#D1A054] font-inter text-center">New here? <Link to="/register" className="font-bold">Create a New Account</Link></p>
                        <p className="divider w-2/3 mx-auto text-xl font-semibold text-[#444] font-inter text-center mt-6 mb-4">Or sign in with</p>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;