import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Comment from "../Comment/Comment";

const Comments = (event) => {
  const currentUser = useSelector((state) => state.auth);
  const [comment, setComment] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(`/eventComments/${event.event.id}`);
        setComentarios(data);
        setSubmitted(false); // Reiniciar el estado a false
      } catch (error) {
        console.log(error);
      }
    };

    getComments();

    const interval = setInterval(getComments, 1500); // Llamar a getComments cada 10 segundos

    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
  }, [event.event.id, submitted]);

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`/eventComments`, {
      writer: currentUser.user.id,
      comment: comment,
      rating: rating,
      id_event: event.event.id,
    });
    setComment("");
    setRating(0);
    setSubmitted(true);
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
    </>
  );
};

export default Comments;
