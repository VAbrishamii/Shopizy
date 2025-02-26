import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const ProductPage = () => {
    const { id } = useParams();
    const { data: products, isLoading, isError } = useProducts();
    // console.log('object', products);

    if (isLoading) return <h2>Loading product...</h2>;
    if (isError) return <h2>Failed to load product. Please try again.</h2>;
    
    const product = products.data.find((product) => product.id === id);
    if (!product) return <h2>Product not found</h2>;
    return (
        <div>
        <h1>{product.title}</h1>
        <img src={product.image.url} alt={product.image.alt} width="300" />
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        </div>
    );
    };

export default ProductPage;