import { Outlet } from 'react-router-dom'
import Header from '../includes/Header/Header'

const Main = () => {
  return (
    <div className='mx-14 my-4'>
    <Header></Header>
    <Outlet></Outlet>
    </div>
  )
}

export default Main