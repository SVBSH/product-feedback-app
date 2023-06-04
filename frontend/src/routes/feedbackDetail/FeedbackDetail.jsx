import styles from './css/index.module.css';
import Suggestion from '../../components/suggestion/Suggestion';
import { Link } from 'react-router-dom';
import FeedbackComment from './components/feedbackComment/FeedbackComment';


function FeedbackDetail() {
  const commentInfo = {
    name: 'Elijah Moss',
    userName: 'hexagon.bestagon',
    content: 'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
    replies: [
      {
        name: 'Elijah Moss',
        userName: 'hexagon.bestagon',
        content: 'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.'
      },
      {
        name: 'James Skinner',
        userName: 'hexagon.bestagon',
        content: 'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.'
      },
      {
        name: 'Anne Valentine',
        userName: 'hexagon.bestagon',
        content: "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though."
      },
      {
        name: 'Ryan Welles',
        userName: 'hexagon.bestagon',
        content: "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons."
      }
    ]
  };

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
          <FeedbackComment commentInfo={commentInfo} isReply={false} />
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
