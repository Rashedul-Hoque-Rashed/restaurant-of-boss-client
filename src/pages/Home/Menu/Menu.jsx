import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../../Components/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const Menu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('/public/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(popularItem => popularItem.category === 'popular');
    //             setMenu(popularItems);
    //         })
    // }, [])

    const [menu] = useMenu();
    const popularItems = menu.filter(popularItem => popularItem.category === 'popular');

    return (
        <div className="mx-auto max-w-[1280px] my-28">
            <SectionTitle subHeader={'Check it out'} header={'FROM OUR MENU'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {
                    popularItems.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center">
            <button className="uppercase px-8 py-3 border-y-4 border-t-white border-b-[#1F2937] rounded-xl text-xl font-medium font-inter text-[#1F2937] hover:bg-[#1F2937] hover:text-[#FFF] hover:border-t-[#1F2937]">
                View Full  Menu
            </button>
            </div>
        </div>
    );
};

export default Menu;