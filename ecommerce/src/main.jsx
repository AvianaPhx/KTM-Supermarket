import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< Updated upstream
=======
import Header from './components/header.jsx';
import ProductGrid from './pages/product-grid.jsx';
import Footer from './components/footer.jsx';
import Points from './pages/points.jsx';
import Rewardsbox from './components/rewards-box.jsx';
import Rewards from './pages/rewards.jsx';
import Faq from './pages/Faq.jsx';
import RouterConfigComponent from './config/router-config.jsx';


>>>>>>> Stashed changes

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< Updated upstream
    <App />
=======
    <Header />
    <RouterConfigComponent/>
    <Footer />
>>>>>>> Stashed changes
  </StrictMode>,
)