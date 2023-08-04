import { useEffect, useState } from "react";

export default function useFetch (category) {

  const API_URL = `https://dummyjson.com/products/category/${category}`

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