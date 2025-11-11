import React from 'react';
import "./Footer.css";
// Import icons from react-icons
import srijanLogo from "../../assets/logo-proto-4.png";
// --- Logo ---
// In your project, you would import your logo like this:
// import srijanLogo from './assets/srijan-logo.png';
// For this example, I'll use a placeholder path.
// const srijanLogo = 'https://i.imgur.com/L13A8d9.png'; // Placeholder for the Srijan logo

const Footer = () => {
    return (
        // Use custom colors/fonts defined in tailwind.config.js
        <footer className="bg-[#4A090B] text-white font-cinzel py-12 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">

                {/* Column 1: Logo & Info */}
                <div className="flex-1 flex-col mr-20 items-start text-start justify-start min-w-[240px] md:max-w-xs pirata-one-regular">
                    <img
                        src={srijanLogo}
                        alt="Srijan Fest Logo"
                        className="w-44 mb-5" // w-44 is 176px
                    />
                    <p className="Footer-links text-[32px] my-1 w-[300px] ">Largest Socio-Cultural Fest Of <span className='tracking-wider'>IIT(ISM)DHANBAD</span></p>

                    <p className="Footer-links text-[32px] my-1">Jan 31st-Feb 1st, 2nd</p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex-1 min-w-[150px] pirata-one-regular">
                    <h4 className="text-[#FED000] text-[46px] font-bold mb-5 items-start flex">Quick Links</h4>
                    <ul className="list-none p-0 m-0 flex flex-col items-start justify-center">
                        <li>
                            <a href="/" className="text-white text-[32px] block mb-3 no-underline hover:text-brand-gold hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/events" className="text-white text-[32px] block mb-3 no-underline hover:text-brand-gold hover:underline">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="/sponsors" className="text-white text-[32px] block mb-3 no-underline hover:text-brand-gold hover:underline">
                                Sponsors
                            </a>
                        </li>
                        <li>
                            <a href="/teams" className="text-white text-[32px] block mb-3 no-underline hover:text-brand-gold hover:underline">
                                Teams
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="flex-1 flex-col items-start text-start justify-start min-w-[240px] pirata-one-regular">
                    <h4 className="text-[#FED000] text-[46px]  font-bold mb-5">Contact</h4>
                    <p className="text-[32px] my-1">IIT(ISM)DHANBAD</p>
                    <p className="text-[32px] my-1">Jharkhand, India- 826004</p>
                    <a href="mailto:Srijan@iitism.ac.in" className="text-white text-[32px] block my-1 no-underline hover:text-brand-gold hover:underline">
                        Srijan@iitism.ac.in
                    </a>
                </div>

                {/* Column 4: Follow Us */}
                <div className="flex-1 min-w-[150px] text-start items-start justify-start pirata-one-regular">
                    <h4 className="text-[#FED000] text-[46px] font-bold mb-5">Follow Us</h4>
                    <div className="flex gap-5 items-center">
                        <a
                            href="https://www.linkedin.com" // Add your LinkedIn URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-4xl no-underline hover:text-brand-gold"
                            aria-label="LinkedIn"
                        ><img src="../src/Assets/uil_linkedin.png" alt="LinkedIn Icon" /></a>



                        <a
                            href="https://www.instagram.com" // Add your Instagram URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-4xl no-underline hover:text-brand-gold"
                            aria-label="Instagram"
                        >
                          <img src="../src/Assets/Vector.png" alt="Instagram Icon" />
                        </a>
                    </div>
                </div>

            </div>
        </footer >
    );
};

export default Footer;