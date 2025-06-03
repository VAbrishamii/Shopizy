// Desc: Homepage of the website
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { ProductListContainer } from "../styles/CardStyles";
import { useOutletContext } from "react-router-dom";
import useCartstore from "../store/useCartStore";
import Loader from "../components/Loader";
/**
 * @returns HomePage component that displays a list of products fetched from an API.
 * It includes a search bar for filtering products and uses a custom hook to manage product data.
 * The component also integrates with a cart store to manage the shopping cart state.
 */
const HomePage = () => {
  const outletContext = useOutletContext() || {};
  const cartIconRef = outletContext.cartIconRef;

  const { data: products, isLoading, isError } = useProducts();
  const cart = useCartstore((state) => state.cart) || [];

  if (isLoading) return <Loader />;
  if (isError) return <p>Something went wrong</p>;

  return (
    <>
      <SearchBar />

      <ProductListContainer>
        {products.data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartIconRef={cartIconRef}
          />
        ))}
      </ProductListContainer>
    </>
  );
};

export default HomePage;
