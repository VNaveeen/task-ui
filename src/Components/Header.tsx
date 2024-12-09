import { useState } from "react"
import Instagram from '../Assets/Instagram.png'
import Facebook from '../Assets/Facebook.png'
import Linkedin from '../Assets/Linkedin.png'
import Logo from '../Assets/Logo.png'



export default function Header() {

    const [responsive, setResponsive] = useState<any>(false)
    return (
        <>
            {/* <div className={`web-view-header ${responsive ? "active" : ""} `}>
                <div className={`close-nav ${responsive ? "active" : ""} items-center justify-center`} onClick={() => setResponsive(false)}>
                    <svg className="w-4 h-4 text-gray-800 dark:text-main" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                    </svg>
                </div>
                <div className='flex items-center logo-container px-3 py-4'>
                        <img className="logo-img" src={Logo} alt="Logo" />
                </div >
                <ul className=" flex flex-col  gap-y-[10px] w-[100%]  p-2 text-lg font-semibold text-grey nav-bar-mobile " aria-labelledby="doubleDropdownButton">
                    <li >
                        <a href="#" className="block px-4 py-3 hover:text-main active:text-main">Solutions</a>
                    </li>
                    <li className="hover:text-main active:text-main">
                        <a href="#" className="block px-4 py-3 hover:text-main active:text-main">Product</a>
                    </li>
                    <li className="hover:text-main active:text-main">
                        <a href="#" className="block px-4 py-3 hover:text-main active:text-main">Resources</a>
                    </li>
                    <li className="hover:text-main active:text-main">
                        <a href="#"className="block px-4 py-3 hover:text-main active:text-main">About</a>
                    </li>
                </ul>
            </div>

            <div className="flex items-center justify-center  text-base w-full bg-main h-[58px]">
                <div className='flex  items-center  gap-x-[8px] w-[85%]  nav-top'>
                    <img className="h-[30px] w-[30px]" src={Linkedin} alt="Instagram" />
                    <img className="h-[30px] w-[30px]" src={Facebook} alt="Instagram" />
                    <img className="h-[30px] w-[30px]" src={Instagram} alt="Instagram" />
                </div>
            </div>
            <div className="flex items-center justify-center font-normal text-grey  lg:text-base text-xs w-full bg-white h-[80px]">
                <div className='flex items-center nav-head  gap-x-[8px] '>

                    <ul className="gap-x-[40px] w-[30%] font-medium text-lg  py-2 flex  items-center justify-center  nav-bar" aria-labelledby="doubleDropdownButton">
                        <li >
                            <a href="#" className="block  py-2 hover:text-main active:text-main">Solutions</a>
                        </li>
                        <li >
                            <a href="#" className="block  py-2 hover:text-main active:text-main">Product</a>
                        </li>
                    </ul>
                    <div className='flex items-center logo-container'>
                        <img className="logo-img" src={Logo} alt="Logo" />
                    </div >
                    <div className='flex items-center sm:flex md:hidden justify-end w-[20%] pr-2'>
                        {responsive ? "" :
                            <svg className="w-5 h-5 text-gray-800 dark:text-grey nav-menu" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14" onClick={() => setResponsive(true)}>
                                <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
                            </svg>}
                    </div >
                    <ul className="gap-x-[40px] w-[30%] font-medium text-lg nav-bar py-2 flex items-center justify-center " aria-labelledby="doubleDropdownButton">
                        <li >
                            <a href="#" className="block  py-2 hover:text-main active:text-main">Resources</a>
                        </li>
                        <li >
                            <a href="#" className="block  py-2 hover:text-main active:text-main">About</a>
                        </li>
                    </ul>
                </div>
            </div> */}

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