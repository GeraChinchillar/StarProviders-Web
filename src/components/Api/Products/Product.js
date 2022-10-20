import image1 from '../../../Assets/trigo.png'


export const Product = (props) => {
    const {product} = props  
    const [isOpen,setIsOpen] = useState(false)
    console.log({product});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className='mb-1'>{product.description}</p>
              <p className='mb-1'>{product.price}</p>
              <p className='mb-1'>{product.provider}</p>
              <p className='mb-1'>{product.category}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }


