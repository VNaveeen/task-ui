import IndoorGmaes from "../Assets/SectionD-card1.png"
import Gymnasium from "../Assets/SectionD-card2.png"
import Hall from "../Assets/SectionD-card3.png"

export default function SectionD() {


    return (
        <>


            <div className="sectionD">
                <span className="style">KEY AMENITIES</span>
                <p className="style1"> Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <p className="style1"> Class aptent taciti sociosqu ad litora toria nostra, per inceptos himenaeos.</p>

                <div className="sectionD-card-container">

                    <div className="arrow1-container">
                        <span className="arrow1"></span>
                    </div>
                    <div className="sectionD-card1">
                        <img src={IndoorGmaes} alt="" />
                        <span>Indoor Games</span>

                    </div>
                    <div className="sectionD-card2">
                        <img src={Gymnasium} alt="" />
                        <span>Gymnasium</span>

                    </div>
                    <div className="sectionD-card3">
                        <img src={Hall} alt="" />
                        <span>Banduet Hall</span>

                    </div>

                    <div className="arrow2-container">
                        <span className="arrow"></span>
                    </div>

                </div>
            </div>

        </>
    )
}
