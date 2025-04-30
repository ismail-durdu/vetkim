import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import Signup from "./pages/signupPage";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import Clinic from "./pages/clinicsPage";
import Header from "./components/header";
import Profile from "./pages/profile";
import Features_temp from "./pages/featurestemp";
import Blog from "./pages/blog";
import { store } from "./store/store";
import { Provider } from "react-redux";
import CalendarPage from "./pages/CalendarPage";
import AboutUs from "./pages/aboutus";
import BlogDetail from "./pages/BlogDetail";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/features" element={<Features_temp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/clinics" element={<Clinic />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute>
                <CalendarPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
