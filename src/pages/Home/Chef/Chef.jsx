import SectionTitle from './../../../Components/SectionTitle';
import img from "../../../assets/home/slide1.jpg"

const Chef = () => {
    return (
        <div className='mt-28 mx-auto max-w-[1280px]'>
            <SectionTitle subHeader={'Should Try'} header={'CHEF RECOMMENDS'} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-[#F3F3F3] text-center rounded-sm'>
                    <img src={img} alt="" className='object-cover w-[424px] h-[300px]' />
                    <h4 className='text-2xl font-semibold font-inter text-[#151515] mt-8 mb-2 px-10'>Caesar Salad</h4>
                    <p className='text-[#151515] font-inter leading-6 mb-6 px-10'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="uppercase px-8 py-3 border-y-4 border-b-[#BB8506] border-t-[#F3F3F3] rounded-xl text-xl font-medium font-inter text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-y-[#1F2937] mb-8">
                    Add to cart
                    </button>
                </div>
                <div className='bg-[#F3F3F3] text-center rounded-sm'>
                    <img src={img} alt="" className='object-cover w-[424px] h-[300px]' />
                    <h4 className='text-2xl font-semibold font-inter text-[#151515] mt-8 mb-2 px-10'>Caesar Salad</h4>
                    <p className='text-[#151515] font-inter leading-6 mb-6 px-10'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="uppercase px-8 py-3 border-y-4 border-b-[#BB8506] border-t-[#F3F3F3] rounded-xl text-xl font-medium font-inter text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-y-[#1F2937] mb-8">
                    Add to cart
                    </button>
                </div>
                <div className='bg-[#F3F3F3] text-center rounded-sm'>
                    <img src={img} alt="" className='object-cover w-[424px] h-[300px]' />
                    <h4 className='text-2xl font-semibold font-inter text-[#151515] mt-8 mb-2 px-10'>Caesar Salad</h4>
                    <p className='text-[#151515] font-inter leading-6 mb-6 px-10'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="uppercase px-8 py-3 border-y-4 border-b-[#BB8506] border-t-[#F3F3F3] rounded-xl text-xl font-medium font-inter text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-y-[#1F2937] mb-8">
                    Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chef;