import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import CreateNews from './pages/CreateItems/CreateNews';
import CreateProduct from './pages/CreateItems/CreateProduct';
import Home from './pages/Home/Home';
import NewsDetails from './pages/NewsDetails/NewsDetails';
import NewsPage from './pages/NewsPage/NewsPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SingUp/SignUp';
import { getNews } from './store/slices/newsSlice';
import { getProducts } from './store/slices/productSlice';


function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`/api/products`)
        dispatch(getProducts(data))
      } catch (err) {
        console.log(err);
      }
    }
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(`/api/news`)
        dispatch(getNews(data))
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
    fetchNews();
  }, [dispatch])
  return (
    <>
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/create-news" element={<CreateNews />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
