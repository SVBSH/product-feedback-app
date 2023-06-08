import styles from './css/index.module.css';
import Suggestion from '../../components/suggestion/Suggestion';
import { Link, useLocation, useParams } from 'react-router-dom';
import FeedbackComment from './components/feedbackComment/FeedbackComment';


function FeedbackDetail(props) {
  const { state } = useLocation();

  return (
    <main className={styles["main"]}>

      <div className={styles["feedback-controler"]}>
        <Link to="/" className='btn' data-type="5" data-arrow="true">Go Back</Link>
        <button className="btn" data-type="2">Edit Feedback</button>
      </div>
      <Suggestion content={state} />

      <div className={styles["comments-wrapper"] + " | card bg-white"}>
        <h1 className={styles['comment-count']}>4 Comments</h1>
        {/* List of user comments on suggestion */}
        <ul className={styles["comments"] + ""}>
          {
            state.comments?.map((comment, index) =>
              <FeedbackComment key={index} commentInfo={comment} isReply={false} />)
          }
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
