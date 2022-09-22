import React, { useEffect, useState } from 'react'
import {packs} from './text'
import './style/bottomPage.css'

export default function BottomPage() {

  //choice-------------------------------------------------

  const[pack,setPack]=useState(packs[0])
  const[choice,setChoice]=useState({a:'',b:'',c:'',d:'',e:''})

  function choose(e){
    const {id}=e.target
    setPack(packs[id])
  }

  useEffect(()=>{setChoice(
    {a:'',b:'',c:'',d:'',e:'',[pack.choice]:'choice'}
  )},[pack])

  //text2-------------------------------------------------

  const text2=pack.text2.split('/n').map(text=>(
    <p key={pack.text2.indexOf(text)}>{'⚬ '+text}</p>))

    
  return (
    <div className='bottomPage'>
        <img src={require( './img/imgBottom.png')}></img>
        <div className='options'>
            <div className={choice.a} id='0' onClick={(e)=>choose(e)}>Pack Essentiel</div>
            <div className={choice.b} id='1' onClick={(e)=>choose(e)}>Pack Maitrise</div>
            <div className={choice.c} id='2' onClick={(e)=>choose(e)}>Pack Pilotage</div>
            <div className={choice.d} id='3' onClick={(e)=>choose(e)}>Pack Éco</div>
            <div className={choice.e} id='4' onClick={(e)=>choose(e)}>Pack Création</div>
        </div>

        <div className='pack'>
          <h1>{pack.title}</h1>
          <h3>{pack.text1}</h3>
          <div className='price'>
            <p>à partir de:</p>  
            <h1>{pack.price}</h1>  
            <p>dh</p>  
          </div>
          {text2}
        </div>

    </div>
  )
}
