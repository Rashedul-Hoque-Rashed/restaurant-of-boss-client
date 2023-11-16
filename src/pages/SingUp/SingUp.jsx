import singUpImg from "../../assets/others/authentication2.png"
import singUpBg from "../../assets/others/authentication.png"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Config/firebase.config";
import Swal from "sweetalert2";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import SocialLogin from "../../Components/SocialLogin";

const SingUp = () => {

    const { createUser } = useContext(AuthContext);
    const Navigate = useNavigate();
    const axios = useAxiosOpen();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user)
                updateProfile(auth.currentUser, {
                    displayName: data.name, photoURL: data.photo
                })
                .then(() => {
                    const userInfo = {
                        name: data.name,
                        email: data.email
                    }
                    axios.post('/users', userInfo)
                    .then(res => {
                        if(res?.data?.insertedId){
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Registration successfully",
                                showConfirmButton: false,
                                timer: 1500
                              });
                            Navigate("/");
                        }
                    })
                })
                
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

    



    return (
        <div style={{ backgroundImage: `url(${singUpBg})` }} className="w-full h-screen py-28">
            <div style={{ backgroundImage: `url(${singUpBg})` }} className="mx-auto max-w-[1673px] shadow-2xl">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 py-14 px-28">
                    <div className="flex-1">
                        <img src={singUpImg} alt="" className="w-[648px] h-[455px]" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-4xl font-bold font-inter text-center text-[#151515]">Sign Up</h4>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-3/4 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444]">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444]">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter your email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444]">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}/ })} name="password" placeholder="Enter your password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Password must be 6 character</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password must have one uppercase, one lowercase, one number and one special character</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444]">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Enter your photoURL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-white bg-[#D1A054B3] hover:bg-[#f0c27eb3]">Sign Up</button>
                            </div>
                        </form>
                        <p className="text-xl font-medium text-[#D1A054] font-inter text-center">Already registered? <Link to="/login" className="font-bold">Go to login</Link></p>
                        <p className="divider w-2/3 mx-auto text-xl font-semibold text-[#444] font-inter text-center mt-6 mb-4">Or sign in with</p>
                        
<SocialLogin/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;