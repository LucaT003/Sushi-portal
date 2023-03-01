import React from 'react';
import '../style/Card.css';
import { useDispatch } from 'react-redux';


const Card = (props) => {
   

   const dispatch = useDispatch()

    return(
        <div className='col'>
        <div className='corpo'>
        <div className="card" style={{width: '15rem', textAlign: 'center'}}>
        
  <img src={props.card.immagine} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.card.nome} Roll</h5>
    <p className="card-text">${props.card.prezzo}</p>
  
    <button id='buttonA' onClick={() => props.onIncrement(props.card)} className="btn btn-dark">
            Aggiungi<span className='badge badge-light'>{props.card.quantità}</span></button>
    <button id='buttonB' onClick={() => props.onDelete(props.card)} className="btn btn-outline-danger">Elimina</button>
  </div>
  
  </div>
</div>
</div>
    )
 }

export default Card;