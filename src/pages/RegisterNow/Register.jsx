import "./Register.css"
import RegisterImg from "../../assets/register.png"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"
import { registerUser } from "../../services/Apis"

const Register = () => {


    const navigate = useNavigate()

    const [data, setData] = useState({
        name: "",
        phone: 0,
        cPhone: 0,
        email: "",
        referral: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, phone, cPhone, email } = data

        if (!name || !phone || !cPhone || !email ) {
            toast.error("All fields are required!!")
            return;
        }


        if (phone.length < 10 || cPhone < 10) {
            toast.error("Valid phone no required")
            return
        }

        if (phone !== cPhone) {
            toast.error("Phone no. Not Matched...")
            return
        }

        try {



            const resp = await registerUser({
                name, mobile: phone, confirmMobile: cPhone, email
            })

            if (resp.status === 201) {
                localStorage.setItem("user_id", resp.data.userId)
                localStorage.setItem("name", name)
                localStorage.setItem("phone", phone)
                localStorage.setItem("email", email)
                navigate("/verify")
                toast.success("Please Enter Your OTP")
            } else if(resp.status===400) {
                toast.error("User Already Exists !!")
            }


        } catch (err) {
            toast.error(err.message)
        }


    }


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

                <form onSubmit={(e) => { handleSubmit(e) }}>

                    <input type="text" placeholder="Full Name" onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                    <input type="number" placeholder="Phone Number" onChange={(e) => { setData({ ...data, phone: e.target.value }) }} />
                    <input type="number" placeholder="Confirm Phone Number" onChange={(e) => { setData({ ...data, cPhone: e.target.value }) }} />
                    <input type="email" placeholder="E-mail" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                    <input type="text" placeholder="Referral Code (Optional)" onChange={(e) => { setData({ ...data, referral: e.target.value }) }} />

                    <br />

                    <small className="smallText">
                        <input type="checkbox" className="registerCheck" />
                        <small>By checking the box you are to our Terms and Condition.</small>
                    </small>

                    {/* <NavLink to="/profile"> */}
                    <button className="btn registerBtn">
                        Next
                    </button>
                    {/* </NavLink> */}

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