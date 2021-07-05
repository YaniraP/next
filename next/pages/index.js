// import Head from 'next/head';
import useSWR from 'swr';
import styles from '../styles/HomePage.module.css';
import GuestList from '../components/guestList';

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(process.env.API, fetcher);
  
  if (error) return 'An error has occurred: ' + error;
  if (!data) return 'Loading...';

  return (
    <div>
        <main className={styles.main}>
        <GuestList data={data} />
      </main>
    </div>
  );
}
