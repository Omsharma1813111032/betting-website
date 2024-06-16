import Logo from "../../assets/loaderLogo.svg"
import "./loader.css"

const PreLoader = () => {
  return (
    <div className="loaderMainDiv">

        <div className="loaderLogo">
            <img src={Logo} alt="loader" />
        </div>

    </div>
  )
}

export default PreLoader