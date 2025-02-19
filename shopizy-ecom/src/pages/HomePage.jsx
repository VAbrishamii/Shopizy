// Desc: Homepage of the website
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { ProductListContainer } from "../styles/CardStyles";


const HomePage = () => {
  const { data: products, isLoading, isError } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;
  return (
    <>
      <SearchBar />
     <ProductListContainer>
      {products.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
      
    </>
  );
};

export default HomePage;
