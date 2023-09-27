import SimpleInput from "./SimpleInput";
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom' // top most 
import Home from './Home';

// const Home = () => <h1>Welcome to Home</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <hr />
        <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/form">Form</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/form/:passedParam">Form with PARAM</Link> &nbsp;&nbsp;&nbsp; {/* redirects to hom */}
        <Link to="/news">News</Link> &nbsp;&nbsp;&nbsp;
        <hr />
      </nav>
      {/* OUT-PUT of ROUTING */}
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={SimpleInput} />
          <Route exact path="/form/666" component={SimpleInput} />
          <Route exact path="/news" render={() => <h1>NEWS PAGE</h1>} />
          <Route exact path="/*" render={() => <Redirect to="/" />} /> // redirects to home when garbage url is entered
          {/* <Route exact path="/news" render={() => <Home/>} />   JSX used */}
          {/* <Route exact path="/*" component={Home} />   component used but url still changing */}

          {/* Passing Params and Receiving */}

        </Switch>
      </div>
    </BrowserRouter>
  );
}

//http://localhost:3000/formfgkfegklfhfklee >> loads / but url is changed