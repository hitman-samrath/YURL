import { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const checkData = (props) => {
    props.preventDefault()
    return (user.email === "" || user.password === "")?alert("Please fill in all the fields"):console.log(user)
  }


  return (
    <section className="bg-white">
      <div className="flex justify-center px-6 py-16">
        <div className="w-full shadow-xl rounded-2xl md:mt-0 sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl my-6 font-bold md:text-2xl">Sign in to your account</h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <h1 className="block mb-2 text-sm font-medium ">Your email</h1>
                <input type="email" name="email" value={user.email} id="email" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} placeholder="name@company.com" className="block w-full p-2.5 border border-gray-300 sm:text-sm rounded-lg " />
              </div>
              <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900">Your Password</h1>
                <input type="password" name="password" value={user.password} id="password" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} placeholder="••••••••" className="block w-full p-2.5 border border-gray-300 sm:text-sm rounded-lg" />
              </div>
              <div className="flex items-center">
                <div className="flex items-start">
                </div>
                <Link to="/forgotpassword" className="text-sm font-medium hover:underline">Forgot password?</Link>
              </div>
              <button type="submit" onClick={checkData} className="w-full outline bg-gray-400 text-white outline-gray-400 hover:text-black hover:bg-white hover:outline-black font-medium rounded-lg text-md px-5 py-2.5 text-center">Sign in</button>
              <p className="text-sm font-light text-white0 dark:text-gray-400">
                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login