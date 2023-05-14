import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Comment.module.css";
import StarRating from "../StarRating/StarRating";

const Comment = (props) => {
  const { c } = props;
  console.log(c);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/artist/${c.writer}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [c.writer]);

  return (
    <div className={styles.commentContainer}>
      <div>
        <img
          src={user.profilePhoto}
          alt="Profile"
          className={styles.commentProfilePhoto}
        />
      </div>
      <div className={styles.commentContent}>
        <div className={styles.commentRating}>
          <StarRating rating={c.rating} />
        </div>
        <div className={styles.commentAuthor}>{user.name}</div>
        <div className={styles.commentText}>{c.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
