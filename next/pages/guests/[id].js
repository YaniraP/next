import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from '../../styles/GuestPage.module.css';
import editIcon from '../../public/edit.svg';

import { fetcher } from '../index';
import { useState } from 'react';

//TODO-> MENU SELETION: MESSAGE NO MENU SELECTED
export default function GuestPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/guests/${id}`, fetcher);
  const guest = data;

  const [isEditing, setEditing] = useState(false);
  const [menu, setMenu] = useState(0);

  const [query, setQuery] = useState({
    name: '',
  });

  if (error) return 'An error has occurred: ' + error;
  if (!data) return 'Loading...';

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`/api/guests/${id}`, {
      method: 'POST',
      body: formData,
    }).then(() => setQuery({ name: '' }));
  };

  return (
    <div className={styles.GuestPageCointaner}>
      {!isEditing ? (
        <div>
          <h2 className={styles.title}>
            Hi {guest.name.split(' ').slice(0, 1)}!
          </h2>
          <>
            <span>Would you like to edit your information?</span>
            <button className={styles.btn} onClick={() => setEditing(true)}>
              Edit
            </button>
          </>
          <div className={styles.guestInfo}>
            <div className={styles.guestInfoItem}>Name: {guest.name}</div>
            <div className={styles.guestInfoItem}>
              Plus one: {guest.plusOne ? 'Yes' : 'No'}
            </div>
            <div className={styles.guestInfoItem}>
              RSVP:{' '}
              {guest.rsvp === 'confirmed' ? guest.rsvp : 'pending confirmation'}
            </div>
            <div className={styles.guestInfoItem}>
              Menu selection:{' '}
              {guest.mealSelection.map(
                (dish, i) =>
                  dish.selected && (
                    <span key={i} className={styles.dish}>
                      {'·' + dish.dish + ' '}
                    </span>
                  )
              )}
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type='text'
              name='name'
              required
              placeholder='Name'
              className='form-control'
              value={query.name}
              onChange={handleParam()}
            />
          </div>
          <div>
            <label>Are you attending the wedding?: </label>
            <input
              type='text'
              name='name'
              required
              placeholder='Name'
              className='form-control'
              value={guest.rsvp}
              onChange={handleParam()}
            />
          </div>

          <div>
            <label>Do you come with a companion?: </label>
            <input
              type='text'
              name='name'
              required
              placeholder='Name'
              className='form-control'
              value={guest.plusOne}
              onChange={handleParam()}
            />
          </div>

          <button type='submit'>Send</button>
        </form>
      )}
    </div>
  );
}
