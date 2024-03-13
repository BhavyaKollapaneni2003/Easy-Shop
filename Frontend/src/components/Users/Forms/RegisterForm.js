import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserAction } from '../../../redux/slices/users/usersSlice'
import ErrorMsg from '../../ErrorMsg/ErrorMsg'
import LoadingComponent from '../../LoadingComp/LoadingComponent'

const RegisterForm = () => {
  //dispatch
  const dispatch = useDispatch()
  //dispatch
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  })
  //---Destructuring---
  const { fullname, email, password } = formData
  //---onchange handler----
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //---onsubmit handler----
  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(registerUserAction({ fullname, email, password }))
  }
  //select store data
  const { user, error, loading } = useSelector((state) => state?.users)
  //redirect
  useEffect(() => {
    if (user) {
      window.location.href = '/login'
    }
  }, [user])
  return (
    <>
      <section className="relative overflow-x-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
              <div className="py-20 text-center">
                <h3
                  className="mb-8 text-4xl md:text-5xl font-bold font-heading"
                  style={{ textTransform: 'capitalize', fontSize: '45px' }}
                >
                  sign-up
                </h3>
                {/* errr */}
                {error && <ErrorMsg message={error?.message} />}
                <p className="mb-10" style={{ fontSize: '23px' }}>
                  Quick, hassle-free way to create an account.
                </p>
                <form onSubmit={onSubmitHandler}>
                  <input
                    name="fullname"
                    value={fullname}
                    onChange={onChangeHandler}
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input
                    name="password"
                    value={password}
                    onChange={onChangeHandler}
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    type="password"
                    placeholder="Enter your password"
                  />
                  {loading ? (
                    <LoadingComponent />
                  ) : (
                    <button className="mt-12 md:mt-16 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                      Register
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1607000975574-0b425df6975a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")',
          }}
        />
      </section>
    </>
  )
}

export default RegisterForm
