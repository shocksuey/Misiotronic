'use client'

import Intro from "@/components/introduction/Intro"
import ProductFilter from "@/components/storeComponents/filter/ProductFilter"
import Product from "@/components/storeComponents/product/Product"
import useFetch from "@/hooks/useFetch"
import styles from "./page.module.css"

export default function Store () {
  
  const products = useFetch()
  // console.log(products);

  return (
    <div className="homeContent">
      <Intro
        title={"Hardware for sale"}
        subtitle={"Discover the best equipment for sale around the world"}
      />
      <ProductFilter />
      <div className={styles.producList}>
        {
          products && products.map(({title, price, stock, thumbnail}) => (
            <Product
              title={title}
              info={{
                prop1: `Stock: ${stock} u.`,
                prop2: "6 Perks",
                prop3: "60.0cm Length",
                prop4: "2023, USA"
              }}
              price={`${price} USD`}
              pic={thumbnail}
              key={title + price}
            />
          ))
        }
      </div>
      
    </div>

  )

}