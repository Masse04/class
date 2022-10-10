import './App.css';
import Profile from './Profile/Profile';
import photo from './masse.jpg';
import React, { Component } from 'react'
import { useState } from 'react';

export default class App extends Component {
  render() {
    const handleName = (nom) => {
      alert(nom)
    }
    const [person,setPerson] = useState({
    nom : "DIOUKHANE Masse",
    profession : 'Etudiant',
    bio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis inventore fugiat hic praesentium ad enim dicta aspernatur, quam tempore repellat accusamus maxime ipsum nobis optio provident laborum beatae explicabo?'
  })
    return (
      <div className="App">
        <Profile nom ={person.nom} bio = {person.bio} profession = {person.profession} handleName = {handleName}>
          {photo}
        </Profile>
        <button onClick={()=>{setPerson(...person,profession = 'codeur')}}>click</button>
      </div>
    );
  }
}

