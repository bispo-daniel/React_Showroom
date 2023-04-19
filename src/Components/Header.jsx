import '../CSS/Header.css'
import { useEffect } from 'react'
import Trigger from '../Trigger'

function Header(){
    useEffect(() => {
        Trigger();
    }, [])
    return(
        <>
            <header>
                <h1>Virtual store</h1>

                <div className="icons">
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-youtube"></i>
                </div>
            </header>
            <nav>
                    <a href='/'>Products</a>
                    <a href='/Contact'>Contacts</a>
            </nav>
        </>
    )
}

export default Header