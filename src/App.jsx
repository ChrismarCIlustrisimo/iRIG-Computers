import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Add Navigate import
import ProductProvider from './onlineListing/page';

// Pages
import MainPage from './onlineListing/pages/ECommerce';
import StoreLocation from './onlineListing/pages/StoreLocation';
import ContactUs from './onlineListing/pages/ContactUs';
import Faq from './onlineListing/pages/Faq';
import ReturnPolicy from './onlineListing/pages/ReturnPolicy';
import Warranty from './onlineListing/pages/Warranty';
import CartPage from './onlineListing/pages/CartPage';

// Product Pages
import Laptops from './onlineListing/pages/productPage/Laptops';
import Desktops from './onlineListing/pages/productPage/Desktops';
import Accessories from './onlineListing/pages/productPage/Accessories';
import Components from './onlineListing/pages/productPage/Components';
import OSAndSoftware from './onlineListing/pages/productPage/OSAndSoftware';
import PCFurniture from './onlineListing/pages/productPage/PCFurniture';
import Peripherals from './onlineListing/pages/productPage/Peripherals';

// Components
import ViewProducts from './onlineListing/components/ViewProducts';
import Erceipt from './onlineListing/components/Erceipt';

function App() {
    console.log('ECommerce Import:', MainPage);
    return (
        <ProductProvider>
            <Router>  {/* Make sure Router is wrapping the Routes */}
                <Routes>
                    {/* Main E-commerce Routes */}
                    <Route path="/iRIG" element={<MainPage />} />
                    <Route path="/Ereceipt" element={<Erceipt />} />
                    <Route path="/iRIG/products/view/:id" element={<ViewProducts />} />
                    
                    {/* Utility and Miscellaneous Routes */}
                    <Route path="*" element={<Navigate to="/iRIG" />} />
                    
                    {/* Informational Pages */}
                    <Route path="/iRIG/our-store" element={<StoreLocation />} />
                    <Route path="/iRIG/contact-us" element={<ContactUs />} />
                    <Route path="/iRIG/warranty" element={<Warranty />} />
                    <Route path="/iRIG/return-policy" element={<ReturnPolicy />} />
                    <Route path="/iRIG/faq" element={<Faq />} />
                    
                    {/* Product Pages */}
                    <Route path="/iRIG/cart" element={<CartPage />} />
                    <Route path="/iRIG/laptops" element={<Laptops />} />
                    <Route path="/iRIG/desktops" element={<Desktops />} />
                    <Route path="/iRIG/accessories" element={<Accessories />} />
                    <Route path="/iRIG/peripherals" element={<Peripherals />} />
                    <Route path="/iRIG/pcfurniture" element={<PCFurniture />} />
                    <Route path="/iRIG/osandsoftware" element={<OSAndSoftware />} />
                    <Route path="/iRIG/components" element={<Components />} />
                </Routes>
            </Router>
        </ProductProvider>
    );
}

export default App;
