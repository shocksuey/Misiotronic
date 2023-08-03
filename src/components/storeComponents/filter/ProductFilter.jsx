import styles from "./ProductFilter.module.css"
import { useState } from "react"


export default function ProductFilter() {
  
  const [query, setQuery] = useState()
  const [price, setPrice] = useState()
  const [stock, setStock] = useState()

  function handleInputs (evt) {
    const { name , value } = evt.target
    switch(name) {
      case "query": setQuery(value); break
      case "price": setPrice(value); break
      case "stock": setStock(value); break
    }
  }
  
  function handleSeek () {
    //crear el componente ComponentesList , ya que de lo contrario es un quilombo
  }

  return (
    <form className={styles.filterCont}>
      <div className={styles.nameCont}>
        <span>Search</span>
        <input 
          name="query" 
          type="text" 
          placeholder="Smartphones, laptops..." 
          onChange={handleInputs} />
      </div>
      <hr />
      <div className={styles.priceCont}>
        <span>Max Price</span>
        <input 
          name="price"
          type="number"
          placeholder="from 0 to 9.999" 
          max={99999}
          onChange={handleInputs} />
      </div>
      <hr />
      <div className={styles.stockCont}>
        <span>Max Stock</span>
        <input 
          name="stock"
          type="number" 
          placeholder="Quantity" 
          onChange={handleInputs}
          />
      </div>
      <hr />
      <div className={styles.searchCont}>
        <span>Seek</span>
        <button type="button" onClick={handleSeek}>🖥</button>
      </div>
    </form>
  )
}