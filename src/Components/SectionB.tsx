import Card1 from "../Assets/SectionB-card1.jpg"

export default function SectionB() {


    return (
        <>

            <div className="sectionB">
                <h1>Why invest in Apartments ?</h1>
                <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    Class aptent taciti sociosqu ad litora toria nostra, per inceptos himenaeos.
                </p>
                <div className="sectionB-card-container">
                    <div className="sectionB-card-box">
                        <div className="sectionB-card-img">
                            {/* <img src={Card1} alt="" /> */}

                        </div>
                        <div className="sectionB-card-content">
                            <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu 
                            ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>


                    </div>
                    <div className="sectionB-card2-box">
                    <div style={{width:"100px"}}>

                        </div>
                        <div className="sectionB-card2-content">
                            <h2 >Qorem ipsum dolor sit amet consectetur</h2>
                            <p >Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu 
                            ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <div className="sectionB-card2-img">

                        </div>

                       

                    </div>
                    <div className="sectionB-card-box">
                        <div className="sectionB-card-img card3">
                            {/* <img src={Card1} alt="" /> */}

                        </div>
                        <div className="sectionB-card-content">
                            <h2>Worem ipsum dolor sit amet consectetur</h2>
                            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu 
                            ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        

                    </div>

                </div>

            </div>

        </>
    )
}