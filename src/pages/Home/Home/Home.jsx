import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import CallUs from "../CallUs/CallUs";
import Categories from "../Categories/Categories";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import Menu from "../Menu/Menu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner/>
            <Categories/>
            <Boss/>
            <Menu/>
            <CallUs/>
            <Chef/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;