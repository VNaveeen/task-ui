
import SectionCIMG from "../Assets/SectionC-card.png"


export default function SectionC() {

  
    return (
        <>
               
                    <div className="sectionC">
                       <h1>Booming areas</h1>
                       <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos himenaeos.</p>
                        <div className="sectionC-container">
                            <div className="sectionC-tab">
                                <button className="sectionC-tab-btn">North Chennai</button>
                                <button className="sectionC-tab-btn">East Chennai</button>
                                <button className="sectionC-tab-btn">South Chennai</button>
                                <button className="sectionC-tab-btn">West Chennai</button>
                                <button className="sectionC-tab-btn">Central Chennai</button>
                            </div>
                            <div className="sectionC-content">
                                <div className="sectionC-box">
                                    <h2>Sorem ipsum dolor sit amet</h2>
                                    <li>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</li>
                                    <li>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</li>
                                    <li>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</li>
                                </div>
                                <div className="sectionC-img">
                                    <img src={SectionCIMG} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
             
        </>
    )
}