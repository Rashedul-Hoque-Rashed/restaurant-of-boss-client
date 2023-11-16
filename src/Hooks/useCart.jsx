import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import Auth from "./Auth";


const useCart = () => {
    const { user } = Auth();
    const axios = useAxios()

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })

    return [cart, refetch]
};

export default useCart;