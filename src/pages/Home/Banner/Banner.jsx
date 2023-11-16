import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/home/home01.jpg"
import img2 from "../../../assets/home/home02.jpg"
import img3 from "../../../assets/home/home03.jpg"
import img4 from "../../../assets/home/home04.jpg"
import img5 from "../../../assets/home/home05.jpg"
import img6 from "../../../assets/home/home06.jpg"

const Banner = () => {
    return (
        <Carousel dynamicHeight={true} className="text-center">
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
            
        </Carousel>
    );
};

export default Banner;