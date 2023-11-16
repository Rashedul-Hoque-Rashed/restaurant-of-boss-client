import PropTypes from 'prop-types';

const MenuItems = ({ item }) => {
    return (
        <div className='flex gap-8'>
            <img src={item.image} alt="" className='w-[118px] h-[104px] rounded-full rounded-tl-none'/>
            <div>
                <div className='flex justify-between items-center'>
                    <h4 className='text-xl font-cinzel text-[#151515] font-normal'>{item.name}------------------</h4>
                    <p className='text-[#BB8506] text-xl font-inter font-normal'>${item.price}</p>
                </div>
                <p className='text-base font-normal font-inter text-[#737373] mt-2'>
                    {item.recipe}
                </p>
            </div>
        </div>
    );
};

MenuItems.propTypes = {
    item: PropTypes.object
}

export default MenuItems;