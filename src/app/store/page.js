'use client'

import styles from "./page.module.css"
import Intro from "@/components/introduction/Intro"
import ProductFilter from "@/components/storeComponents/filter/ProductFilter"
import ProductList from "@/components/storeComponents/productList/ProductList"

import { useState, useEffect } from "react"

export default function Store () {
  
  const [query, setQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 999999]); 
  const [categoriesToShow, setCategoriesToShow] = useState(["laptops", "phones"]);

  function handleSharedState (data) {
    setPriceRange([0, parseInt(data.price)])
    setCategoriesToShow(data.selectedOption)
    setQuery(data.query)
  }

  // useEffect(() => {
  //   console.log(priceRange);
  //   console.log(categoriesToShow);
  //   console.log(query)
  // }, [query, priceRange, categoriesToShow])

  return (
    <div className={styles.homeContent}>
      <Intro
        title={"Hardware for sale"}
        subtitle={"Discover the best equipment for sale around the world"}
      />
      <ProductFilter 
        shareState={handleSharedState}
      />
      <ProductList
        categoriesToShow={categoriesToShow}
        priceRange={priceRange}
        query={query}
        data={{query, priceRange, categoriesToShow}}
      />
    </div>

  )

}