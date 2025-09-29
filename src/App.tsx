import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Button from './components/Button';
function App() {
  return (
    <div>
     <div> <Header/></div>
    <div className="container">
       <div className='divPost box box1 '><Button/><Button/><Button/><Button/><Button/>
    <Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/>
    <Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/>
   </div>
  <div className="divPost box box1"  >
     <Post name="Toyota" email="toyota@gmail.com"> <div><h2 style={{color:"black"}}>JSX TSX dans React</h2></div><Button/></Post>
      <Post name="Mercedes" email="mercedes@gmail.com"> <div><h2 style={{color:"orange"}}>JSX TSX dans React</h2></div><Button/></Post>
      <Post name="BMW" email="bmw@gmail.com"> <div><h2 style={{color:"red"}}>JSX TSX dans React</h2></div><Button/></Post>
        <Post name="Nissan" email="nissan@gmail.com"><div><h2 style={{color:"blue"}}>JSX and TSX by props</h2></div><Button/></Post>
         <Post  name="Volswagen" email="Volswagen@gmail.com"> <div><h2 style={{color:"green"}}>JSX TSX dans React </h2></div><div><Button/></div></Post>
    </div>
    <div className='divPost box box1 '><Button/><Button/><Button/><Button/><Button/>
    <Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/>
    <Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/>
   </div>
    </div>
    </div>
  





  )
}

export default App;
