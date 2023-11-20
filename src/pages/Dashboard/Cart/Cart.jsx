import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = useCart()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axios = useAxios();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/carts/${id}`)
                .then(res => {
                    if(res?.data?.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }
                })
                
            }
        });
    }


    return (
        <div>
            <SectionTitle subHeader={'My Cart'} header={'WANNA ADD MORE?'}></SectionTitle>
            <div className="bg-white w-[992px] mx-auto p-12 rounded-sm">
                <div className="flex items-center justify-between mb-8">
                    <h4 className="text-3xl font-bold font-cinzel uppercase">Total orders: {cart.length}</h4>
                    <h4 className="text-3xl font-bold font-cinzel uppercase">Total price: ${totalPrice}</h4>
                    {
                        cart.length ? <Link to="/dashboard/payment">
                        <button className="uppercase text-xl font-bold font-cinzel text-white bg-[#D1A054] px-4 py-3 rounded-xl">Pay</button>
                        </Link> : <button disabled className="btn uppercase text-xl font-bold font-cinzel px-4 py-3 rounded-xl">Pay</button>
                    }
                </div>
                <div className="overflow-x-auto rounded-t-2xl">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase font-semibold font-inter text-base h-[72px] text-white bg-[#D1A054]">
                                <th></th>
                                <th>Item image</th>
                                <th>Item name</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th className="text-xl font-bold">
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-[#737373]">
                                        {item.name}
                                    </td>
                                    <th className="text-[#737373]">
                                        ${item.price}
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="bg-[#B91C1C] text-white rounded-xl">
                                            <RiDeleteBin5Line className="w-12 h-12 p-3" />
                                        </button>
                                    </th>
                                </tr>)
                            }



                        </tbody>


                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;