import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from '../src/components/Header';
import Footer from './components/Footer';
import Home from './views/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <p>Projects</p>
            </Route>
            <Route path="/about">
              <p>About me</p>
            </Route>
            <Route path="/blog">
              <p>Blog</p>
            </Route>
            <Route path="/cv">
              <p>CV</p>
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
