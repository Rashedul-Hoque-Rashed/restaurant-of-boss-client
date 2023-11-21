import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosOpen from "./useAxiosOpen";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('http://restaurant-of-boss-server.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => setMenu(data))
    // }, [])

    const axios = useAxiosOpen()

    const {data: menu = [], refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios.get('/menu')
            return res.data
        }
    })

    return [menu, refetch];
};

export default useMenu;