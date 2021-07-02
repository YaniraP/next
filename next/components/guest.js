import styles from '../styles/Guest.module.css';
import Link from 'next/link';

export default function Guest({ guest }) {
  return (
    <div className={styles.guestItem}>
      <Link href='/'>
        <a className={styles.guestName}>{guest.name}</a>
      </Link>
      <div className={styles.guestIcon}>
        {guest.rsvp === 'confirmed' ? (
          <i className="fa fa-check-square confirmed" ></i>
        ) : (
          <i className="fa fa-question-circle" ></i>
        )}
      </div>
    </div>
  );
}


