import React from 'react';

const Loader = () => {
  return (
    <div class='d-flex justify-content-center'>
      <h1 class='my-5'>Cargando...</h1>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loader;
