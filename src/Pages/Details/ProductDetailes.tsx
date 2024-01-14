import React, { useEffect, useState } from 'react';
import img1 from "../../public/images/img1.jpg"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./ProductDetailes.module.css"

interface IProduct{
  _id: string
  name: string
  description: string
  prodType: string
  price: number
  stock: number
  ratings: number
  isAvailable: boolean
  reviews:{
      userId: string
      comments: string
      rating: number
      recommend: boolean
    }[],
  createdAt: Date
  updatedAt: Date
  
}
const ProductDetails: React.FC = () => {
  const [product,setProduct] = useState<IProduct>()
  const { id } = useParams();
    useEffect(()=>{
        const fetchData =async () => {
            try{
                const response = await axios.get(`http://localhost:3000/api/prod/product/${id}`);
                console.log(response)
                setProduct(response.data.product)    
            }catch(e){
                console.log(e)
            }
        }
        fetchData()
    },[]);
  return (
    <div className={style.container}>
      <div className={style.productImageDiv}>
        <img  src={img1} alt={img1} className={style.ProductImage} />
      </div>
      <div className={style.detailes}>
        <h2>{product?.name}</h2>
        <p>{product?.description}</p>
        <p>Price: ${product?.price} Kg</p>
        <p>Rating: {product?.ratings}</p>
        <button className='buyButton' >Buy</button>
      </div>
    </div>
  );
};

export default ProductDetails;
