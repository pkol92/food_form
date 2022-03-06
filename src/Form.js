import React from 'react';
import {useState, useEffect, useRef } from 'react';

const Form = props => {
    const [dish, setDish] = useState("pizza");
    const [food, setFood] = useState(props.food);   
    const form = useRef(null);

    useEffect(() => {
        setDish(dish);
    }, [dish]);

    const submit = e => {
        e.preventDefault();
        const data = new FormData(form.current);
        for(const [k,v] of data) {console.log(k,v)}
        // fetch('/api', {
        //     method: 'POST',
        //     body: data,
        //   })
        //     .then(res => res.json())
        //     .then(json => setFood(json.food))
    };
    
    
    return ( 
        <form ref={form} onSubmit={submit}>
            <input 
                name="food[name]" 
                type="text" 
                placeholder="Dish name" 
                required
                // defaultValue={food.name}
            />

            <label htmlFor="preparation_time">Preparation time:</label>
            <input 
                id="preparation_time" 
                name="food[preparation_time]" 
                type="time" 
                step="2" 
                required
                // defaultValue={food.preparation_time}
            />

            <label htmlFor="dish_type">Choose a dish:</label>
            <select 
                name="food[dish_type]" 
                id="dish_type" 
                required 
                onChange={(e)=>  setDish(e.target.value)}
                // defaultValue={food.dish_type}
                >
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
            </select>

            {(dish === "pizza") ? 
            <div>
                <label htmlFor="no_of_slices">Number of Slices:</label>
                <input 
                    id="no_of_slices" 
                    name = "food[no_of_slices]" 
                    type="number" 
                    required
                    // defaultValue={food.no_of_slices}
                />
                <label htmlFor="diameter">Diameter:</label>
                <input 
                    id="diameter" 
                    name="food[diameter]" 
                    type="number"
                    // defaultValue={food.diameter}
                />
            </div>
            : null }

            {(dish === "soup") ? 
            <div>
                <label htmlFor="spiciness_scale">Spiciness scale (1-10):</label>
                <input 
                    id="spiciness_scale" 
                    name = "food[spiciness_scale]" 
                    type="number" 
                    required 
                    min="1" 
                    max="10"
                    // defaultValue={food.spiciness_scale}
                />
            </div>
            : null }

            {(dish === "sandwich") ? 
            <div>
                <label htmlFor="slices_of_bread">Slices of bread:</label>
                <input 
                    id="slices_of_bread" 
                    name = "food[slices_of_bread]" 
                    type="number" 
                    required
                    // defaultValue={food.slices_of_bread}
                />
            </div>
            : null }

            <input type="submit" value="Submit form"></input>
        </form>
    );
}
 
export default Form;