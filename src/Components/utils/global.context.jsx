import { createContext, useEffect, useContext, useState, useReducer} from "react";

export const ContextGlobal = createContext();

/*Implementación con useReducer*/
const initialApiState = {doctorList: [], doctorDetail: {}}
const initialFavoriteState = JSON.parse(localStorage.getItem('favorites')) || []
const themes = {
      dark: {
        theme: 'dark',
        body: 'body-dark',
        nav: 'nav-dark',
        footer: 'footer-dark',
        card: 'card-dark',
        form: 'form-dark',
        navlink: 'link-dark',
        button: 'button-dark',
        buttonsubmit: 'button-dark',
        cardlink: 'a-card-dark'
      },
      ligth: {
        theme: 'ligth',
        body: 'body-ligth',
        nav: 'nav-ligth',
        footer: 'footer-ligth',
        card: 'card-ligth',
        form: 'form-ligth',
        navlink: 'link-ligth',
        button: 'button-ligth',
        buttonsubmit: 'button-ligth-submit',
        cardlink: 'a-card-ligth'
      }
    }

const initialThemeState = themes.ligth

const apiReducer = (state, action) => {
  switch(action.type){
    case 'GET_DOCTORS':
      return {doctorList: action.payload, doctorDetail: state.doctorDetail}
    case 'GET_DOCTOR':
      return {doctorList: state.doctorList, doctorDetail: action.payload}
    default:
      throw new Error
    }
}

const themeReducer = (state, action) => {
  switch(action.type){
    case 'DARK_THEME':
      return themes.dark
    case 'LIGTH_THEME':
      return themes.ligth
    default:
      throw new Error 
  }
}

const favoriteReducer = (state, action) => {
  switch(action.type){
    case 'ADD_FAVORITE_DOCTOR':
      return [...state, action.payload]
    case 'REMOVE_FAVORITE_DOCTOR':
      state = state.filter(element => element.id !== action.payload.id)
      localStorage.setItem('favorites', JSON.stringify(state))
      return [...state]
    default:
      throw new Error
  }
}

const ContextProvider = ({ children }) => {

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    
  const url = 'https://jsonplaceholder.typicode.com/users'

  /*Implementación con useReducer*/
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [favoriteState, favoriteDispatch] = useReducer(favoriteReducer, initialFavoriteState)
  
  useEffect(() => {
    const fetchDoctors = async ()=> {
      let res = await fetch(url)
      let data = await res.json()
      apiDispatch({type: 'GET_DOCTORS', payload: data})    
    }
    fetchDoctors()
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteState))
  }, [favoriteState])

  return (
    <ContextGlobal.Provider value={{apiState, apiDispatch, themeState, themeDispatch, favoriteState, favoriteDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
