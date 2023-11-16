import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsQuote } from 'react-icons/bs';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mx-auto max-w-[1280px] mb-28">
            <SectionTitle subHeader={'What Our Clients Say'} header={'TESTIMONIALS'} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id} className="text-center px-16">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            className="mx-auto mb-12"
                            readOnly
                        />
                        <BsQuote className="w-24 h-24 mx-auto mb-10 text-[#151515]"/>
                        <p className="text-xl font-inter font-normal text-[#444] leading-9 mb-2">{review.details}</p>
                        <h4 className="text-2xl font-medium text-[#CD9003] font-inter">{review.name}</h4>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;