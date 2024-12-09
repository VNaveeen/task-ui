

import Logo from '../Assets/Logo.png'



export default function Header() {

    
    return (
        <>

            <div className="header">
                <div className="logo-container">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="header-btn-group">
                    <button className="header-btn">Overview</button>
                    <button className="header-btn">Why Chennai?</button>
                    <button className="header-btn">Plot Benefits</button>
                    <button className="header-btn contact"><span>Contact Us</span></button>
                </div>
            </div>
        </>
    )
}