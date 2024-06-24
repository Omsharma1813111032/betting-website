import "./GameScreen.css"
import Gamescreen from "../../assets/gameScreen.png"
import ludoClassic from "../../assets/GameScreen/ludoClassic.png"
import singleMingle from "../../assets/GameScreen/singleMingle.png"
import doubleTriuble from "../../assets/GameScreen/doubleTrouble.png"
import TripleTuffle from "../../assets/GameScreen/tripleTuffle.png"
import ludoWeb from "../../assets/GameScreen/ludoweb.png"

const GameScr = () => {
    return (
        <div className="gameScreenMainDiv">

            <div className="gameScreenImage">
                <img src={Gamescreen} />
            </div>

            <div className="gameScrHead">
                Ludo Game
            </div>


            <div className="gameScreenList">

                <div className="gameScreenGame">
                    <div className="gameScreenGameImg">
                        <img src={ludoClassic} />
                    </div>
                    <div className="gameScreenGameTitle">
                        Ludo Classic
                    </div>
                </div>
                <div className="gameScreenGame">
                    <div className="gameScreenGameImg">
                        <img src={singleMingle} />
                    </div>
                    <div className="gameScreenGameTitle">
                        Single Mingle
                    </div>
                </div>
                <div className="gameScreenGame">
                    <div className="gameScreenGameImg">
                        <img src={doubleTriuble} />
                    </div>
                    <div className="gameScreenGameTitle">
                        Double Trouble
                    </div>
                </div>
                <div className="gameScreenGame">
                    <div className="gameScreenGameImg">
                        <img src={TripleTuffle} />
                    </div>
                    <div className="gameScreenGameTitle">
                        Triple Tuffle
                    </div>
                </div>
                <div className="gameScreenGame">
                    <div className="gameScreenGameImg">
                        <img src={ludoWeb} />
                    </div>
                    <div className="gameScreenGameTitle">
                        Ludo Web
                    </div>
                </div>

            </div>



        </div>
    )
}

export default GameScr