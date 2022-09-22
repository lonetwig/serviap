import React,{useState,useEffect} from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Certificat from './Certificat'
import Formulaires from './Formulaires'
import Home from './Home'
import Propos from './Propos'
import MidPage from './MidPage'
import NavBar from './NavBar'
import './style/general.css'
import './style/navbar.css'
import './style/midPage.css'
import text from './text'
import BottomPage from './BottomPage'

export default function App() {

//text border---------------------------------------------

function textBorder(color){
  const comb=[0,1,-1,2,-2,3,-3,4,-4]
  let textBorder=''
  for(let i=0;i<comb.length;i++){
    comb.forEach(comb1=>{
      textBorder+=comb[i]+'px '+comb1+'px var(--'+color+'),'
    })
  }
  return textBorder.substring(0,textBorder.length-1)
}

  return (
    <>
    {/* navbar--------------------------------------------------------- */}

      <NavBar/>

    {/* top of page---------------------------------------------------- */}
      
      <div className='topPage'>
        <div className='topLogo'><h1>SERVIAP</h1></div>
          <Routes>
            <Route path='/' element={<Home text={text} textBorder={textBorder('color1')}/>}/>
            <Route path='/formulaires-fiscaux' element={<Formulaires/>}/>
            <Route path='/certificat-néfatif' element={<Certificat/>}/>
            <Route path='/a-propos' element={<Propos/>}/>
          </Routes>
      </div>

    {/* mid of page---------------------------------------------------- */}

        <MidPage textBorder={textBorder('color2')}/>

    {/* bottom of page---------------------------------------------------- */}

        <BottomPage/>
    </>
  )
}