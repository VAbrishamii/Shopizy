import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";
import {
  WishListContainerwrappper,
  WishlistList,
  WishlistItem,
  WishlistImage,
  WishlistInfo,
  WishlistActions,
  EmptyMessage,
} from "../styles/WishListstyles";
import { ProductDescription, ProductTitle } from "../styles/CardStyles";
import PriceDisplay from "../components/PriceDisplay";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  // ✅ Move item from Wishlist to Cart
  const handleMoveToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add to cart
    removeFromWishlist(product.id); // Remove from wishlist
  };

  return (
    <WishListContainerwrappper>
      {wishlist.length === 0 ? (
        <EmptyMessage>Your wishlist is empty.</EmptyMessage>
      ) : (
        <WishlistList>
          {wishlist.map((product) => (
            <WishlistItem key={product.id}>
              {/* Clickable Image - Goes to Product Page */}
              <Link to={`/product/${product.id}`}>
                <WishlistImage src={product.image.url} alt={product.title} />
              </Link>

              <WishlistInfo>

                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <PriceDisplay
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                />
              </WishlistInfo>

              <WishlistActions>
                {/* Move to Cart Button */}
                <button onClick={() => handleMoveToCart(product)}>
                  <ShoppingBagIcon />
                </button>

                {/* Remove from Wishlist Button */}
                <button onClick={() => removeFromWishlist(product.id)}>
                  <Trash2 size={18} color="red" />
                </button>
              </WishlistActions>
            </WishlistItem>
          ))}
        </WishlistList>
      )}
    </WishListContainerwrappper>
  );
};

export default WishlistPage;
