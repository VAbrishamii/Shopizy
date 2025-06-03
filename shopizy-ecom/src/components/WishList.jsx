import { Heart } from "lucide-react";
import { WishListContainer } from "../styles/WishListstyles";
import useWishlistStore from "../store/useWishlistStore";
/**
 * WishList component that allows users to add or remove products from their wishlist.
 * It uses a custom store to manage the wishlist state and provides visual feedback
 * on whether a product is in the wishlist or not.
 */
const WishList = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const isWishListed = wishlist.some((item) => item.id === product.id);

  const handleWishList = () => {
    if (isWishListed) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  return (
    <WishListContainer
      $isActive={isWishListed}
      onClick={handleWishList}
      aria-label={isWishListed ? "Remove from wishlist" : "Add to wishlist"}>
      <Heart
        size={18}
        onClick={handleWishList}
        fill={isWishListed ? "red" : "none"}
        color={isWishListed ? "red" : "black"}
      />
    </WishListContainer>
  );
};
export default WishList;
