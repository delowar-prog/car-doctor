import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGithub, FaGooglePlus } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
const Login = () => {
    const [error, setError]=useState('')
    const navigate=useNavigate()
    const {signInWithPass}=useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signInWithPass(email, password)
            .then(() => {
                navigate('/')
             })
            .catch(error => {
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
                    <div className="card-body pb-3">
                        <h2 className='text-4xl font-bold text-center mb-14'>Sign In</h2>
                        <p className='text-red-500'>{error}</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF3811] border-0 hover:bg-[#FF1111]">Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className='login-social-media'>
                        <p className='text-center'>Or sign in with</p>
                        <div className='social-icon flex gap-2 justify-center my-4'>
                            <div className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaFacebookF className='text-xl text-blue-500'></FaFacebookF>
                            </div>
                            <div className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaGooglePlus className='text-xl text-rose-900'></FaGooglePlus>
                            </div>
                            <div className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center'>
                                <FaGithub className='text-xl text-gray-900'></FaGithub>
                            </div>
                        </div>
                    </div>
                    <p className='text-center mb-3'>To create a new account? <Link to="/register"><span className='text-[#FF1111] font-semibold'>Sign Up</span></Link></p>
                </div>

            </div>
        </div>
    )
}

export default Login