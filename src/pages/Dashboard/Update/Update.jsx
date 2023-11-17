import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";


const Update = () => {

    const item = useLoaderData();
    const { _id, name, category, recipe, price } = item;

    const axios = useAxios();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data)

        const menuUpdateItem = {
            name: data.name,
            recipe: data.recipe,
            category: data.category,
            price: parseFloat(data.price)
        }
        const updateItem = await axios.patch(`/menu/${_id}`, menuUpdateItem);
        if (updateItem.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.name} updated successfully.`,
                showConfirmButton: false,
                timer: 1500
            });
            reset();
        }
    }


    return (
        <div>
            <h4 className="text-4xl font-normal font-inter text-[#151515] text-center mb-16">UPDATE ITEM</h4>
            <div className="bg-base-300 w-[992px] mx-auto p-12 rounded-sm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-xl text-[#444] font-semibold font-inter mb-2">Recipe Name</span>
                        </label>
                        <input {...register("name", { required: true })} className="input input-bordered  text-xl text-[#A1A1A1] font-normal font-inter px-8 py-5 h-[72px]" placeholder="Recipe Name" defaultValue={name} />
                    </div>
                    <div className="flex items-center gap-6 mb-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#444] font-semibold font-inter mb-2">Category</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered text-xl text-[#A1A1A1] font-normal font-inter px-8 py-5 h-[72px] w-[434px]">
                                <option disabled value="default">Category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soups">soups</option>
                                <option value="desserts">desserts</option>
                                <option value="drinks">drinks</option>

                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#444] font-semibold font-inter mb-2">Price</span>
                            </label>
                            <input {...register("price", { required: true })} className="input input-bordered  text-xl text-[#A1A1A1] font-normal font-inter px-8 py-5 h-[72px] w-[434px]" placeholder="Price" defaultValue={price} />
                        </div>
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-xl text-[#444] font-semibold font-inter mb-2">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} cols="30" rows="10" className="input input-bordered  text-xl text-[#A1A1A1] font-normal font-inter px-8 py-5 h-[250px]" placeholder="Recipe Details" defaultValue={recipe} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="text-xl font-bold normal-case font-inter text-white px-7 py-4 bg-gradient-to-r from-[#835D23] to-[#B58130] mt-8">
                            Update Recipe Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;