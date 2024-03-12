import React from 'react'

function NavBar() {
  return (
    <div className={`flex flex-row justify-between items-center w-screen min-h-5 py-3 absolute text-slate-50 bg-black bg-opacity-40`}>
        <div className={`flex-1 nav-logo text-xl font-bold pl-3`}>
            Code Range
        </div>
        <div className={`nav-items flex-1 flex justify-evenly text-lg`}>
            <div className={`hover:text-emerald-400 hover:text-2xl hover:line-through cursor-default duration-500`}>Home</div>
            <div className={`hover:text-emerald-400 hover:text-2xl hover:line-through cursor-default duration-500`}>Projects</div>
            <div className={`hover:text-emerald-400 hover:text-2xl hover:line-through cursor-default duration-500`}>Services</div>
            <div className={`hover:text-emerald-400 hover:text-2xl hover:line-through cursor-default duration-500`}>Expertise</div>
            <div className={`hover:text-emerald-400 hover:text-2xl hover:line-through cursor-default duration-500`}>Community</div>
            <div className={`hover:text-emerald-400 hover:text-2xl hover:line-through cursor-default duration-500`}>search</div>
        </div>
    </div>
  )
}

export default NavBar