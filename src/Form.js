import React from 'react';
import {useState, useEffect, useRef } from 'react';

const Form = (props) => {
    const [dish, setDish] = useState("pizza");
    const [food, setFood] = useState(props.food);

    useEffect(() => {
        setDish(dish);
    }, [dish]);

    const submit = e => {
        e.preventDefault()
        console.log(food);
        // fetch('/api', {
        //     method: 'POST',
        //     body: JSON.stringify({ food }),
        //     headers: { 'Content-Type': 'application/json' },
        //   })
        //     .then(res => res.json())
        //     .then(json => setFood(json.food))
    };
    
    
    return ( 
        <form onSubmit={submit}>
            <input 
                name="food[name]" 
                type="text" 
                placeholder="Dish name" 
                required
                onChange={e => setFood({ ...food, name: e.target.value })}
            />

            <label htmlFor="preparation_time">Preparation time:</label>
            <input 
                id="preparation_time" 
                name="food[preparation_time]" 
                type="time" 
                step="2" 
                required
                onChange={e => setFood({ ...food, preparation_time: e.target.value })}
            />

            <label htmlFor="dish_type">Choose a dish:</label>
            <select 
                name="food[dish_type]" 
                id="dish_type" 
                required 
                onChange={(e)=> { setDish(e.target.value); setFood({ ...food, dish_type: e.target.value })}}
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
                    onChange={e => setFood({ ...food, no_of_slices: e.target.value })}
                />
                <label htmlFor="diameter">Diameter:</label>
                <input 
                    id="diameter" 
                    name="food[diameter]" 
                    type="number"
                    onChange={e => setFood({ ...food, diameter: e.target.value })}
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
                    onChange={e => setFood({ ...food, spiciness_scale: e.target.value })}
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
                    onChange={e => setFood({ ...food, slices_of_bread: e.target.value })}
                />
            </div>
            : null }

            <input type="submit" value="Submit form"></input>
        </form>
    );
}
 
export default Form;