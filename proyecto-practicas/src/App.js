import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./pages/mainPage";
import NavBar from "./components/navBar/navBar";
import ModalCitas from "./components/modalCitas";

function App() {
  return (
    <>
    <NavBar/>

    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/modalCitas" element={<ModalCitas/>} />
    </Routes>
    </>
  );
}

export default App;
