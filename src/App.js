import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ShopM from "./Components/ShopM";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <ShopM />
      <Footer />
    </>
  );
}

export default App;
