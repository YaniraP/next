import styles from '../styles/GuestPage.module.css';

//TODO: UPDATE CSS FILE
export default function GuestInfo({ guest, handelEdit }) {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Hi {guest.name.split(' ').slice(0, 1)}!</h2>
      <p className={styles.question}>
        Would you like to edit your information?
      </p>

      <div className={styles.guestInfo}>
        <div className={styles.guestInfoItem}> 
        <p>Name: {guest.name}</p></div>
        <div className={styles.guestInfoItem}>
        <p> Plus one: {guest.plusOne ? 'Yes' : 'No'}</p>
        </div>
        <div className={styles.guestInfoItem}>
        <p> RSVP:{' '}
          {guest.rsvp === 'confirmed' ? guest.rsvp : 'pending confirmation'}</p>
        </div>
        <div className={styles.guestInfoItem}>
         <p>Menu selection:{' '}
          {!guest.mealSelection[0].selected &&
          !guest.mealSelection[1].selected &&
          !guest.mealSelection[2].selected
            ? 'No menu'
            : guest.mealSelection.map(
                (dish, i) =>
                  dish.selected && (
                    <li key={i} className={styles.dish}>
                      {'' + dish.dish + ' '}
                    </li>
                  )
              )}</p> 
        </div>
      </div>

      <button className={styles.btn} onClick={handelEdit}>
        Edit
      </button>
    </div>
  );
}
