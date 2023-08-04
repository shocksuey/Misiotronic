import React from 'react';
import styles from './ProductList.module.css';
import useFetch from '@/hooks/useFetch';
import Product from '../product/Product';

export default function ProductList({ data }) {
  const phonesData = useFetch('smartphones');
  const laptopsData = useFetch('laptops');

  const { categoriesToShow, priceRange, query } = data;

  const products = [
    { category: 'phones', data: phonesData },
    { category: 'laptops', data: laptopsData }
  ];

  const filteredProducts = categoriesToShow !== 'all'
    ? products.filter(product => categoriesToShow.includes(product.category))
    : products;

  let displayedProductCount = 0;

  const list = filteredProducts.flatMap(({ data }) =>
    data.filter(item =>
      item.price >= priceRange[0] && item.price <= priceRange[1] &&
      item.title.toLowerCase().includes(query.toLowerCase())
    ).map(({ title, price, stock, thumbnail }) => {
      if (displayedProductCount < 9) {
        displayedProductCount++;
        return (
          <Product
            title={title}
            info={{
              prop1: `Stock: ${stock} u.`,
              prop2: '6 Perks',
              prop3: '60.0cm Length',
              prop4: '2023, USA'
            }}
            price={`${price} USD`}
            pic={thumbnail}
            key={title + price}
          />
        );
      }
      return null;
    })
  );

  return (
    <div className={styles.productList}>
      {list}
    </div>
  );
}
