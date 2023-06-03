import styles from './css/index.module.css';
import imgIconSuggestions from '../../assets/suggestions/icon-suggestions.svg';
import imgMenuOpen from '../../assets/shared/mobile/icon-hamburger.svg';
import imgMenuClose from '../../assets/shared/mobile/icon-close.svg';
import { useState } from 'react';

import iconSuggestionEmpty from '../../assets/suggestions/illustration-empty.svg';
import Suggestion from '../../components/suggestion/Suggestion';


function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenuStatus() {
    setMenuOpen(menuOpen => !menuOpen);
  }

  return (
    <>
      <div className={styles["container"]}>
        <header className={styles["header"]}>
          <div className={styles["header__info"]}>
            <h1 className="text-white">Frontend Mentor</h1>
            <p className="text-grey-3">Feedback Board</p>
          </div>
          <div
            className={styles["menu-control"]}
            onClick={handleMenuStatus}
          >
            {/* TODO: make buttons */}

            <button>
              <img src={imgMenuOpen} width="20px" height="17px" className={menuOpen ? 'hidden' : ''} alt="open" />
              <img src={imgMenuClose} width="18px" height="17px" className={menuOpen ? '' : 'hidden'} alt="close" />
            </button>
          </div>
        </header>

        <div
          className={styles["aside-wrapper"]}
          data-menu-active={menuOpen}
          onClick={e => {
            if (e.currentTarget === e.target) {
              handleMenuStatus();
            }
          }}
        >
          <aside className={styles['aside']}>
            <ul className={styles['tag-list'] + " card"} role="list">
              <li data-active="true">
                <button className='tag'>All</button>
              </li>
              <li>
                <button className='tag'>UI</button>
              </li>
              <li>
                <button className='tag'>UX</button>
              </li>
              <li>
                <button className='tag'>Enhancement</button>
              </li>
              <li>
                <button className='tag'>Bug</button>
              </li>
              <li>
                <button className='tag'>Feature</button>
              </li>
            </ul>
            <div className={styles["roadmap"] + " card"}>
              <div className={styles["roadmap-info"]}>
                <h2 className="roadmap-title">Roadmap</h2>
                <a href="">View</a>
              </div>
              <ul className={styles["roadmap__statuses"]}>
                <li className={styles["roadmap__status"]}>
                  <p className='text-grey-4'>Planed</p>
                  <p className='text-grey-4 font-bold'>2</p>
                </li>
                <li className={styles["roadmap__status"]}>
                  <p className='text-grey-4'>In-Progress</p>
                  <p className='text-grey-4 font-bold'>3</p>
                </li>
                <li className={styles["roadmap__status"]}>
                  <p className='text-grey-4'>Live</p>
                  <p className='text-grey-4 font-bold'>1</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <main className={styles['main']}>
          <div className={styles["suggestion-controler"] + " | bg-dark-blue-5"}>
            <div className="grid grid-col">
              <img src={imgIconSuggestions}
                className={styles['icon-suggestions']}
                width="23px"
                height="24px"
                alt="suggestions" />
              <h2 className={styles["suggestion-count"] + " | text-white font-bold"}>
                6 Suggestions
              </h2>
            </div>

            <div className={styles["sort-menu"]}>
              <p className='text-white'>Sort by : </p>
              <button className='font-bold text-white'>Most Upvotes</button>
            </div>

            <button className={styles['add-feedback'] + " btn"} data-type="1">+ Add Feedback</button>
          </div>
          {/* <ul className={styles['suggestion-list']} role="list">
            <Suggestion />
          </ul> */}
          <div className={styles["empty-feedback"] + " | card bg-white"}>
            <img
              src={iconSuggestionEmpty}
              alt="empty suggestions" 
              width="102px"
              height="108px"
              />

            <div className={styles["empty-feedback__info"]}>
              <h2 className=''>
                There is no feedback yet.
              </h2>
              <p>
                Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
              </p>
              <button className='btn' data-type="1">
                + Add Feedback
              </button>

              <input type="text" defaultValue="Add a dark theme option" />
            </div>
          </div>
        </main>
      </div>

    </>
  )
}


export default Root;