import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (
        <footer>
            <div className="flex justify-center font-inter">
                <div className="bg-[#1F2937] w-full p-10 text-center py-24">
                    <h4 className="text-3xl font-medium text-[#FFF] mb-6">CONTACT US</h4>
                    <p className="text-xl font-medium text-[#FFF]">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-xl font-medium text-[#FFF]">+88 123456789</p>
                    <p className="text-xl font-medium text-[#FFF]">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-xl font-medium text-[#FFF]">Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] w-full p-10 text-center py-24'>
                    <h4 className="text-3xl font-medium text-[#FFF] mb-6">Follow US</h4>
                    <p className="text-xl font-medium text-[#FFF] mb-8">Join us on social media</p>
                    <div className="flex gap-8 justify-center">
                        <FaFacebook className='w-9 h-9 text-[#FFF]' />
                        <FaInstagram className='w-9 h-9 text-[#FFF]' />
                        <FaTwitter className='w-9 h-9 text-[#FFF]' />
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515] text-base-content">
                    <aside>
                        <p className='text-xl font-medium text-[#FFF]'>Copyright © {currentYear} - All right reserved by ACME Industries Ltd</p>
                    </aside>
            </div>
        </footer>
    );
};

export default Footer;