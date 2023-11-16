import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import ItemsCover from "./itemsCover";
import PropTypes from 'prop-types';

const MenuCategory = ({ items, img, title, subTitle }) => {
    return (
        <div>
            <ItemsCover img={img} title={title} subTitle={subTitle} />
            <div className="mx-auto max-w-[1280px] mt-24 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {
                        items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className="text-center">
                    <Link to={`/shop/${title}`} className="uppercase px-8 py-3 border-y-4 border-t-white border-b-[#1F2937] rounded-xl text-xl font-medium font-inter text-[#1F2937] hover:bg-[#1F2937] hover:text-[#FFF] hover:border-t-[#1F2937]">
                        Order your favourite food
                    </Link>
                </div>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
    img: PropTypes.img,
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default MenuCategory;