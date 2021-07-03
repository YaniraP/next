import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '../index';


export default function GuestPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/guests/${id}`, fetcher);

  if (error) return 'An error has occurred: ' + error;
  if (!data) return 'Loading...';

  return (
    <>
      <div>Guest {id}</div>
      <p>{data.name}</p>

     </>
  );
}
