import { useRouter } from "next/router";
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function GuestPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    () => id && `/api/guests/${id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return <div>Guest {id}</div>;
}