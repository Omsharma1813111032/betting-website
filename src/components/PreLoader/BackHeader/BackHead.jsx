import "./BackHead.css"
import backArrow from "../../../assets/backArrow.svg"
import backHeaderLogo from "../../../assets/backHeaderLogo.svg"
import Headlogo from "../../../assets/GameScreen/headLogo.png"

const BackHead = ({ title, wallet, head, logo }) => {
    return (
        <div className="BackHeaderMainClass">

            <div className="backHeaderBack">
                <img src={backArrow} />
            </div>

            {
                logo ? <div className="headLogo">
                    <img src={Headlogo} />
                </div> : ""
            }


            {
                head ?
                    <div className="backHeaderTitle">
                        {title}
                    </div> : ""
            }


            {
                wallet ?
                    <div className="backHeaderWallet">
                        <img src={backHeaderLogo} />
                    </div>
                    : ""
            }
        </div>
    )
}

export default BackHead