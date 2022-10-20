import image1 from '../../../Assets/trigo.png'


export const Product = (props) => {
    const {product} = props  
    console.log({product});
    return(
      <div className='col-md-4 box-shadow oneProduct'>
        <button className='card'>
          <div className='card-body'> 
            <img src={image1}></img>
            <h4 className='card-title'>{product.name}</h4>
            <p className="card-text">{product.description}</p>
            <p className='card-text'>{product.price}</p>
            <p className='card-text'>{product.provider}</p>
            <p className='card-text'>{product.category}</p>
          </div>
        </button>
      </div>
    )
  }


