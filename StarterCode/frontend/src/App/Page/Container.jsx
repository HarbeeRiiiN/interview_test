import React from 'react';
import MediaCard from './Product';

function Container({ children, clickDelete }) {
  const products = children;

  return (
    <>
      <div className="project-name">
        <h2> Simple Card List </h2>
      </div>

      <div className="cards">
        {products.map((product) => {
          return <MediaCard key={product.id} product={product} clickDelete={clickDelete} />;
        })}
      </div>
    </>
  );
}

export default Container;
