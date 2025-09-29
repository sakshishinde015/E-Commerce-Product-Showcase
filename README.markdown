# TrendHive E-commerce Showcase

## Overview
TrendHive is a responsive e-commerce product showcase website built with HTML, CSS, JavaScript, and Bootstrap 5. It features dynamic product loading from a JSON file, real-time filtering, search functionality, cart/wishlist management using LocalStorage, and a visually enhanced home page with category cards and sales visibility.

## Features
- **Dynamic Product Display**: Products from `data/products.json` with images, prices, discounts, and labels (Sale, New, Best Seller).
- **Horizontal Filter Bar**: Sticky bar with category, price, rating filters, and search, enhanced with Bootstrap Icons.
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
- **Bonus Features**:
  - Results count display (currently in `products.js` but not in UI).
  - Loading spinner during data fetch.
  - Error handling for failed JSON loads.

## Folder Structure
```
/trendhive/
├── index.html
├── products.html
├── cart.html
├── wishlist.html
├── contact.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   ├── products.js
│   ├── cart.js
│   ├── wishlist.js
├── data/
│   └── products.json
├── images/
│   └── (product images: tote.jpg, headphones.jpg, vase.jpg, smartwatch.jpg, jacket.jpg, scarf.jpg, charger.jpg, pillows.jpg, jeans.jpg, sunglasses.jpg, speaker.jpg, wall_art.jpg, sweater.jpg, wallet.jpg, lamp.jpg)
```

## Setup Instructions
1. Clone or download the project files.
2. Ensure the folder structure matches the above.
3. Place actual image files in the `images/` folder matching paths in `products.json` (e.g., `images/tote.jpg`). For testing, use placeholder URLs like `https://via.placeholder.com/200`.
4. Host on a local server to avoid CORS issues:
   - Use VS Code's Live Server extension.
   - Or run `python -m http.server 8000` and access `http://localhost:8000`.
5. Open `index.html` in a browser to start.

## Technologies Used
- **HTML5**: Page structure.
- **CSS3**: Custom styling with CSS variables for theming.
- **JavaScript (Vanilla)**: Dynamic functionality, filtering, LocalStorage.
- **Bootstrap 5**: Responsive grid, components, and navbar.
- **Bootstrap Icons**: Icons for filters, buttons, and navigation.
- **AOS (Animate on Scroll)**: Fade-in animations.
- **Google Fonts (Poppins)**: Modern typography.
- **JSON**: Product data with fields for discounts and labels.
- **LocalStorage**: Persistent cart and wishlist.

## Usage
- **Home Page (`index.html`)**: Sales banner and category cards with overlays and hover effects. Click a category to filter products.
- **Products Page (`products.html`)**: Sticky filter bar with icons, product grid with hover effects, ribbon badges, and card footers for actions.
- **Cart Page (`cart.html`)**: View and remove cart items.
- **Wishlist Page (`wishlist.html`)**: View and manage wishlist items.
- **Contact Page (`contact.html`)**: Contact information.
- **About Page (`about.html`)**: About TrendHive.

## Debugging Tips (If Products Don't Display)
- **Console Errors**: Check Developer Tools (F12 > Console) for `Failed to fetch`, `SyntaxError: JSON.parse`, or other errors.
- **Server Setup**: Use a local server (not `file://`) to load `products.json`.
- **File Paths**: Verify `data/products.json` and `images/` files exist.
- **JSON Validation**: Use jsonlint.com to check `products.json`.
- **Debug Logs**: `products.js` logs data loading, filtering, and rendering.
- **Test JSON**: Try a minimal `products.json` with one product:
  ```json
  [{"id":1,"name":"Test Product","category":"fashion","price":29.99,"rating":4.5,"image":"https://via.placeholder.com/200","description":"Test item","labels":["new"]}]
  ```

## Notes
- Replace placeholder image paths in `products.json` with actual files or URLs.
- The filter bar collapses vertically on mobile for usability.
- Colors: Primary (#2c3e50), Secondary (#3498db), Accent (#e74c3c), Success (#28a745), Warning (#ffc107).
- AOS animations enhance product and category loading.
- Sticky filter bar remains accessible while scrolling.

## Future Improvements
- Add user authentication for personalized carts/wishlists.
- Implement a checkout process.
- Enhance search with filters by brand or other attributes.
- Add more animations for button interactions.

&copy; 2025 TrendHive. All rights reserved.