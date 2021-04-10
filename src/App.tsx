import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <p>Home</p>
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
        <Footer />
      </Router>
    </div>
  );
};

export default App;
