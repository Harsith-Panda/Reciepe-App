import {useEffect, useState} from 'react';
import styles from './fooddetails.module.css';

export default function FoodDetails({id}) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "";
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
    useEffect(() => {
        async function get() {
            setIsLoading(true)
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setData(data);
                setIsLoading(false);
            } catch(e) {
                console.error(e);
            }
        }
        if (id != "") {
            get();
        }
    }, [id]);

    if (Object.keys(data).length === 0) {
        return (<h1>Pick A Food To See Reciepe</h1>)
    }

    return (
        <div>
            {(isLoading) ? <h1>Loading...</h1> : 
                <div className={styles.reciepeCard}>
                    <h1 className={styles.reciepeName}>{data.title}</h1>
                    <img src={data.image} className={styles.reciepeImage} alt={data.title} />
                    <div className={styles.reciepeDetails}>
                        <span>
                            <strong>⏰ {data.readyInMinutes}</strong>
                        </span>
                        <span>
                            <strong>Serves {data.servings}</strong>
                        </span>
                        <span>
                            <strong>{(data.vegetarian) ? "🌱 Vegetarian" : "🍗 Non-Vegetarian"}</strong>
                        </span>
                        <div>
                            <span><strong> $ {Math.round(data.pricePerServing / 100,3)} per serving  </strong></span>
                        </div>
                    </div>
                    <div className={styles}>
                        <h2>Ingredients</h2>
                        <ol>
                            {data.extendedIngredients.map(val => 
                            <div>
                                <li><h4>{val.name}</h4></li>
                                <img src={`https://spoonacular.com/cdn/ingredients_100x100/` + val.image} alt="" />
                                <h4>{val.amount} {val.unit}</h4>
                            </div>)}
                        </ol>
                    </div>
                    <div className={styles.reciepeInstructions}>
                        <li>Instructions</li>
                        <ol>
                            {data.analyzedInstructions[0].steps.map(val => <li>{val.step}</li>)}
                        </ol>
                    </div>
                </div>
            }
        </div>
    )
}