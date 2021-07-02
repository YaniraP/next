import useSWR from "swr";
import Guest from "../../components/guest";

const fetcher = url => fetch(url).then(res => res.json());

export default function Task1() {
  const { data, error } = useSWR(
    "/api/guests",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
       { data.map(guest => 
         <Guest key={guest.id} guest={guest}/>)}

    </div>
  );
}

