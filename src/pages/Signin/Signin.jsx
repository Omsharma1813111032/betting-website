import SignIn from "../../assets/SignIn.png"
import "./Signin.css"
import HR from "../../assets/signInHr.svg"
import Facebook from "../../assets/Facebook.svg"
import Apple from "../../assets/apple.svg"
import YT from "../../assets/Google.svg"
import { NavLink, useNavigate } from "react-router-dom"
// import SendOtp from "../../assets/SendOtpButton.svg"
import { useState } from "react"
import { toast } from "react-toastify"
import { loginUser } from "../../services/Apis"


const Signin = () => {

    const [phone, setPhone] = useState(0)
    const navigate = useNavigate()

    const handleSendOtp = async () => {

        if (!phone) {
            toast.error("Phone no. Required")
            return
        }


        try {
            ``
            const resp = await loginUser({ mobile: phone })

            if (resp.status === 200) {

                toast.success("Please enter OTP")
                localStorage.setItem("phone", phone)
                navigate("/verify")

            } else {
                toast.error(resp.response.data.message)
            }


        } catch (err) {
            toast.error("Something Went Wrong!!")
        }




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
                <input type="number" name="mobile" placeholder="Enter your Number" onChange={(e) => { setPhone(e.target.value) }} />
            </div>



            <div className="signInWith ">

                <img src={HR} className="signInHr" />

                <div className="socialListSignIn">
                    <div className="socialSignIn">
                        <img src={Facebook} />
                    </div>
                    <div className="socialSignIn">
                        <img src={YT} />
                    </div>
                    <div className="socialSignIn">
                        <img src={Apple} />
                    </div>
                </div>



            </div>



            <div className="" >


                {/* <NavLink to="/verify"> */}

                <button className="btn signInButton" onClick={handleSendOtp}>
                    Next
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