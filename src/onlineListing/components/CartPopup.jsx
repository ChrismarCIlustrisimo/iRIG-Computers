import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import CheckoutModal from './CheckoutModal';
import { API_DOMAIN } from '../../utils/constants';

const CartPopup = ({
    isOpen,
    onClose,
    cartItems = [],
    onIncreaseQuantity,
    onDecreaseQuantity,
    onRemoveItem,
    setCart,
}) => {
    const navigate = useNavigate();
    const baseURL = API_DOMAIN;
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    if (!isOpen) return null;

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.selling_price * (item.quantity || 1)), 0);

    const handleViewCart = () => {
        navigate('/iRIG/cart');
        onClose();
    };

    const handleRemoveItem = (id) => {
        const itemIndex = cartItems.findIndex(item => item.id === id);
        onRemoveItem(itemIndex);
        toast.success(`${cartItems[itemIndex].name} has been removed from your cart!`);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>
            <div className="absolute md:right-20 mt-16 md:w-[550px] bg-white border rounded-md shadow-lg z-50">
                <div className="p-4 w-full">
                    {cartItems.length === 0 ? (
                        <div className="w-full h-[80%] flex items-center justify-center">
                            <p>Your cart is empty.</p>
                        </div>
                    ) : (
                        <ul className="md:max-h-[320px] h-[50vh] overflow-y-auto">
                            {cartItems.map((item, index) => (
                                <li key={item.id} className="flex items-center py-4 border-b">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 mr-4 object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="font-semibold py-2">{item.name}</p>
                                        <div className='flex flex-col items-center w-[120px]' id={`cart-item-quantity-${item.id}`}>
                                            <div className="flex items-center justify-center w-[100px] gap-2 border-2 border-gray-200 px-2">
                                                <button 
                                                    id={`decrease-quantity-${item.id}`} 
                                                    className="p-1" 
                                                    onClick={() => onDecreaseQuantity(index)} 
                                                >
                                                    -
                                                </button>
                                                <span className="px-1 text-black" id={`quantity-display-${item.id}`}>{item.quantity || 1}</span>
                                                <button 
                                                    id={`increase-quantity-${item.id}`} 
                                                    className="p-1" 
                                                    onClick={() => onIncreaseQuantity(index)} 
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button 
                                                id={`remove-item-${item.id}`} 
                                                className="text-red-500" 
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <td className="p-4 text-center">
                                        <p className="text-light-primary font-bold">
                                            ₱ {(item.selling_price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </p>
                                    </td>
                                </li>
                            ))}
                        </ul>
                    )}
                    {cartItems.length > 0 && (
                        <div className="mt-4 flex justify-between items-center font-semibold text-lg px-6">
                            <span>Total</span>
                            <span className="text-light-primary">₱ {totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                    )}
                    <div className="mt-4 flex justify-start items-center gap-4 px-6">
                        <button 
                            id="view-cart-button" 
                            onClick={handleViewCart} 
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            View Cart
                        </button>
                        <button
                            id="checkout-button"
                            onClick={() => {
                                if (cartItems.length > 0) {
                                    setIsCheckoutModalOpen(true); // Open the checkout modal
                                } else {
                                    onClose(); // Close the cart popup if there are no items
                                }
                            }}
                            className={`px-4 py-2 ${cartItems.length > 0 ? 'bg-light-primary' : 'bg-gray-500'} text-white rounded`}
                        >
                            {cartItems.length > 0 ? 'Checkout' : 'Close'}
                        </button>
                    </div>
                </div>
            </div>

            {isCheckoutModalOpen && (
                <CheckoutModal
                    isOpen={isCheckoutModalOpen}
                    onRequestClose={() => setIsCheckoutModalOpen(false)}
                    items={cartItems}
                />
            )}
        </>
    );
};

export default CartPopup;
