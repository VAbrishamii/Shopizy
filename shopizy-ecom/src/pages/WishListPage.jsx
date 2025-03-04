import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";
import {
  WishListContainer,
  WishlistGrid,
  WishlistItem,
  WishlistImage,
  WishlistInfo,
  WishlistActions,
  EmptyMessage,
} from "../styles/WishListstyles";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  // ✅ Move item from Wishlist to Cart
  const handleMoveToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add to cart
    removeFromWishlist(product.id); // Remove from wishlist
  };

  return (
    <WishListContainer>
      {wishlist.length === 0 ? (
        <EmptyMessage>Your wishlist is empty.</EmptyMessage>
      ) : (
        <WishlistGrid>
          {wishlist.map((product) => (
            <WishlistItem key={product.id}>
              {/*  Clickable Image - Goes to Product Page */}
              <Link to={`/product/${product.id}`}>
                <WishlistImage src={product.image.url} alt={product.title} />
              </Link>

              <WishlistInfo>
                <p>{product.title}</p>
                <strong>${product.price.toFixed(2)}</strong>
              </WishlistInfo>

              <WishlistActions>
                {/*Move to Cart Button */}
                <button onClick={() => handleMoveToCart(product)}>
                  <ShoppingBagIcon />
                </button>

                {/*  Remove from Wishlist Button */}
                <button onClick={() => removeFromWishlist(product.id)}>
                  <Trash2 size={18} color="red" />
                </button>
              </WishlistActions>
            </WishlistItem>
          ))}
        </WishlistGrid>
      )}
    </WishListContainer>
  );
};

export default WishlistPage;
