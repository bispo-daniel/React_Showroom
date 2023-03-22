import '../CSS/Contact.css'
import ContactCard from '../Components/ContactCard'

function Contact() {
    return (
        <main>
            <p>Contatos: </p>

            <div className="cards">
                <ContactCard title="WhatsApp" text="(11) 90000-0000" btnText="Enviar mensagem"/>
                <ContactCard title="Telefone" text="(11) 0000-0000" btnText="Fazer ligação"/>
                <ContactCard title="E-mail" text="contato.example@example.com" btnText="Enviar e-mail"/>
                <ContactCard title="Facebook" text="Página da loja" btnText="Siga nossa página"/>
                <ContactCard title="Instagram" text="@pagina" btnText="Siga nossa página"/>
                <ContactCard title="Youtube" text="Canal da loja" btnText="Se inscreva"/>
                <ContactCard title="Ifood" text="Ifood da loja" btnText="Faça um pedido"/>
                <ContactCard title="Endereço" text="Rua Inexistente da praça - Bairro marciano - São paulo (SP)" btnText="Abra no mapa"/>
            </div>

            <div className="map">

            </div>
        </main>
    )
}

export default Contact