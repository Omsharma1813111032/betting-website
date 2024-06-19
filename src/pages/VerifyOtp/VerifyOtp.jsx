import "./VerifyOtp.css";
import OtpImage from "../../assets/OtpImage.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef } from "react"; // Added useRef for managing focus
import { toast } from "react-toastify";

const VerifyOtp = () => {
    const [otp, setOtp] = useState(""); // State to store OTP digits
    const inputRefs = useRef([]); // Ref for storing references to input elements
    const navigate = useNavigate()

    // console.log(typeof otp)

    // Function to handle changes in each input field
    const handleChange = (index, event) => {
        const value = event.target.value;

        // Check if input is a number and length is 1
        if (!isNaN(value) && value.length <= 1) {
            let newOtp = otp;
            newOtp = newOtp.substring(0, index) + value + newOtp.substring(index + 1);
            setOtp(newOtp);

            if (index < inputRefs.current.length - 1 && value !== "") {
                inputRefs.current[index + 1].focus();
            }
        }
    };


    const handleVerify = () => {
        if(otp==='123456'){
            toast.success("Successfully Login!!")
            navigate("/profile")
        }else{
            toast.error("Wrong OTP")
        }
    };

    // Function to request a new OTP
    // const handleRequestNewCode = () => {
    //     // Logic to request a new OTP
    //     console.log("Requesting new OTP...");
    // };

    return (
        <div className="otpMainDiv">

            <div className="otpImage">
                <img src={OtpImage} alt="OTP Image" />
            </div>

            <div className="otpHeading">
                <p className="otpHead">
                    Almost There
                </p>
                <p className="otpSubHead">
                    Enter 6-Digit Code Sent To Your
                    Phone no. <b>{localStorage.getItem("phone")}</b> For Verification
                </p>
            </div>

            <div className="otpBoxes">
                <form>
                    {/* Generate 6 input fields dynamically */}
                    {Array.from({ length: 6 }, (_, index) => (
                        <input
                            key={index}
                            ref={el => (inputRefs.current[index] = el)} // Store ref to input element
                            className="otpBox"
                            type="number"
                            maxLength="1"
                            value={otp[index] || ""}
                            onChange={(e) => handleChange(index, e)}
                        />
                    ))}
                </form>
            </div>

            <div className="otpBtn">
                <button className="btn" onClick={handleVerify}>Verify</button>
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
                <p>New Member?
                    <NavLink to="/register">
                        <span className="registerNowSpan"> Register Now</span>
                    </NavLink>
                </p>
            </div>

        </div>
    );
};

export default VerifyOtp;
