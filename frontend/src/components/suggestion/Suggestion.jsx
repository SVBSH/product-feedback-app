import iconComments from '../../assets/shared/icon-comments.svg'


import styles from './css/index.module.css';




function Suggestion() {
  const info = {
    votesCount: 122,
    title: 'Add a dark theme option',
    text: 'It would help people with light sensitivities and who prefer dark mode.',
    tag: 'Feature',
    commentsCount: 12
  }
  return (
    <li className={styles['suggestion'] + ' | card'}>

      <div className={styles["votes-counter"]}>
        <p className={styles['votes-count'] + " | tag"}>
          {info.votesCount}
        </p>
      </div>

      <div className={styles["suggestion-info"]}>
        <h2 className={styles['suggestion-title']}>
          {info.title}
        </h2>
        <p>{info.text}</p>
        <button className='tag'>
          {info.tag}
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
          {info.commentsCount}
        </p>
      </div>
    </li>
  )
}


export default Suggestion;