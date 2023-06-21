import {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [loginData, setLoginData]=useState({
    name:"",
    email:"",
    password:""
  })

  const verify=()=>{}

  const checkData=(e)=>{
    e.preventDefault();
        if(loginData.name.length===0)
            alert('Please enter the name correctly')
        else if(loginData.email.length===0)
            alert('Please enter the email id correctly')
        else if(loginData.password.length<6)
            alert('Password should be a minimum of 6 characters')
        else if(loginData.confirmPassword.length<6 || loginData.confirmPassword!==loginData.password)
            alert('Passwords do not match')
        else
            verify();
  }

  return (
    <section className="bg-white">
      <div className="flex justify-center px-6 py-4">
        <div className="w-full shadow-xl rounded-2xl md:mt-0 sm:max-w-md">
          <div className="p-6 pt-2 sm:p-8 sm:pt-2">
            <h1 className="text-xl my-6 font-bold md:text-2xl">Sign up for a new account</h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <h1 className="block mb-2 text-sm font-medium ">Your Name</h1>
                <input type="name" name="name" id="name" value={loginData.name} onChange={(e) => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }} placeholder="Name Surname" className="block w-full p-2.5 border border-gray-300 sm:text-sm rounded-lg " />
              </div>
              <div>
                <h1 className="block mb-2 text-sm font-medium ">Your email</h1>
                <input type="email" name="email" id="email" value={loginData.email} onChange={(e) => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }} placeholder="name@company.com" className="block w-full p-2.5 border border-gray-300 sm:text-sm rounded-lg " />
              </div>
              <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900">Your Password</h1>
                <input type="password" name="password" id="password" value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }} placeholder="••••••••" className="block w-full p-2.5 border border-gray-300 sm:text-sm rounded-lg" />
              </div>
              <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</h1>
                <input type="password" name="confirmPassword" id="confirmPassword" value={loginData.confirmPassword} onChange={(e) => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }} placeholder="••••••••" className="block w-full p-2.5 border border-gray-300 sm:text-sm rounded-lg" />
              </div>
              <button type="submit" onClick={checkData} className="w-full outline bg-gray-400 text-white outline-gray-400 hover:text-black hover:bg-white hover:outline-black font-medium rounded-lg text-md px-5 py-2.5 text-center">Sign Up</button>
              <p className="text-sm font-light text-white0 dark:text-gray-400">
                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup