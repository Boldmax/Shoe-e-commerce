import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Navbar from './component/pages/navbar/Navbar';
import Home from './component/homePage/HomePage';
import ShoePage from './component/pages/shoePage/ShoePage';
import SearchBar from './component/searchBar/SearchBar';
import ShoeCart from './component/pages/shoeCart/ShoeCart';
import Footer from './component/pages/footer/Footer';


function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <SearchBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shoe/:id" component={ShoePage} />
          <Route exact path="/cart" component={ShoeCart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
