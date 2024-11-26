import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
    
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
    
    

    if (!formData.password) {
      formErrors.password = 'Password is required';
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
        password: ''
        
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
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>Sign
              <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{" "} In</span></h1>
            <div className='mt-20'>
              <form onSubmit={handleSubmit}>
                <div className='relative my-4'>

                  <input type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-orange-800 focus:outline-none focus:ring-0 focus:text-orange-400 focus:border-orange-600 peer' name='username' value={formData.username} onChange={handleChange} />
                  <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-900 peer-focus:dark:text-orange-600  peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                  {errors.username && <p className="text-red-600">{errors.username}</p>}
                </div>
                <div className='relative my-4'>

                  <input type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:focus:border-orange-800 focus:outline-none focus:ring-0 focus:text-orange-400 focus:border-orange-600 peer' name='password' value={formData.password} onChange={handleChange} />
                  <label htmlFor="" className='absolute text-sm duration-300 transform -translate scale-75 top-3  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-900 peer-focus:dark:text-orange-600  peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                  {errors.password && <p className="text-red-600">{errors.password}</p>}

                </div>
                <div>
                  <p className='text-sm text-neutral-500'>Forgot Password?<a href="/" className='text-orange-800'> Reset Now </a></p>
                </div>
                
                <button type='submit' className='w-full text-xl mb-6 mt-8 rounded bg-orange-600 py-2 hover:bg-orange-800 transition-colors duration-300'>Sing In</button>
              </form>
              <div>
                  <p className='text-sm text-neutral-500'>Don't have an account? <a href="/Register" className='text-orange-800'>Create new account</a></p>
                </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SignIn