import { BsArrowRight } from 'react-icons/bs'
import Service1 from '../../../assets/images/services/1.jpg'
import { Link } from 'react-router-dom'
const ServiceItem = ({service}) => {
    const {_id,title,img,price,description}=service
    return (
    <div className="card shadow border p-5">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body px-0 pt-3 pb-0">
            <h2 className="card-title font-bold">{title}</h2>
            <div className='flex text-[#FF3811] font-semibold items-center'>
            <p>Price : $ {price}</p>
            <Link to={`/checkout/${_id}`}><button><BsArrowRight></BsArrowRight></button></Link>
            </div>
        </div>
    </div>
    )
}

export default ServiceItem