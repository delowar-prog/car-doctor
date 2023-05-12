import { useEffect, useState } from "react"
import ServiceItem from "../ServiceItem/ServiceItem"

const Service = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="my-36">
            <div className="section-heading text-center md:w-[50%] space-y-3 mx-auto">
                <h5 className="text-xl font-bold text-[#FF3811]">Services</h5>
                <h1 className="font-bold text-5xl">Our Services Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="service-item-container grid md:grid-cols-3 gap-6 mt-10">
            {
                services.map(service=><ServiceItem key={service._id} service={service}></ServiceItem>)
            }   
            </div>
        
        </div>
    )
}

export default Service