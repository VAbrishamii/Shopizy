import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import useCartStore from "../store/useCartStore";
import PriceDisplay from "../components/PriceDisplay";
import RatingStars from "../components/RatingStars";
import { ProductDescription, ProductTitle } from "../styles/CardStyles";
import { AddToCartProduct, ImageProduct, ProductWrapper } from "../styles/ProductPageStyle";

const ProductPage = () => {
  const { id } = useParams();
  const { data: products, isLoading, isError } = useProducts();
  const addToCart = useCartStore((state) => state.addToCart);
  // console.log('object', products);

  if (isLoading) return <h2>Loading product...</h2>;
  if (isError) return <h2>Failed to load product. Please try again.</h2>;

  const product = products.data.find((product) => product.id === id);
  if (!product) return <h2>Product not found</h2>;

  return (
    <ProductWrapper>
     
      <ImageProduct src={product.image.url} alt={product.image.alt} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <PriceDisplay
        price= {product.price}
        discountedPrice={product.discountedPrice}
      />
       <AddToCartProduct onClick={() => addToCart(product)} />
      <RatingStars rating={product.rating} />
    </ProductWrapper>
  );
};

export default ProductPage;
