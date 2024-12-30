import React from 'react';
import { Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import "./index.css"
import SearchPage from './pages/searchPage';
import WatchPage from './pages/WatchPage';
import Footer from './components/Footer';
import NotFoundPage from './pages/404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/watch/:id' element={<WatchPage />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/*' element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </>
      
  );
}

export default App;
