import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/payment';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Invoice from './components/Invoice/Invoice';
import Payment from './my-react-app/src/components/payment';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Payment} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/invoice" component={Invoice} />
      </Switch>
    </Router>
  );
};

export default App;
