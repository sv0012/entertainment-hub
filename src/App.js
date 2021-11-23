import "./components/Header/Header"
import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";
import Series from "./pages/Series/Series";
import Movies from "./pages/Movies/Movies";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <SimpleBottomNavigation />
      <Container>
        <Switch>
          <Route path='/' component={Trending} exact />
          <Route path='/Movies' component={Movies} />
          <Route path='/Series' component={Series} />
          <Route path='/Search' component={Search} />
        </Switch>
      </Container> 
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;
