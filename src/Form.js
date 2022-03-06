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
        setDish("choose");
        e.target.reset();
        }
        
    };
    
    
    return ( 
        <form ref={form} onSubmit={submit}>
            <h3>Form for adding dishes</h3>
            <h4>Fill out the form to add the dish</h4>

            <fieldset>
                <input 
                    name="food[name]" 
                    type="text" 
                    placeholder="Dish name" 
                    required
                />
            </fieldset>

            <fieldset>
                <label htmlFor="preparation_time">Preparation time:</label>
                <TimeField
                    id="preparation_time"
                    name="food[preparation_time]" 
                    value={time}
                    showSeconds={true}
                    required
                    onChange={e => {setTime(e.target.value); setVisible(false)}}
                />
            </fieldset>

            {(visible === true && time === "00:00:00") ? 
                    <p>Set the time</p> : null }

            <fieldset>
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
            </fieldset>

            {(visible === true && dish === "choose") ? 
                <p>Choose the type of food</p> : null}

            {(dish === "pizza") ? 
            <div>
                <fieldset>
                    <label htmlFor="no_of_slices">Number of Slices:</label>
                    <input 
                        id="no_of_slices" 
                        name = "food[no_of_slices]" 
                        type="number" 
                        min="1"
                        required
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="diameter">Diameter:</label>
                    <input 
                        id="diameter" 
                        name="food[diameter]" 
                        type="number"
                        min="0.1"
                        step="0.1"
                    />
                </fieldset>
            </div>
            : null }

            {(dish === "soup") ? 
            <fieldset>
                <label htmlFor="spiciness_scale">Spiciness scale (1-10):</label>
                <input 
                    id="spiciness_scale" 
                    name = "food[spiciness_scale]" 
                    type="number" 
                    required 
                    min="1" 
                    max="10"
                />
            </fieldset>
            : null }

            {(dish === "sandwich") ? 
            <fieldset>
                <label htmlFor="slices_of_bread">Slices of bread:</label>
                <input 
                    id="slices_of_bread" 
                    name = "food[slices_of_bread]" 
                    type="number" 
                    min="0"
                    step="1"
                    required
                />
            </fieldset>
            : null }

            <fieldset>
                <input id="submit" type="submit" value="Add the dish"/>
            </fieldset>
            
        </form>
    );
}
 
export default Form;