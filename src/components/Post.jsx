import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css"; 
import {format, formatDistanceToNow} from "date-fns"; 
import enUS from "date-fns/locale/en-US"
import { useState } from "react";

export function Post({author, publishedAt, content}){ 

  const [comments, setComments] = useState([
    "Very nice, congrats!"
  ]);
  
  const [newCommentText, setNewCommentText] = useState(''); 

  const publishedDateFormatted = format(publishedAt, "dd 'of' LLLL 'at' HH:mm'h' ", { 
    locale: enUS, 
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { 
    locale: enUS, 
    addSuffix: true, 
  }); 

  function handleCreateNewComment(e){ 
    e.preventDefault();
    setComments([...comments, newCommentText]); 
    setNewCommentText(''); 
  }

  function handleNewCommentChange(e){ 
    setNewCommentText(e.target.value); 
    e.target.setCustomValidity(""); 
  }

  function handleNewCommentInvalid(e){ 
    e.target.setCustomValidity("Required field!"); 
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeleteOne = comments.filter(comment => { 
      return comment !== commentToDelete; 
    }); 
    setComments(commentsWithoutDeleteOne); 
  }

  const isNewCommentEmpty = newCommentText.length === 0; 

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.authorUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} datatime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      
      <div className={styles.content}>
        {content.map(item => { 
          if(item.type === "paragraph"){ 
            return <p key={item.content}>{item.content}</p>
          } else if(item.type === "link"){ 
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          value={newCommentText} 
          onChange={handleNewCommentChange} 
          placeholder="Say something"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => { 
          return ( 
            <Comment 
              onDeleteComment={deleteComment}
              key={comment} 
              content={comment}
            />
          ); 
        })}
      </div>

    </article>
  ); 
}