import { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css'

export default function Home({ products }) {
  const [productsState, setProductsState] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className={styles.container}>
      <SearchBar productsToFilter={productsState} results={filteredProducts} resultHandler={setFilteredProducts} />
      <ProductList products={filteredProducts} />
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const { data } = await res.json();

  return {
    props: {
      products: data.products
    }
  }
}