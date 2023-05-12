import ErrorImg from '../../assets/images/error/error.png'
import Header2 from '../../includes/Header/Header2'
const ErrorPage = () => {
  return (
    <div className='mx-20'>
        <Header2></Header2>
        <div className='flex justify-center items-center h-[600px]'>
        <img src={ErrorImg}></img>   
        </div> 
    </div>
  )
}

export default ErrorPage