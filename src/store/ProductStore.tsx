import { useReducer,createContext, Children, ReactNode } from "react";


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
interface IProductContext{
    Products:IProduct[],
    getProduct:(id:string)=>void;
    getAllProduct:()=>any

}
export const ProductContext = createContext<IProductContext>({
  Products:[],
  getProduct: () => {},
  getAllProduct: () => {},
});

const productReducer = (currProducts: IProduct[], action: any): IProduct[] =>{
    let newProducts = [...currProducts];
  
  return newProducts;
};
interface ProductContextProviderProps {
    children: ReactNode;
  }
const ProductContextProvider: React.FC<ProductContextProviderProps> = ({children}) => {
    const [Products, dispatchProduct] = useReducer(productReducer, []);
  
    const getProduct = (id: string) => {
      
    };
  
    const getAllProduct = ():any => {
     
    };
  
    return (
      <ProductContext.Provider
        value={{
          Products,
          getAllProduct,
          getProduct
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  };
  
  export default ProductContextProvider;