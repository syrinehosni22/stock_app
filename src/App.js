import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Stock  from "./pages/stock";
import { connect, Provider } from "react-redux";
import DemandeStock from "./pages/demandeStock";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { store } from './redux/store';
function App() {

   
  return (
    <div className="App">
      <Provider store={store}>
       <BrowserRouter>
          <Routes>
             <Route exact path="/" element={<Login />}>
             <Route exact path="home" element={<Home />} />
             <Route exact path="stock" element={<Stock />} />
             <Route exact path="demandeStock" element={<DemandeStock />} />
           </Route>  
          </Routes>
       </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
