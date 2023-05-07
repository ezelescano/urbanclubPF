import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getDetailEvents,deleteEvent } from '../../../redux/eventSlice';
import { useNavigate, useParams } from 'react-router-dom';
import style from "./DetailsEvents.module.css"
function DetailsEvents() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams();
     const {detailEvent} = useSelector(state=>state.events)
     const islogin = useSelector((state) => state.auth);
  

    useEffect(() => {
      dispatch(getDetailEvents(id));
    }, [dispatch]);
  return (
    <div className={style.container}>
      <div className={style.img_Es}>
      <img src={detailEvent.eventPhoto} alt="" />
      </div>


      {
         islogin.user.id !== detailEvent.id_Artist ?
        (
          
          <div className={style.Description}>
      <h1>DETALLE</h1>
        <h2>{detailEvent.name}</h2>
        <h2>NOMBRE DEL LUGAR</h2>
        <h3>{detailEvent.nameArena}</h3>
       
        <h2>DIRECCION</h2>
        <h3>{detailEvent.location}</h3>
        <h2>PRECIO</h2>
        <h3>{detailEvent.price}</h3>

        {/* <p>{detailEvent.Description}</p> //!necesitamos una descripcion  */}

        <div className='links'>
                    <a href="https://github.com/estiven2111" target='_blank'>
                        <img src="/assets/Links/github.ico" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/estiven-arboleda-bb9aa61a4/" target='_blank'>
                        <img src="/assets/Links/linkedin.ico" alt="" />
                    </a>
                </div>
      </div>
        ):
        (islogin.isAuthenticated ?
         (
          <div className={style.Description}>
          <h1>EDITAR</h1>
            <h2>{detailEvent.name}</h2>
            <h2>NOMBRE DEL LUGAR</h2>
            <h3>{detailEvent.nameArena}</h3>
            <h3>{detailEvent.id}</h3>
            <h2>DIRECCION</h2>
            <h3>{detailEvent.location}</h3>
            <h2>PRECIO</h2>
            <h3>{detailEvent.price}</h3>
    
            {/* <p>{detailEvent.Description}</p> //!necesitamos una descripcion  */}
    
            <div className='links'>
                        <a href="https://github.com/estiven2111" target='_blank'>
                            <img src="/assets/Links/github.ico" alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/estiven-arboleda-bb9aa61a4/" target='_blank'>
                            <img src="/assets/Links/linkedin.ico" alt="" />
                        </a>
                      
                    </div>
          </div>
         ):(
          <div></div>
         )

         
        )
      }
        

    </div>
  )
}

export default DetailsEvents