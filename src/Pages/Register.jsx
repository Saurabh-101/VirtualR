import React from 'react'
import Navbar from '../components/Navbar'

import { useState } from 'react';
const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    
    if (!formData.username) {
      formErrors.username = 'Username is required';
    }
    
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\+91[0-9]{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be in the format +91XXXXXXXXXX';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(formErrors);
    
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
     
      console.log('Form submitted successfully:', formData);
      
      setFormData({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
      
    }
  };

  return (
    <>
      <Navbar />
      <div className='text-white h-[100vh] flex items-center justify-center'>
        <div className="bg-slate-900 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur=lg bg-opacity-30 relative" >
          <div className="  items-center mt-2  ">
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>Register
              <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{" "} Now</span></h1>
            <div className='mt-20'>
              <form onSubmit={handleSubmit}>
                <div className='relative my-4'>

                  <input type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-orange-800 focus:outline-none focus:ring-0 focus:text-orange-400 focus:border-orange-600 peer' name='username' value={formData.username} onChange={handleChange} />
                  <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-900 peer-focus:dark:text-orange-600  peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                  {errors.username && <p className="text-red-600">{errors.username}</p>}
                </div>
                <div className='relative my-4'>

                  <input type="email" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-orange-800 focus:outline-none focus:ring-0 focus:text-orange-400 focus:border-orange-600 peer' name='email' value={formData.email} onChange={handleChange}/>
                  <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-900 peer-focus:dark:text-orange-600  peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
                  {errors.email && <p className="text-red-600">{errors.email}</p>}
                </div>
                <div className='relative my-4'>

                  <input type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-orange-800 focus:outline-none focus:ring-0 focus:text-orange-400 focus:border-orange-600 peer'  name="phone" value={formData.phone} onChange={handleChange}/>
                  <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-900 peer-focus:dark:text-orange-600  peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>+91 </label>
                  {errors.phone && <p className="text-red-600">{errors.phone}</p>}
                </div>
                <div className='relative my-4'>

                  <input type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-orange-800 focus:outline-none focus:ring-0 focus:text-orange-400 focus:border-orange-600 peer'  name="password" value={formData.password} onChange={handleChange}/>
                  <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-900 peer-focus:dark:text-orange-600  peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                  {errors.password && <p className="text-red-600">{errors.password}</p>}
                </div>
                <div className='relative my-4'>

                  <input type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-orange-800 focus:outline-none focus:ring-0 focus:text-orange-400 focus:border-orange-600 peer' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                  <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-900 peer-focus:dark:text-orange-600  peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm Password</label>
                  {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
                </div>
                
                
                <button type='submit' className='w-full text-xl mb-6 mt-8 rounded bg-orange-600 py-2 hover:bg-orange-800 transition-colors duration-300'>Sing Up</button>
              </form>
             

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register