import axios from "axios";



const instance = axios.create({
    baseURL: 'https://restaurant-of-boss-server.vercel.app',
  });


const useAxiosOpen = () => {
    return instance;
};

export default useAxiosOpen;