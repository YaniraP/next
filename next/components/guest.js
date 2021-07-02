import Link from 'next/link'

//TODO: add link + style
export default function Guest({ guest }) {
  return (
    <li>
        <a>{guest.name}</a>
        <p>{guest.rsvp}</p>
    
    </li>
  )
}
