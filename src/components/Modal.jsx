import { useGlobalContext } from "../context"



const Modal= () => {
    const {selectedMeal, closeModal} = useGlobalContext();
    
    const {strMealThumb:image, strMeal:name, strSource:source, strInstructions:directions} = selectedMeal

    return (
        <div className="modal-overlay" >
              <div className="modal-container">
                     <img src={image} alt={name} className="modal-img img"  />
                     <div className="modal-content">
                     <h4>{name}</h4>
                    <p>Cooking instructions</p>
                    <p>{directions}</p>
                    <a href={source}>Original source</a>
                    <button className="close-btn btn" onClick={ closeModal}>Close</button>
                    </div>
                </div>
             </div>
    )
 }

export default Modal