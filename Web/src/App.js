import './App.css';
import Navigation from './customer/components/navigation/Navigation.jsx';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Footer from './customer/Footer/Footer';
// import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
         {/* <Product/> */}
         <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
