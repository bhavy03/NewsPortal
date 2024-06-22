import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import CardDetail from './pages/CardDetail';
import Loading from "./components/Loading";
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast'
import Pricing from './pages/Pricing.jsx';

const App = () => {
  return (
    <>
      <div className="md:flex md:flex-col md:text-black">
        <div className=' bg-white relative stick md:px-32 z-10 backdrop-blur-md text-black'>
          <nav className="md:py-6 relative stick p-4 ">
            <Navbar />
          </nav>
        </div>
        <main className=" flex bg-white rounded-sm stop md:px-32">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/price" element={<Pricing />} />
              <Route path="/card/:cardId" element={<CardDetail />} />
            </Routes>
          </Suspense>
          <Toaster />
        </main>
      </div>
    </>
  )
}

export default App
