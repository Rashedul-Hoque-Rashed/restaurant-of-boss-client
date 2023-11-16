import { useState } from "react";
import Cover from "../../Components/Cover";
import shopCover from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from "../../Hooks/useMenu";
import ShopTab from "../../Components/ShopTab";
import { useParams } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import { Helmet } from "react-helmet-async";


const Shop = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Cover img={shopCover} title={"OUR SHOP"} subTitle={"Would you like to try a dish?"} />
            <div className="mx-auto max-w-[1280px] my-12">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    {/* <TabList defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="flex justify-center gap-14 mb-12">
                        <Tab className="text-2xl font-medium font-inter uppercase cursor-pointer text-[#151515] focus:text-[#BB8506] focus:font-bold focus:border-b-4 border-b-[#BB8506]">Salad</Tab>
                        <Tab className="text-2xl font-medium font-inter uppercase cursor-pointer text-[#151515] focus:text-[#BB8506] focus:font-bold focus:border-b-4 border-b-[#BB8506]">Pizza</Tab>
                        <Tab className="text-2xl font-medium font-inter uppercase cursor-pointer text-[#151515] focus:text-[#BB8506] focus:font-bold focus:border-b-4 border-b-[#BB8506]">Soups</Tab>
                        <Tab className="text-2xl font-medium font-inter uppercase cursor-pointer text-[#151515] focus:text-[#BB8506] focus:font-bold focus:border-b-4 border-b-[#BB8506]">Desserts</Tab>
                        <Tab className="text-2xl font-medium font-inter uppercase cursor-pointer text-[#151515] focus:text-[#BB8506] focus:font-bold focus:border-b-4 border-b-[#BB8506]">Drinks</Tab>

                    </TabList> */}

<TabList >
      <Tab>salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soups</Tab>
      <Tab>desserts</Tab>
      <Tab>drinks</Tab>
    </TabList>

                    <TabPanel>
                        <ShopTab items={salads} />
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={soups} />
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;