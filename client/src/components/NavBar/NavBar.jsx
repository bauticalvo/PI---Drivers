import React from 'react'

const NavBar = () => {
  return (
    <div>
      <button>
      <NavLink
            to='/home' style={({isActive}) => isActive ? {color: 'pink'} : {color:"black"}}
            >Home</NavLink>
      </button>
    </div>
  )
}

export default NavBar