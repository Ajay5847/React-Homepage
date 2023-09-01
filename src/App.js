import './App.css';
import Description from './components/Description/Description';
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Description />
    </div>
  );
}

export default App;
