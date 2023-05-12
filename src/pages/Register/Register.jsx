import { Link } from 'react-router-dom'
import LoginImg from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react'
import { AuthContext } from '../../providers/AuthProviders'

const Register = () => {
    const [message, setMessage]=useState('')
    const [error, setError]=useState('')
    const {signUpWithPass, updateProfileInfo}=useContext(AuthContext)
    const handleRegister=(event)=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        signUpWithPass(email,password)
        .then(()=>{
           updateProfileInfo(name)
           .then(()=>{
                setMessage('Resigstration successfully complated')
                setError('')
                form.reset()
           })
           .catch(error=>console.log(error.message))
        })
        .catch(error=>{
            setMessage('')
            setError(error.message)
        })

    }

    return (
        <div className="mt-10">
            <div className="flex flex-col md:flex-row  items-center p-10">
                <div className="w-[100%]">
                    <img src={LoginImg}></img>
                </div>
                <div className="card w-[100%] border border-gray-300 rounded-md">
                    <div className="card-body">
                        <h2 className='text-4xl font-bold text-center mb-14'>Sign Up</h2>
                        <p className='text-red-500 font-bold text-lg'>{error}</p>
                        <p className='text-green-500 font-bold text-lg'>{message}</p>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF3811] border-0 hover:bg-[#FF1111]">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <p className='text-center mb-3'>Already have an account? <Link to="/login"><span className='text-[#FF1111] font-semibold'>Sign In</span></Link></p>
                </div>

            </div>
        </div>
    )
}

export default Register