import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';
import ReservationPage from './pages/ReservationPage';
import RestaurantPage from './pages/RestaurantPage';

const App =()=> {
  return <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path={ROUTES.HOME} element={<Home/>} />
      <Route path={ROUTES.ADIMN_PAGE} element={<AdminPage/>} />
      <Route path={ROUTES.PROFILE_PAGE} element={<ProfilePage/>} />
      <Route path={ROUTES.RESERVATION_PAGE} element={<ReservationPage/>} />
      <Route path={ROUTES.RESTAURANT_PAGE} element={<RestaurantPage/>} />
      <Route path={ROUTES.FALLBACK} element={<div>404 PAGE NOT FOUND</div>} />
    </Routes>
    
    <Footer />
    </BrowserRouter>
  </div>
}

export default App;
