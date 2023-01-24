import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './container/Home/home'
import Dashboard from './container/Dashboard/dashboard'
import Signin from './components/Signin/signin'
import Signup from './components/Signup/signup'
import Categories from './components/Categories/categories'
import Polls from './components/Polls/polls'
import Questions from './components/Questions/questions'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
             <Dashboard /> 
          </Route>
          <Route exact path="/categories">
             <Categories />
          </Route>
          <Route exact path="/signin">
             <Signin />
          </Route>
          <Route exact path="/signup">
             <Signup />
          </Route>
          <Route exact path="/polls">
             <Polls />
          </Route>
          <Route exact path="/questions">
             <Questions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
