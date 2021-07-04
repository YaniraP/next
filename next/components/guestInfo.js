import styles from '../styles/GuestPage.module.css';


//TODO: UPDATE CSS FILE
export default function GuestInfo({guest, handelEdit}) {
  
  return (
    <div>
    <h2 className={styles.title}>
      Hi {guest.name.split(' ').slice(0, 1)}!
    </h2>
      <p className={styles.question}>Would you like to edit your information?</p>
    <> <button className={styles.btn} onClick={handelEdit}>
     
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

  );
}