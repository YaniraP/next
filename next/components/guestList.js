import styles from '../styles/GuestList.module.css';
import GuestListItem from './guestListItem';
import { useState } from 'react';

export default function GuestList({data}) {
  const [name, setName] = useState('');
  const [foundGuests, setFoundGuests] = useState(data);

  const filter = (e) => {
  const keyword = e.target.value;

    if (keyword !== '') {
      const results = data.filter((guest) => {
        return guest.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Used the toLowerCase() method to make it case-insensitive
      });
      setFoundGuests(results);
    } else {
      setFoundGuests(data);
      // If the text field is empty, show all guests
    }
    setName(keyword);
  };


  return (
    <div>
      <h1 className={styles.title}>Guest List</h1>
      <div className={styles.container}>
        <input
            type="search"
            value={name}
            onChange={filter}
            placeholder="Search a guest 🔍"
        />
        <div className="styles.guest-list">
          {foundGuests && foundGuests.length > 0 ? (
            foundGuests.map((guest) => (
              <GuestListItem key={guest.id} guest={guest} />
               ))
                ) : (
                <h1 className={styles.message}>Ups! It looks like you haven't invited this person yet</h1>
          )}
        </div>
      </div>
    </div>
  );
}

