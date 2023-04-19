import '../CSS/Contact.css'
import ContactCard from '../Components/ContactCard'

function Contact() {
    return (
        <main>
            <p>Contacts: </p>

            <div className="cards">
                <ContactCard title="WhatsApp" text="(11) 90000-0000" btnText="Send mensage"/>
                <ContactCard title="Telephone" text="(11) 0000-0000" btnText="Call"/>
                <ContactCard title="E-mail" text="contact.example@example.com" btnText="Send e-mail"/>
                <ContactCard title="Facebook" text="Store's page" btnText="Follow"/>
                <ContactCard title="Instagram" text="@virtual" btnText="Follow"/>
                <ContactCard title="Youtube" text="Store's channel" btnText="Subscribe"/>
                <ContactCard title="Ifood" text="Ifood" btnText="Order"/>
                <ContactCard title="Address" text="22 Acacia avenue" btnText="Open maps"/>
            </div>

            <div className="map">

            </div>
        </main>
    )
}

export default Contact