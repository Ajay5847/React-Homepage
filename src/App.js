import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
