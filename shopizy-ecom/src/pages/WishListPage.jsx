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
  WishlistActions,
  EmptyMessage,
} from "../styles/WishListstyles";
import { ProductDescription, ProductTitle } from "../styles/CardStyles";
import PriceDisplay from "../components/PriceDisplay";
import { CartDetails } from "../styles/CartStyles";
/**
 *
 * @returns WishlistPage component that displays the user's wishlist items.
 * It allows users to move items from the wishlist to the cart or remove them from the wishlist.
 * It uses custom hooks for managing wishlist and cart state, and styled-components for styling.
 * The component renders a list of wishlist items with product details, images, and action buttons.
 */
const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  // Move item from Wishlist to Cart
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

              <CartDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <PriceDisplay
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                />
              </CartDetails>

              <WishlistActions>
                {/* Move to Cart Button */}
                <button
                  onClick={() => handleMoveToCart(product)}
                  aria-label="Move to Cart">
                  <ShoppingBagIcon />
                </button>

                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  aria-label="Remove from Wishlist">
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
