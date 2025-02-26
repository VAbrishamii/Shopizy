import styled from "styled-components";
import { ShoppingBagIcon} from "@heroicons/react/24/outline";

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    `;

export const ImageProduct = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
    object-position: top;
    transition: transform 0.3s;
    position: relative;
    `;
export const AddToCartProduct = styled(ShoppingBagIcon)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    width: 22px;
    height: 22px;
    align-self: flex-end;
    z-index: 10;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.1);
    }
    `;