import { useEffect, useState } from "react";
import Emoji from "../emoji/Emoji";
import "./AddContact.scss";

function AddContact(props) {
  const emptyContact = { id: null, emoji: { emoji: "" }, name: "", phone: "" };

  const [contact, setContact] = useState(emptyContact);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setContact(props.contact || emptyContact);
  }, [props.contact]);

  return (
    <div className="add-contact">
      <Emoji
        hidden={hidden}
        onAddEmoji={(emojiObj) => {
          setContact({ ...contact, emoji: emojiObj });
          setHidden(true);
        }}
      />
      <form className="contact-form">
        <label>
          {" "}
          Emoji{" "}
          <button
            id="emoji"
            name="emoji"
            onClick={(e) => {
              e.preventDefault();
              setHidden(!hidden);
            }}
          >
            Select emoji
          </button>
        </label>
        <span className="contact-emoji">{contact?.emoji.emoji}</span>
        <label>
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={contact?.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </label>
        <label>
          Phone number
          <input
            id="phone"
            type="text"
            name="phone"
            value={contact?.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
        </label>
        <button
          type="submit"
          value="Save Contact"
          onClick={(e) => {
            e.preventDefault();
            props.onAddContact(contact);
            setContact(emptyContact);
          }}
        >
          Save Contact
        </button>
      </form>
    </div>
  );
}

export default AddContact;
