import BackHead from "../../components/PreLoader/BackHeader/BackHead"
import "./GameSrc2.css"



const GameScr2 = () => {
  return (
    <div className="gameScr2MainDiv">


    <BackHead wallet={true} logo={true} />    

    
    <div className="gameScr2OptionList">
        <div className="gameScreen2option">
            10&#x20b9; - 500 &#x20b9;
        </div>
        <div className="gameScreen2option">
            500&#x20b9; - 10000 &#x20b9;
        </div>
        <div className="gameScreen2option">
            10000&#x20b9; - 25000 &#x20b9;
        </div>
    </div>


    </div>
  )
}

export default GameScr2