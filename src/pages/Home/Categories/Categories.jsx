import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle';

const Categories = () => {
    return (
        <section className='my-28 mx-auto max-w-[1280px]'>
            <SectionTitle subHeader={"From 11:00am to 10:00pm"} header={'ORDER ONLINE'}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper"
                pagination={{
                    clickable: true
                }}
            >
                <SwiperSlide className='pb-16'>
                    <img src={slide1} alt="" />
                    <h3 className='text-3xl uppercase text-white font-normal font-cinzel -mt-12 text-center'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-3xl uppercase text-white font-normal font-cinzel -mt-12 text-center'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-3xl uppercase text-white font-normal font-cinzel -mt-12 text-center'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-3xl uppercase text-white font-normal font-cinzel -mt-12 text-center'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-3xl uppercase text-white font-normal font-cinzel -mt-12 text-center'>Drinks</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Categories;