import React, { useState } from 'react';
import prdList from './data.json';
import Content from './Content';

const BTGlasses = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  }

  return (
    <div className='text-center' style={{backgroundImage: 'url(./glassesImage/background.jpg)', height: '1000px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <header className="mt-5 bg-dark d-flex justify-content-center align-items-center opacity-50" style={{height: '100px'}}>
        <h2 style={{color: 'white'}}>THỬ ỨNG DỤNG KÍNH TRỰC TUYẾN</h2>
      </header>
      <Content selectedProduct={selectedProduct} />
      <div className="container mt-5">
        <div className="row">
          {prdList.map(product => (
            <div key={product.id} className="col-3">
              <div style={{position: 'relative'}}>
                <img src={product.url} alt={product.name} style={{width: '100%', cursor: 'pointer'}} onClick={() => handleProductSelect(product)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BTGlasses;