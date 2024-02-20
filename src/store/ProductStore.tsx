import { useReducer,createContext,ReactNode } from "react";
interface IUser{
  _id: string
  firstName: string
  lastName: string
  email: string
  contact: string
  password: string
  gender: 'male' | 'female'
  role: 'user' | 'admin'
  dob: Date
  address: [
    {
      h_No: string
      city: string
      zipcode: string
      state: string
    },
  ]
  cart: [
    {
      prodId: string
      name: string
      price: number
      count: number
    },
  ]
  createdAt: Date
  updatedAt: Date
  age: number /*virtua element*/
}
interface IUserContext{
    User:IUser[],
    signIn:(id:string)=>any;
}
export const UserContext = createContext<IUserContext>({
  User:[],
  signIn: () => {}
});

const productReducer = (currProducts: IUser[], action: any): IUser[] =>{
    let newProducts = [...currProducts];
  
  return newProducts;
};
interface ProductContextProviderProps {
    children: ReactNode;
  }
const ProductContextProvider: React.FC<ProductContextProviderProps> = ({children}) => {
    const [User, dispatchUser] = useReducer(productReducer, []);
  
    const signIn = (id: string) => {
      const signInAction={
        type:"UPDATE_TASK",
      }
      dispatchUser(signInAction);
    };
  
    return (
      <UserContext.Provider
        value={{
          User,
          signIn,
        }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default ProductContextProvider;