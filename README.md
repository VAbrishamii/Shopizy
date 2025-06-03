# 🛍️ Shopizy - React E-Commerce Website

A modern and responsive eCommerce website built using React, Vite, React Router, Styled Components, Zustand, and React Query. The app allows users to browse products, add items to their cart, and complete the checkout process. As well as test for WCAG 2.1 by Wavw and aXe DevTools.

---

## 📜 Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#tech-stack)
- [Demo](#demo)

## 🚀 Installation

Follow these steps to set up the project locally on your machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/VAbrishamii/Shopizy.git
   cd shopizy-ecom
   npm install
   npm start

   ```

2. Open http://localhost:3000 in your browser to see the application in action.

## ✨ Features

- **Product Listing** - Fetch and display products from the Noroff API.
- **Product Details Page** - View detailed information about each product.
- **Search Functionality** - A search bar to filter products by name.
- **Shopping Cart** - Add & remove items from the cart with real-time updates.
- **CheckOut Success Pgae** - Confirmation page after a successful purchase.
- **Dark Mode Toggle** - Supports light and dark mode using a theme switcher.
- **Fully Responsive** - Works on mobile, tablet, and desktop screens.
- **Styled Components** - Modern design with Styled Components for consistent theming.
- **Performance Optimized** - Tested with Lighthouse for best practice and accessibility.
- **Dynamic Page Layout** - Auto-centering content on larger screens.

## 🛠️ Tech Stack

- **Frontend:** React (Vite), React Router
- **State Management:** Zustand for cartstore, theme and wishlist.
- **Styling:** Styled Components, CSS Grid
- **Data Fetching:** React Query (for API calls)
- **Routing:** React Router
- **Icons:** FontAwesome, Material Icons
- **Build Tool:** Vite
- **API:** Noroff Online Shop API

## ✅ Improvements

- Replaced array index keys with stable `id` values in `map()`
- Ensured all `useEffect` hooks include proper dependencies.
- Delete and fix all spaces.
- Added a styled `Loader` component for user feedback during loading states

## 💡 Future Enhancements

- Integrate real email service (e.g., EmailJS or Formspree)
- Add toast notifications for better global feedback
- Add basic unit tests with React Testing Library

## 🌐 Demo

https://shopziy-ecom.netlify.app/
