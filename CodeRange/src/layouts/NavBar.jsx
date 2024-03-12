import React from 'react'

function NavBar() {
  return (
    <div className={`flex flex-row justify-between items-center w-screen min-h-5 py-3 absolute text-slate-50 bg-black bg-opacity-30`}>
        <div className={`flex-1 nav-logo text-xl font-bold pl-3`}>
            Code Range
        </div>
        <div className={`flex-1 flex justify-evenly`}>
            <div>Home</div>
            <div>Projects</div>
            <div>Services</div>
            <div>Expertise</div>
            <div>Community</div>
            <div>search</div>
        </div>
    </div>
  )
}

export default NavBar