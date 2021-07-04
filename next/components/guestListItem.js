import styles from '../styles/GuestListItem.module.css';
import Link from 'next/link';
import confirm from '../public/confirm.svg';
import pending from '../public/pending.svg';
import Image from 'next/image';

export default function GuestListItem({ guest }) {
  return (
    <div className={styles.guestItem}>
      <Link href={`guests/${guest.id}`}>
        <a className={styles.guestName}>{guest.name}</a>
      </Link>
      <div className={styles.guestIcon}>
        {guest.rsvp === 'confirmed' ? (
          <Image
            src={confirm}
            alt='Confirmed'
            width={90}
            height={30}
            className={styles.icon}
          />
        ) : (
          <Image
            src={pending}
            alt='Confirmed'
            width={90}
            height={30}
            className={styles.icon}
          />
        )}
      </div>
    </div>
  );
}
