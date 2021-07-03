import styles from '../styles/GuestList.module.css';
import Link from 'next/link';
import GuestListItem from './guestListItem';

export default function GuestList({data}) {

  return (
    <div >
    <h1 className={styles.title}>Guest List</h1>
    <div className={styles.container}>
      {data.map((guest) => (
        <GuestListItem key={guest.id} guest={guest} />
      ))}
    </div>
  </div>
  );
}