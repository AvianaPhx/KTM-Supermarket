import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx';
import ProductGrid from './components/product-grid.jsx';
import Footer from './components/footer.jsx';

//Header ra footer waku ko rakha
//Product Grid Vaneko chai Product Page
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ProductGrid />
    <Footer />
  </StrictMode>,
)