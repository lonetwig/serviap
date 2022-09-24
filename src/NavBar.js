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

const empty={home:'',formulaires:'',certificat:'',apropos:''}
const[route,setRoute]=useState(empty)
function choose(e){
  const id=e.target.id
  setRoute({...empty,[id]:'choosed'})
  window.scrollTo(0, 0)
}
useEffect(()=>{
    const param=window.location.href.split('/')[3]
    setRoute({...empty,[param?param:'home']:'choosed'})
},[])

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
    'marginLeft':'20px'
}

//all routes------------------------------------------

const allRoutes=<>
    <Link to='/'><div className={route.home} onClick={(e)=>choose(e)} id='home'>Acceuil</div></Link>
    <Link to='/formulaires'><div  className={route.formulaires} onClick={(e)=>choose(e)} id='formulaires' >Formulaires fiscaux</div></Link>
    <Link to='/certificat'><div className={route.certificat} onClick={(e)=>choose(e)} id='certificat'>Certificat négatif</div></Link>
    <Link to='/apropos'><div className={route.apropos} onClick={(e)=>choose(e)} id='apropos'>A propos</div></Link>
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
            <Link to='/connexion'><div></div></Link>
        </div>
        
    </div>

    {menuSelected && <div className='menu' onClick={hideMenu}>{allRoutes}</div>}

    <article className='topSpace'></article>
</>
)
}
