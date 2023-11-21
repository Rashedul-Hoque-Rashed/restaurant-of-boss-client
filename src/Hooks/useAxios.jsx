import axios from "axios";
import { signOut } from "firebase/auth"
import { auth } from "../Config/firebase.config";


const instance = axios.create({
    baseURL: 'https://restaurant-of-boss-server.vercel.app',
  });

const useAxios = () => {

  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    config.headers.authorization = `bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    if(status === 401 || status === 403){
      await signOut(auth);

    }
    return Promise.reject(error);
  });

    return instance;
};

export default useAxios;