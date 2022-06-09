import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css"

export function Comment({content}){ 
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jordwalke.png"/>

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Jordan Walke</strong>
              <time title="08 de Junho às 22:10" datatime="2022-06-08 22:10:36">Cerca de 1h atrás</time>
            </div>
            <button title="delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Clap <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  ); 
}