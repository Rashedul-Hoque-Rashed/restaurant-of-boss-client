import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover";
import contactCover from "../../assets/contact/banner.jpg"
import SectionTitle from "../../Components/SectionTitle";
import { FaClock, FaPaperPlane, FaPhone, FaSearchLocation } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {

    const handleRecaptchaChange = (value) => {
        // Handle the reCAPTCHA value change
        console.log('reCAPTCHA value:', value);
      };

      


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <Cover img={contactCover} title={'Our menu'} subTitle={'Would you like to try a dish?'} />
            <div className="mx-auto max-w-[1280px] my-28">
                <SectionTitle header={'OUR LOCATION'} subHeader={'Visit Us'}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="relative">
                        <button className="bg-[#D1A054] text-white py-6 px-48 absolute left-0"> <FaPhone className="w-8 h-8"></FaPhone> </button>
                        <div className="border w-[416px]">
                            <div className="flex flex-col justify-center items-center gap-4 bg-[#F3F3F3] w-[364px] mx-auto h-[240px] my-[30px]">
                                <h4 className="uppercase text-2xl font-medium font-inter text-[#151515]">Phone</h4>
                                <p className="text-base font-normal font-inter text-[#444]">+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="bg-[#D1A054] text-white py-6 px-48 absolute left-0"> <FaSearchLocation className="w-8 h-8"></FaSearchLocation> </button>
                        <div className="border w-[416px]">
                            <div className="flex flex-col justify-center items-center gap-4 bg-[#F3F3F3] w-[364px] mx-auto h-[240px] my-[30px]">
                                <h4 className="uppercase text-2xl font-medium font-inter text-[#151515]">Address</h4>
                                <p className="text-base font-normal font-inter text-[#444]">789 Pine Lane, Village town.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="bg-[#D1A054] text-white py-6 px-48 absolute left-0"> <FaClock className="w-8 h-8"></FaClock> </button>
                        <div className="border w-[416px]">
                            <div className="flex flex-col justify-center items-center gap-4 bg-[#F3F3F3] w-[364px] mx-auto h-[240px] my-[30px]">
                                <h4 className="uppercase text-2xl font-medium font-inter text-[#151515]">Working hours</h4>
                                <p className="text-base font-normal font-inter text-[#444]">Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-[1280px] my-28">
                    <SectionTitle header={'CONTACT FORM'} subHeader={'Send Us a Message'}></SectionTitle>
                    <div className="bg-[#F3F3F3] px-24 py-16">
                        <div className="flex gap-6 mb-6">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444] mb-2">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered h-16 py-7 px-9" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444] mb-2">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered h-16 py-7 px-9" required />
                            </div>
                        </div>
                        <div className="flex gap-6 mb-6">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444] mb-2">Phone</span>
                                </label>
                                <input type="text" name="phone" placeholder="Enter your phone number" className="input input-bordered h-16 py-7 px-9" required />
                            </div>
                        </div>
                        <div className="flex gap-6 mb-6">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#444] mb-2">Message</span>
                                </label>
                                <textarea name="message" className="input input-bordered h-72 py-7 px-9" placeholder="Write your message here" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <ReCAPTCHA
                            sitekey={`${import.meta.env.VITE_RECAPTCHAR}`}
                            onChange={handleRecaptchaChange}
                            className="mb-28"
                        />
                        
                        <button type="submit" className="text-white bg-gradient-to-r from-[#835D23] to-[#B58130] py-4 px-6 text-xl font-bold font-inter flex items-center gap-2 mx-auto">Send Message <FaPaperPlane className="w-6 h-6"></FaPaperPlane> </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;