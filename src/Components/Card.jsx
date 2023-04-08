import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({doctor, isFavorites}) => {
  const {themeState, apiState, apiDispatch, favoriteState, favoriteDispatch} = useContextGlobal()

  const addFav = () =>{
    if (!favoriteState.find(element => element.id === doctor.id)){
      favoriteDispatch({type: 'ADD_FAVORITE_DOCTOR', payload: doctor})
      alert('Doctor add successfull')
    }else{
      alert('Doctor already exists')
    }    
  }

  const remoteFav = () =>{
    favoriteDispatch({type: 'REMOVE_FAVORITE_DOCTOR', payload: doctor})
  }

  return (
    <div className={themeState.card}>
          <Link to={`/detail/${doctor.id}`} className={themeState.cardlink}>
            <img src={`./images/ph${doctor.id}.jpg`} className="img-card"/>        
            <h3>{doctor.name}</h3>
            <h3>{doctor.username}</h3>
            <h3>{doctor.id}</h3>           
          </Link>     
        {
          isFavorites ? 
          <button onClick={remoteFav} className={themeState.button}>Remove fav ⭐</button> :
          <button onClick={addFav} className={themeState.button}>Add fav ⭐</button>
        }                           
    </div>
  );
};

export default Card;
