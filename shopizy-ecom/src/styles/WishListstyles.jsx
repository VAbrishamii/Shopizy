// import styled from "styled-components";

// export const WishListContainer = styled.button`
//   position: absolute;
//   top: 0px;
//   left: 5px;
//   background: none;
//   border: none;
//   cursor: pointer;
//   font-size: 20px;
//   color: ${({ isActive }) => (isActive ? "red" : "black")};
//   transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
//   z-index: 10;

//   &:hover {
//     color: red;
//     transform: scale(1.1);
//   }
// `;

// export const WishlistDropdown = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 5px;
//   background: white;
//   border-radius: 8px;
//   box-shadow: ${({ theme }) => theme.colors.boxShadow};
//   width: 250px;
//   max-height: 300px;
//   overflow-y: auto;
//   padding: 10px;
//   z-index: 1000;
// `;

// export const WishlistItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 8px 0;
//   border-bottom: 1px solid #ddd;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

// export const WishlistImage = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 4px;
//   object-fit: cover;
// `;

// export const WishlistInfo = styled.div`
//   flex-grow: 1;
//   padding: 0 10px;

//   p {
//     margin: 0;
//     font-size: 14px;
//     color: ${({ theme }) => theme.colors.textPrimary};
//   }

//   strong {
//     font-size: 14px;
//     color: ${({ theme }) => theme.colors.primary};
//   }
// `;

// export const WishlistActions = styled.div`
//   display: flex;
// //   gap: 3px;

//   button {
//     background: none;
//     border: none;
//     cursor: pointer;
//     transition: transform 0.2s ease-in-out;

//     &:hover {
//       transform: scale(1.1);
//     }
//     svg {
//       width: 20px;
//       height: 20px;
//     }
//   }
// `;

// export const EmptyMessage = styled.p`
//   text-align: center;
//   font-size: 14px;
//   color: ${({ theme }) => theme.colors.textSecondary};
//   padding: 20px;
// `;
import styled from "styled-components";

export const WishListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const WishlistItem = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const WishlistImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
`;

export const WishlistInfo = styled.div`
  margin-top: 10px;
  p {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }
`;

export const WishlistActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    display: flex;
    align-items: center;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 20px;
`;
