import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosOpen from './../../../Hooks/useAxiosOpen';
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";


const imageHostingKey = import.meta.env.VITE_IMGBB_APIKEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`

const AddItems = () => {

    const axiosOpen = useAxiosOpen();
    const axios = useAxios();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imgFile = { image: data.image[0] }
        const res = await axiosOpen.post(imageHostingApi, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data?.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data?.data?.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            const addItem = await axios.post('/menu', menuItem);
            if (addItem.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} added successfully.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }
        }
    }

    return (
        <div>
            <SectionTitle subHeader={"What's new?"} header={'ADD AN ITEM'}></SectionTitle>
            <div className="bg-base-300 w-[992px] mx-auto p-12 rounded-sm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-xl text-[#444] font-semibold font-inter mb-2">Recipe Name</span>
                        </label>
                        <input {...register("name", { required: true })} className="input input-bordered  text-xl text-[#A1A1A1] font-normal font-inter px-8 py-5 h-[72px]" placeholder="Recipe Name" />
                    </div>
                    <div className="flex items-center gap-6 mb-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#444] font-semibold font-inter mb-2">Category</span>
                            </label>
                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered text-xl text-[#A1A1A1] font-normal font-inter px-8 py-5 h-[72px] w-[434px]">
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
                            <input {...register("price", { required: true })} className="input input-bordered  text-xl text-[#A1A1A1] font-normal font-inter px-8 py-5 h-[72px] w-[434px]" placeholder="Price" />
                        </div>
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-xl text-[#444] font-semibold font-inter mb-2">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} cols="30" rows="10" className="input input-bordered  text-xl text-[#A1A1A1] font-normal font-inter px-8 py-5 h-[250px]" placeholder="Recipe Details" />
                    </div>
                    <div className="form-control w-full mb-4">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button type="submit" className="text-xl font-bold normal-case font-inter text-white px-7 py-4 bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-2 mt-8">
                        Add Item <ImSpoonKnife className="w-6 h-6" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;