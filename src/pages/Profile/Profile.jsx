import "./Profile.css"
import Bg from "../../assets/profile.png"
import Avatar from "../../assets/Avatar.png"
import Arrow from "../../assets/arrow.png"
import gamePlayed from "../../assets/gamePlayed.svg"
import coinIcon from "../../assets/coinIcon.svg"
import penalty from "../../assets/penalty.svg"
import referral from "../../assets/referralEarning.svg"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"



const Profile = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("user_id")
        localStorage.removeItem("email")
        localStorage.removeItem("referral")
        localStorage.removeItem("phone")
        localStorage.removeItem("name")
        localStorage.removeItem("user_coins")
        navigate("/signin")
        toast.success("Logout SuccessFull")
    }



    return (
        <div className="profileMainDiv">



            <div className="profileMainHeader">
                <img src={Bg} className="bgProfile" />
                <div className="profileImg">
                    <img src={Avatar} />
                </div>
                <div className="profileArrowText">
                    <div className="backBtn">
                        <img src={Arrow} width={10} />
                    </div>
                    <div className="myProfile">
                        <p>My Profile</p>
                    </div>
                </div>
            </div>



            <div className="profileUserDetails">
                <div className="profileUserName">
                    <input type="text" placeholder={localStorage.getItem("name")} />  <button className="btn">Save</button>
                </div>
                <div className="profileUserPhone">
                    <input type="text" placeholder={localStorage.getItem("phone")} />  <button className="btn">Save</button>
                </div>
            </div>


            <div className="kycPending">
                <div className="kycHeading">
                    <p className="kycMainHead">KYC PENDING</p>
                    <p className="kycSubHead">Click on the button and it will open up the set of KYC
                        preferences.</p>
                </div>
                <div className="kycButton">
                    <button className="btn">
                        Complete Now
                    </button>
                </div>
            </div>



            <div className="profileMetric">
                <div className="profileMetricDiv">
                    <p>Metrics</p>
                </div>

                <div className="profileMetricList">
                    <div className="metricList">
                        <div className="metricsLeftCol">
                            <div className="meritIcon">
                                <img src={gamePlayed} />
                            </div>
                            <div className="meritName">
                                Games Played
                            </div>
                        </div>
                        <div className="metricsRightCol">
                            <p>3</p>
                        </div>
                    </div>
                    <div className="metricList">
                        <div className="metricsLeftCol">
                            <div className="meritIcon">
                                <img src={coinIcon} />
                            </div>
                            <div className="meritName">
                                Coins Won
                            </div>
                        </div>
                        <div className="metricsRightCol"><p>200</p></div>
                    </div>
                    <div className="metricList">
                        <div className="metricsLeftCol">
                            <div className="meritIcon">
                                <img src={penalty} />
                            </div>
                            <div className="meritName">
                                Penalty
                            </div>
                        </div>
                        <div className="metricsRightCol"><p>1</p></div>
                    </div>
                    <div className="metricList">
                        <div className="metricsLeftCol">
                            <div className="meritIcon">
                                <img src={referral} />
                            </div>
                            <div className="meritName">
                                Referral Earning
                            </div>
                        </div>
                        <div className="metricsRightCol"><p>2</p></div>
                    </div>
                </div>



                <div className="profileFooter">
                    <p onClick={handleLogout}>Log out</p>
                </div>

            </div>





        </div>
    )
}

export default Profile