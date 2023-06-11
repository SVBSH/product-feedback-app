import styles from './css/index.module.css';
import Suggestion from '../../components/suggestion/Suggestion';
import { Link, useLocation, useParams } from 'react-router-dom';
import FeedbackComment from './components/feedbackComment/FeedbackComment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import getCurrentUser from '../../helpers/getCurrentUser';


const MAX_FEEDBACK_LENGTH = 255;


function FeedbackDetail(props) {
  const { state } = useLocation();
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  async function fetchSuggestionComments() {
    const response = await axios.get(
      '/.netlify/functions/get_suggestion_comments', {
      params: {
        id: id
      }
    });
    const _comments = await response.data;
    setComments(_comments);
  }


  function getCommentCount() {
    let commentCount = 0;
    comments.forEach(comment => {
      commentCount++;
      comment?.replies?.forEach(() => commentCount++);
    })
    return commentCount;
  }


  useEffect(() => {
    fetchSuggestionComments();
  }, []);

  const [commentText, setCommentText] = useState('');
  function handleCommentText(e) {
    setCommentText(e.target.value)
  }

  function handlePostComment() {
    if (commentText.length === 0) {
      console.error('Comment text not set');
      return;
    }

    async function postComment() {
      try {
        await axios.post('/.netlify/functions/post-comment', {
          title: state.title,
          id: getCommentCount(),
          content: commentText,
          user: getCurrentUser(),
          isReply: false
        })
        await fetchSuggestionComments();
      }
      catch (e) {
        console.log(e);
      }
    }

    postComment();
    setCommentText(commentText => '');
  }


  return (
    <main className={styles["main"]}>

      <div className={styles["feedback-controler"]}>
        <Link to="/" className='btn' data-type="5" data-arrow="true">Go Back</Link>
        <button className="btn" data-type="2">Edit Feedback</button>
      </div>
      <Suggestion content={state} />

      <div className={styles["comments-wrapper"] + " | card bg-white"}>
        <h1 className={styles['comment-count']}>{getCommentCount()} Comments</h1>
        {/* List of user comments on suggestion */}
        <ul className={styles["comments"] + ""}>
          {
            (comments.length > 0) && comments?.map((comment, index) =>
              <FeedbackComment
                key={index}
                commentInfo={comment}
                fetchSuggestionComments={fetchSuggestionComments}
                isReply={false}
                parentComment={
                  {
                    parentTitle: state.title,
                    parentIndex: comment.id
                  }
                } />)
          }
        </ul>
      </div>

      <div className={styles["add-comment-wrapper"] + " | card bg-white"}>
        <h2>Add Comment</h2>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={handleCommentText}
          value={commentText}
          maxLength={MAX_FEEDBACK_LENGTH}
        />

        <p className={styles['max-text-notifier']}>{MAX_FEEDBACK_LENGTH - commentText.length} characters left</p>
        <button onClick={handlePostComment} className='btn' data-type="1">Post Reply</button>
      </div>
    </main>
  )
}


export default FeedbackDetail;
