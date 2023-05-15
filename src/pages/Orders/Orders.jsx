import { useContext, useEffect, useState } from "react"
import Banner2 from "../../includes/Banner/Banner2"
import useTitle from "../Hooks/PageTitle"
import { AuthContext } from "../../providers/AuthProviders"
import OrdersRow from "./OrdersRow"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


const Orders = () => {
    const [orders, setOrders]=useState([])
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    useTitle('MyOrders')
    const url=`http://localhost:5000/bookings?email=${user.email}`
    useEffect(()=>{
        fetch(url, {
            method:"GET",
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-doctors-access')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                setOrders(data)
            }else{
                navigate('/')
            }
        })
    },[url, navigate])

    //delete 
    const deleteOrders=id=>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method:"DELETE",
                    headers:{
                        'content-type':'application/json'
                    }
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remaining=orders.filter(order=>order._id!==id)
                          setOrders(remaining)
                    }
                })
            }
          })
       }
    //update
    const handleConfirm=id=>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:"confirm"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                const remaining=orders.filter(order=>order._id!==id)
                const updated=orders.find(order=>order._id===id)
                updated.status='confirm'
                const newOrders=[updated, ...remaining]
                setOrders(newOrders)

            }
        })
    }
    return (
        <div>
            <Banner2></Banner2>
            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Img</th>
                            <th>Service Title</th>
                            <th>Date</th>
                            <th>Due Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order=><OrdersRow key={order._id} order={order} deleteOrders={deleteOrders} handleConfirm={handleConfirm}></OrdersRow>)
                        }
                        
                    </tbody>
                
                </table>
            </div>
        </div>
    )
}

export default Orders