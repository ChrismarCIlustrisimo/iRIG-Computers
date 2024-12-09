import React, { useState, useContext } from 'react';
import iRig1 from '../assets/iRig1.png';
import Searchbar from './Searchbar';
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaAngleDown } from "react-icons/fa"; // Import FaTimes for the close icon
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import CartPopup from './CartPopup';
import { useProductContext } from '../page.jsx'; // Ensure this path is correct

const categories = [
    { name: "Components", path: "/iRIG/components" },
    { name: "Peripherals", path: "/iRIG/peripherals" },
    { name: "Accessories", path: "/iRIG/accessories" },
    { name: "PC Furniture", path: "/iRIG/pc-furniture" },
    { name: "OS & Software", path: "/iRIG/os-software" },
    { name: "Laptops", path: "/iRIG/laptops" },
    { name: "Desktops", path: "/iRIG/desktops" },
];

const Navbar = ({ query, onQueryChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const { cart, increaseQuantity, decreaseQuantity, removeItem, setCart } = useProductContext(); // Ensure setCart is available

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const toggleCart = () => setIsCartOpen(prev => !prev);
    const toggleCategoryPopup = () => setIsCategoryPopupOpen(prev => !prev);

    const handleCheckoutOpen = () => {
        setIsCheckoutOpen(true);
        setIsCartOpen(false); // Close the cart when opening checkout
    };

    return (
        <header id="navbar" className="text-black fixed left-0 right-0 top-0 flex flex-col items-center bg-light-primary z-50">
            <div id="navbar-container" className="md:w-[60%] w-full flex items-center justify-around py-2 md:py-4 md:gap-2 gap-12">
                <div id="logo-container" className='flex gap-2 h-full items-center justify-center'>
                    {/* Conditional Rendering of Hamburger and Close Icons */}
                    {isMenuOpen ? (
                        <FaTimes
                            id="close-icon"
                            className="text-5xl cursor-pointer md:hidden text-white"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <GiHamburgerMenu
                            id="hamburger-menu"
                            className="text-5xl cursor-pointer md:hidden text-white"
                            onClick={toggleMenu}
                        />
                    )}
                    <Link to="/iRIG/">
                        <img id="logo" src={iRig1} alt="Website Logo" className="h-8 w-auto max-w-[150px] sm:max-w-[100px] md:max-w-full md:h-12" />
                    </Link>
                </div>
                <Searchbar
                    id="searchbar"
                    query={query}
                    onQueryChange={onQueryChange}
                    placeholderMessage="Search..."
                    className="hidden md:block w-[90%] md:w-[600px]" // Hides the search bar on mobile
                />
                <div id="cart-container" className="flex gap-2 items-center text-white text-xl font-medium transform transition-all duration-300 hover:scale-110">
                    <Badge
                        id="cart-badge"
                        badgeContent={cart.length}
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: '#E8B931',
                                color: 'white',
                            }
                        }}
                    >
                        <MdOutlineShoppingCart
                            id="cart-icon"
                            className="md:text-2xl text-3xl cursor-pointer " 
                            onClick={toggleCart} 
                        />
                    </Badge>

                    <p id="cart-text" className="hidden md:block cursor-pointer" onClick={toggleCart}>Cart</p>
                </div>
            </div>
            <nav id="navbar-menu" className={`bg-white w-full py-2 flex justify-center shadow-lg ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <div id="menu-links" className="flex flex-col md:flex-row justify-center md:gap-24 items-start w-full px-4 md:px-0">
                    <Link id="home-link" to={"/iRIG/"} className="text-dark-TEXT hover:text-gray-400 transition py-2">Home</Link>
                    <div id="products-dropdown" className="relative">
                        <button id="products-button" className="text-dark-TEXT hover:text-gray-400 transition py-2" onClick={toggleCategoryPopup}>
                            Products <FaAngleDown className='ml-2 inline' />
                        </button>
                        {isCategoryPopupOpen && (
                            <div id="category-popup" className="md:absolute block z-50 md:bg-white md:shadow-md bg-gray-100 rounded-md mt-2 p-2 md:w-64 w-full ">
                                {categories.map((category) => (
                                    <Link
                                        key={category.name}
                                        to={category.path}
                                        id={`category-link-${category.name}`}  // Dynamically adding an id to each Link
                                        className="block py-1 hover:bg-gray-200 transition"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link id="location-link" to={"/iRIG/our-store"} className="text-dark-TEXT hover:text-gray-400 transition py-2">Location</Link>
                    <Link id="contact-link" to={"/iRIG/contact-us"} className="text-dark-TEXT hover:text-gray-400 transition py-2">Contact Us</Link>
                </div>
            </nav>
            <CartPopup
                isOpen={isCartOpen}
                onClose={toggleCart}
                cartItems={cart}
                onIncreaseQuantity={increaseQuantity}
                onDecreaseQuantity={decreaseQuantity}
                onRemoveItem={removeItem}
                setCart={setCart}
            />
        </header>
    );
};

export default Navbar;
