import './ContactList.scss';

function ContactItem(props) {

    return (
        <ul>
            {props.contacts.map(contact =>
                <li className='contact' key={contact.id}>

                    <span className="contact-emoji">{contact.emoji?.emoji}</span>
                    <div className="contact-field name" type="text">{contact.name}</div>
                    <div className="contact-field phone" type="text">{contact.phone}</div>
                    <button className='delete-contact' type='button' onClick={(e) => props.onEditContact(contact.id)}>
                        Edit Contact
                    </button>
                    <button className='delete-contact' type='button' onClick={(e) => props.onDeleteContact(contact.id)}>
                        Delete Contact
                    </button>
                </li>
            )}
        </ul>
    );
}

export default ContactItem;