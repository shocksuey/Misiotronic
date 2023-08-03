import { useEffect, useState } from "react";

const API_URL = `https://dummyjson.com/products/category/laptops`

export default function useFetch () {

  const [productsList, setProductsList] = useState([])

  useEffect(()=> {
    fetch(API_URL)
      .then((res) => res.json())
      .then(( data ) => {
        const {products} = data
        setProductsList(products)
      })
  },[API_URL])

    return productsList
}