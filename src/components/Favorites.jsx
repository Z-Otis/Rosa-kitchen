import { useGlobalContext } from "../context"


const Favorites = () => {
    const {favorites, selectMeal, removeFromFavorites} = useGlobalContext();
    return <section className="favorites">
        <div className="favorites-contents">
            <h5>favorites</h5>
            <div className="favorites-container">
            {favorites.map((item) => {
         const {idMeal, strMealThumb:img} = item;
         return <div key={idMeal} className="favorite-item">
            <img src={img} onClick={() => selectMeal(idMeal,true)} className="favorites-img img" />
            <button className="remove-btn"  onClick={() => removeFromFavorites(idMeal)}>remove</button>
         </div>
       })}
            </div>
        </div>
    </section>
 }

export default Favorites