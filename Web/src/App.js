import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Footer from './customer/Footer/Footer';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
