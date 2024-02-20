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
                setProduct(response.data.product)    
            }catch(e){
                console.log(e)
            }
        }
        fetchData()
    });
  return (
        <>
        <table className={style.detailCard}>
          <tr>
            <td className={style.productImage}>
              <img  src={img1} alt={img1} className={style.ProdImage} />
            </td>
            <td className={style.productInfo}>
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <p>Price: ${product?.price} Kg</p>
                <p>Rating: {product?.ratings}</p>
                <button className='buyButton' >Buy</button>
            </td>
          </tr>
        </table>
        </>
    );
};

export default ProductDetails;
