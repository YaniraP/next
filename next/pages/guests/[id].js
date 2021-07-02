import { useRouter } from "next/router";

export default function GuestPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Guest {id}</div>;
}