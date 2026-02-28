# Coldwater Creek Style E-commerce Website Specification

## 1. Project Overview

**Project Name:** EclipseLane (Fashion & Lifestyle E-commerce)

**Project Type:** DTC (Direct-to-Consumer) E-commerce Website

**Core Functionality:** A women's fashion and lifestyle e-commerce platform featuring clothing, shoes, accessories, and home goods with seamless shopping experience.

**Target Users:** Women aged 25-55 interested in fashion, lifestyle, and home products.

---

## 2. UI/UX Specification

### 2.1 Layout Structure

#### Header (Fixed)
- **Logo:** Left-aligned brand logo
- **Navigation Menu:** Center-aligned main categories
- **Utility Bar:** Right-aligned (Search, Account, Cart icons)
- **Promo Banner:** Top strip for announcements (optional)

#### Page Sections
| Section | Description |
|---------|-------------|
| **Hero Banner** | Full-width rotating carousel with featured collections |
| **Category Navigation** | Horizontal category pills/buttons |
| **New Arrivals** | Grid of latest products |
| **Featured Collections** | Themed product groupings |
| **Best Sellers** | Popular items carousel |
| **Brand Story** | Editorial content section |
| **Newsletter Signup** | Email capture CTA |
| **Footer** | Links, social media, payment icons |

#### Responsive Breakpoints
| Device | Width | Grid Columns |
|--------|-------|--------------|
| Mobile | < 768px | 2 columns |
| Tablet | 768px - 1024px | 3 columns |
| Desktop | > 1024px | 4 columns |

### 2.2 Visual Design

#### Color Palette
```
Primary Colors:
- #1A1A1A (Black/Dark Gray) - Text, headers
- #FFFFFF (White) - Backgrounds
- #F5F5F5 (Light Gray) - Secondary backgrounds

Accent Colors:
- #B8860B (Dark Goldenrod) - CTAs, highlights
- #8B4513 (Saddle Brown) - Secondary accents
- #D2691E (Chocolate) - Hover states

Neutral Colors:
- #E8E8E8 (Border gray)
- #999999 (Muted text)
- #F9F9F9 (Card backgrounds)
```

#### Typography
```
Primary Font: 'Playfair Display', serif (Headings)
Secondary Font: 'Lato', sans-serif (Body text)

Font Sizes:
- H1: 48px / 36px mobile
- H2: 36px / 28px mobile
- H3: 24px / 20px mobile
- Body: 16px
- Small: 14px
- Caption: 12px
```

#### Spacing System
```
Base unit: 8px
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
```

#### Visual Effects
- **Shadows:** Subtle box-shadow on cards: `0 2px 8px rgba(0,0,0,0.08)`
- **Hover:** Scale 1.02 + shadow elevation on product cards
- **Transitions:** 0.3s ease for all interactive elements
- **Border Radius:** 4px for buttons, 8px for cards
- **Images:** Aspect ratio 3:4 for product images

### 2.3 Components

#### Navigation
- **Main Nav:** Horizontal menu with dropdown on hover
- **Mobile Nav:** Hamburger menu with slide-out drawer
- **Breadcrumbs:** Category path navigation

#### Product Card
```
Elements:
- Product Image (hover: alternate image)
- Product Name
- Price (sale: strikethrough original)
- Color Swatches (if applicable)
- Quick Add button (on hover)
- Wishlist heart icon

States:
- Default: Standard display
- Hover: Image zoom, show quick actions
- Out of Stock: Grayed overlay, "Sold Out" badge
- Sale: "Sale" badge, discounted price
```

#### Buttons
```
Primary Button:
- Background: #B8860B
- Text: #FFFFFF
- Padding: 12px 24px
- Border-radius: 4px
- Hover: Darken 10%

Secondary Button:
- Background: Transparent
- Border: 1px solid #1A1A1A
- Text: #1A1A1A
- Hover: Fill #1A1A1A, text white
```

#### Forms
- **Input Fields:** Border 1px #E8E8E8, focus: #1A1A1A
- **Labels:** Above input, 14px, #666666
- **Error State:** Red border #D32F2F, error message below

---

## 3. Functionality Specification

### 3.1 Core Features

#### Product Catalog
- [ ] Category pages (Women, Shoes & Accessories, Home & Gifts, Sale)
- [ ] Sub-category filtering
- [ ] Product listing with pagination (12/24/48 per page)
- [ ] Quick view modal

#### Search
- [ ] Real-time search suggestions
- [ ] Search by product name, description, SKU
- [ ] Recent searches history
- [ ] Search results page with filters

#### Product Detail Page
- [ ] Image gallery with thumbnails
- [ ] Size selector
- [ ] Color selector
- [ ] Quantity selector
- [ ] Add to Cart
- [ ] Add to Wishlist
- [ ] Product description
- [ ] Shipping information
- [ ] Related products

