import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import Auth from "../../../Hooks/Auth";


const PaymentHistory = () => {

    const {user} = Auth();
    const [payment, setPayment] = useState([]);
    const axios = useAxios();
    useEffect(() => {
        axios(`/payments/${user.email}`)
            .then(res => {
                setPayment(res.data)
            })
    }, [axios, user.email])

    return (
        <div>
            <SectionTitle subHeader={'At a Glance!'} header={'PAYMENT HISTORY'}></SectionTitle>
            <div className="bg-white w-[992px] mx-auto p-12 rounded-sm">
                <div className="flex items-center justify-between mb-8">
                    <h4 className="text-3xl font-bold font-cinzel uppercase">Total Payments: {payment.length}</h4>
                </div>
                <div className="overflow-x-auto rounded-t-2xl">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase font-semibold font-inter text-base h-[72px] text-white bg-[#D1A054]">
                                <th></th>
                                <th>Email</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                payment.map((item, index) => <tr key={item._id}>
                                    <th className="text-xl font-bold">
                                        {index + 1}
                                    </th>
                                    <td className="text-[#737373]">
                                        {item.email}
                                    </td>
                                    <th className="text-[#737373]">
                                        ${item.price}
                                    </th>
                                    <th className="text-[#737373]">
                                        {item.date}
                                    </th>
                                    <td className="text-[#737373]">
                                        {item.status}
                                    </td>
                                </tr>)
                            }



                        </tbody>


                    </table>
                </div>

            </div>
        </div>
    );
};

export default PaymentHistory;