import { useLoaderData } from "react-router-dom"
import Banner2 from "../../includes/Banner/Banner2"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProviders"
import Swal from 'sweetalert2'
import useTitle from "../Hooks/PageTitle"
const Checkout = () => {
    const serviceInfo = useLoaderData()
    const {user}=useContext(AuthContext)
    const { _id, title, price, img} = serviceInfo
    useTitle('Checkout')
    const handleCheckout=(event)=>{
        event.preventDefault()
        const form=event.target
        const date=form.date.value 
        const name=user?.displayName
        const email=user?.email
        const order={
            name,
            email,
            img,
            date,
            price,
            service:title,
            service_id:_id
        }

        fetch('http://localhost:5000/bookings', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Order Completed Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <Banner2></Banner2>
            <div className="bg-base-200 p-14">
                <div className="hero-content flex-col">
                    <h2 className="text-2xl font-bold bg-green-500 p-3 rounded text-white">Service Title : {title}</h2>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleCheckout}>
                            <div className="card-body">
                                <div className="flex gap-5">
                                    <div className="form-control w-[100%]">
                                        <label className="label">
                                            <span className="label-text">Customer Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-[100%]">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" name="date" required placeholder="date" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="form-control w-[100%]">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-[100%]">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#FF3811] hover:bg-[#FF1111] border-0">Order Confirm</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout