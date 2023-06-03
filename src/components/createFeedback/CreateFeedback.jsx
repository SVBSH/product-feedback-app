import styles from './css/index.module.css'


function CreateFeedback() {

  return (
    <main className={styles['create-feedback'] + ' | '}>
      <form
        className={styles['form'] + " | card bg-white card"}
        onSubmit={e => {
          e.preventDefault();
          console.log('Submit')
        }}>
        <h1 className={styles['form__title']}>Create New Feedback</h1>

        <fieldset className={styles['form-group']}>
          <label className='font-bold color-dark-blue-5'>Feedback Title</label>
          <p>Add a short, descriptive headline</p>
          <input type="text" />
        </fieldset>

        <fieldset className={styles['form-group']}>
          <label className='font-bold color-dark-blue-5'>Category</label>
          <p>Choose a category for your feedback</p>
          <input type="text" />
        </fieldset>

        <fieldset className={styles['form-group']}>
          <label className='font-bold color-dark-blue-5'>Feedback Detail</label>
          <p>Include any specific comments on what should be improved, added, etc.</p>
          <textarea  name="Feedback detail" id="" cols="30" rows="10"></textarea>
        </fieldset>

        <fieldset className={styles['form-group']}>
          <button className='btn' data-type="3">Cancel</button>
          <button className='btn' data-type="1">Add Feedback</button>
        </fieldset>
      </form>
    </main>
  )
}

export default CreateFeedback;