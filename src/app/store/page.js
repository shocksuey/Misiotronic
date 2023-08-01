import Intro from "@/components/introduction/Intro"
import Product from "@/components/storeComponents/product/Product"
import styles from "./page.module.css"

const datos = async () => {
  
}

export default function Store () {
  return (
    <div className="homeContent">
      <Intro
        title={"Hardware for sale"}
        subtitle={"Discover the best equipment for sale around the world"}
      />
      <div className={styles.producList}>
        <Product
          title={"Yamaha X-350"}
          info={{
            prop1: "12 Buttons",
            prop2: "6 Perks",
            prop3: "60.0cm Length",
            prop4: "2023, USA"
          }}
          price={"75,000 USD"}
        />
                <Product
          title={"Yamaha X-350"}
          info={{
            prop1: "12 Buttons",
            prop2: "6 Perks",
            prop3: "60.0cm Length",
            prop4: "2023, USA"
          }}
          price={"75,000 USD"}
        />
                <Product
          title={"Yamaha X-350"}
          info={{
            prop1: "12 Buttons",
            prop2: "6 Perks",
            prop3: "60.0cm Length",
            prop4: "2023, USA"
          }}
          price={"75,000 USD"}
        />
                        <Product
          title={"Yamaha X-350"}
          info={{
            prop1: "12 Buttons",
            prop2: "6 Perks",
            prop3: "60.0cm Length",
            prop4: "2023, USA"
          }}
          price={"75,000 USD"}
        />
      </div>
      
    </div>

  )

}