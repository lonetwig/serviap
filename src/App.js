import React,{useState,useEffect} from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Certificat from './Certificat'
import Formulaires from './Formulaires'
import Home from './Home'
import Propos from './Propos'
import './style/general.css'
import './style/navbar.css'
import text from './text'
import { BiMenu } from 'react-icons/bi'

export default function App() {

  const [windowWidth,setWW]=useState(window.screen.width)
  const [navBar,setNavBar]=useState('window.screen.width')

  
  useEffect(() => {
    function handleResize() {
      setWW(window.screen.width);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  let burgerMenu={
    'scale':'3',
    'color':'var(--color1)',
  }

  return (
    <>
    {/* navbar--------------------------------------------------------- */}
      <div className='navbar'>
          {windowWidth>700&&<div>
          <Link to='/'><div>Acceuil</div></Link>
          <Link to='/formulaires-fiscaux'><div>Formulaires fiscaux</div></Link>
          <Link to='/certificat-néfatif'><div>Certificat négatif</div></Link>
          <Link to='/a-propos'><div>A propos</div></Link>
        </div>}
        {windowWidth<700&&<div>
          <Link to='/'><div><BiMenu style={burgerMenu}
          /></div></Link>
        </div>
        }

        <div>
          <Link to='/connexion'><div>Connexion</div></Link>
        </div>
      </div>

    {/* top of page---------------------------------------------------- */}
      
      <div className='topPage'>
        <div className='topLogo'>SERVIAP</div>
          <Routes>
            <Route path='/' element={<Home text={text}/>}/>
            <Route path='/formulaires-fiscaux' element={<Formulaires/>}/>
            <Route path='/certificat-néfatif' element={<Certificat/>}/>
            <Route path='/a-propos' element={<Propos/>}/>
          </Routes>
      </div>

    {/* mid of page---------------------------------------------------- */}

    </>
  )
}