import SectionTitle from "../../../Components/SectionTitle";
import featured_img from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${featured_img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="my-28 bg-fixed">
            <div className="bg-black bg-opacity-70 pt-20 text-white">
                <SectionTitle subHeader={'Check it out'} header={'FROM OUR MENU'} />
                <div className="flex flex-col md:flex-row justify-center items-center gap-16 pb-32 mx-auto max-w-[1280px]">
                    <img src={featured_img} alt="" className="w-[648px] h-[400px] rounded-sm" />
                    <div>
                        <h4 className="text-white text-2xl font-normal font-inter leading-9">
                            March 20, 2023 <br /> WHERE CAN I GET SOME?
                        </h4>
                        <p className="text-white text-xl font-normal font-inter leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="uppercase px-8 py-3 border-b-4 border-b-white rounded-xl text-xl font-medium font-inter text-white hover:bg-[#1F2937] hover:text-[#FFF] hover:border-t-[#1F2937] mt-6">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;