import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  try {
  const { data } = await axios.get("https://v2.api.noroff.dev/online-shop");
  console.log('data', data) ;
  return data;
} catch (error) {
console.error ("Error fetching products", error);
throw new Error(error.response?.data?.message|| "An error occurred");
}

};

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        retry: 1, 
    onError: (error) => console.error("React Query Error:", error.message),
    });
    };

   