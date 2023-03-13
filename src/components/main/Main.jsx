import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { endpoints } from '../../helpers/endpoints';
import Card from '../card/Card';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const urlBase = process.env.REACT_APP_URL_API;
    try {
      const { data } = await axios.get(`${urlBase}${endpoints.products}`)
      setProducts(data);
    } catch (error) {
      alert('algo ha salido mal.')
    }
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Bienvenidos a Software Store</h1>
      <div className='row d-flex mt-5 justify-content-center'>
        {
          products.map((prod) => <Card prod={prod}/>)
        }
      </div>
    </div>
  )
};

export default Main;
