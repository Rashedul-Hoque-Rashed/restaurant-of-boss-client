import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            className='mb-12'
        >
            <div className="hero h-[800px] px-[300px] pt-[240px] pb-[110px]" >
                <div className="hero-overlay bg-black bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="">
                        <h1 className="text-7xl font-bold font-cinzel text-white mb-2 uppercase">{title}</h1>
                        <p className="text-2xl font-semibold font-cinzel text-white uppercase">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

Cover.propTypes = {
    img: PropTypes.img,
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default Cover;