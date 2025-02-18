import { Link } from "react-router-dom";
import PriceDisplay from "./PriceDisplay";
import { CardContainer, ProductImage, ProductInfo, ProductTitle, ProductDescription } from "../styles/CardStyles";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }) => {
    return (
        <CardContainer>
        <ProductImage src={product.image.url} alt={product.title} />
        <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <PriceDisplay price={product.price} discountedPrice={product.discountedPrice}/>
            <RatingStars rating={product.rating} />

            <Link to={`/product/${product.id}`}>More</Link>
        </ProductInfo>
        </CardContainer>
    );
    };

    export default ProductCard;