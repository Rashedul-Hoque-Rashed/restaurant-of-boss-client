import { Helmet } from "react-helmet-async";
import menuCover from "../../../assets/menu/banner3.jpg"
import Cover from "../../../Components/Cover";
import SectionTitle from "../../../Components/SectionTitle"
import useMenu from './../../../Hooks/useMenu';
import MenuItems from "../../../Components/MenuItems";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladsImg from '../../../assets/menu/salad-bg.jpg'
import soupsImg from '../../../assets/menu/soup-bg.jpg'
import drinksImg from '../../../assets/menu/drinks.jpg'
import MenuCategory from "../../../Components/MenuCategory";



const MainMenu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuCover} title={'Our menu'} subTitle={'Would you like to try a dish?'} />
            <SectionTitle subHeader={"Don't miss"} header={"TODAY'S OFFER"} />
            <div className="mx-auto max-w-[1280px] my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {
                        offered.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className="text-center">
                    <button className="uppercase px-8 py-3 border-y-4 border-t-white border-b-[#1F2937] rounded-xl text-xl font-medium font-inter text-[#1F2937] hover:bg-[#1F2937] hover:text-[#FFF] hover:border-t-[#1F2937]">
                        Order your favourite food
                    </button>
                </div>
            </div>
            <MenuCategory items={dessert} img={dessertImg} title={'dessert'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title={'pizza'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory items={salads} img={saladsImg} title={'salad'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory items={soups} img={soupsImg} title={'soup'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory items={drinks} img={drinksImg} title={'drinks'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
    );
};

export default MainMenu;