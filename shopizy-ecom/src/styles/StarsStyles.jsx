import styled from "styled-components";
import { Star } from "lucide-react"; 

export const StarsContainer = styled.div`
  display: flex;
  gap: 3px;
  margin: 5px 0;
`;

export const StarIcon = styled(Star).attrs(({ $filled }) => ({
    // ✅ Ensuring color and background color are correctly applied
    style: { 
      color: $filled ? "#FFD700" : "#B3B3B3",  // Gold if filled, gray if not
      fill: $filled ? "#FFD700" : "transparent",
     
    },
  }))`
    width: 15px;
    height: 15px;
    transition: background-color 0.3s ease;
  `;