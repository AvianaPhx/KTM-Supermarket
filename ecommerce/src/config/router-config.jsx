import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductGrid from "../pages/product-grid";
import Login from "../Login";
import Points from "../pages/points";
import Faq from "../pages/Faq";
import Rewards from "../pages/rewards";
import UserProfile from "../pages/User-profile.jsx";
import HomePage from "../pages/HomePage";




const RouterConfigComponent = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                {/* <Route path="/logout" element={<Login/>} /> */}
                <Route path="/products" element={<ProductGrid/>} />
                <Route path="/more-info" element={<Rewards/>} />
                <Route path="/points" element={<Points/>} />
                <Route path="/faq" element={<Faq/>} />
                <Route path="/rewards" element={<Rewards/>} />
                <Route path="/user-profile" element={<UserProfile/>} />
                
                {/* <Route path="/cart" element={<Cart/>} /> */}
                {/* <Route path="/signup" element={<RegisterPage/>} /> */}
                
                {/* <Route path="/category/:slug" element={<CategoriesDetailPage/>}/>
                <Route path="/category/:slug/:childSlug" element={<CategoriesDetailPage/>}/> */}

                {/* <Route path="*" element={<PageNotFound/>} /> */}
            </Routes>
        </BrowserRouter>
    
    </>)
}
export default RouterConfigComponent;