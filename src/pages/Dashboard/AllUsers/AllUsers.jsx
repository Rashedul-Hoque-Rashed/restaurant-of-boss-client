import { RiDeleteBin5Line } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";


const AllUsers = () => {
    const axios = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('/users');
            return res.data
        }
    })

    const handleAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will make him admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`/users/${user._id}`)
                    .then(res => {
                        if (res?.data?.modifiedCount > 0) {
                            Swal.fire({
                                title: "Congress!",
                                text: `${user.name} is an admin now`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }

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
                axios.delete(`/users/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
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
            <SectionTitle subHeader={'How many??'} header={'MANAGE ALL USERS'}></SectionTitle>
            <div className="bg-white w-[992px] mx-auto p-12 rounded-sm">
                <div className="mb-8">
                    <h4 className="text-3xl font-bold font-cinzel uppercase">Total users: {users.length}</h4>
                </div>
                <div className="overflow-x-auto rounded-t-2xl">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase font-semibold font-inter text-base h-[72px] text-white bg-[#D1A054]">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th className="text-xl font-bold">
                                        {index + 1}
                                    </th>
                                    <td className="text-[#737373]">
                                        {user.name}
                                    </td>
                                    <th className="text-[#737373]">
                                        {user.email}
                                    </th>
                                    <th className="text-[#737373]">
                                        { user.role === 'admin' ? 'admin' : <button onClick={() => handleAdmin(user)} className="bg-[#D1A054] text-white rounded-xl">
                                            <FaUsers className="w-12 h-12 p-3" />
                                        </button>}
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(user._id)} className="bg-[#B91C1C] text-white rounded-xl">
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

export default AllUsers;