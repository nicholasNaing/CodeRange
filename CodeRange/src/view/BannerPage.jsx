import React from 'react'
import CRLOGO from "../assets/codeRangeLogo.png"
import backgroundCR from "../assets/backgroundCR.mp4"
import "../fonts/Roxborough-CF/RoxboroughCF.ttf"

function BannerPage() {
  return (
    <div className={`min-h-screen min-w-screen bg-slate-900 bg-opacity-40 lg:flex`}>
        <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay muted loop>
            <source src={backgroundCR} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className={`flex-1 flex flex-col pt-36 items-center`}>
            <div className={`flex`}>
                <img className={`hover:animate-spin`} src={CRLOGO} alt="This is the logo of codeRange" width={120} height={120}/>
                <div className={`code-range font-bold text-white text-[70px] tracking-wide px-4`}>|</div>
                <div className={`code-range text-white text-[70px] tracking-wide`}>Code Range</div>
            </div>
            <div className={`intro-text hover:animate-ping text-white text-[25px] tracking-wider pl-3`}>Breaking rules, Building codes</div>
        </div>
        <div className={`flex-1`}>
        </div>
    </div>
  )
}

export default BannerPage