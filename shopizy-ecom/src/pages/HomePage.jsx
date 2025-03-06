// Desc: Homepage of the website
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { ProductListContainer } from "../styles/CardStyles";
import { useOutletContext } from "react-router-dom";
import useCartstore  from "../store/useCartStore";  



const HomePage = () => {
  const outletContext = useOutletContext() || {}; 
  const cartIconRef = outletContext.cartIconRef;
  console.log('cartIconRef in HomePage:', cartIconRef);

  const { data: products, isLoading, isError } = useProducts();
  const cart = useCartstore((state) => state.cart) || [];
  console.log('cart in HomePage:', cart);

  

 

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <>
      <SearchBar />
    
      <ProductListContainer>
      {products.data.map((product) => (
        <ProductCard key={product.id} product={product}  cartIconRef={cartIconRef}/>
      ))}
    </ProductListContainer>
      
    </>
  );
};

export default HomePage;
