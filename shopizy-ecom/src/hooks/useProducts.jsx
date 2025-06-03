import { useQuery } from "@tanstack/react-query";
import axios from "axios";
/**
 * 
 * @returns useProducts hook that fetches product data from an API.
 * It uses React Query for data fetching and caching.
 * The hook returns the product data, loading state, and error state.
 */
const fetchProducts = async () => {
  try {
    const { data } = await axios.get("https://v2.api.noroff.dev/online-shop");

    return data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw new Error(error.response?.data?.message || "An error occurred");
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
