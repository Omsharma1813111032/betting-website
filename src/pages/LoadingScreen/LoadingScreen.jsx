import ludoImg from "../../assets/LudoLoadingScrren.svg"
import "./LoadingScreen.css"
import NextButton from "../../assets/NextButton.svg"
import { NavLink } from "react-router-dom"


const LoadingScreen = () => {
    return (
        <div className="loadingScrMainDiv">


            <div className="loadingScreenImg">
                <img src={ludoImg} />
            </div>


            <div className="loadingScreenHeading">

                <p className="mainHeadLoad">Best gaming platform to earn money easily</p>
                <p className="subHeadLoadScr">This is the first online game platform designed For earn money.</p>

            </div>


            <div className="loadingScrBtn">
                <NavLink to="/signin">
                    <button className="btn">
                        <img src={NextButton} />
                    </button>
                </NavLink>
            </div>


        </div>
    )
}

export default LoadingScreen