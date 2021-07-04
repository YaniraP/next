import styles from '../styles/GuestInfo.module.css';

export default function GuestInfo({ guest, handelEdit }) {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Hi {guest.name.split(' ').slice(0, 1)}!</h2>
      <p className={styles.question}>
        Would you like to edit your information?
      </p>

      <div className={styles.guestInfo}>
        <div className={styles.guestInfoItem}>
          <p>
            <span className={styles.bolder}>Name: </span>
            {guest.name}
          </p>
        </div>
        <div className={styles.guestInfoItem}>
          <p>
            {' '}
            <span className={styles.bolder}>Plus one: </span>{' '}
            {guest.plusOne ? 'Yes' : 'No'}
          </p>
        </div>
        <div className={styles.guestInfoItem}>
          <p>
            <span className={styles.bolder}>RSVP: </span>
            {guest.rsvp === 'confirmed' ? (
              guest.rsvp
            ) : (
              <span className={styles.message}>confirmation pending</span>
            )}
          </p>
        </div>
        <div className={styles.guestInfoItem}>
          <p>
            <span className={styles.bolder}>Menu selection: </span>
            {!guest.mealSelection[0].selected &&
            !guest.mealSelection[1].selected &&
            !guest.mealSelection[2].selected ? (
              <p className={styles.message}>No menu selected</p>
            ) : (
              guest.mealSelection.map(
                (dish, i) =>
                  dish.selected && (
                    <li key={i} className={styles.dish}>
                      {dish.dish}
                    </li>
                  )
              )
            )}
          </p>
        </div>
      </div>

      <button className={styles.btn} onClick={handelEdit}>
        Edit
      </button>
    </div>
  );
}
