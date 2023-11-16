import { Parallax } from "react-parallax";
import PropTypes from 'prop-types';

const ItemsCover = ({img, title, subTitle}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
        className='mb-12'
    >
        <div className="hero h-[700px] px-[412px] py-[175px]" >
            <div className="hero-overlay bg-black bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="">
                    <h1 className="text-5xl font-semibold font-cinzel text-white mb-2 uppercase">{title}</h1>
                    <p className="text-base font-semibold font-inter text-white">{subTitle}</p>
                </div>
            </div>
        </div>
    </Parallax>
    );
};

ItemsCover.propTypes = {
    img: PropTypes.img,
    title: PropTypes.string,
    subTitle: PropTypes.string
}


export default ItemsCover;