function ContactCard(props) {
    return (
        <div className="card text-center mb-3" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="https://google.com" className="btn btn-primary">{props.btnText}</a>
            </div>
        </div>
    )
}

export default ContactCard