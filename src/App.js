import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import './App.css';
import Header from './components/header/Header';
import LabelBottomNavigation from './components/MainNav/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route className="page-title" path='/' component={Trending} exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>
      <LabelBottomNavigation />
    </BrowserRouter>
  );
}

export default App;