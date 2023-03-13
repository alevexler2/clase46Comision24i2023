import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const { title, icon, price, id } = props.prod;
  const navigate = useNavigate();

  return (
    <div className="card col-3 mx-2 g-0 shadow">
      <img src={icon} className="card-img-top" alt={title}/>
      <div className="card-body d-flex flex-column justify-content-between">
        <h3 className="card-title">{title}</h3>
        <div className='text-center'>
          <button className='btn btn-primary' onClick={() => navigate(`/prod/${id}`)}>Comprar ${price}</button>
        </div>
      </div>
    </div>
  )
};

export default Card;
