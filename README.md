# React Shopping Cart

A React-based shopping cart application with product browsing, cart management, and Somali mobile payment integration (Zaad, Sahal, EVC Plus) via the Waafi API.

## Features

- **Product Grid** — Browse available products with images, names, and prices
- **Cart Management** — Add/remove items from cart, view cart total
- **Payment Processing** — Integrated payment form with Zaad, Sahal, and EVC Plus options
- **Responsive Design** — Works on mobile and desktop

## Tech Stack

- React 19
- React Router DOM
- Create React App
- Axios (for API calls)
- CSS custom styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Running the App

```bash
npm start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

This creates a production build in the `build` folder.

## Note

This app integrates with a third-party payment gateway (Waafi). API credentials are configured separately in an environment file that is not included in this README.

## Project Structure

```
src/
├── component/          # Reusable UI components
│   ├── CartProducts.jsx   # Cart display with product list and total
│   ├── Header.jsx         # Application header
│   ├── Payment.jsx        # Payment form with payment method selection
│   ├── Product.jsx        # Individual product card
│   └── Products.jsx       # Product grid component
├── pages/              # Page components
│   ├── about.js         # About page
│   ├── cart.js          # Shopping cart page
│   ├── contact.js       # Contact page
│   └── home.js          # Home page with product listing
├── shopContext.js      # React context for state management (cart state, products, totals)
├── shopReducer.js      # Reducer for ADD_TO_CART and REMOVE_FROM_CART actions
└── App.js              # Main app component with routing
```

## How It Works

1. **Product Listing** — The home page displays products fetched from a local `products` array
2. **Cart Management** — Click "+" to add items, "-" to remove. Cart state is managed via React Context (`shopContext.js`) with a reducer
3. **Payment** — Users select a payment method (Zaad, Sahal, or EVC Plus), enter a phone number, and submit the form. The payment data is sent to the Waafi API endpoint

## Payment Methods

- **Zaad** — Somali mobile money service
- **Sahal** — Somali mobile money service
- **EVC Plus** — Somali electronic wallet service

## Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Router DOM](https://reactrouter.com/en/main/start/tutorial)

---

*Built with ❤️ using React and modern web technologies*