import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/prodCard/ProductCard"
import './Home.css'
import img1 from "../../public/images/img1.jpg"

const Home = ()=> {
    const [products,setProducts] = useState<any[]>([{}])

    useEffect(()=>{
        const fetchData =async () => {
            try{
                const response = await axios.get('http://localhost:3000/api/prod/products');
                setProducts(response.data.products)  
            }catch(e){
                console.log(e)
            }
        }
        fetchData()
    },[]);
    
    return (
        <div className="card-container">
        { Array.isArray(products) && products.length>0 ?(products.map((item)=>
            <ProductCard key={item._id} 
                        id={item._id}
                        image={img1} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        rating={item.rating}/>)):(<p>Hello</p> )
        }
        </div>
    );
};

export default Home;
