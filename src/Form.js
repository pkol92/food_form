import React from 'react';
import {useState, useEffect, useRef } from 'react';
import TimeField from 'react-simple-timefield';

const Form = props => {
    const [dish, setDish] = useState("choose");
    const [time, setTime] = useState("00:00:00");
    const [food, setFood] = useState(props.food);   
    const [visible, setVisible] = useState(false);

    const form = useRef(null);

    useEffect(() => {
        setDish(dish);
    }, [dish]);

    const submit = e => {
        e.preventDefault();
        if (time === "00:00:00" || dish === "choose") {
            setVisible(true)
        } else {
            const data = new FormData(form.current);
        for(const [k,v] of data) {console.log(k,v)};
        // fetch('/api', {
        //     method: 'POST',
        //     body: data,
        //   })
        //     .then(res => res.json())
        //     .then(json => setFood(json.food))
        setTime("00:00:00");
        e.target.reset();
        }
        
    };
    
    
    return ( 
        <form ref={form} onSubmit={submit}>
            <input 
                name="food[name]" 
                type="text" 
                placeholder="Dish name" 
                required
            />

            <label htmlFor="preparation_time">Preparation time:</label>
            <TimeField
                name="food[preparation_time]" 
                value={time}
                showSeconds={true}
                required
                onChange={e => {setTime(e.target.value); setVisible(false)}}
            />
            

            <label htmlFor="dish_type">Choose a dish:</label>
            <select 
                name="food[dish_type]" 
                id="dish_type" 
                required 
                onChange={(e)=>  setDish(e.target.value)}
                >
                <option value="choose">Type of dish</option>
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
                    min="1"
                    required
                />
                <label htmlFor="diameter">Diameter:</label>
                <input 
                    id="diameter" 
                    name="food[diameter]" 
                    type="number"
                    min="0.1"
                    step="0.1"
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
                    min="0"
                    step="1"
                    required
                />
            </div>
            : null }

            {(visible === true && time === "00:00:00") ? 
                    <li>Set the time</li> : null }

            {(visible === true && dish === "choose") ? 
                    <li>Choose the type of food</li> : null}

            <input type="submit" value="Add the dish"></input>
        </form>
    );
}
 
export default Form;