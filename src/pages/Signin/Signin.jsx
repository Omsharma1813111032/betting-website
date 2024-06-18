import SignIn from "../../assets/SignIn.png"
import "./Signin.css"
import HR from "../../assets/signInHr.svg"
import Facebook from "../../assets/Facebook.svg"
import Apple from "../../assets/apple.svg"
import YT from "../../assets/Google.svg"
import { NavLink, useNavigate } from "react-router-dom"
import SendOtp from "../../assets/SendOtpButton.svg"
import { useState } from "react"
import { toast } from "react-toastify"


const Signin = () => {

    const [phone,setPhone] = useState(0)
    const navigate = useNavigate()

    const handleSendOtp = () =>{

        if(!phone){
            toast.error("Phone no. Required")
            return
        }

        toast.success("Please enter OTP")
        localStorage.setItem("phone",phone)
        navigate("/verify")



    }


    return (
        <div className="signInMainDiv">

            <div className="signImage">
                <img src={SignIn} />
            </div>



            <div className="signInHeading">
                <p className="signInHead">
                    Welcome
                </p>
                <p className="signInSubHeading">
                    sign in to access your account
                </p>
            </div>



            <div className="signInNumber">
                <input type="number" name="mobile" placeholder="Enter your Number" onChange={(e)=>{setPhone(e.target.value)}} />
            </div>



            <div className="signInWith ">

                <img src={HR} />

                <div className="socialListSignIn">
                    <div className="socialSignIn">
                        <img src={Facebook} width={80} />
                    </div>
                    <div className="socialSignIn">
                        <img src={YT} width={80} />
                    </div>
                    <div className="socialSignIn">
                        <img src={Apple} width={80} />
                    </div>
                </div>



            </div>



            <div className="sendOtpBtn" onClick={handleSendOtp} >


                {/* <NavLink to="/verify"> */}

                    <button className="btn">
                        <img src={SendOtp} />
                    </button>

                {/* </NavLink> */}



                <p className="alreadyUser">
                    New Member?
                    <NavLink to="/register" >
                        <span className="already_user"> Register now </span>
                    </NavLink>
                </p>

            </div>



            <div className="signinFooter">
                <p>Term of use</p>
                <p>Privacy Policy</p>
            </div>




        </div>
    )
}

export default Signin