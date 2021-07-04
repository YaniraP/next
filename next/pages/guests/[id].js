import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../index';
import GuestInfo from '../../components/guestInfo';
import GuestForm from '../../components/guestForm';
import styles from '../../styles/GuestPage.module.css';

//TODO-> MENU SELETION: MESSAGE NO MENU SELECTED
export default function GuestPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/guests/${id}`, fetcher);

  const [isEditing, setEditing] = useState(false);

  if (error) return 'An error has occurred: ' + error;
  if (!data) return 'Loading...';

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/');
  };

  const handelEdit = () => setEditing(true);

  return (
    <div className={styles.GuestPageCointaner}>
      {!isEditing ? (
        <GuestInfo guest={data} handelEdit={handelEdit} />
      ) : (
        <GuestForm guest={data} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
