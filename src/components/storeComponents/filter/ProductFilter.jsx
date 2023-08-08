import styles from "./ProductFilter.module.css"
import { useState } from "react"


export default function ProductFilter({shareState}) {
  
  const [query, setQuery] = useState("")
  const [price, setPrice] = useState(999999)
  const [selectedOption, setSelectedOption] = useState("all"); // Estado para la opción seleccionada
  const [errorMessage, setErrorMessage] = useState("");

  function handleQuery (evt) {
    setQuery(evt.target.value)
  }

  function handlePrice (evt) {
    setPrice(evt.target.value)
  }

  function handleOptionChange (evt) {
    setSelectedOption(evt.target.value);
  };
  
  function handleSeek (evt) {
    evt.preventDefault()
    if (query && price && selectedOption) {
      shareState({ query, price, selectedOption });
      setErrorMessage("");
      console.log(query, price, selectedOption);
    }
    else {
      setErrorMessage("Fill in all fields");
    }
  }

  return ( 
    <form className={styles.filterCont}>
    <div className={styles.nameCont}>
      <label htmlFor="query">Search</label>
      <input 
        name="query" 
        type="text" 
        placeholder="Smartphones, laptops..." 
        onChange={handleQuery}
        required
      />
    </div>
    <hr />
    <div className={styles.priceCont}>
      <label htmlFor="price">Max Price</label>
      <input 
        name="price"
        type="number"
        placeholder="from 0 to 9.999" 
        max={99999}
        onChange={handlePrice}
        required
        />
    </div>
    <hr />
    <div className={styles.categoryCont}>
      <label htmlFor="categorySelect">Categories</label>
      <select 
        name="categorySelect" 
        value={selectedOption} 
        id="categorySelect"
        onChange={handleOptionChange}
        required
      >
        <option value="all">select... </option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smartphones</option>
      </select>
    </div>
    <hr />
    <div className={styles.searchCont}>
      <div className={styles.buttonCont}>
        <span>Seek</span>
        <button type="submit" onClick={handleSeek}>🖥</button>
      </div>
      {
        errorMessage ? 
        (<p className={styles.errorMessage}>{errorMessage}</p>)
        : null
      }
    </div>
  </form>
  )
}