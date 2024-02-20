"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./ProductCard.css");
const Card = ({ id, image, name, description, price, rating }) => {
    return (<react_router_dom_1.Link to={`/details/${id}`}>
      {<div className="card">
        <img src={image} alt={name} className="card-image"/>
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="card-price">₹{price} Kg</span>
          <span className="card-rating">{rating} ⭐</span>
        </div>
      </div>}
  </react_router_dom_1.Link>);
};
exports.default = Card;
