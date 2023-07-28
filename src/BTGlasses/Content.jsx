import React from 'react'

const Content = ({selectedProduct}) => {
  return (
    <div className='mt-5 bg-light' style={{width: '300px', height: '300px', position: 'relative', marginLeft: '40%', marginBottom: '100px'}}>
    <img src="./glassesImage/model.jpg" alt="" style={{width: '100%'}}/>
    {selectedProduct &&
      <img src={selectedProduct.url} alt="" style={{position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '150px', height: '50px', opacity: '0.5'}} />
    }
  </div>
  )
}
export default Content