import styles from '../../css/index.module.css'
import iconUserAnne from '../../../../assets/user-images/image-anne.jpg';
import { useState } from 'react';


function FeedbackComment({ commentInfo, isReply }) {
  const [feedbackBoxActive, setFeedbackBoxActive] = useState(false);
  function handleFeedbackBoxActive() {
    setFeedbackBoxActive(feedbackBoxActive => !feedbackBoxActive);
  }

  let replies = [];
  if (isReply === false) {
    replies = commentInfo?.replies.map(reply => {
      return {
        ...reply,
        feedbackBoxActive: false
      }
    });
    console.log(replies);
  }

  return (
    <li className={styles["comment"]} data-type={(isReply) ? 'reply' : ''}>
      <img
        width="40px"
        height="40px"
        className={styles['user-img']}
        src={iconUserAnne}
        alt="user" />
      <h2 className={styles['user-name']}>{commentInfo.name}</h2>
      <p className={styles['user-email']}>@{commentInfo.userName}</p>
      <button
        data-type="6"
        className={styles['reply-btn'] + ' | btn text-blue-5 font-medium'}
        onClick={handleFeedbackBoxActive}>
        Reply
      </button>

      <div className={styles["lal"]}>
        <p className={styles['comment-text']}>
          {commentInfo.content}
        </p>
        {feedbackBoxActive &&
          <form action="" className={styles['reply-form']}>
            <textarea name="" id="" cols="30" rows="10" autoFocus></textarea>
            <button type='submit' className='btn' data-type="1">Post Reply</button>
          </form>
        }
      </div>
      {
        (isReply === false) && (
          <ul className={styles["reply-list"]}>
            {
              replies.map((reply, replyIndex) =>
                <FeedbackComment
                  key={replyIndex}
                  commentInfo={reply}
                  isReply={true} />)
            }
          </ul>
        )
      }
    </li>
  )
}

export default FeedbackComment;