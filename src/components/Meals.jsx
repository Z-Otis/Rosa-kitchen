 import { useGlobalContext } from '../context'
 import { BsHandThumbsUp } from 'react-icons/bs'
 
 
  const Meals = () => {
    const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();
   
     
     
      
    
    
    if(loading){
      return <section className='section'>
            <h4>Loading...</h4>
            </section> 
      }

      if(meals.length < 1){
         return <section>
            <h4>Sorry, no items match your search...</h4>
         </section>
      }
    return <div className='section-center'>
      {meals.map((singleMeal) => {
        const {idMeal, strMeal:name, strMealThumb:img} = singleMeal;
         return(
            
            <article className='single-meal' key={idMeal}>
               <img src={img} alt={name} className='img' onClick={() => selectMeal(idMeal)}/>
               <footer>
               <h5>{name}</h5>
               <button onClick={() => addToFavorites(idMeal)} className='like-btn'><BsHandThumbsUp /></button>
               </footer>
            </article>
            
         )
      })}
    </div>
 }

 export default Meals