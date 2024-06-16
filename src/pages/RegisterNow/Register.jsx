import "./Register.css"
import RegisterImg from "../../assets/register.png"
import { NavLink } from "react-router-dom"

const Register = () => {
    return (
        <div className="registerMainDiv">


            <div className="registerImageDiv">
                <img src={RegisterImg} />
            </div>


            <div className="registerHeads">
                <p className="registerHeading">
                    Get Started
                </p>
                <p className="registerSubHead">
                    By creating a free account
                </p>
            </div>



            <div className="registerForm">

                <form>

                    <input type="text" placeholder="Full Name" />
                    <input type="number" placeholder="Phone Number" />
                    <input type="number" placeholder="Confirm Phone Number" />
                    <input type="email" placeholder="E-mail (optional)" />
                    <input type="text" placeholder="Referral Code (Optional)" />

                    <br />

                    <small className="smallText">
                        <input type="checkbox" className="registerCheck" />
                        <small>By checking the box you are to our Terms and Condition.</small>
                    </small>


                    <button className="btn registerBtn">
                        Next
                    </button>

                </form>

            </div>




            <div className="otpFooter">
                <p>Already a memeber?  
                    <NavLink to="/signin" >
                        <span className="registerNowSpan"> Login In</span>
                    </NavLink>
                </p>
            </div>



        </div>
    )
}

export default Register