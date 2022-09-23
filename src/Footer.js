import React from 'react'
import './style/footer.css'
import { MdEmail } from 'react-icons/md';
import { GiPositionMarker } from 'react-icons/gi';
import { BsFillTelephoneFill,BsTwitter,BsGoogle,BsInstagram,BsYoutube,BsLinkedin, BsFacebook } from 'react-icons/bs';


export default function Footer() {

//styles-----------------------------------------------------------------

    const cordIcons={
        color:'var(--color1)',
        scale:'1.1',
        marginRight:'10px'
    }

    const socialIcons={
        color:'var(--color1)',
        margin:'20px',
        scale:'2',
    }

  return (

<footer>
    <div className='topBorder'></div>
    <h1>SERVIAP</h1>
    <div className='contact'>
        <h2>Nous contactez</h2>
        <input placeholder='Nom complet'/>
        <input placeholder='Adresse email'/>
        <textarea placeholder='Votre message'/>
    </div>
    <div className='cordonnance'>
        <div><p><MdEmail style={cordIcons}/>info@serviap.ma</p></div>
        <div><p><GiPositionMarker style={cordIcons}/>+212 661 68 79 67 / +212 661 26 75 48</p></div>
        <div><p><BsFillTelephoneFill style={cordIcons}/>Lot Massira FB 29, 3ème étage Apt 19 Mohammedia</p></div>
    </div>
    <div className='socialMedia'>
        <a href=''><BsFacebook style={socialIcons}/></a>
        <a href=''><BsTwitter style={socialIcons}/></a>
        <a href=''><BsGoogle style={socialIcons}/></a>
        <a href=''><BsInstagram style={socialIcons}/></a>
        <a href=''><BsYoutube style={socialIcons}/></a>
        <a href=''><BsLinkedin style={socialIcons}/></a>
    </div>
</footer>

  )
}
