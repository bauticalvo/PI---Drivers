import React from 'react'
import '../../estilos/style.css'

export const Landing = () => {
  return (
    <div className='landing'>
        <h1>landing</h1>
        <button>
      <NavLink
            to='/home' style={({isActive}) => isActive ? {color: 'pink'} : {color:"black"}}
            >Home</NavLink>
      </button>
    </div>
  )
}

