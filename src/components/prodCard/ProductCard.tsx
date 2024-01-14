import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

interface CardProps {
  id:string;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}

const Card: React.FC<CardProps> = ({ id,image, name, description, price, rating }) => {
  return (
    <Link to={`/details/${id}`}>
      {
        <div className="card">
        <img src={image} alt={name} className="card-image" />
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="card-price">₹{price} Kg</span>
          <span className="card-rating">{rating} ⭐</span>
        </div>
      </div>
      }
  </Link>
  );
};

export default Card;