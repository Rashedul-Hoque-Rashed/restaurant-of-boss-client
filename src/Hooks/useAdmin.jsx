import { useQuery } from "@tanstack/react-query";
import Auth from "./Auth";
import useAxios from "./useAxios";


const useAdmin = () => {
    
    const {user} = Auth();
    const axios = useAxios();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axios.get(`/users/admin/${user?.email}`)
            return res?.data?.isAdmin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;