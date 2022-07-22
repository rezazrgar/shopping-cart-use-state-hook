import Header from './components/Header';
import Products from './components/Products';
import Basket from './components/Basket';
import Home from './components/Home';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PageBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addProductFunc = (product) => {

    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const removeProductFunc = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item));
    }
  }

  return (
    <Router>
      <AppWrapper>
        <Header />
        <PageBodyWrapper>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Navigate replace to="/" />} />
            <Route path='/products' element={<Products
              addProductFunc={addProductFunc}
              removeProductFunc={removeProductFunc}
              cartItems={cartItems}
            />} />
            <Route path='/basket' element={<Basket
              cartItems={cartItems}
              addProductFunc={addProductFunc}
              removeProductFunc={removeProductFunc}
            />} />
            <Route path='/sign-in' element={<SignIn />} />
          </Routes>
        </PageBodyWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
