import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const {themeState, themeDispatch} = useContextGlobal()
const changeTheme = () =>{
  themeDispatch({type: themeState.theme === 'dark' ? 'LIGTH_THEME' : 'DARK_THEME'})
}
  return (
    <nav className={themeState.nav}>
      <ul className="menuItems">          
          <li><Link to="/" className={themeState.navlink}> Home </Link> </li>          
          <li><Link to="/favorite" className={themeState.navlink}> Favoritos </Link> </li>
          <li><Link to="/contact" className={themeState.navlink}> Contact </Link></li>          
          
        </ul>
        <button onClick={changeTheme} className={themeState.button}>
            Change theme 
            {
              
            }
          </button>
    </nav>
  )
}

export default Navbar