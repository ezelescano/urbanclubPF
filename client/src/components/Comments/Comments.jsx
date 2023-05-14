import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Comment from "../Comment/Comment";

const Comments = (event) => {
  const currentUser = useSelector((state) => state.auth);
  const [comment, setComment] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [rating, setRating] = useState(0);
  console.log(currentUser);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(`/eventComments/${event.event.id}`);
        setComentarios(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [event.event.id]);

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      writer: currentUser.user.id,
      comment: comment,
      rating: rating,
      id_event: event.event.id,
    };
    await axios.post(`/eventComments`, newComment);
    setComentarios((prevComments) => [...prevComments, newComment]);
    setComment("");
    setRating(0);
  };

  return (
    <>
      <div>
        {comentarios ? (
          comentarios?.map((c) => {
            return (
              <Comment
                key={event.event.id}
                c={c}
                // userProfilePhoto={currentUser.user.profilePhoto}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      {currentUser.isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={() => handleRatingChange(value)}
                />
                <span className="star">&#9733;</span>
              </label>
            ))}
          </div>
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleOnChange}
          />
          <button type="submit">Comentar</button>
        </form>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Comments;
