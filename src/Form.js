import React from 'react';
import {useState, useEffect} from 'react';

const Form = () => {
    const [dish, setDish] = useState("pizza");

    useEffect(() => {
        setDish(dish);
    }, [dish])
    
    return ( 
        <form>
            <input name="name" type="text" placeholder="Dish name" required></input>
            <label for="preparation_time">Preparation time:</label>
            <input id="preparation_time" name="preparation_time" type="time" step="2" required></input>
            <label for="dish_type">Choose a dish:</label>
            <select name="dish_type" id="dish_type" required onChange={(e)=> setDish(e.target.value)}>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
            </select>

            {(dish === "pizza") ? 
            <div>
                <label for="no_of_slices">Number of Slices:</label>
                <input id="no_of_slices" name = "no_of_slices" type="number" required></input>
                <label for="diameter">Diameter:</label>
                <input id="diameter" name="diameter" type="number"></input>
            </div>
            : null }

            {(dish === "soup") ? 
            <div>
                <label for="spiciness_scale">Spiciness scale (1-10):</label>
                <input id="spiciness_scale" name = "spiciness_scale" type="number" required min="1" max="10"></input>
            </div>
            : null }

            {(dish === "sandwich") ? 
            <div>
                <label for="slices_of_bread">Slices of bread:</label>
                <input id="slices_of_bread" name = "slices_of_bread" type="number" required></input>
            </div>
            : null }

            <input type="submit" value="Submit form"></input>
        </form>
    );
}
 
export default Form;