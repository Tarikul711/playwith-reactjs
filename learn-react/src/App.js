import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from './sample_blog/CreatePost';
import Home from './sample_blog/Home';


const App = () => {
      return (
          <Router>
                <div>
                        <Switch>
                                <Route path="/">
                                    <Home/>
                                </Route>
                                <Route path="/create">
                                    <CreatePost/>
                                </Route>
                        </Switch>
                </div>
          </Router>
      );
}

export default App;
