import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Stock  from "./pages/stock";
import DemandeStock from "./pages/demandeStock";
import { AuthContextProvider } from "./components/shared/AuthContext";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
        <Routes>
          <Layout>
             <Route exact path="/" element={<Login />}>
             <Route exact path="home" element={<Home />} />
             <Route exact path="stock" element={<Stock />} />
             <Route exact path="demandeStock" element={<DemandeStock />} />
           </Route>
         </Layout>
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
