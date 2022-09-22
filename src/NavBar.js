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

    //styles------------------------------------------

    let burgerMenu={
        'scale':'3',
        'color':'var(--color1)',
    }

    return (
    <>
        <div className='navbar'>
            {windowWidth>700&&
            <div>
                <Link to='/'><div>Acceuil</div></Link>
                <Link to='/formulaires-fiscaux'><div>Formulaires fiscaux</div></Link>
                <Link to='/certificat-néfatif'><div>Certificat négatif</div></Link>
                <Link to='/a-propos'><div>A propos</div></Link>
            </div>}
                {windowWidth<700&&
            <div>
                    <Link to='/'><div><BiMenu style={burgerMenu}
                    /></div></Link>
            </div>
                }

                <div>
                    <Link to='/connexion'><div>Connexion</div></Link>
                </div>
        </div>

        <article></article>
    </>
    )
}
