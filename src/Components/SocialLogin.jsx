import { FaGithub, FaGoogle } from "react-icons/fa";
import Auth from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosOpen from "../Hooks/useAxiosOpen";

const SocialLogin = () => {

    const {googleLogin, githubLogin} = Auth();
    const Navigate = useNavigate();
    const axios = useAxiosOpen();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                axios.post('/users', userInfo)
                .then(res => {
                    console.log(res.data)
                })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                Navigate("/");
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                axios.post('/users', userInfo)
                .then(res => {
                    console.log(res.data)
                })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                Navigate("/");
            })
    }


    return (
        <div className="flex items-center justify-center gap-14">
                            <button onClick={handleGoogleLogin}>
                                <FaGoogle className="w-14 h-14 text-[#444]" />
                            </button>
                            <button onClick={handleGithubLogin}>
                                <FaGithub className="w-14 h-14 text-[#444]" />
                            </button>
                        </div>
    );
};

export default SocialLogin;