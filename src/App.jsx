import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/product-details/ProductDetails';
import { Routes, Route } from 'react-router-dom';
import ProductDescription from './pages/product-details/ProductDescription';
import ProductSpecifications from './pages/product-details/ProductSpecifications';
import RatingsReviews from './pages/product-details/RatingsReviews';
import FrequentlyTogether from './pages/product-details/FrequentlyTogether';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import SupplierList from './pages/SupplierList';
import Testing from './pages/Testing2';
import { useLocation } from 'react-router-dom';
import Todos from './pages/Todos';

function App() {
  const count = 0;
  const route = useLocation();

  console.log(route.pathname);
  return (
    <div>
      {route.pathname !== '/auth/login' && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product-details/:productId' element={<ProductDetails/>}>
          <Route path="description" element={<ProductDescription/>}></Route>
          <Route path="specifications" element={<ProductSpecifications/>}></Route>
          <Route path="rating-reviews" element={<RatingsReviews/>}></Route>
          <Route path="frequently-brought-together" element={<FrequentlyTogether/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/auth/register' element={<Register/>}></Route>
        <Route path='/auth/login' element={<Login/>}></Route>
        <Route path="/supplier-list" element={<SupplierList/>}/>
        <Route path="/testing" element={<Testing/>}></Route>
        <Route path="/todos" element={<Todos/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      {route.pathname !== '/auth/login' && <Footer/>}
    </div>
  )
}

export default App
