
export const Product = (props) => {
    const {product} = props  
    console.log({product});
    return(
      <div className='col-md-4 box-shadow'>
        <button className='card w-75'>
          <div className='card-body'> 
            <h5 className='mb-1'>{product.name}</h5>
            <p className='mb-1'>{product.description}</p>
            <p className='mb-1'>{product.price}</p>
            <p className='mb-1'>{product.provider}</p>
            <p className='mb-1'>{product.category}</p>
          </div>
        </button>
      </div>
    )
  }


