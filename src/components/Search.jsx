import { useState } from 'react'
import {useGlobalContext} from '../context'
import { useAuth0 } from "@auth0/auth0-react";

const Search = () => {
    const [text, setText] = useState('');
    const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

    const handleTextChange = (e) => {
    setText(e.target.value);
   
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.length>0){
            setSearchTerm(text)
        }
       
    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }

    const {logout} = useAuth0();
    
    return(<>
       <h4 className='logo'>ROSA</h4>
       
        <div className='search-container'>
            <form action="submit">
                <input type="text" value={text} onChange={handleTextChange} placeholder='type favorite meal' className='form-input'/>
               
                <button type="submit" onClick={handleSubmit} className='btn'>search</button>
                <button type='button' className='btn btn-hipster' onClick={handleRandomMeal}>surprise me!</button>
            </form>
            <button type='button' className='btn btn-hipster'  onClick={() => logout()}>Logout</button>
       
        </div>
        </>
    )
}

export default Search                                                                                                                                                                       