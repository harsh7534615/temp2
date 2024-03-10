import "./App.css";

// components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<RegistrationPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
