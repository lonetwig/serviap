import React from 'react'
import './style/certificat.css'

export default function Certificat() {

return (

<div className='certificat'>
  <article>
    <h1>Demander un certificat négatif</h1>
    <div>
      <div className='vosDonné'>
        <h2>Vos données</h2>
        <h3>Prénom</h3>
        <input placeholder='Prénom'/>
        <h3>Nom</h3>
        <input placeholder='Nom'/>
        <h3>Téléphone</h3>
        <input placeholder='Téléphone'/>
        <h3>Email</h3>
        <input placeholder='Email'/>
        <h3>Copie CIN</h3>
        <input className='file' type='file' placeholder='Copie CIN'/>
      </div>

      <div className='entreprise'>
        <h2>Entreprise</h2>
        <h3>Forme juridique</h3>
        <input placeholder='Forme juridique'/>
        <h3>Activité de l'entreprise</h3>
        <input placeholder='Activité'/>
        <h3>Appellation 1</h3>
        <input placeholder='Appellation 1'/>
        <h3>Appellation 2</h3>
        <input placeholder='Appellation 2'/>
        <h3>Appellation 3</h3>
        <input placeholder='Appellation 3'/>
      </div>
    </div>
   
  </article>

  <div className='overlay'></div>

</div>
  )
}
