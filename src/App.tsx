import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import Signup from "./pages/signupPage";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import Header from "./components/header";
import Profile from "./pages/profile";
import Features_temp from "./pages/featurestemp";
import PetHealth from "./pages/pethealth";
import { store } from "./store/store";
import { Provider } from "react-redux";
import CalendarPage from "./pages/CalendarPage";


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pethealth" element={<PetHealth />} />
          <Route path="/calendar" element={<CalendarPage />} /> 
          <Route path="/features" element={<Features_temp />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
