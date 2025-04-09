import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-six-tawny-93.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
