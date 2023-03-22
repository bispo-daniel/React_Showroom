import '../CSS/Header.css'

function Header(){
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
                    <a href='/'>Produtos</a>
                    <a href='/Contact'>Contatos</a>
            </nav>
        </>
    )
}

export default Header