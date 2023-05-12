import { useContext, useEffect, useState } from "react"
import Banner2 from "../../includes/Banner/Banner2"
import useTitle from "../Hooks/PageTitle"
import { AuthContext } from "../../providers/AuthProviders"
import OrdersRow from "./OrdersRow"
import Swal from "sweetalert2"


const Orders = () => {
    const [orders, setOrders]=useState([])
    const {user}=useContext(AuthContext)
    useTitle('MyOrders')
    const url=`http://localhost:5000/bookings?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

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
                            orders.map(order=><OrdersRow key={order._id} order={order} deleteOrders={deleteOrders}></OrdersRow>)
                        }
                        
                    </tbody>
                
                </table>
            </div>
        </div>
    )
}

export default Orders