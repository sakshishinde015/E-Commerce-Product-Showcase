# TrendHive E-commerce Showcase

## Live Demo
Check out the live website here: [TrendHive Live Site](https://sakshishinde015.github.io/E-Commerce-Product-Showcase/)

## Overview
TrendHive is a responsive e-commerce product showcase website built with HTML, CSS, JavaScript, and Bootstrap 5. It features dynamic product loading, real-time filtering, search functionality, cart/wishlist management using LocalStorage, and a visually enhanced home page with category cards and sales visibility.

## Features
- **Dynamic Product Display**: Products with images, prices, discounts, and labels (Sale, New, Best Seller).  
- **Horizontal Filter Bar**: Sticky bar with category, price, rating filters, and search.  
- **Search Functionality**: Search by name or description with a search icon.  
- **Cart & Wishlist**: Persistent storage using LocalStorage, with icon-enhanced buttons.  
- **Category Cards**: Home page cards with image overlays, centered text, and hover zoom effects.  
- **Sales and Offers**: Sales banner on home page, ribbon-style badges for product labels.  
- **Responsive Design**: Mobile-friendly navbar and collapsible filter bar using Bootstrap 5.  
- **Visual Enhancements**:
  - Hover effects on product and category cards (scale-up, shadow).  
  - Fade-in animations for products and categories using AOS.  
  - Modern color palette with CSS variables.  
  - Card footers for action buttons with icons.  

## Folder Structure
trendhive/
-│
-├── index.html
-├── products.html
-├── cart.html
├── wishlist.html
├── contact.html
├── about.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── index.js
│   ├── products.js
│   ├── cart.js
│   └── wishlist.js
│
├── data/
│   └── products.json
│
└── images/
    └── (product images: tote.jpg, headphones.jpg, vase.jpg, smartwatch.jpg, jacket.jpg, scarf.jpg, charger.jpg, pillows.jpg, jeans.jpg, sunglasses.jpg, speaker.jpg, wall_art.jpg, sweater.jpg, wallet.jpg, lamp.jpg)


## Technologies Used
- **HTML5**: Page structure  
- **CSS3**: Custom styling with CSS variables for theming  
- **JavaScript (Vanilla)**: Dynamic functionality, filtering, LocalStorage  
- **Bootstrap 5**: Responsive grid, components, and navbar  
- **Bootstrap Icons**: Icons for filters, buttons, and navigation  
- **AOS (Animate on Scroll)**: Fade-in animations  
- **Google Fonts (Poppins)**: Modern typography  
- **JSON**: Product data with fields for discounts and labels  
- **LocalStorage**: Persistent cart and wishlist  

## Usage
- **Home Page (`index.html`)**: Sales banner and category cards with overlays and hover effects. Click a category to filter products.  
- **Products Page (`products.html`)**: Sticky filter bar with icons, product grid with hover effects, ribbon badges, and card footers for actions.  
- **Cart Page (`cart.html`)**: View and remove cart items.  
- **Wishlist Page (`wishlist.html`)**: View and manage wishlist items.  
- **Contact Page (`contact.html`)**: Contact information.  
- **About Page (`about.html`)**: About TrendHive.

## Future Improvements
- Add user authentication for personalized carts/wishlists  
- Implement a checkout process  
- Enhance search with filters by brand or other attributes  
- Add more animations for button interactions  

&copy; 2025 TrendHive. All rights reserved.
