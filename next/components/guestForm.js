import styles from '../styles/GuestPage.module.css';

//TODO: UPDATE CSS FILE
export default function GuestForm({ guest, handleSubmit }) {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>{guest.name}</h1>
      </div>
      <div>
        <label>Are you attending the wedding? </label>
        <select
          name='rsvp'
          defaultValue={guest.rsvp === 'confirmed' ? true : false}>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
      </div>

      <div>
        <label>Do you come with a companion? </label>
        <select name='plusOne' defaultValue={guest.plusOne}>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
      </div>
      <div>
        <label>Please choose your menu: </label>
        <br />
        {guest.mealSelection.map((dish) => (
          <>
            <input type='checkbox' name={dish.dish} value={dish.dish} checked={dish.selected}/>
            <label htmlFor={dish.dish}>{dish.dish}</label>
          </>
        ))}
      </div>

      <button type='submit'>Send</button>
    </form>
  );
}
