import styles from "./Post.module.css";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import { useState } from "react";

export function Post({ author, authorRole, publishedAt, avatarUrl, publication = true, avatarUrlComment, authorComment, authorRoleComment, commentPost}) {

  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const handleComment = (event) => {
    event.preventDefault();
    console.log(comment);
    setComments((comments) => [...comments, comment]);
    console.log(comments);
  };

  return (  
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{authorRole}</span>
          </div>
        </div>

        <time>{publishedAt}</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. 🚀
        </p>
        <p>
          <a href="#"> github.com/fallerbruno </a>
        </p>
        <p>
          <a href="#">#NovoProjeto </a>
        </p>
      </div>

      <form className={styles.form} onSubmit={handleComment}>
        <h3>Deixe seu feedback</h3>
        <textarea required placeholder="Nossa, adorei amigo! Parabéns!" name="comment" value={comment} onChange={(event) => setComment(event.target.value)} ></textarea>
        {
          publication ? 
          <button type="submit">Publicar</button> : 
          null
        }
      </form>
      
      { 
        publication ? 
          null : 
          <Comment comment={commentPost} avatarUrlComment={avatarUrlComment} authorComment={authorComment} authorRoleComment={authorRoleComment} />
      }

     {/*  {comments.map((comentario) => (
        <Comment content={comentario} />
      ))} */}
    </article>
  );
}