#### Shopping Cart
- [ ] Add/remove items
- [ ] Update quantities
- [ ] Apply coupon code
- [ ] Order summary
- [ ] Proceed to checkout (placeholder)

#### User Account (UI only)
- [ ] Login/Register forms
- [ ] My Account dashboard
- [ ] Order history
- [ ] Wishlist

### 3.2 Category Structure

```
Main Categories:
├── New Arrivals
├── Women
│   ├── Knit Tops & Tees
│   ├── Shirts & Blouses
│   ├── Sweaters
│   ├── Jeans
│   ├── Pants
│   ├── Dresses
│   ├── Jackets & Coats
│   └── Special Occasions
├── Shoes & Accessories
│   ├── Shoes
│   ├── Bags
│   ├── Jewelry
│   └── Scarves
├── Home & Gifts
│   ├── Decor
│   ├── Kitchen
│   └── Gift Sets
└── Sale
```

### 3.3 Collections/Editorial

```
Featured Collections:
- Spring/Summer Trends
- Fall Preview
- Weekend Ease
- Best Sellers
- First Look: New Season
- Canyon Spirit (Brand Story)
- Essentials
```

### 3.4 Data Handling

#### Product Data Structure
```javascript
{
  id: string,
  name: string,
  price: number,
  salePrice: number | null,
  images: string[],
  category: string,
  subcategory: string,
  colors: [{ name: string, hex: string, image: string }],
  sizes: [{ name: string, available: boolean }],
  description: string,
  details: string[],
  stock: number,
  isNew: boolean,
  isSale: boolean
}
```

#### State Management
- Cart items (localStorage)
- Wishlist items (localStorage)
- Search history (localStorage)
- User preferences (localStorage)

---

## 4. Technical Specification

### 4.1 Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Build | Vite |
| Styling | CSS Modules / SCSS |
| Images | Unsplash (CDN) |
| Fonts | Google Fonts (Playfair Display, Lato) |
| Hosting | Static (Cloudflare Pages / Netlify) |

### 4.2 File Structure

```
project/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── products.html           # Product listing
├── product-detail.html     # Single product
├── cart.html              # Shopping cart
├── css/
│   ├── main.css           # Global styles
│   ├── components.css     # Reusable components
│   ├── products.css       # Product pages
│   └── cart.css           # Cart styles
├── js/
│   ├── main.js            # Core functionality
│   ├── products.js        # Product logic
│   ├── cart.js            # Cart management
│   ├── search.js          # Search functionality
│   └── components.js      # UI components
├── images/                # Static images
└── data/
    └── products.json      # Product data
```

### 4.3 Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

## 5. Content Specification

### 5.1 Homepage Content

1. **Hero Banner**
   - Headline: "New Arrivals"
   - Subheadline: "Discover the latest styles for the season"
   - CTA: "Shop Now"

2. **Category Pills**
   - Tops, Bottoms, Dresses, Jackets, Shoes, Accessories

3. **New Arrivals Section**
   - 8 featured products
   - "Shop New Arrivals" link

4. **Collections**
   - Special Occasions
   - Weekend Ease
   - Best Sellers

5. **Brand Sections**
   - "The Edit" - Editorial content
   - Newsletter signup

### 5.2 Product Data Requirements

For each product:
- Minimum 2 images
- Name, price, sale price (if applicable)
- At least 1 color variant
- Size chart (XS, S, M, L, XL, or numeric)
- Brief description (50-100 words)
- Detailed specifications

---

## 6. Acceptance Criteria

### Visual Checkpoints
- [ ] Homepage loads with hero banner and product grid
- [ ] Navigation menu works on desktop and mobile
- [ ] Product cards display correctly with hover effects
- [ ] Cart icon shows item count
- [ ] Search returns relevant results
- [ ] All pages are responsive

### Functional Checkpoints
- [ ] Add to cart updates cart count
- [ ] Cart persists on page refresh (localStorage)
- [ ] Search filters products in real-time
- [ ] Category navigation filters products
- [ ] Product detail page shows all variants

### Performance
- [ ] First Contentful Paint < 1.5s
- [ ] Images lazy loaded
- [ ] No console errors

---

## 7. Similar Sites for Reference

1. **Coldwater Creek** - https://www.coldwatercreek.com/
2. **Birch Lane** - https://www.birchlane.com/
3. **Quince** - https://www.quince.com/
4. **Eileen Fisher** - https://www.eileenfisher.com/
5. ** Chico's** - https://www.chicos.com/

---

## 8. Notes

- This is a frontend-only implementation
- Cart and checkout are UI demonstrations
- Product data is stored in JSON file
- No backend/payment processing
- Images sourced from Unsplash (placeholder)
- Designed for demonstration purposes
