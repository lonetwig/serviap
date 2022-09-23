import React, { useEffect, useState } from 'react'
import { formulaires } from './text' 
import './style/formulaires.css'

export default function Formulaires() {
  
  const[forms,setForms]=useState('aaa')

  useEffect(()=>{
    setForms(pre=>{return formulaires.map(full=>(
      <div key={formulaires.indexOf(full)}>
        <h1>{full.title}</h1>
        {full.text.split('/n').map(ele=>(
          <a key={full.text.split('/n').indexOf(ele)} target="_blank" 
           href={ele.split('/href')[1]}><div>{ele.split('/href')[0]}</div></a>
      ))}
      </div>
    ));})
  },[])


  return (
    <div className='formulaires'>
      <article>
        {forms}
      </article>
    <div className='overlay'></div>

    </div>
    
  )
}
