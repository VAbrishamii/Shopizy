import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";
import {
  WishlistDropdown,
  WishlistItem,
  WishlistImage,
  WishlistInfo,
  WishlistActions,
  EmptyMessage
} from "../styles/WishListstyles";

const Header = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  const handleMoveToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add to cart
    removeFromWishlist(product.id); // Remove from wishlist
  };

  

return (
    <WishlistDropdown>
      {wishlist.length === 0 ? (
        <EmptyMessage>Your wishlist is empty.</EmptyMessage>
      ) : (
        wishlist.map((product) => (
          <WishlistItem key={product.id}>
            <Link to={`/product/${product.id}`}>
             <WishlistImage src={product.image.url} alt={product.title} />
            </Link>
            <WishlistInfo>
              <p>{product.title}</p>
              <strong>${product.price.toFixed(2)}</strong>
            </WishlistInfo>
            <WishlistActions>
            <button onClick={() => handleMoveToCart(product)}>
                <ShoppingBagIcon />
              </button>
              <button onClick={() => removeFromWishlist(product.id)}>
                <Trash2 size={18} color="red" />
              </button>
            </WishlistActions>
          </WishlistItem>
        ))
      )}
      {/* {wishlist.length > 0 && <Link to="/wishlist">View Wishlist</Link>} */}
    </WishlistDropdown>
  );
};

export default Header;
