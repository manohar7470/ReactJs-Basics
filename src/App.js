import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import React,  { Component, Fragment } from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import PortalDemo from './components/PortalDemo';
import FragmentDemo from './components/FragmentDemo';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
class App extends Component{
  render(){
    return(
      <div className ="App">
    <PostForm/>
      </div>
    )
  }
}

export default App;
