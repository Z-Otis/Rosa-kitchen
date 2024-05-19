import React, { useState } from 'react'
import {useContext} from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext();

const getFavoritesFromLocalStorage = () => {
    let favorites;
    favorites = localStorage.getItem('favorites')
    if(favorites) {
        favorites = JSON.parse(localStorage.getItem('favorites'));
    }
    else {
        favorites = [];
    }
    return favorites
}


const AppProvider = ({children}) => {
    const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());
   const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState([]);
   




   
    const addToFavorites = (id) => {
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === id)
       if(alreadyFavorite) return
       const meal = meals.find((meal) => meal.idMeal===id);
       const updatedFavorites = [...favorites, meal];
       setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
    
    const removeFromFavorites = (id) => {
        const updatedFavorites = favorites.filter((item) => item.idMeal !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
   
    const closeModal = () => {
        setShowModal(false);
    }

     const selectMeal = (id, favoriteMeal) => {
        let meal;
        if(favoriteMeal) {
            meal = favorites.find((meal) => meal.idMeal===id);
        }
        else{
            meal = meals.find((meal) => meal.idMeal===id);
        }
        
        setSelectedMeal(meal);
        setShowModal(true);
     }

   const fetchMeals = async(url) => {
    setLoading(true)
    try {
        const { data } = await axios(url)
        if(data.meals) {
            setMeals(data.meals)
        }
       else {
        setMeals([])
       }
    }
       
    catch(error) {
      return error.response;
    }
    setLoading(false)
   }

   const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl)
    }

   useEffect(() => {
    fetchMeals(allMealsUrl)
   }, [])

   useEffect(() => {
    if(!searchTerm) return
    fetchMeals(`${allMealsUrl}${searchTerm}`)
   }, [searchTerm])

   return(
        <AppContext.Provider value={{ meals, setSearchTerm, fetchRandomMeal, loading, showModal, setShowModal, selectMeal, selectedMeal, closeModal, favorites, addToFavorites, removeFromFavorites}}>
            { children }
        </AppContext.Provider>
    )
};

 const useGlobalContext = () => {
    return useContext(AppContext)
}

export { useGlobalContext, AppProvider };