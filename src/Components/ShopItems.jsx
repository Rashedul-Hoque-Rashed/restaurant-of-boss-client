import Swal from "sweetalert2";
import Auth from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import useAxios from "../Hooks/useAxios";
import useCart from "../Hooks/useCart";



const ShopItems = ({ item }) => {

    const { user } = Auth();
    const axios = useAxios();
    const Navigate = useNavigate();
    const [, refetch] = useCart();

    const handleAddToCart = (cart) => {
        if (user && user.email) {
            console.log(user.email, cart)
            const food = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                img: item.image,
                price: item.price
            }
            axios.post('/carts', food)
                .then(res => {
                    if (res?.data?.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${item.name} add to cart successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    refetch();
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/login')
                }
            });
        }
    }

    return (
        <div>
            <div className='bg-[#F3F3F3] rounded-sm relative'>
                <img src={item.image} alt="" className='object-cover w-[424px] h-[300px]' />
                <p className="text-base font-semibold text-white font-inter bg-[#111827] px-6 py-2.5 absolute right-5 top-5">${item.price}</p>
                <h4 className='text-2xl font-semibold font-inter text-[#151515] text-center mt-8 mb-2 px-10'>{item.name}</h4>
                <p className='text-[#151515] font-inter leading-6 mb-6 px-10'>{item.recipe}</p>
                <div className="text-center">
                    <button onClick={() => handleAddToCart(item)} className="uppercase px-8 py-3 border-y-4 border-b-[#BB8506] border-t-[#F3F3F3] rounded-xl text-xl font-medium font-inter text-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-y-[#1F2937] mb-8">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

ShopItems.propTypes = {
    item: PropTypes.object
}

export default ShopItems;