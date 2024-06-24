import { Routes, Route } from "react-router-dom"
import PreLoader from "./components/PreLoader/PreLoader"
import { useEffect, useState } from "react";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";
import Signin from "./pages/Signin/Signin";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import Register from "./pages/RegisterNow/Register";
import Profile from "./pages/Profile/Profile";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Terms from "./pages/TermsOfServices/Terms";
import GameScr from "./pages/GameScreen/GameScr";
import GameScr2 from "./pages/GameScreen2/GameScr2";




function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>

      {
        loading ? <PreLoader /> :
          <>
            <Routes>
              <Route path="/" element={<LoadingScreen />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/verify" element={<VerifyOtp />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/gamescreen" element={<GameScr />} />
              <Route path="/game" element={<GameScr2 />} />
              
            </Routes>
            <ToastContainer autoClose={1500} />
          </>
      }



    </>
  )
}

export default App
