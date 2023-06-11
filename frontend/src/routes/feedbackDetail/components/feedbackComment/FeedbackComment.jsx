import styles from '../../css/index.module.css'
import { useState } from 'react';
import axios from 'axios';
import getCurrentUser from '../../../../helpers/getCurrentUser';


function FeedbackComment({
  commentInfo,
  isReply,
  fetchSuggestionComments,
  parentComment
}) {

  const [replyText, setReplyText] = useState('');
  function handleReply(e) {
    setReplyText(e.target.value);
  }

  const [feedbackBoxActive, setFeedbackBoxActive] = useState(false);
  function handleFeedbackBoxActive() {
    setFeedbackBoxActive(feedbackBoxActive => !feedbackBoxActive);
  }

  let replies = [];
  if (isReply === false) {
    replies = commentInfo?.replies?.map(reply => {
      return {
        ...reply,
        feedbackBoxActive: false
      }
    });
  }

  return (
    <li className={styles["comment"]} data-type={(isReply) ? 'reply' : ''}>
      <img
        width="40px"
        height="40px"
        className={styles['user-img']}
        src={`/api/images/user-images/${commentInfo.user.image}`}
        alt="user" />
      <h2 className={styles['user-name']}>{commentInfo.user.name}</h2>
      <p className={styles['user-email']}>@{commentInfo.user.username}</p>
      <button
        data-type="6"
        className={styles['reply-btn'] + ' | btn text-blue-5 font-medium'}
        onClick={handleFeedbackBoxActive}>
        Reply
      </button>

      <div className={styles["lal"]}>
        <p className={styles['comment-text']}>
          {
            isReply && <span className="reply-to | text-purple font-bold">@{commentInfo?.replyingTo} </span>
          }
          {commentInfo.content}
        </p>
        {feedbackBoxActive &&
          <form className={styles['reply-form']}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              autoFocus
              value={replyText}
              onChange={handleReply} />
            <button
              type='submit'
              className='btn'
              data-type="1"
              onClick={(e) => {
                e.preventDefault();
                if (replyText.length === 0) {
                  return
                }

                async function handlePostReply() {
                  await axios.post('/.netlify/functions/post-comment', {
                    title: parentComment.parentTitle,
                    content: replyText,
                    user: getCurrentUser(),
                    isReply: true,
                    replyingTo: commentInfo.user.username,
                    parentId: parentComment.parentIndex
                  });
                  await fetchSuggestionComments();
                }
                handleFeedbackBoxActive();
                handlePostReply();
              }}>
              Post Reply
            </button>
          </form>
        }
      </div>
      {
        (isReply === false) && (
          <ul className={styles["reply-list"]}>
            {
              replies?.map((reply, replyIndex) =>
                <FeedbackComment
                  key={replyIndex}
                  commentInfo={reply}
                  isReply={true}
                  fetchSuggestionComments={fetchSuggestionComments}
                  parentComment={parentComment}
                />)
            }
          </ul>
        )
      }
    </li>
  )
}

export default FeedbackComment;