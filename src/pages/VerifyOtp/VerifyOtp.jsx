import "./VerifyOtp.css"
import OtpImage from "../../assets/OtpImage.png"
import { NavLink } from "react-router-dom"

const VerifyOtp = () => {
    return (
        <div className="otpMainDiv">

            <div className="otpImage">
                <img src={OtpImage} />
            </div>



            <div className="otpHeading">
                <p className="otpHead">
                    Almost There
                </p>
                <p className="otpSubHead">
                    Enter 6-Digit Code Sent To Your
                    Email <b> xycz@gmail.com </b> For Verification
                </p>
            </div>



            <div className="otpBoxes">

                <input className="otpBox" type="number" />
                <input className="otpBox" type="number" />
                <input className="otpBox" type="number" />
                <input className="otpBox" type="number" />
                <input className="otpBox" type="number" />
                <input className="otpBox" type="number" />

            </div>


            <div className="otpBtn">
                <button className="btn">Verify</button>
            </div>



            <div className="requestOtp">
                <p className="requestOtpHead">
                    Request a new code in 00.30s
                </p>
                <p className="requestOtpSubHead">
                    Didn’t receive any code ?
                </p>
            </div>


            <div className="registerFooter">
                <p>New Memeber?
                    <NavLink to="/register">
                        <span className="registerNowSpan">Register Now</span>
                    </NavLink>
                </p>
            </div>


        </div>
    )
}

export default VerifyOtp