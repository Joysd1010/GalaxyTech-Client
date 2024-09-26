import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://galaxytechserver.onrender.com/',
   
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;