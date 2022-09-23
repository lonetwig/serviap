import React from 'react'
import {Link} from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import {useState,useEffect} from 'react'

export default function NavBar() {

//responsive navbar------------------------------------------

const [windowWidth,setWW]=useState(window.screen.width)
useEffect(() => {
    function handleResize() {
    setWW(window.screen.width);
    }
    window.addEventListener("resize", handleResize);
}, [])

//route selected------------------------------------------

const[route,setRoute]=useState({a:'choosed',b:'',c:'',d:''})
function choose(e){
  const id=e.target.id
  setRoute({a:'',b:'',c:'',d:'',[id]:'choosed'})
  window.scrollTo(0, 0)

}

//menu(for mobile)-------------------------------------

const [menuSelected,setMenuSelected]=useState(false)

function showMenu(){
    setMenuSelected(!menuSelected)
}

function hideMenu(){
    if(menuSelected){
        setMenuSelected(!menuSelected)
        window.scrollTo(0, 0)
    }
}

//styles------------------------------------------

let burgerMenu={
    'scale':'3',
    'color':'var(--color1)',
    'margin-left':'20px'
}

//all routes------------------------------------------

const allRoutes=<>
    <Link to='/'><div className={route.a} onClick={(e)=>choose(e)} id='a'>Acceuil</div></Link>
    <Link to='/formulaires-fiscaux'><div  className={route.b} onClick={(e)=>choose(e)} id='b' >Formulaires fiscaux</div></Link>
    <Link to='/certificat-néfatif'><div className={route.c} onClick={(e)=>choose(e)} id='c'>Certificat négatif</div></Link>
    <Link to='/a-propos'><div className={route.d} onClick={(e)=>choose(e)} id='d'>A propos</div></Link>
</>

return (
<>
    <div className='navbar'>
        {windowWidth>700&&
        <div>
            {allRoutes}
        </div>}

        {windowWidth<700&&
        <div>
                <div onClick={showMenu}><BiMenu style={burgerMenu}/></div>
        </div>}

        <div>
            <Link to='/connexion'><div>Connexion</div></Link>
        </div>
        
    </div>

    {menuSelected && <div className='menu' onClick={hideMenu}>{allRoutes}</div>}

    <article className='topSpace'></article>
</>
)
}
