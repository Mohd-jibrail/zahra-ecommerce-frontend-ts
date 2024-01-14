import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductContextProvider from './store/ProductStore';
import ProductDetails from './Pages/Details/ProductDetailes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';

import './App.css';

function App() {
  return (
     <>
     <ProductContextProvider>
      <Router>
          <Header></Header>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/details/:id' element={ <ProductDetails/> }/>
              <Route path='/signIn' element={<SignIn/>}/>
              <Route path='/SignUp' element={<SignUp/>}/>
            </Routes>
          <Footer></Footer>
        </Router>
      </ProductContextProvider>
     </>
  );
}

export default App;
