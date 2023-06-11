import iconComments from '../../assets/shared/icon-comments.svg'
import { Link } from 'react-router-dom';

import styles from './css/index.module.css';
import axios from 'axios';
import getCurrentUser from '../../helpers/getCurrentUser';


function Suggestion({ content, getAllSuggestions }) {

  function handleUpvoteClick() {
    (async function () {
      await axios.post('/.netlify/functions/sugggestionUpdateVotes', {
        id: content._id,
        likedBy: getCurrentUser().username
      });
      getAllSuggestions();
    }
    )();
  }

  function getVoteStatus() {
    if (content.likedByList === undefined) {
      return false;
    }
    return content.likedByList.includes(getCurrentUser().username);
  }

  return (
    <li className={styles['suggestion'] + ' | card'}>

      <div className={styles["votes-counter"]}>
        <p className={styles['votes-count'] + " | tag"} 
          data-active={getVoteStatus()}
          onClick={handleUpvoteClick}>
          {content.upvotes}
        </p>
      </div>

      <div className={styles["suggestion-info"]}>
        <Link
          className='suggestion-link'
          to={`/feedback-detail/${content._id}`}
          state={content} >
          <h2 className={styles['suggestion-title']}>
            {content.title}
          </h2>
        </Link>
        <p>{content.description}</p>
        <button className='tag'>
          {content.category}
        </button>
      </div>

      <div className={styles["comment-wrapper"]}>
        <img
          src={iconComments}
          width="18px"
          height="16px"
          className={styles['icon-comments']}
          alt="" />
        <p className={styles['comment-count'] + " | font-bold"}>
          {content?.upvotes}
        </p>
      </div>
    </li >
  )
}


export default Suggestion;