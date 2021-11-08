import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route component={Home} path='/' exact></Route>
        <Route component={About} path='/about'></Route>
        <Route component={SinglePost} path='/singlepost/:id'></Route>
        <Route component={Post} path='/posts'></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
