import { useState, useEffect } from "react"
import styles from './searchbar.module.css';

function SearchBar({ setContent }) {
  const [value, setValue] = useState("pizza")
  const API_KEY = "";
  useEffect(() => {
    async function get() {
      try {
        let res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${value}`);
        let data = await res.json();
        console.log(data);
        setContent(data.results);
      } catch (e) {
        console.error(e);
      }
    }
    get();
  },[value])

  return (
    <div className={styles.searchContainer}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className={styles.input}/>
    </div>
  )
}

export default SearchBar