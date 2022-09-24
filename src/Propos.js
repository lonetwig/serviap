import React from 'react'
import './style/propos.css'
import { MdCheckCircle,MdBuildCircle,MdContactSupport } from 'react-icons/md';
import {propos} from './text'

export default function Propos() {

  let iconStyle={
    'scale':'2.5',
    'margin':'20px'
}

return (
<div className='propos'>
  <article>
    <h1>Qui sommes nous?</h1>
    <div className='about'>
      <h2>Centre d'affaire Serviap</h2>
      <p>{propos[0]}</p>
    </div>

    <div className='about'>
      <h2>Nos principaux partenaires</h2>
      <div className='partenaires'>
        <img src={require( './img/brand1.png')} />
        <img src={require( './img/brand2.png')} />
        <img src={require( './img/brand3.png')} />
        <img src={require( './img/brand4.png')} />
        <img src={require( './img/brand5.png')} />
      </div>
    </div>

    <div className='about'>
      <h2>On est ami de l'environement</h2>
      <p>{propos[1]}</p>
    </div>

    <div className='maintenance'>
      <div>
        <MdCheckCircle style={iconStyle}/>
        <h2>Nos clients sont de tous les secteurs</h2>
        <p>{propos[2].text1}</p>
      </div>

      <div>
        <MdBuildCircle style={iconStyle}/>
        <h2>Nous veillons sur la durabilité de nos services</h2>
        <p>{propos[2].text2}</p>
      </div>

      <div>
        <MdContactSupport style={iconStyle}/>
        <h2>Appelez-nous, nous vous aiderons</h2>
        <p>{propos[2].text3}</p>
      </div>
    </div>

    <div className='reviews'>
      <div>
        <img src={require( './img/aziz.jpg')} />
        <h2>{propos[3][0].name}</h2>
        <h3>{propos[3][0].text1}</h3>
        <p>{propos[3][0].text2}</p>
      </div>

      <div>
        <img src={require( './img/noImg.png')} />
      <h2>{propos[3][1].name}</h2>
        <h3>{propos[3][1].text1}</h3>
        <p>{propos[3][1].text2}</p>
      </div>

      <div>
        <img src={require( './img/noImg.png')} />
      <h2>{propos[3][2].name}</h2>
        <h3>{propos[3][2].text1}</h3>
        <p>{propos[3][2].text2}</p>
      </div>
    </div>
  </article>

  <div className='overlay'></div>
      
</div>
  )
}
