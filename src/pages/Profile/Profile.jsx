import "./Profile.css"
import Bg from "../../assets/profile.png"
import Avatar from "../../assets/Avatar.png"
import Arrow from "../../assets/arrow.png"

const Profile = () => {
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
                        <div className="metricsLeftCol"></div>
                        <div className="metricsRightCol"></div>
                    </div>
                    <div className="metricList">
                        <div className="metricsLeftCol"></div>
                        <div className="metricsRightCol"></div>
                    </div>
                    <div className="metricList">
                        <div className="metricsLeftCol"></div>
                        <div className="metricsRightCol"></div>
                    </div>
                    <div className="metricList">
                        <div className="metricsLeftCol"></div>
                        <div className="metricsRightCol"></div>
                    </div>
                </div>



                <div className="profileFooter">
                    <p>Log out</p>
                </div>

            </div>





        </div>
    )
}

export default Profile