import './App.css';
import Home from './Home';
import Category from './Category';
import Source from './Source';
import ReadingList from './ReadingList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />}>
          <Route path="/category/:category/source/:source" element={<Source />} />
        </Route>
        <Route path="/readingList" element={<ReadingList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
