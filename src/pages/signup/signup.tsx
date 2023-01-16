import React, { useState } from 'react'
import { Form, Input, Button, message, Alert } from 'antd'
import { useNavigate } from 'react-router-dom'
import { openNotificationWithIcon } from '../../utils/helper'
import { formValuesInterface } from './signup-interface'
import { signup } from '../../api/base/base'


const SignUp = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState({
    email: '',
    passowrd: ''
  })


  const onFinish = async (values: formValuesInterface) => {
    const { email, password, fullname } = values

    setError(null)
    setLoading(true)
    const newErrors = { ...errors }

    setErrors(prevState => ({
      ...prevState,
      ...newErrors,
    }))

    if (Object.values(newErrors).every((item) => item === '')) {
      try {

        const res = await signup({
          email,
          password,
          fullname
        })

        const { message } = res.data

        openNotificationWithIcon('success', 'Sign Up', message);

        setLoading(false)

        navigate('/signin')

      } catch (error: any) {
        setLoading(false)
        if (error?.response?.data) {
          const errors = error?.response?.data?.err
          setError(errors || error?.response?.message)
        } else {
          message.error('Something went wrong: Sign up')
        }
      }
    } else {
      setLoading(false)
    }
  }

  return (
    <div className='mt-5'>
      <h1 className="mb-16 text-base font-semibold text-center font-ibmplexsans text-appcolorblack">
        Coding Challange
      </h1>

      <h1 className="text-2xl font-semibold text-center mb-9 font-ibmplexsans text-appcolorblue">
        Sign Up
      </h1>


      {
        error != null &&
        <div className='flex justify-center w-11/12 mx-auto mb-4 md:3/12 lg:w-3/12'>
          <Alert message={error} type="error" className='w-full' />
        </div>
      }

      <div className="flex justify-center w-11/12 mx-auto md:3/12 lg:w-3/12">
        <Form
          className='w-full'
          form={form}
          onFinish={onFinish}
          layout="vertical"
        >

          <Form.Item
            label='Fullname'
            name="fullname"
            rules={[
              {
                required: true,
                message: 'Fullname is required'
              },
            ]}
          >
            <Input
              placeholder='Fullname'
            />
          </Form.Item>


          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Invalid Email',
              },
              {
                required: true,
                message: 'Email is required'
              },
            ]}
          >
            <Input
              placeholder='Email'
            />
          </Form.Item>

          <Form.Item
            label='Password'
            name="password"
            rules={[
              {
                required: true,
                message: 'Password is required'
              },
            ]}
          >
            <Input.Password
              placeholder='Password'
            />
          </Form.Item>


          <Form.Item>
            <div className="flex flex-col items-center justify-center mx-auto">
              <Button
                htmlType="submit"
                className='mb-2 '
                disabled={loading}
                loading={loading}
              >
                Sign up
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>


      <p className="text-sm font-normal text-center font-poppins mb-14 text-appcolorgrey">
        Already have an account?
        <span className='pl-1 cursor-pointer text-appcolorblue'
          onClick={() => {
            if (!loading) {
              navigate('/signup')
            }
          }}
        >
          Sign in
        </span>
      </p>
    </div>
  )
}

export default SignUp