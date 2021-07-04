import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from '../../styles/GuestPage.module.css';
import editIcon from '../../public/edit.svg';

import { fetcher } from '../index';
import { useState } from 'react';
import GuestInfo from '../../components/guestInfo';
import GuestForm from '../../components/guestForm';

//TODO-> MENU SELETION: MESSAGE NO MENU SELECTED
export default function GuestPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/guests/${id}`, fetcher);

  const [isEditing, setEditing] = useState(false);

  const [query, setQuery] = useState({
    name: "",
  });

  if (error) return 'An error has occurred: ' + error;
  if (!data) return 'Loading...';

  // const handleParam = () => (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setQuery((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

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
    router.push('/')
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
