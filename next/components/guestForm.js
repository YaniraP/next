import styles from '../styles/GuestForm.module.css';

export default function GuestForm({ guest, handleSubmit }) {
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className={styles.guestName}>{guest.name}</h1>
        </div>
        <div className={styles.formLabelContainer}>
          <label className={styles.formLabel}>
            Are you attending the wedding?{' '}
          </label>
          <select
            name='rsvp'
            defaultValue={guest.rsvp}
            onChange={(e) => (guest.rsvp = e.target.value)}
            className={styles.customSelect}>
            <option value='confirmed'>Yes</option>
            <option value='unconfirmed'>No</option>
          </select>
        </div>

        <div className={styles.formLabelContainer}>
          <label className={styles.formLabel}>
            Do you come with a companion?{' '}
          </label>
          <select
            name='plusOne'
            defaultValue={guest.plusOne}
            onChange={(e) => (guest.plusOne = e.target.value)}
            className={styles.customSelect}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <div className={styles.formLabelContainer}>
          <label className={styles.formLabel}>Please choose your menu: </label>
          <br />
          {guest.mealSelection.map((dish) => (
            <div key={dish.dish} className={styles.checkboxText}>
              <input
                type='checkbox'
                name={dish.dish}
                value={dish.selected}
                onChange={() => (dish.selected = !dish.selected)}
                checked={dish.selected}
                className={styles.checkbox}
              />
              <label htmlFor={dish.dish} className={styles.formLabel}>
                {dish.dish}
              </label>
            </div>
          ))}
        </div>

        <button className={styles.btn} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}
