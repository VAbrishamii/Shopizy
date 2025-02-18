// Desc: Homepage of the website
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";


const HomePage = () => {
  const { data: products, isLoading, isError } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;
  return (
    <>
      <SearchBar />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
      
    </>
  );
};

export default HomePage;
