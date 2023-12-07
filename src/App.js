import './App.css';
import Home from './Home';
import Category from './Category';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
