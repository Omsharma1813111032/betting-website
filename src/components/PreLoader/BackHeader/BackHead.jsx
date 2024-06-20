import "./BackHead.css"
import backArrow from "../../../assets/backArrow.svg"
import backHeaderLogo from "../../../assets/backHeaderLogo.svg"

const BackHead = ({ title, wallet }) => {
    return (
        <div className="BackHeaderMainClass">
            <div className="backHeaderBack">
                <img src={backArrow} />
            </div>
            <div className="backHeaderTitle">
                {title}
            </div>
            <div className="backHeaderWallet">
                <img src={backHeaderLogo} />
            </div>
        </div>
    )
}

export default BackHead