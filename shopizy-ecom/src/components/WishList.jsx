import { Heart } from "lucide-react";
import { WishListContainer } from "../styles/WishListstyles";
import useWishlistStore from "../store/useWishlistStore";

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
    <WishListContainer $isActive={isWishListed} onClick={handleWishList}>
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
