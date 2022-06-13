import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css"

export function Comment({content, onDeleteComment}){ 

  const [likeCount, setLikeCount] = useState(0); 

  function handleDeleteComment(){ 
    onDeleteComment(content); 
  }

  function handleLikeComment(){ 
    setLikeCount(likeCount + 1); 
  }

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
              <Trash onClick={handleDeleteComment} size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Clap <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  ); 
}