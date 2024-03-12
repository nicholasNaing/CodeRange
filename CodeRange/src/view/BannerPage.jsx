import React from 'react'
import CRLOGO from "../assets/codeRangeLogo.png"
import "../fonts/Roxborough-CF/RoxboroughCF.ttf"

function BannerPage() {
  return (
    <div className={`min-h-screen min-w-screen bg-slate-500 lg:flex`}>
        <div className={`bg-black flex-1 flex flex-col pt-36 items-center`}>
            <div className={`flex`}>
                <img src={CRLOGO} alt="This is the logo of codeRange" width={120} height={120}/>
                <div className={`code-range font-bold text-white text-[70px] tracking-wide px-4`}>|</div>
                <div className={`code-range text-white text-[70px] tracking-wide`}>Code Range</div>
            </div>
            <div className={`intro-text text-white text-[25px] tracking-wider pl-3`}>Breaking rules, Building codes</div>
        </div>
        <div className={`bg-slate-700 flex-1`}>
            World
        </div>
    </div>
  )
}

export default BannerPage