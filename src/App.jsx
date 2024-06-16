import { Routes, Route } from "react-router-dom"
import PreLoader from "./components/PreLoader/PreLoader"
import { useEffect, useState } from "react";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";
import Signin from "./pages/Signin/Signin";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import Register from "./pages/RegisterNow/Register";
import Profile from "./pages/Profile/Profile";




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
          <Routes>
            <Route path="/" element={<LoadingScreen />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/verify" element={<VerifyOtp />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      }



    </>
  )
}

export default App