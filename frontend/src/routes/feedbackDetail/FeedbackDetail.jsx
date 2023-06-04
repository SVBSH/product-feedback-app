import styles from './css/index.module.css';
import Suggestion from '../../components/suggestion/Suggestion';
import iconUserAnne from '../../assets/user-images/image-anne.jpg';
import { Link } from 'react-router-dom';

function FeedbackDetail() {
  return (
    <main className={styles["main"]}>

      <div className={styles["feedback-controler"]}>
        <Link to="/" className='btn' data-type="5" data-arrow="true">Go Back</Link>
        <button className="btn" data-type="2">Edit Feedback</button>
      </div>

      <Suggestion />

      <div className={styles["comments-wrapper"] + " | card bg-white"}>
        <h1 className={styles['comment-count']}>4 Comments</h1>
        {/* List of user comments on suggestion */}
        <ul className={styles["comments"] + ""}>
          <li className={styles["comment"]}>
            <img
              width="40px"
              height="40px"
              className={styles['user-img']}
              src={iconUserAnne}
              alt="user" />
            <h2 className={styles['user-name']}>Elijah Moss</h2>
            <p className={styles['user-email']}>@hexagon.bestagon</p>
            <div className={styles["lal"]}>
              <p className={styles['comment-text']}>
                Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
              </p>
              {/* Reply Form - shows after user clicks on reply button */}

              {/* <form action="" className={styles['reply-form']}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type='submit' className='btn' data-type="1">Post Reply</button>
              </form> */}
            </div>
            
            {/* List of Reply-Comments */}
            <ul className={styles["reply-list"]}>
              <li className={styles["comment"]} data-type="reply">
                <img
                  width="40px"
                  height="40px"
                  className={styles['user-img']}
                  src={iconUserAnne}
                  alt="user" />
                <h2 className={styles['user-name']}>Elijah Moss</h2>
                <p className={styles['user-email']}>@hexagon.bestagon</p>
                <button
                  data-type="6"
                  className={styles['reply-btn'] + ' | btn text-blue-5 font-medium'}>
                  Reply
                </button>

                <div className={styles["lal"]}>
                  <p className={styles['comment-text']}>
                    Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
                  </p>
                </div>
              </li>
            </ul>
          </li>

          <li className={styles["comment"]}>
            <img
              width="40px"
              height="40px"
              className={styles['user-img']}
              src={iconUserAnne}
              alt="user" />
            <h2 className={styles['user-name']}>Elijah Moss</h2>
            <p className={styles['user-email']}>@hexagon.bestagon</p>
            <div className={styles["lal"]}>
              <p className={styles['comment-text']}>
                Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
              </p>
            </div>
            <ul className={styles["reply-list"]}></ul>
          </li>

          <li className={styles["comment"]}>
            <img
              width="40px"
              height="40px"
              className={styles['user-img']}
              src={iconUserAnne}
              alt="user" />
            <h2 className={styles['user-name']}>Elijah Moss</h2>
            <p className={styles['user-email']}>@hexagon.bestagon</p>
            <button
              data-type="6"
              className={styles['reply-btn'] + ' | btn text-blue-5 font-medium'}>
              Reply
            </button>

            <div className={styles["lal"]}>
              <p className={styles['comment-text']}>
                Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
              </p>
              <form action="" className={styles['reply-form']}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type='submit' className='btn' data-type="1">Post Reply</button>
              </form>
            </div>

            <ul className={styles["reply-list"]}>
              <li className={styles["comment"]} data-type="reply">
                <img
                  width="40px"
                  height="40px"
                  className={styles['user-img']}
                  src={iconUserAnne}
                  alt="user" />
                <h2 className={styles['user-name']}>Elijah Moss</h2>
                <p className={styles['user-email']}>@hexagon.bestagon</p>
                <button
                  data-type="6"
                  className={styles['reply-btn'] + ' | btn text-blue-5 font-medium'}>
                  Reply
                </button>

                <div className={styles["lal"]}>
                  <p className={styles['comment-text']}>
                    Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
                  </p>
                </div>
              </li>
              <li className={styles["comment"]} data-type="reply">
                <img
                  width="40px"
                  height="40px"
                  className={styles['user-img']}
                  src={iconUserAnne}
                  alt="user" />
                <h2 className={styles['user-name']}>Elijah Moss</h2>
                <p className={styles['user-email']}>@hexagon.bestagon</p>
                <button
                  data-type="6"
                  className={styles['reply-btn'] + ' | btn text-blue-5 font-medium'}>
                  Reply
                </button>

                <div className={styles["lal"]}>
                  <p className={styles['comment-text']}>
                    Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
                  </p>
                  <form action="" className={styles['reply-form']}>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type='submit' className='btn' data-type="1">Post Reply</button>
                  </form>
                </div>
              </li>
            </ul>
          </li>

          <li className={styles["comment"]}>
            <img
              width="40px"
              height="40px"
              className={styles['user-img']}
              src={iconUserAnne}
              alt="user" />
            <h2 className={styles['user-name']}>Elijah Moss</h2>
            <p className={styles['user-email']}>@hexagon.bestagon</p>
            <button
              data-type="6"
              className={styles['reply-btn'] + ' | btn text-blue-5 font-medium'}>
              Reply
            </button>
            <div className={styles["lal"]}>
              <p className={styles['comment-text']}>
                Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
              </p>
              <form action="" className={styles['reply-form']}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type='submit' className='btn' data-type="1">Post Reply</button>
              </form>
            </div>

            <ul className={styles["reply-list"]}></ul>
          </li>
        </ul>
      </div>

      <div className={styles["add-comment-wrapper"] + " | card bg-white"}>
        <h2>Add Comment</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <p className={styles['max-text-notifier']}>225 characters left</p>
        <button className='btn' data-type="1">Post Reply</button>
      </div>
    </main>
  )
}


export default FeedbackDetail;