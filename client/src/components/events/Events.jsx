import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function validate(input) {
  return Object.keys(input).reduce((errors, key) => {
    console.log(errors + "Aquí" + key);
    return {
      ...errors,
      [key]: input[key] ? "" : `El ${key} es obligatorio`,
    };
  }, {});
}

const Events = () => {
  
const navigate = useNavigate();
const dispatch = useDispatch();

  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    eventPhoto: "https://res.cloudinary.com/draxxv99e/image/upload/v1682710844/defaulr_urbanclub/coverPhoto_rmh1lj.png",
    name: "",
    price: 0,
    location: "",
    nameArena: "",
    date: ""
  });

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <div>
      <div>
        <form>

          <div>
            <label>
              <button>Subir Foto</button>
              <input name="eventPhoto" type="file" accept="image/png,image/jpg,image/jpeg"></input>
            </label>
          </div>

          <div>
            <label htmlFor="name">
              <div>
                <span >*</span> Name:
              </div>
              <input type='text' name="name" maxLength="35" required value={input.name} onChange={handleInputChange} />
            </label>

            <label htmlFor='price'>
              <div>
                <span>*</span> Price:
              </div>
              <input type='number' name='price' required value={input.price} onChange={handleInputChange} />
            </label>

            <label htmlFor='location'>
              <div>
                <span>*</span> Location:
              </div>
              <input type='text' name='location' required value={input.location} onChange={handleInputChange} />
            </label>

            <label htmlFor='nameArena'>
              <div>
                <span>*</span> Name Arena:
              </div>
              <input type='text' name='nameArena' required value={input.nameArena} onChange={handleInputChange} />
            </label>

            <label name="date">
              <div>
                <span >*</span> Date:
              </div>
              <input type='date' name='date' required value={input.date} onChange={handleInputChange} />
            </label>

          </div>

          <button>Create Event</button>
        </form>
      </div>
    </div>
  )
}

export default Events



// crear el formulario con los campos a completar
// crear los handler que van a manejar los eventos
// crear los dispatch que van a ejecutar las acciones.
// name, price, location, nameArena, date, eventPhoto